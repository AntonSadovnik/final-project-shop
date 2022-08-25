import axios from 'axios';

const getProducts = (categories) =>
	axios.get(`/api/products/filter?categories=${categories}`);

export default getProducts;
