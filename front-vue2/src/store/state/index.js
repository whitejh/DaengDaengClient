import stateMenu from './menus.js';
import stateColor from './colors.js';
import stateAuth from './auth'

const state = {
	...stateMenu,
	...stateColor,
	...stateAuth,
};

export default state;
