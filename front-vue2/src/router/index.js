import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		// redirect: '/',
		name: 'Home',
		component: () => import('@/views/Home.vue'),
	},
	{
		path: '/trade',
		name: 'Trade',
		component: () => import('@/views/Trade.vue'),

		beforeEnter: (to, from, next) => {
			console.log(to, from, next);
			if (this.$store.state.auth.username !== '') next();
		},
	},
	{
		path: '/feed',
		name: 'Feed',
		component: () => import('@/views/Feed.vue'),
	},
	{
		path: '/notice',
		name: 'Notice',
		component: () => import('@/views/Notice.vue'),
	},
	{
		path: '/chat',
		name: 'Chat',
		component: () => import('@/views/Chat.vue'),
	},
	{
		path: '/loginjoin',
		name: 'LoginJoin',
		component: () => import('@/views/LoginJoin.vue'),
	},
	{
		path: '/mypage',
		name: 'MyPage',
		component: () => import('@/views/MyPage.vue'),
	},
	{
		path: '/noticeadd',
		name: 'NoticeAdd',
		component: () => import('@/views/NoticeAdd.vue'),
	},
	{
		path: '/productdetail',
		name: 'ProductDetail',
		component: () => import('@/views/ProductDetail.vue'),
	},
	{
		path: '/report',
		name: 'Report',
		component: () => import('@/views/Report.vue'),
	},
	{
		path: '/adminnotice',
		name: 'AdminNotice',
		component: () => import('@/views/AdminNotice.vue'),
	},

	{
		path: '/adminreport',
		name: 'AdminReport',
		component: () => import('@/views/AdminReport.vue'),
	},
	{
		path: '/adlist',
		name: 'AdList',
		component: () => import('@/views/AdList.vue'),
	},
	{
		path: '/category/:big?/:mid?',
		name: 'Category',
		component: () => import('@/components/FeaturedItem.vue'),
	},
	{
		path: '*',
		component: () => import('@/views/NotFoundPage.vue'),
	},
];

export const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

// 이동할 페이지 , 현재 페이지, 다음 페이지로 넘거가도록 호출
router.beforeEach((to, from, next) => {
	if (to.meta.auth && !store.getters.isLogin) {
		console.log('인증이 필요합니다.');
		next('/loginjoin');
		return; // 다음 next 호출을 막기위해
	}

	// 관리자 페이지 인증 
	if (to.meta.admin && !store.getters.isAdmin) {
		console.log('관리자만 접근이 가능합니다.!');
		alert('관리자만 접근이 가능합니다.!');
		next('/');
		return;
	}

	next();
});

export default router;
