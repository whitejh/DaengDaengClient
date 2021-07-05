import { goods } from './index.js';

function InsertGoods(goodsData) {
  return goods.post('/', goodsData);
}

function updateGoods(reqID,reqData) {
  return goods.put(reqID,reqData);
}

function deleteGoods(reqID) {
  return goods.delete(reqID);
}

function getOneGoods(goodsId) {
	return goods.get(`/${goodsId}`);
} 

function getGoodsList(limit) {
  return goods.get(`/?_limit=${limit}`);
} 

export{
	getOneGoods,
	InsertGoods,
	updateGoods,
	deleteGoods,
	getGoodsList,
};
