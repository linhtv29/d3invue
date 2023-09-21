
<template>
	<div class="relative w-full" ref="resizeRef" id="chart-container">
		<svg ref="svgRef">
		</svg>
		<div :id="`tooltip-${id}`" class="absolute z-10 p-2 bg-white border border-gray-500 opacity-0 w-max ">
			<div class="flex mb-2 text-xs">
				<div class="text-gray-500">
					Statewide Average:
				</div>
				<div>{{ ratio }}%</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref, onMounted, watchEffect } from "vue";
import * as d3 from "d3"
import useResizeObserver from "../use/resizeObserver.js";


const props = defineProps({
	ratio: Number
})

const id = new Date().getTime();

const svgRef = ref(null)
const { resizeRef, resizeState } = useResizeObserver();
const margin = 20;
onMounted(() => {
	const svg = d3.select(svgRef.value)
	const tooltip = d3.select(`#tooltip-${id}`)
	watchEffect(() => {
		svg.selectAll('*').remove()
		const { width, height } = resizeState.dimensions
		const radius = Math.min(width, height) / 2 - margin
		svg.attr("width", width).attr("height", height)
		const g = svg.append('g')
			.attr('transform', `translate(${width / 2},${height / 2})`)
			.on("mouseover", mouseover)
			.on("mousemove", mousemove)
			.on("mouseout", mouseleave)
		g.append('text').text(`${props.ratio}%`)
			.style('text-anchor', 'middle')
			.attr('transform', 'translate(0,5)')
			.style('font-size', 14)

		const data = [{ value: props.ratio, label: "select" }, { value: 100 - props.ratio, label: "other" }]

		const color = d3.scaleOrdinal()
			.range(["#4e79a7", "#bab0ac"])

		const pie = d3.pie()
			.sort(null)
			.value(d => d.value)

		const data_ready = pie(data)

		g.selectAll()
			.data(data_ready)
			.join('path')
			.attr('d', d3.arc()
				.innerRadius(40)
				.outerRadius(radius)
			)
			.attr('fill', d => color(d.data))
	})
	function mouseover(event, d) {
		d3.select(this).style("cursor", "pointer");
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
			.transition()
			.duration(200)
			.style("opacity", 0)
			.duration(0)
			.style("left", (-event.offsetX) + "px")
			.style("top", (-event.offsetY) + "px")
	}
})

</script>
<style scoped></style>