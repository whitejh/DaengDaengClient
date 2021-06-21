import stateMenu from './menus.js';
import stateColor from './colors.js';
import stateTest from './test.js';
import stateAuth from './auth.js';
const state = {
	...stateMenu,
	...stateColor,
	...stateTest,
	...stateAuth,
};

export default state;
