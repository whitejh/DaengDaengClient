import { getGoodsList, getGoodsOne } from '@/api/Goods.js';
const state = {
	goods: [
        {
			
			id: 1,
			name: '강아지도 쓸 수 있는 집',
			price: 20000,
			wanted_location: '삼성1동',
			time: '1시간 전',
			path: '../../public/../img/shop/products/01.jpg',
		},
		{
			id: 2,
			name: '목줄',
			price: 30000,
			wanted_location: '삼성2동',
			time: '1시간 전',
			path: '../../public/../img/shop/products/02.jpg',
		},
		{
			id: 3,
			name: '급수급식대',
			price: 5000,
			wanted_location: '압구정동',
			time: '1시간 전',
			path: '../../public/../img/shop/products/03.jpg',
		},
		{
			id: 4,
			name: '이동장',
			price: 50000,
			wanted_location: '신사동',
			time: '1시간 전',
			path: '../../public/../img/shop/products/04.jpg',
		},
		{
			id: 5,
			name: '소독 스프레이',
			price: 60000,
			wanted_location: '대치동',
			time: '1시간 전',
			path: '../../public/../img/shop/products/05.jpg',
		},
		{
			id: 6,
			name: '빨간 지붕 개집',
			price: 70000,
			wanted_location: '도곡1동',
			time: '1시간 전',
			path: '../../public/../img/shop/products/06.jpg',
		},
		{
			id: 7,
			name: '귀여운 과일 옷',
			price: 5000,
			wanted_location: '역삼1동',
			time: '1시간 전',
			path: '../../public/../img/shop/products/07.jpg',
		},
		{
			id: 8,
			name: '1980 청바지',
			price: 15800,
			wanted_location: '역삼2동',
			time: '1시간 전',
			path: '../../public/../img/shop/products/08.jpg',
		},
		{
			id: 9,
			name: '검정 하네스',
			price: 12000,
			wanted_location: '개포1동',
			time: '1시간 전',
			path: '../../public/../img/shop/products/09.jpg',
		},
		{
			id: 10,
			name: '옷 같은 하네스',
			price: 30000,
			wanted_location: '개포2동',
			time: '1시간 전',
			path: '../../public/../img/shop/products/10.jpg',
		},
		{
			id: 11,
			name: '장난감 3개',
			price: 40000,
			wanted_location: '잠실2동',
			time: '1시간 전',
			path: '../../public/../img/shop/products/11.jpg',
		},
		{
			id: 12,
			name: '샤워기 거치대',
			price: 9900,
			wanted_location: '잠실1동',
			time: '1시간 전',
			path: '../../public/../img/shop/products/12.jpg',
		},
    ],
};

const mutations = {
	getGoodList(state, data) {
		state.goods = data.data.results;
	},
	getGoodOne(state, data) {
		state.goods = data.data.results;
	},
	ChangeGoods(state,newGoods){
		state.goods=newGoods
	}
}

const actions = {
	// async getGoodList(context, data) {
	// 	try {
	// 		const response = await getGoodsList(data);
	// 		context.commit('getGoodList', response);
	// 	} catch (error) {
	// 		alert(error);
	// 	}
	// },
	// async getGoodOne(context, data) {
	// 	try {
	// 		const response = await getGoodsOne(data);
	// 		context.commit('getGoodOne', response);
	// 	} catch (error) {
	// 		alert(error);
	// 	}
	// },
};

const getters={
	getGoods(state){
		return state.goods;
	}
}

export default {
	state,
	mutations,
	// actions,
	getters,
};
