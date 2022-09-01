import axios from "axios"

export const getRecommendedProduct = () => axios.get('/api/products/filter?categories=drinks');

export const getNoveltieProduct = () => axios.get('/api/products/filter?promo=new');

export const getProduct = (itemNo) => axios.get(`/api/products/filter?itemNo=${itemNo}`);

export const getProductsByCategory = (categories) => axios.get(`/api/products/filter?categories=${categories}&sort=itemNo`);

export const getPopularProduct = () => axios.get('/api/products/filter?promo=popular');

export const getAllProducts = () => axios.get('/api/products')
