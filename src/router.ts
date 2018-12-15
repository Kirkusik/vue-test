import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Layout from './components/shared/Layout.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
          meta: {
              title: 'Rabbit'
          } 
        },
        {
          path: '/about',
          name: 'about',
          component: About,
          meta: {
              title: 'Rodent'
          } 
        }
      ]
    },
    { path: '*', component: { template: '<h2>Not Found</h2>' } }
  ],
});
