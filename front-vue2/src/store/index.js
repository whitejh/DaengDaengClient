import Vue from 'vue';
import Vuex from 'vuex';
import state from './state/index';
import mutations from './mutations.js';
import actions from './actions.js';
import goods from './Goods/Goods.js'
import getters from './getters.js'
//import ES6Promise from 'es6-promise';

//ES6Promise.polyfill();
Vue.use(Vuex);

export const store = new Vuex.Store({
	getters,
	mutations,
	actions,
	state,
	modules: {goods},
});

export default store;
