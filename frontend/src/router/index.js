import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/components/LandingPage.vue';
import Results from '@/components/Results.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    }
  ],
  mode: 'history'
});
