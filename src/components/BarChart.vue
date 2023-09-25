<template>
	<div class="relative" ref="resizeRef" id="bar-container">
		<svg ref="barRef"></svg>
		<div id="tooltip" class="absolute z-10 p-2 bg-white border border-gray-500 opacity-0 w-max "></div>
	</div>
</template>
<script setup>
import { ref, onMounted, watchEffect, toRef, reactive } from "vue";
import * as d3 from "d3"
import useResizeObserver from "../use/resizeObserver.js";

const emit = defineEmits(["update-val"])
const props = defineProps({
	data: Object,
	age: Number
})
const data = toRef(props, "data")

const barRef = ref(null);
const { resizeRef, resizeState } = useResizeObserver();

const margin = { top: 0, right: 0, bottom: 40, left: 44 }

onMounted(() => {
	const svg = d3.select(barRef.value)
	const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`)
	const tooltip = d3.select('#tooltip')

	const lineX = svg.append('line');
	const lineY = svg.append('line');


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

		drawAxis();
		drawBars();
		function drawAxis() {
			const xAxis = g.append('g')
				.attr('transform', `translate(0,${cHeight})`)
				.call(d3.axisBottom(xScale).ticks(11))
			const xTexts = xAxis.selectAll('text')
			xAxis.selectAll('path').remove()
			d3.select(xTexts.nodes()[0]).attr('transform', 'translate(4,0)')

			const yAxis = g.append('g') .call(d3.axisLeft(yScale))
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
		}

		function fillColor(d){
			if (d.age < props.age) return '#c7c7c7'
			if (d.age == props.age) return '#00aeef'
			return '#7f7f7f'
		}
	})
})
</script>
