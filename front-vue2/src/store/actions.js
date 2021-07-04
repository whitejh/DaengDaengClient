// import contactAPI from "../api/ContactsAPI.js";
// import Constant from "../utils/constant.js";
// import Common from "../utils/common.js";
// import { router } from '../router/index.js';
// import axios from "axios";

import { loginUser } from '../api/index';
import { saveAuthToCookie, saveUserToCookie } from '../utils/cookies';
export default {
	async LOGIN({ commit }, userData) {
		const { data } = await loginUser(userData);
		commit('setToken', data.accessToken);

		// api에서 토큰만 뿌려주기 때문에 로그인한 email을 대신해서 넣어준다.
		commit('setEmail', userData.email);
		saveAuthToCookie(data.accessToken);
		saveUserToCookie(userData.email);
		return data;
	},
};
