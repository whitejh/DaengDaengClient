import stateMenu from './menus.js';
import stateColor from './colors.js';
import stateAuth from './auth'
import stateTest from './test';

const state = {
	...stateMenu,
	...stateColor,
	...stateAuth,
	...stateTest,
};

export default state;
