<template>
	<div class="relative" ref="resizeRef" id="bar-container">
		<svg ref="barRef"></svg>
		<div id="tooltip" class="absolute z-10 p-2 bg-white border border-gray-500 opacity-0 w-max ">
			<div class="flex mb-1 text-xs">
				<div class="text-gray-500">
					Age:
				</div>
				<div>{{tooltipData.age}}</div>
			</div>
			<div class="flex mb-1 text-xs">
				<div class="text-gray-500">
					Number of people:
				</div>
				<div>{{tooltipData.sameAge}}</div>
			</div>
			<div class="flex mb-1 text-xs">
				<div class="text-gray-500">
					{{ `People this age are older than ${tooltipData.ratio}% of ${gender} Vietnamese` }}
				</div>
			</div>
		</div>
		<slot></slot>
	</div>
</template>
<script setup>
import { ref, onMounted, watchEffect, toRef, reactive } from "vue";
import * as d3 from "d3"
import useResizeObserver from "../use/resizeObserver.js";

const emit = defineEmits(["update-val"])
const props = defineProps({
	data: Array,
	age: Number,
	gender: String,
	totalReduce: Object 
})
const data = toRef(props, "data")

const barRef = ref(null);
const { resizeRef, resizeState } = useResizeObserver();

const tooltipData = reactive({
	age: 0,
	sameAge: 0,
	ratio:0
})

const margin = { top: 0, right: 0, bottom: 40, left: 50 }

onMounted(() => {
	const svg = d3.select(barRef.value)
	const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`)
	const tooltip = d3.select('#tooltip')

	const lineX = svg.append('line');
	const lineY = svg.append('line');
	
	const title = svg.append('text')
	const xTitle = svg.append('text')


	watchEffect(() => {
		g.selectAll('*').remove()
		const { width, height } = resizeState.dimensions
		svg.attr("width", width).attr("height", height)
		const cWidth = width - margin.left - margin.right
		const cHeight = height - margin.top - margin.bottom
		const xScale = d3.scaleLinear().domain([d3.min(data.value, d => d.age), d3.max(data.value, d => d.age)]).range([0, cWidth - 30]);
		const yScale = d3.scaleLinear().domain([0, d3.max(data.value, d => d.sameAge)]).range([cHeight, 10]);

		lineX.attr('x1', 0).attr('y1', cHeight).attr('x2', width).attr('y2', cHeight).attr('stroke', '#aeaeae')
		lineY.attr('x1', margin.left).attr('y1', 0).attr('x2', margin.left).attr('y2', height).attr('stroke', '#aeaeae')

		title.text('Number of Vietnamese').attr('x', -cHeight/2).attr('y', 10).style('text-anchor', 'middle').style('font-size', 10).attr('fill', '#aeaeae').attr('transform', 'rotate(-90)')
		xTitle.text('Age').attr('x', margin.left + cWidth/2).attr('y', cHeight + 35 ).style('text-anchor', 'middle').style('font-size', 10).attr('fill', '#aeaeae')

		drawAxis();
		drawBars();
		function drawAxis() {
			const xAxis = g.append('g')
				.attr('transform', `translate(0,${cHeight})`)
				.call(d3.axisBottom(xScale).ticks(11))
			const xTexts = xAxis.selectAll('text')
			xAxis.selectAll('path').remove()
			d3.select(xTexts.nodes()[0]).attr('transform', 'translate(4,0)')

			const yAxis = g.append('g').call(d3.axisLeft(yScale).tickFormat(d => d/1000000 + "M"));
			const yTexts = yAxis.selectAll('text')
			yAxis.selectAll('path').remove()
			d3.select(yTexts.nodes()[0]).attr('transform', 'translate(0,-8)')

			g.selectAll('line')
				.attr('stroke', '#aeaeae')
				.attr('stroke-width', 1);
			g.selectAll('text').style('color', '#aeaeae')
		}

		function drawBars() {
			g
				.selectAll('rect')
				.data(data.value)
				.join('rect')
				.attr('x', d => xScale(d.age))
				.attr('y', d => yScale(d.sameAge))
				.attr('height', d => cHeight - yScale(d.sameAge))
				.attr('width', (cWidth - 30) / 100 - 0.5)
				.attr('fill', fillColor)
				.attr('stroke', '#7f7f7f')
				.on("mouseover", mouseover)
				.on("mousemove", mousemove)
				.on("mouseout", mouseleave)
				.on("click", mouseClick)
				.on("blur", resetClick);
		}

		function fillColor(d) {
			if (d.age < props.age) return '#c7c7c7'
			if (d.age == props.age) return '#00aeef'
			return '#7f7f7f'
		}
	})
		function mouseover(event, d) {
			d3.select(this).style("cursor", "pointer");
			tooltipData.age = d.age
			tooltipData.sameAge = d.sameAge
			tooltipData.ratio = (data.value.slice(0, d.age).reduce((a, b) => a + b.sameAge, 0) / props.totalReduce[props.gender] * 100).toFixed(2)
			tooltip
				.style("opacity", 1)
		}

		function mousemove(event, d) {
			tooltip
				.style("left", (event.offsetX + 15) + "px")
				.style("top", (event.offsetY + 15) + "px")
		}

		function mouseleave(event, d) {
			d3.select(this).style("cursor", "default");
			tooltip
				.style("opacity", 0)
				.style("left", (-event.offsetX) + "px")
				.style("top", (-event.offsetY) + "px")
		}
		function mouseClick(event, d) {
			resetClick();
			g.selectAll("rect").style("opacity", 0.2)
			d3.select(this)
				.style("stroke", "black")
				.style("opacity", 1);
		}
		function resetClick() {
			g.selectAll("rect").style("stroke", "#7f7f7f").style("stroke-width", 1).style("opacity", 1)
		}
})
</script>
