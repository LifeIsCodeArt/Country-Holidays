<script setup lang="ts">
  import {defineProps} from "vue";
  import type {ICountry} from "@/types/Schedule";
  import RandomCountryCard from "@/components/widgets/RandomCountryCard.vue";

  const props = defineProps<{
    countries: ICountry[]
  }>();
</script>

<template>
  <ul class="w-[400px] mt-[135px]">
    <RandomCountryCard v-for="item in props.countries" :country="item"/>
  </ul>
</template>

<style scoped>

</style>