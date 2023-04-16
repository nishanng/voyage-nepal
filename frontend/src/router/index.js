import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/components/LandingPage.vue';
import Results from '@/components/Results.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/results',
    name: 'Results',
    component: Results,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
