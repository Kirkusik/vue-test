import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

//document.write('<div id="app"><router-view></router-view></div>');

new Vue({
  el: '#app',
  render: (h) => h(App),
  router
}).$mount('#app');