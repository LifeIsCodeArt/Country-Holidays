<!-- header.vue -->
<script setup lang="ts">
import { useNavStore } from '@/stores/NavStore';
import NavItem from '@/components/header/HeaderLinkItem.vue';

const navStore = useNavStore();
</script>

<template>
  <div class="w-full top-0 bg-gradient-to-r from-slate-900 to-slate-700 fixed z-40">
    <div class="h-[74px] mx-[80px] flex items-center justify-between z-10">
      <RouterLink to="/" class="flex justify-between items-center w-[105px]">
        <div class="h-8 w-8 bg-[#CF6F49] rounded-xl"></div>
        <div class="roboto font-bold text-[22px] text-white pl-2">Found</div>
      </RouterLink>
      <nav class="h-[42px] flex justify-between items-center">
        <ul class="flex justify-between items-center w-[400px] mr-8">
          <NavItem v-for="(item, index) in navStore.navItems" :key="index" :to="item.to" :label="item.label" />
        </ul>
      </nav>
    </div>
  </div>
</template>
