<template>
	<div class="relative" ref="resizeRef" id="slider-container">
		<svg ref="svgRef"></svg>
	</div>
</template>
<script setup>
import { ref, onMounted, watchEffect, toRef, reactive } from "vue";
import * as d3 from "d3"
import useResizeObserver from "../use/resizeObserver.js";

const emit = defineEmits(["update-val"])
const props = defineProps({
	value: Number,
})

const svgRef = ref(null);
const currentValue = ref(30);
const { resizeRef, resizeState } = useResizeObserver();

onMounted(() => {
	const svg = d3.select(svgRef.value)
	const g = svg.append('g')

	const drag = d3.drag();

	watchEffect(() => {
		g.selectAll('*').remove()
		const { width, height } = resizeState.dimensions
		svg.attr("width", width).attr("height", height)

		g.attr('transform', `translate(0, ${height / 2})`)

		const scale = d3.scaleLinear().domain([1, 99]).range([0, width])

		g.append('line').attr('x1', 0).attr('y1', 0).attr('x2', width).attr('y2', 0).attr('stroke', '#f0f0f0').style("stroke-width", 5)
		g.append('circle')
			.attr('cx', scale(props.value || currentValue.value))
			.attr('cy', 0)
			.attr('r', 5)
			.attr('fill', 'white')
			.attr('stroke', '#666')
			.style("stroke-width", 1)
			.style("cursor", "pointer")
			.call(
				drag.on("start", dragStarted)
						.on("drag", dragged)
						.on("end", dragEnded)
			)

		function dragStarted(event, d) {
			d3.select(this).raise().attr("stroke-width", 3);
		}
		function dragged(event, d) {
			if(event.x < 0 || event.x > width) return
			const value = scale.invert(event.x).toFixed(0)
			currentValue.value = value
			emit("update-val", +value)
		}

		function dragEnded(event, d) {
			d3.select(this).attr("stroke-width", 1);
		}
	})
})
</script>
