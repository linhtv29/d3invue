<template>
	<div class="w-full pt-10">
		<div class="bg-[#f8f8f8] rounded-lg w-[900px] h-[500px] p-6 mx-auto flex flex-col">
			<div class="relative flex-1 w-full" ref="resizeRef" id="chart-container">
				<svg ref="svgRef">
				</svg>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref, onMounted, watchEffect, computed } from "vue";
import * as d3 from "d3"
import useResizeObserver from "../use/resizeObserver.js";
import { salaryData } from "@/assets/annualSalary.js"

const svgRef = ref(null)
const { resizeRef, resizeState } = useResizeObserver();

const margin = { top: 10, right: 30, bottom: 30, left: 60 }

const categories = Object.values(salaryData.categories)
const series = Object.values(salaryData.series.boxPlot)
const dataReady = categories.map((item, idx) => {
	return {
		label: item,
		value: series[idx]
	}
})

onMounted(() => {
	const svg = d3.select(svgRef.value)
	const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`)
	watchEffect(() => {
		g.selectAll('*').remove()
		const { width, height } = resizeState.dimensions
		svg.attr("width", width).attr("height", height)
		const cWidth = width - margin.left - margin.right
		const cHeight = height - margin.top - margin.bottom
		const xScale = d3.scaleBand().domain(categories).range([0, cWidth]).padding(0.5)
		const yScale = d3.scaleLinear()
			.domain([0, d3.max(series, d => d[100] == '-' ? 0 : d[100]) * 1.1])
			.range([cHeight, 0]);

		let lines, xAxis, yAxis


		drawAxis()
		drawBoxPlot()
		function drawAxis() {
			xAxis = g.append('g')
				.attr('transform', `translate(${-xScale.bandwidth() / 2} ,${cHeight})`)
				.call(d3.axisBottom(xScale))
			yAxis = g.append('g')
				.call(d3.axisLeft(yScale));

			// xAxis.selectAll('.tick')
			// 	.remove()
			// d3.select('#chart-container')
			// 	.selectAll('.xLabel')
			// 	.data(categories)
			// 	.join('span')
			// 	.text(d => d)
			xAxis.selectAll('text')
				.attr('transform', 'rotate(-45)')
				.style('text-anchor', 'end')
				.style('font-size', '12px')
				.style('width', '50px')
				.style('overflow', 'hidden')
				.style('text-overflow', 'ellipsis')
		}

		function drawBoxPlot() {
			// --------------------------- draw vertical lines -----------------------------
			g.selectAll('.vertical-lines')
				.data(dataReady)
				.join('line')
				.attr('class', '.vertical-lines')
				.attr('x1', d => xScale(d.label))
				.attr('x2', d => xScale(d.label))
				.attr('y1', d => yScale(d.value[0] == '-' ? d.value[100] : d.value[0]))
				.attr('y2', d => yScale(d.value[100] == '-' ? d.value[0] : d.value[100]))
				.attr('stroke', '#0a6c75')
			// ----------------------------- draw upper rect -------------------------------
			g.selectAll('.upper-rects')
				.data(dataReady)
				.join('rect')
				.attr('class', '.upper-rects')
				.attr('x', d => xScale(d.label) - xScale.bandwidth() / 2)
				.attr('y', d => yScale(d.value[75]))
				.attr('width', xScale.bandwidth())
				.attr('height', d => isNaN(yScale(d.value[50])) ? 0 : yScale(d.value[50]) - yScale(d.value[75]))
				.attr('fill', '#0a6c75')
			g.selectAll('.lower-rects')
				.data(dataReady)
				.join('rect')
				.attr('class', '.lower-rects')
				.attr('x', d => xScale(d.label) - xScale.bandwidth() / 2)
				.attr('y', d => yScale(d.value[50]))
				.attr('width', xScale.bandwidth())
				.attr('height', d => isNaN(yScale(d.value[25])) ? 0 : yScale(d.value[25]) - yScale(d.value[50]))
				.attr('fill', '#5dd1f4')
			// ------------------------------ draw low line --------------------------------
			g.selectAll('.low-line')
				.data(dataReady)
				.join('line')
				.attr('class', '.low-line')
				.attr('x1', d => d.value[0] ? xScale(d.label) - 5 : null)
				.attr('x2', d => d.value[0] ? xScale(d.label) + 5 : null)
				.attr('y1', d => yScale(d.value[0] == '-' ? d.value[100] : d.value[0]))
				.attr('y2', d => yScale(d.value[0] == '-' ? d.value[100] : d.value[0]))
				.attr('stroke', '#0a6c75')
			g.selectAll('.low-value')
				.data(dataReady)
				.join('text')
				.text(d => isNaN(d.value[0]) ? null : d.value[0])
				.attr('class', '.low-value')
				.attr('x', d => d.value[0] || d.value[0] == 0 ? xScale(d.label) : null)
				.attr('y', d => d.value[0] == 0 || d.value[0] && !isNaN(d.value[0]) ? yScale(d.value[0]) - 5 : null)
				.attr('fill', '#5dd1f4')
				.style('text-anchor', 'middle')
				.style('font-size', 11)
				.style('font-weight', 'bold')
			// ----------------------------- draw high line --------------------------------
			g.selectAll('.high-line')
				.data(dataReady)
				.join('line')
				.attr('class', '.high-line')
				.attr('x1', d => d.value[100] ? xScale(d.label) - 5 : null)
				.attr('x2', d => d.value[100] ? xScale(d.label) + 5 : null)
				.attr('y1', d => yScale(d.value[100] == '-' ? d.value[0] : d.value[100]))
				.attr('y2', d => yScale(d.value[100] == '-' ? d.value[0] : d.value[100]))
				.attr('stroke', '#0a6c75')
			g.selectAll('.high-value')
				.data(dataReady)
				.join('text')
				.text(d => isNaN(d.value[100]) ? null : d.value[100])
				.attr('class', '.high-value')
				.attr('x', d => d.value[100] ? xScale(d.label) : null)
				.attr('y', d => d.value[100] && !isNaN(d.value[100]) ? yScale(d.value[100]) - 5 : null)
				.attr('fill', '#0a6c75')
				.style('text-anchor', 'middle')
				.style('font-size', 11)
				.style('font-weight', 'bold')
		}
	})
})
</script>
