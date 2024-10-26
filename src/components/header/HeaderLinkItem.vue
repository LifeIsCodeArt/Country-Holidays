<script setup lang="ts">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps<{
  to: string;
  label: string;
}>();
</script>

<template>
  <RouterLink :to="to">
    <li
      class="roboto w-auto text-center text-white text-[16px] font-bold leading-normal cursor-pointer"
    >
      <span>{{ label }}</span>
      <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
      <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
    </li>
  </RouterLink>
</template>
