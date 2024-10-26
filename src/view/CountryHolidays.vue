<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from "vue-router";
import { getCountryHolidays } from "@/services/CountriesService";
import { CountryHoliday } from "@/types/Schedule";
import DatePaginator from "@/components/app/DatePaginator.vue";

const holidays = ref<CountryHoliday[]>();
const years = ref(Array.from({ length: 11 }, (_, i) => 2020 + i));
const selectedYear = ref(2024);

const {countryName, countryCode} = useRoute().params;


const showCountries = async (countryCode: string, selectedYear: number) => {
  try {
    holidays.value = await getCountryHolidays(countryCode, selectedYear);
  } catch (error) {
    console.error("Err:", error);
  }
};


const selectYear = (year: number) => {
  selectedYear.value = year;
};

watch(() => selectedYear.value, () => {
  showCountries(countryCode.toString(), selectedYear.value)
},
    {
      immediate: true
    })


</script>

<template>
  <div class="px-20">
    <h2 class="font-bold text-2xl mb-2">{{ countryName }}</h2>

    <div class="flex flex-col">
      <div
        v-for="holiday in holidays"
        :key="holiday.date + holiday.localName"
        class="rounded-xl odd:bg-gray-100 border-black p-5 h-full mb-2 shadow shadow-md"
      >
        <p>Holiday Common Name: <span class="font-bold text-[16px]">{{ holiday.name }}</span></p>
        <p>Holiday Local Name: <span class="font-bold text-[16px]">{{ holiday.localName }}</span></p>
        <p>Holiday Date: <span class="font-bold text-[16px]">{{ holiday.date }}</span></p>
      </div>
    </div>

    <DatePaginator :selected-year="selectedYear" :years="years" @select-year="selectYear"/>
  </div>
</template>


