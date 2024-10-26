import type { Router } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/view/HomePage.vue'
import CountryPage from '@/view/CountryHolidays.vue'

const router: Router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { showHeader: true },
    },
    {
      path: '/country/:countryName/:countryCode',
      name: 'Country',
      component: CountryPage,
      meta: { showHeader: true },
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ],
});

export default router;
