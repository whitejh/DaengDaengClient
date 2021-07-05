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
	baseURL: 'http://localhost:8080/',
	headers: {
		// cors로 인해 주석 처리
		// Authorization : store.state.auth.token,
	},
});

function loginUser(userData) {
	// const url = 'http://localhost:3080/login';
	return axios.post('http://localhost:8080/login', userData);
}
function registerUser(userData) {
	// const url = 'http://localhost:3080/user';

	// return instance.post('user', userData);
	return axios.post('http://localhost:8080/users', userData);
}

function LocationAuth(data) {
	return axios.post('http://localhost:8080/mypage/location', data);
}
export { loginUser, registerUser, LocationAuth };
// axios의 api 함수 구조화

function createInstanceWithAuth(url) {
	const instance = axios.create({
		// baseURL: `${process.env.VUE_APP_API_URL}api/${url}`,
		baseURL: `http://localhost:3002/${url}`,
	});
	return setInterceptors(instance);
}
export const goods = createInstanceWithAuth('goods/');

// 1. HTTP Request & Response와 관련된 기본 설정
// const config = {
// 	baseUrl: 'https://api.hnpwa.com/v0/',
// };

// 2. API 함수들을 정리
// function fetchNewsList() {
// 	// return axios.get(config.baseUrl + 'news/1.json');
// 	return axios.get(`${config.baseUrl}news/1.json`); // 백틱기호 사용
// }

// function fetchAskList() {
// 	return axios.get(`${config.baseUrl}ask/1.json`);
// }

// function fetchJobsList() {
// 	return axios.get(`${config.baseUrl}jobs/1.json`);
// }

// function fetchUserInfo(username) {
// 	return axios.get(`${config.baseUrl}user/${username}.json`);
// }

// function fetchCommentItem(id) {
// 	return axios.get(`${config.baseUrl}item/${id}.json`);
// }

// export {
// 	fetchNewsList,
// 	fetchJobsList,
// 	fetchAskList,
// 	fetchUserInfo,
// 	fetchCommentItem,
// };
