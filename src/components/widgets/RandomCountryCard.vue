<script setup lang="ts">
import {defineProps,ref} from "vue";
import type { ICountry } from "@/types/Schedule";
import {getRandomCountriesHolidays} from "@/services/CountriesService";
import { CountryHoliday } from "@/types/Schedule";

const props = defineProps<{
  country: ICountry;
}>();

const countryNextHoliday = ref<CountryHoliday>()

const nextHoliday = async (countryCode:string) => {
  try {
    const getHoliday = await getRandomCountriesHolidays(countryCode)
    console.log(getHoliday);
    countryNextHoliday.value = getHoliday[0];
  }
  catch (error) {
    console.error("Err:", error);
  }
}
nextHoliday(props.country.countryCode)
</script>

<template>
    <li class="w-[600px] h-48 flex flex-col justify-between border-2 border-black rounded-xl my-16 p-6">
      <p class="font-bold text-[20px]">Country name: {{ country.name }}</p>
      <p class="font-bold text-[20px]">Next holiday: {{ countryNextHoliday?.name }}</p>
      <p class="font-bold text-[20px]">Date: {{ countryNextHoliday?.date }}</p>
    </li>
</template>

<style scoped>

</style>