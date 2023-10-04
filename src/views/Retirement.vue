<template>
	<div class="relative w-full" ref="resizeRef" id="chart-container">
		<svg ref="svgRef">
		</svg>
	</div>
</template>
<script setup>
import { ref, onMounted, watchEffect } from "vue";
import * as d3 from "d3"

const svgRef = ref(null)

onMounted(() => {
	const svg = d3.select(svgRef.value)
})
</script>