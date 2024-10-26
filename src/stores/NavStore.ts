import { defineStore } from 'pinia';

export const useNavStore = defineStore('nav', {
  state: () => ({
    navItems: [
      { to: '/', label: 'Home' },
      { to: '/', label: 'In Progress' },
      { to: '/', label: 'In Progress' },
      { to: '/', label: 'In Progress' }
    ]
  })
});
