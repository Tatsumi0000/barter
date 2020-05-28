import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const maxpoint = 101;
const pointRange = [...Array(maxpoint).keys()];

export default new Vuex.Store({
  state: {
    items: pointRange,
    point: '',
    userInfo: {
      name: 'Name',
      jwt: 'JWT',
      id: 0,
      myPoint: 0,
    },
  },
  // ゲッター
  getters: {
    getUserInfo() {
      return this.userInfo;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
