<script setup>
import { ref } from "vue";
import SageBody from "@/components/SageBody.vue";

const proficiencyOptions = [
  {
    value: "math",
    title: "Mathematics",
  },
  {
    value: "arts",
    title: "Arts",
  },
  {
    value: "science",
    title: "Science",
  },
]

const currentProficiency = ref("math");
</script>

<template>
  <Suspense>
    <div class="w-[1000px] mx-auto my-10 min-h-screen flex flex-col">
      <div class="text-2xl text-center text-white bg-[#555] mb-3"> Student Proficiency </div>
      <div>
        <select name="proficiency" id="select-proficiency" class="p-1 border border-gray-500"
          v-model="currentProficiency">
          <option v-for="option in proficiencyOptions" :key="option.value" :value="option.value">{{ option.title }}
          </option>
        </select>
      </div>
      <SageBody :currentProficiency="currentProficiency" class="flex-1" />
    </div>
  </Suspense>
</template>
