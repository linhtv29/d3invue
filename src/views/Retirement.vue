<template>
	<div class="w-full pt-10">
		<div class="bg-[#f8f8f8] rounded-lg w-[900px] h-[500px] p-6 mx-auto flex flex-col">
			<div class="text-bold"> Number of Retirement rate trends for 10 years</div>
			<div class="my-2">
				<select class="p-1 bg-white border" name="choose-years" id="choose-years" v-model="yearData">
					<option v-for="option in Object.keys(data)" :value="option" :key="option">{{ option }}</option>
				</select>
			</div>
			<div class="relative flex-1 w-full" ref="resizeRef" id="chart-container">
				<svg ref="svgRef">
				</svg>
				<div id="tooltip-percent"
					class="absolute z-10 hidden p-2 border rounded-md border-red-500 bg-[rgba(255,255,255,0.8)] w-max">
					<div class="text-xs">{{ hoverYear }}</div>
					<div class="text-xs">{{ `Retirement Percentage: ${retiredPercent}%` }}</div>
				</div>
				<div id="tooltip-amount" class="absolute z-10 hidden p-2 bg-white border rounded-md border-[rgb(11,104,162)] w-max ">
					<div class="text-xs">{{ hoverYear }}</div>
					<div class="text-xs">{{ `Retirement Percentage: ${retiredAmount}` }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref, onMounted, watchEffect, computed } from "vue";
import * as d3 from "d3"
import useResizeObserver from "../use/resizeObserver.js";
import { retireData2020, retireData2021, retireData2022 } from "@/assets/MOCK_RETIRED.JS"

const svgRef = ref(null)
const { resizeRef, resizeState } = useResizeObserver();
const yearData = ref(2020)
const data = {
	2020: retireData2020,
	2021: retireData2021,
	2022: retireData2022
}
const hoverYear = ref()
const retiredPercent = ref()
const retiredAmount = ref()

const margin = { top: 0, right: 0, bottom: 40, left: 50 }

const yearArr = computed(() => {
	return Object.keys(data[yearData.value])
})
const dataReady = computed(() => {
	return yearArr.value.map(year => {
		return {
			year: year,
			retirementCount: data[yearData.value][year].retirementCount,
			retirementPercent: data[yearData.value][year].retirementPercentage
		}
	})
})

onMounted(() => {
	const svg = d3.select(svgRef.value)
	const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`)
	const pTooltip = d3.select('#tooltip-percent')
	const cTooltip = d3.select('#tooltip-amount')
	watchEffect(() => {
		g.selectAll('*').remove()
		const { width, height } = resizeState.dimensions
		svg.attr("width", width).attr("height", height)
		const cWidth = width - margin.left - margin.right
		const cHeight = height - margin.top - margin.bottom
		const xScale = d3.scaleBand().domain(yearArr.value).range([0, cWidth]).padding(0.5)
		const pScale = d3.scaleLinear().domain([d3.min(dataReady.value, d => d.retirementPercent), d3.max(dataReady.value, d => d.retirementPercent * 1.5)]).range([cHeight / 2 - 10, 0])
		const cScale = d3.scaleLinear().domain([d3.min(dataReady.value, d => d.retirementCount), d3.max(dataReady.value, d => d.retirementCount * 1.5)]).range([cHeight, cHeight / 2 + 10])
		let bars, lines, dots

		drawAxis()
		drawBars()
		drawLines()
		function drawAxis() {
			const xAxis = g.append('g')
				.attr('transform', `translate(0 ,${cHeight})`)
				.call(d3.axisBottom(xScale))
			xAxis.selectAll('path').remove()
			xAxis.selectAll('line').remove()


			const pAxis = g.append('g')
				.call(d3.axisLeft(pScale).ticks(4));
			pAxis.append('text').text('Retirement rate %').attr('x', -40).attr('y', pScale(0) / 2).attr('fill', 'red').style('text-anchor', 'middle').attr('transform', `rotate(-90,-40,${pScale(0) / 2})`).style('font-size', 12)
			const cAxis = g.append('g')
				.call(d3.axisLeft(cScale).ticks(5));
			cAxis.append('text').text('Number of retirees').attr('x', -40).attr('y', cScale(0) * 3 / 4).attr('fill', 'rgb(11,104,162)').style('text-anchor', 'middle').attr('transform', `rotate(-90,-40,${cScale(0) * 3 / 4})`).style('font-size', 12)
			cAxis.selectAll('path').remove()
			cAxis.selectAll('line').attr('x2', cWidth).attr('stroke', '#e6e6e6')
			pAxis.selectAll('path').remove()
			pAxis.selectAll('line').attr('x2', cWidth).attr('stroke', '#e6e6e6')
		}
		function drawBars() {
			bars = g
				.selectAll('rect')
				.data(dataReady.value)
				.join('rect')
				.attr('x', d => xScale(d.year))
				.attr('y', d => cScale(d.retirementCount))
				.attr('height', d => cScale(0) - cScale(d.retirementCount))
				.attr('width', xScale.bandwidth())
				.attr('fill', 'rgb(11, 104, 162)')
				.on("mouseover", mouseover)
				.on("mouseout", mouseleave)
			g.selectAll('.text-amount')
				.data(dataReady.value)
				.join('text')
				.text(d => `${d.retirementCount}`)
				.attr('x', d => xScale(d.year) + xScale.bandwidth() / 2)
				.attr('y', d => cScale(d.retirementCount) - 10)
				.style('fill', 'black')
				.style('font-size', 12)
				.style('text-anchor', 'middle')
			function mouseover(event, d) {
				cTooltip
					.classed("hidden", false)
				const tooltipDim = cTooltip.node().getBoundingClientRect();
				d3.select(this).style("cursor", "pointer");
				hoverYear.value = d.year
				retiredAmount.value = d.retirementCount
				cTooltip
					.style("left", `${xScale(d.year) + margin.left - tooltipDim.width / 2 + xScale.bandwidth() / 2}px`)
					.style("top", `${cScale(d.retirementCount) - tooltipDim.height - 15}px`)
			}
		}
		function drawLines() {
			lines = g.append("path")
				.datum(dataReady.value)
				.attr("fill", "none")
				.attr("stroke", "rgb(239,68,68)")
				.attr("stroke-width", 1.5)
				.attr("d", d3.line()
					.x(d => xScale(d.year))
					.y(d => pScale(d.retirementPercent))
				)
			dots = g.selectAll('circle')
				.data(dataReady.value)
				.join('circle')
				.attr('cx', d => xScale(d.year))
				.attr('cy', d => pScale(d.retirementPercent))
				.attr('r', 5)
				.style('fill', 'rgb(239,68,68)')
			dots.on('mouseover', mouseover)
				.on('mouseleave', mouseleave)
			g.selectAll('.text-percent')
				.data(dataReady.value)
				.join('text')
				.text(d => `${d.retirementPercent}%`)
				.attr('x', d => xScale(d.year))
				.attr('y', d => pScale(d.retirementPercent) - 10)
				.style('fill', 'black')
				.style('font-size', 12)
				.style('text-anchor', 'middle')
			function mouseover(event, d) {
				pTooltip
					.classed("hidden", false)
				const tooltipDim = pTooltip.node().getBoundingClientRect();
				d3.select(this).style("cursor", "pointer");
				hoverYear.value = d.year
				retiredPercent.value = d.retirementPercent
				pTooltip
					.style("left", `${xScale(d.year) + margin.left - tooltipDim.width / 2}px`)
					.style("top", `${pScale(d.retirementPercent) - tooltipDim.height - 15}px`)
			}
		}
		function mouseleave(event, d) {
			d3.select(this).style("cursor", "default");
			pTooltip
				.classed("hidden", true)
			cTooltip
				.classed("hidden", true)
		}
	})
})
</script>
