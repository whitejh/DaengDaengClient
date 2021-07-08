import { goods } from './index.js';
import { items } from './index.js';

function InsertGoods(goodsData) {
  return goods.post('/', goodsData);
}

function updateGoods(reqID,reqData) {
  return goods.put(reqID,reqData);
}

function deleteGoods(reqID) {
  return goods.delete(reqID);
}

function getGoodsList(limit) {
  return goods.get(`/?_limit=${limit}`);
} 

// api 문서에 detail이라는 작명에 맞게 함수명 getGoodsDetail로 설정
function getGoodsDetail(goodsID){
	return items.get(`/?id=${goodsID}`)
}

export{
	InsertGoods,
	updateGoods,
	deleteGoods,
	getGoodsList,
	getGoodsDetail,
};
