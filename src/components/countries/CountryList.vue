<script setup lang="ts">
import { ref, defineProps, watch } from 'vue';
import type { ICountry } from "@/types/Schedule";
import { RouterLink } from "vue-router";

const props = defineProps<{
  countries: ICountry[]
}>();

const displayedCountries = ref<ICountry[]>([]);
const itemsPerPage = 10;
const showMore = ref(false);

watch(
    () => props.countries,
    (newCountries) => {
      displayedCountries.value = newCountries.slice(0, itemsPerPage);
      showMore.value = newCountries.length > itemsPerPage;
    },
    { immediate: true }
);

const loadMoreCountries = () => {
  const nextItems = displayedCountries.value.length + itemsPerPage;
  displayedCountries.value = props.countries.slice(0, nextItems);
  showMore.value = displayedCountries.value.length < props.countries.length;
};

</script>

<template>
  <h1 class="font-bold text-2xl my-6">
    Countries List
  </h1>
  <div>
    <ul>
      <li
        class="w-[400px] h-24 border-2 border-black flex items-center justify-center mb-6 rounded-xl"
        v-for="country in displayedCountries"
        :key="country.countryCode"
      >
        <RouterLink :to="{name: 'Country', params: {countryName: country.name, countryCode: country.countryCode}}" >
          <span
            class="cursor-pointer font-bold hover:text-blue-300"
          >
            {{ country.name }}
          </span>
        </RouterLink>
      </li>
    </ul>
    <button
      v-if="showMore"
      @click="loadMoreCountries"
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
    >
      Show more
    </button>
  </div>
</template>
