import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import { routes } from './router/index';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
});


new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
