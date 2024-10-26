<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Search from "@/components/search/Search.vue";
import CountryList from "@/components/countries/CountryList.vue";
import { getCountries } from "@/services/CountriesService";
import { ICountry } from "@/types/Schedule";
import RandomCountriesHolidays from "@/components/widgets/RandomCountriesHolidays.vue";

const countries = ref<ICountry[]>([]);
const filteredCountries = ref<ICountry[]>([]);
const randomCountries = ref<ICountry[]>([]);

const searchText = ref("");

const getRandomCountries = (countriesList: ICountry[], count: number): ICountry[] => {
  const shuffledCountries = [...countriesList].sort(() => 0.5 - Math.random());
  return shuffledCountries.slice(0, count);
};

const showCountries = async () => {
  try {
    countries.value = await getCountries();
    randomCountries.value = getRandomCountries(countries.value, 3);
    filteredCountries.value = countries.value;
  } catch (error) {
    console.error("Err:", error);
  }
};

const updateSearchText = (text: string) => {
  searchText.value = text;
};

const searchACountry = () => {
  filteredCountries.value = countries.value.filter(country =>
    country.name.toLowerCase().includes(searchText.value.toLowerCase())
  );
};

onMounted(() => {
  showCountries();
});
</script>

<template>
  <div class="flex container justify-around">
    <div class="flex flex-col px-20">
      <Search
        @update:searchText="updateSearchText"
        @search-country="searchACountry"
      />
      <CountryList :countries="filteredCountries" />
    </div>
    <div class="">
      <RandomCountriesHolidays :countries="randomCountries"/>
    </div>
  </div>
</template>

<style scoped>
</style>
