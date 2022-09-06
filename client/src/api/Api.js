import axios from 'axios';

export const getRecommendedProduct = () =>
	axios.get('/api/products/filter?categories=drinks');

export const getNoveltieProduct = () =>
	axios.get('/api/products/filter?promo=new');

export const getPopularProduct = () =>
	axios.get('/api/products/filter?promo=popular');

export const getAllProducts = () => axios.get('/api/products');

export const registrateCustomer = (newCustomer) =>
	axios.post('api/customers', newCustomer);

export const login = (userData) => axios.post('api/customers/login', userData);

export const getCustomer = (token) =>
	axios.get('api/customers/customer', {
		headers: {
			Authorization: token,
		}
	});

