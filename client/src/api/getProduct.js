import axios from 'axios';

const getProduct = (itemNo) =>
	axios.get(`/api/products/filter?categories=${itemNo}`);

export default getProduct;
