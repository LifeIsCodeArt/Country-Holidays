<script setup>
import Header from '@/components/header/Header.vue';
</script>

<template>
  <Header v-if="$route.meta.showHeader" />
  <router-view class="mt-[174px]"/>
</template>
