import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
          title: 'Test'
      } 
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            title: 'Test'
        } 
      },
    { path: '*', component: { template: '<h2>Not Found</h2>' } }
  ],
});
