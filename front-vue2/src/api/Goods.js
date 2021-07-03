import { goods } from './index.js';

function getCategory(reqData) {
  return goods.get(reqData);
}

function InsertGoods(goodsData) {
  return goods.post('/', goodsData);
}

function updateGoods(reqID,reqData) {
  return goods.put(reqID,reqData);
}

function deleteGoods(reqID) {
  return goods.delete(reqID);
}

function getGoodsOne(reqID) {
  return goods.get(reqID);
}

function getGoodsList(limit) {
  return goods.get(`/?_limit=${limit}`);
} 

function getSortGoods(sortID,orderID){
	return goods.get(`?_sort=${sortID}&_order=${orderID}`);
}

export{
	getCategory,
	InsertGoods,
	updateGoods,
	deleteGoods,
	getGoodsList,
	getSortGoods,
};
