import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/Login.vue';
import Home from '@/views/Home.vue';
// import Iconpoint from '@/components/Iconpoint.vue';
// import Sent from '@/components/Sent.vue';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/top',
    component: Home,
  },
  {
    // ログイン画面
    path: '/login',
    component: Login,
  },
  {
    path: '',
    redirect: '/top',
  },
  {
    path: '*',
    redirect: '/top',
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
