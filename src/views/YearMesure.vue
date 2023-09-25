<template>
	<div class="max-w-[600px] mx-auto py-5">
		<div class="bg-[#f0f0f0] font-bold p-2">
			<div class="text-[27px] text-[#555]">
				<span> Are </span>
				<span class="text-[#00aeef]">you</span>
				<span> over the hill</span>
			</div>
			<div class="text-[15px] text-[#898989]">
				<span>See how many Vietnamese are </span>
				<span class="text-[#c0c0c0]">younger</span>
				<span> and </span>
				<span class="text-[#333]"> older </span>
				<span class="text-[#00aeef]"> you </span>
			</div>
		</div>
		<div class="mt-2 text-[#00aeef] flex">
			<div class="text-[15px] w-[72px] text-ellipsis text-left overflow-hidden whitespace-pre cursor-default"
				title="Move slider to select your age">Move slider to select your age</div>
			<SliderD3 class="max-h-[22px] flex-1" @update-val="age = $event" :value="age" />
			<div class="w-[152px] h-10 flex justify-center items-center text-4xl font-bold">{{ age }}</div>
		</div>

		<div
			class="text-[#00aeef] border-t border-[#aeaeae] mt-2 h-16 flex justify-center items-center border-b bg-[#f1fdff] font-bold text-xl">
			{{ `You are older than ${ratio} of All Vietnamese` }}
		</div>

		<BarChart :data="readyData" :age="age" class="w-full h-[275px] my-3 border-t border-r border-[#aeaeae]" />
	</div>
</template>
<script setup>
import { ref, computed } from "vue";
import SliderD3 from '../components/SliderD3.vue';
import { vnData } from "@/assets/VN_POP.js"
import BarChart from "../components/BarChart.vue";

const age = ref(31);
const gender = ref("females");

const totalPop = vnData.reduce((acc, item) => acc + item.total, 0)
const totalFemales = vnData.reduce((acc, item) => acc + item.females, 0)
const totalMales = vnData.reduce((acc, item) => acc + item.males, 0)

const readyData = computed(() => {
	return vnData.map(item => {
		return {
			age: item.age,
			sameAge: gender.value === "females" ? item.females
				: gender.value == "all"
					? item.total
					: item.males,
		}
	})
})
const currentItem = computed(() => {
	return vnData.find(item => item.age === age.value)
})
const ratio = computed(() => {
	const ratio = gender.value === "females" ? currentItem.value.females / totalFemales : gender.value == "all" ? currentItem.total / totalPop : currentItem.males / totalMales
	return `${(ratio*100).toFixed(0)}%`
})
</script>