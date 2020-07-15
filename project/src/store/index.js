import Vue from 'vue';
import Vuex from 'vuex';
import products from './products';
import order from './order';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    order,
  },
});
