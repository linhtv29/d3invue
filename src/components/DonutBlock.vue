<template>
	<div class="w-full h-[170px]">
		<DonutChart :ratio="ratio" />
		<div class="text-center text-[#666] text-xs">{{ label }}</div>
	</div>
</template>
<script setup>
import DonutChart from './DonutChart.vue';

defineProps({
	ratio: Number,
	label: String
})
</script>