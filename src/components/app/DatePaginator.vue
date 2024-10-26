<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  years: number[],
  selectedYear: number,
}>();

const emit = defineEmits<{
  (e: "select-year", selectedYear: number):void;
}>();
</script>

<template>
  <div class="mt-10">
    <button
      v-for="year in years"
      :key="year"
      class="text-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      :class="{ 'bg-green-300': year === selectedYear }"
      @click="emit('select-year', year)">
      {{ year }}
    </button>
  </div>
</template>

<style scoped>

</style>