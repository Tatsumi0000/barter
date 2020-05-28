import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/Login.vue';
// import Home from '@/views/Home.vue';
import LP from '@/components/Lp.vue';
import MyPage from '@/components/MyPage.vue';
// import Iconpoint from '@/components/Iconpoint.vue';
// import Sent from '@/components/Sent.vue';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/top',
    component: LP,
  },
  {
    // ログイン画面
    path: '/login',
    component: Login,
  },
  {
    path: '/mypage',
    component: MyPage,
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
