<template>
	<div class="flex flex-col items-center w-full min-h-screen pt-10 bg-teal-500">
		<div class="mb-3 text-4xl font-bold text-white">Menu</div>
		<div class="w-[400px] bg-white rounded-lg p-4 flex flex-col space-y-2 shadow-lg">
			<RouterLink :to="link.path" v-for="link in links" :key="link.path" class="hover:underline hover:text-teal-500">{{ link.title }}</RouterLink>
		</div>
	</div>
</template>
<script setup>
import { RouterLink } from "vue-router"

const links = [
	{
		path: 'scratter-plot',
		title: 'Scratter Plot Chart'
	},
	{
		path: 'bar',
		title: 'Bar Chart'
	},
	{
		path: 'line-brush',
		title: 'Line Brush'
	},
	{
		path: 'retired',
		title: 'Combine chart'
	},
	{
		path: 'box-plot',
		title: 'Box Plot chart'
	},
]
</script>