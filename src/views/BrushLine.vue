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
import { mockTimeData } from "@/assets/timeData.js"

const svgRef = ref(null)
const { resizeRef, resizeState } = useResizeObserver();

const margin = { top: 10, right: 30, bottom: 30, left: 60 }

const dataReady = mockTimeData.map(d => {
	return {
		date: d3.timeParse("%Y-%m-%d")(d.date),
		value: d.value
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
		const clip = svg.append("defs").append("svg:clipPath")
			.attr("id", "clip")
			.append("svg:rect")
			.attr("width", cWidth)
			.attr("height", cHeight)
			.attr("x", 0)
			.attr("y", 0);
		const xScale = d3.scaleTime()
			.domain(d3.extent(dataReady, d => d.date))
			.range([0, cWidth]);
		const yScale = d3.scaleLinear()
			.domain([0, d3.max(dataReady, d => +d.value)])
			.range([cHeight, 0]);
		// Add brushing
		const brush = d3.brushX()
			.extent([[0, 0], [cWidth, cHeight]])
			.on("end", updateChart)

		let lines, xAxis, yAxis


		drawAxis()
		drawLines()
		// Add the brushing
		g
			.append("g")
			.attr("class", "brush")
			.call(brush)
		let idleTimeout
		function idled() { idleTimeout = null; }
		function drawAxis() {
			xAxis = g.append('g')
				.attr('transform', `translate(0 ,${cHeight})`)
				.call(d3.axisBottom(xScale))
			yAxis = g.append('g')
				.call(d3.axisLeft(yScale));
		}
		function drawLines() {
			lines = g.append('g')
				.attr("clip-path", "url(#clip)")
				.append("path")
				.datum(dataReady)
				.attr("fill", "none")
				.attr("stroke", "steelblue")
				.attr("stroke-width", 1.5)
				.attr("d", d3.line()
					.x(d => xScale(d.date))
					.y(d => yScale(d.value))
				)
		}
		function updateChart(event, d) {
			const extent = event.selection

			if (!extent) {
				if (!idleTimeout) return idleTimeout = setTimeout(idled, 350); // This allows to wait a little bit
				xScale.domain(d3.extent(dataReady, d => d.date))
			} else {
				xScale.domain([xScale.invert(extent[0]), xScale.invert(extent[1])]).range([0, cWidth])
				g.select(".brush").call(brush.move, null)
			}

			// Update axis and line position
			xAxis.transition().duration(1000).call(d3.axisBottom(xScale))
			lines
				.transition()
				.duration(1000)
				.attr("d", d3.line()
					.x(function (d) { return xScale(d.date) })
					.y(function (d) { return yScale(d.value) })
				)
		}
		svg.on("dblclick", function () {
			xScale.domain(d3.extent(dataReady, d => d.date))
			xAxis.transition().call(d3.axisBottom(xScale))
			lines
				.transition()
				.attr("d", d3.line()
					.x((d) => xScale(d.date))
					.y((d) => yScale(d.value))
				)
		});
	})
})
</script>
