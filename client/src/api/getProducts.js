import axios from 'axios';

const getProducts = (params) => axios.get(`/api/products/filter?${params}`);

export default getProducts;
