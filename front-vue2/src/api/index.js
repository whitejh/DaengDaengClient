import axios from 'axios';

// import { setInterceptors } from './common/interceptor';

// function createInstance() {
// 	const instance = axios.create({
// 		baseURL: process.env.VUE_APP_API_URL,
// 	});
// 	return setInterceptors(instance);
// }
// const instance = createInstance();

function loginUser(userData) {
	const url = 'http://localhost:3000/login';
	return axios.post(url, userData);
}
function registerUser(userData) {
	const url = 'http://localhost:3000/signup';

	return axios.post(url, userData);
}
export { loginUser, registerUser };
