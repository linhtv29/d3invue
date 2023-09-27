<template>
	<div class="max-w-[600px] mx-auto py-5">
		<div class="bg-[#f0f0f0] font-bold p-2">
			<div class="text-[27px] text-[#555]">
				<span> Are </span>
				<span class="text-[#00aeef]">you</span>
				<span> over the hill?</span>
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
			{{ `You are older than ${ratio} of ${genderText} Vietnamese` }}
		</div>

		<BarChart :data="readyData" :age="age" :gender="gender" :total-reduce="totalReduce" class="w-full h-[275px] my-3 border-t border-r border-[#aeaeae]">
			<div class="absolute text-xs right-1 top-5">
				<div class="text-[#595959] font-bold mb-1">Select Gender</div>
				<div class="flex text-[10px] pl-1">
					<input type="radio" name="gender" value="all" v-model="gender" id="all">
					<label class="ml-1" for="all">All</label>
				</div>
				<div class="flex text-[10px] pl-1">
					<input type="radio" name="gender" value="females" v-model="gender" id="females">
					<label class="ml-1" for="females">Female</label>
				</div>
				<div class="flex text-[10px] pl-1">
					<input type="radio" name="gender" value="males" v-model="gender" id="males">
					<label class="ml-1" for="males">Male</label>
				</div>
			</div>
		</BarChart>
		<hr class="bg-[#f0f0f0] h-1 mb-4">
		<div class="w-1/2 space-y-3 text-xs font-medium">
			<div class="flex justify-between">
				<div class="text-[#898989]">Vietnamese younger than you</div>
				<div class="text-[#c0c0c0]">{{ totalYounger[gender].toLocaleString() }}</div>
			</div>
			<div class="flex justify-between">
				<div class="text-[#898989]">Vietnamese the same age as you</div>
				<div class="text-[#00aeef]">{{ sameAge?.toLocaleString() }}</div>
			</div>
			<div class="flex justify-between">
				<div class="text-[#898989]">Vietnamese older than you</div>
				<div class="text-[#333]"> {{ (totalReduce[gender] - totalYounger[gender] - sameAge).toLocaleString() }} </div>
			</div>
		</div>
		<hr class="bg-[#f0f0f0] h-1 mt-4">
		<div class="text-[#898989] text-[9px]">Population estimates as of 2023</div>
	</div>
</template>
<script setup>
import { ref, computed } from "vue";
import SliderD3 from '../components/SliderD3.vue';
import { vnData } from "@/assets/VN_POP.js"
import BarChart from "../components/BarChart.vue";

const age = ref(31);
const gender = ref("all");

const totalReduce = vnData.reduce((acc, item) => ({ females: acc.females + item.females, males: acc.males + item.males, all: acc.all + item.total }), { females: 0, males: 0, all: 0 })

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
const genderText = computed(() => {
	return gender.value === "females" ? "Female" : gender.value == "all" ? "All" : "Male"
})
const totalYounger = computed(() => {
	return vnData.slice(0, age.value).reduce((acc, item) => ({ females: acc.females + item.females, males: acc.males + item.males, all: acc.all + item.total }), { females: 0, males: 0, all: 0 })
})
const currentItem = computed(() => {
	return vnData.find(item => item.age === age.value)
})
const sameAge = computed(() => {
	return gender.value == "all" ? currentItem.value['total'] : currentItem.value[gender.value]
})
const ratio = computed(() => {
	const ratio = gender.value === "females" ? totalYounger.value.females / totalReduce.females : gender.value == "all" ? totalYounger.value.all / totalReduce.all : totalYounger.value.males / totalReduce.males
	return `${(ratio * 100).toFixed(2)}%`
})
</script>