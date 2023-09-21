<template>
	<div class="flex mt-3 max-h-[750px]">
		<div class="w-[70%] mr-2 flex flex-col">
			<div class="text-center text-white bg-[#555] py-1">
				<div class="mb-1 text-xl"> SAGE Proficiency </div>
				<div class="text-[15px]">Click on a School to See Demographic Details</div>
			</div>
			<PlotChart :data="dataFiltered" class="flex-1" />
		</div>
		<div class="w-[30%]">
			<div class="text-center text-white bg-[#555] py-1">
				<div class="mb-1 text-xl">{{currentTarget.name}}</div>
				<div class="text-[15px]">Student Demographics</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref, toRef, computed, reactive } from "vue"
import { data } from "@/assets/MOCK_DATA.js";
import PlotChart from "./PlotChart.vue";

const props = defineProps({
	currentProficiency: String,
})

const currentProficiency = toRef(props, 'currentProficiency')
const currentTarget = reactive({
	name: "All",
	lowIncome: "",
	disabilities: "",
	ell: "",
})

const dataFiltered = computed(() => {
	return data.map(item => {
		const proficiency = currentProficiency.value === 'math' ? item.math_proficiency_level
			: currentProficiency.value === 'arts'
				? item.art_proficiency_level_percent
				: item.science_proficiency_level_percent
		return {
			id: item.id,
			name: item.school_name,
			students: item.number_of_students,
			fee: item.average_tuition_fee,
			disabilities: item.percentage_of_students_with_disabilities,
			ell: item.percentage_of_english_speaking_students,
			type: currentProficiency.value,
			proficiency
		}
	}).slice(20, 60)
})
</script>