import getProducts from '../api/getProducts';
import {getAllProducts, getCustomer} from '../api/Api';
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
    SET_CART, CREATE_CART_AFTER_LOGIN,
} from './types/types';

export const getProductsAction = (categories) => (dispatch) => {
    getProducts(categories).then((products) => {
        dispatch({type: SET_PRODUCTS, payload: products.data});
    });
};

export const getProductsRequest = () => async (dispatch) => {
    try {
        const {data} = await getAllProducts();
        dispatch({type: GET_PRODUCTS_INIT, payload: data});
    } catch (error) {
        console.log(error);
    }
};

export const addFilter = (data) => (dispatch) => {
    try {
        dispatch({type: ADD_FILTER, payload: data});
    } catch (error) {
        console.log(error);
    }
};
export const createCartAfterLogin = (token) => ({
    type: CREATE_CART_AFTER_LOGIN,
    payload: token
})

export const addToCart = (data) => async (dispatch) => {
    try {
        dispatch({type: ADD_TO_CART, payload: data});
    } catch (error) {
        console.log(error);
    }
};

export const setCart = (payload) => ({
    type: SET_CART,
    payload
});

export const increaseQuantity = (payload) => ({
    type: INCREASE_QUANTITY_TO_CART,
    payload
});

export const decreaseQuantity = (payload) => ({
    type: DECREASE_QUANTITY_TO_CART,
    payload
});

export const removeProductFromCart = (payload) => ({
    type: REMOVE_FROM_CART,
    payload
});

export const setLogin = () => (dispatch) => {
    dispatch({type: SET_LOGIN});
};

export const setLogout = () => (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('cart');
    dispatch({type: SET_LOGOUT});
};

export const setCustomer = () => (dispatch) => {
    getCustomer(localStorage.getItem('token'))
        .then((loggedInCustomer) => {
            dispatch({type: SET_CUSTOMER, payload: loggedInCustomer.data});
            dispatch({type: SET_LOGIN});
        })
        .catch(() => {
            localStorage.removeItem('token')
            dispatch({type: SET_LOGOUT});
        });
};

export const deleteCustomer = () => (dispatch) => {
    dispatch({type: SET_CUSTOMER, payload: null});
};

export const setCity = (city) => ({
    type: SET_CITY,
    payload: {
        city,
    },
});
