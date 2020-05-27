import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const maxpoint = 101;
const pointRange = [...Array(maxpoint).keys()];

export default new Vuex.Store({
  state: {
    items: pointRange,
    point: '',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
