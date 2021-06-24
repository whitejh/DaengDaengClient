import Vue from 'vue';
import Vuex from 'vuex';
import state from './Sidemenu/index.js';
import mutations from './mutations.js';
import actions from './actions.js';
import category from './Category/category.js';
import goods from './Goods/Goods.js'
//import ES6Promise from 'es6-promise';

//ES6Promise.polyfill();
Vue.use(Vuex);

export const store = new Vuex.Store({
	mutations,
	actions,
	state,
	modules: {category,goods},
});

export default store;
