export default {
	// getter -> computed 와 유사 ( calculate )
	isLogin(state) {
		return state.auth.token !== '';
	},

	isAdmin(state) {
		return state.auth.email == 'admin@naver.com';
	},
};
