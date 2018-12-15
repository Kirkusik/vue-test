import 'bootstrap';
import './scss/app.scss';
import Vue from 'vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router
}).$mount('#app');

