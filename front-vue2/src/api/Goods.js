import { goods } from './index.js';

// 카테고리별로 정렬된 결과를 api로 받아온다
function getCategory(reqData) {
	return goods.get(`/category/${reqData}`);
}

//
function getCategoryList() {
	return goods.post('/getCategoryList');
}

function InsertGoods(goodsData) {
	return goods.post('/InsertGoods', goodsData);
}

function updateGoods(reqData) {
	return goods.post('/updateGoods', reqData);
}

function deleteGoods(reqData) {
	return goods.post('/deleteGoods', reqData);
}

function getGoodsOne(reqData) {
	return goods.get(`/getGoodsOne/${reqData}`);
}

function getGoodsList(reqData_big,reqData_mid) {
	return goods.post(`/getGoodsList`, reqData_big,reqData_mid);
}

export {
	getCategory,
	InsertGoods,
	getGoodsList,
	updateGoods,
	deleteGoods,
	getGoodsOne,
	getCategoryList,
};
