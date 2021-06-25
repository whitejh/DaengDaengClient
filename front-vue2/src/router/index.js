import Vue from 'vue';
import VueRouter from 'vue-router';
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
		path: '/:mypage',
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
];

export const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
