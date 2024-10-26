<script setup lang="ts">
import { ref, watch } from 'vue';
import WhiteButton from "@/components/app/buttons/CustomButton.vue";

const emit = defineEmits<{
  (e: "update:searchText", searchText: string): void;
  (e: "search-country"): void;
}>();

const searchText = ref("");

watch(searchText, (newValue) => {
  emit("update:searchText", newValue);
});

const search = () => {
  emit("search-country");
};

const keydown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    search();
  }
};
</script>

<template>
  <div class="flex items-center justify-between w-[400px]">
    <div class="relative w-full mr-3">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
      <input
          type="text"
          id="search"
          v-model="searchText"
          @keydown="keydown"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Searching countries by name"
      required
      />
    </div>
    <WhiteButton class="w-[120px] h-[40px] mt-2" @click="search">
      <span class="w-[40px] ">Search</span>
    </WhiteButton>
  </div>
</template>

<style scoped>
</style>
