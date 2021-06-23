import Vue from 'vue';
import Vuex from 'vuex';
<<<<<<< HEAD
import state from './state/index.js';
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
=======
import state from "./state/index.js";
import mutations from './mutations.js';
import actions from './actions.js';
>>>>>>> 3c87b0a6021a5c6d542de4e4343c2d376f33ffd6
//import ES6Promise from 'es6-promise';

//ES6Promise.polyfill();
Vue.use(Vuex);

export const store = new Vuex.Store({
	state,
	mutations,
	actions,
<<<<<<< HEAD
	getters,
});

export default store;
=======
});

export default store;
>>>>>>> 3c87b0a6021a5c6d542de4e4343c2d376f33ffd6
