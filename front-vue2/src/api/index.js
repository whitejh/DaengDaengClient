import axios from 'axios';
import store from '@/store/index';
import { setInterceptors } from './common/interceptor';
// import { setInterceptors } from './common/interceptor';

// function createInstance() {
// 	const instance = axios.create({
// 		baseURL: process.env.VUE_APP_API_URL,
// 	});
// 	return setInterceptors(instance);
// }
// const instance = createInstance();

const instance = axios.create({
	baseURL:"http://localhost:3080/",
	headers:{
		// cors로 인해 주석 처리 
		// Authorization : store.state.auth.token,
	}
})

function loginUser(userData) {
	// const url = 'http://localhost:3080/login';
	return instance.post('login', userData);
}
function registerUser(userData) {
	// const url = 'http://localhost:3080/user';

	return instance.post('user', userData);
}
export { loginUser, registerUser };
// axios의 api 함수 구조화

function createInstanceWithAuth(url) {
	const instance = axios.create({
		// baseURL: `${process.env.VUE_APP_API_URL}api/${url}`,
		baseURL:`http://localhost:3002/${url}`
	});
	return setInterceptors(instance);
}
export const goods = createInstanceWithAuth('goods');
export const image = createInstanceWithAuth('image');
