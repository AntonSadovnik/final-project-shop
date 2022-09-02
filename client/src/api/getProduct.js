import axios from 'axios';

const getProduct = (itemNo) =>
	axios.get(`/api/products/${itemNo}`);

export default getProduct;
