import { useNavigate } from 'react-router-dom';
import getProducts from '../api/getProducts';
import { getAllProducts, getCustomer } from '../api/Api';
import {
	GET_PRODUCTS_INIT,
	ADD_TO_CART,
	ADD_FILTER,
	DECREASE_QUANTITY_TO_CART,
	INCREASE_QUANTITY_TO_CART,
	REMOVE_FROM_CART,
	SET_CUSTOMER,
	SET_LOGIN,
	SET_LOGOUT,
	SET_PRODUCTS,
	SET_CITY,
	SET_CART,
	CREATE_CART_AFTER_LOGIN,
	RESET_CART,
} from './types/types';

export const getProductsAction = (categories, navigate) => (dispatch) => {
	try {
		getProducts(categories).then((products) => {
			dispatch({ type: SET_PRODUCTS, payload: products.data });
		});
	} catch (error) {
		navigate('/backError')
	}
};

export const getProductsRequest = () => async (dispatch) => {
	const navigate = useNavigate();
	try {
		const { data } = await getAllProducts();
		dispatch({ type: GET_PRODUCTS_INIT, payload: data });
	} catch (error) {
		navigate('/backError')
	}
};

export const addFilter = (data) => (dispatch) => {
	dispatch({ type: ADD_FILTER, payload: data });
};
export const createCartAfterLogin = (token) => ({
	type: CREATE_CART_AFTER_LOGIN,
	payload: token,
});

export const addToCart = (data) => async (dispatch) => {
	dispatch({ type: ADD_TO_CART, payload: data });
};

export const setCart = (payload) => ({
	type: SET_CART,
	payload,
});

export const increaseQuantity = (payload) => ({
	type: INCREASE_QUANTITY_TO_CART,
	payload,
});

export const decreaseQuantity = (payload) => ({
	type: DECREASE_QUANTITY_TO_CART,
	payload,
});

export const removeProductFromCart = (payload) => ({
	type: REMOVE_FROM_CART,
	payload,
});

export const setLogin = () => (dispatch) => {
	dispatch({ type: SET_LOGIN });
};

export const setLogout = (navigate) => (dispatch) => {
	try {
		localStorage.removeItem('token');
		localStorage.removeItem('cart');
		dispatch({ type: SET_LOGOUT });
	} catch (error) {
		navigate('/backError')
	}
};

export const setCustomer = () => (dispatch) => {
	getCustomer(localStorage.getItem('token'))
		.then((loggedInCustomer) => {
			dispatch({ type: SET_CUSTOMER, payload: loggedInCustomer.data });
			dispatch({ type: SET_LOGIN });
		})
		.catch(() => {
			localStorage.removeItem('token');
			dispatch({ type: SET_LOGOUT });
		});
};

export const deleteCustomer = () => (dispatch) => {
	dispatch({ type: SET_CUSTOMER, payload: null });
};

export const setCity = (city) => ({
	type: SET_CITY,
	payload: {
		city,
	},
});

export const resetCart = () => ({
	type: RESET_CART,
});
