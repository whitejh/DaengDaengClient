import { image } from './index.js';

function getImage(goodsId) {
    return image.get(`/${goodsId}`);
}

export{
	getImage
};
