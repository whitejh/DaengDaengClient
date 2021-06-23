<<<<<<< HEAD
import store from '../../store/index';

export function setInterceptors(instance) {
	// Add a request interceptor
	instance.interceptors.request.use(
		function(config) {
			// Do something before request is sent

			config.headers.Authorization = store.state.token;
			// console.log(config);
			return config;
		},
		function(error) {
			// Do something with request error
			return Promise.reject(error);
		},
	);

	// Add a response interceptor
	instance.interceptors.response.use(
		function(response) {
			// Any status code that lie within the range of 2xx cause this function to trigger
			// Do something with response data
			return response;
		},
		function(error) {
			// Any status codes that falls outside the range of 2xx cause this function to trigger
			// Do something with response error
			return Promise.reject(error);
		},
	);
	return instance;
=======
import store from '@/store/index';

export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function(config) {
      // Do something before request is sent
      // console.log(config);
      store.state.loading = true;
      config.headers.Authorization = store.state.user.USER_TOKEN;
      return config;
    },
    function(error) {
      store.state.loading = false;
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      store.state.loading = false;
      return response;
    },
    function(error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      store.state.loading = false;
      return Promise.reject(error);
    },
  );
  return instance;
>>>>>>> 3c87b0a6021a5c6d542de4e4343c2d376f33ffd6
}
