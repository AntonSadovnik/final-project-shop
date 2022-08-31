import getProducts from "../api/getProducts";
import {DECREASE_QUANTITY_TO_CART, INCREASE_QUANTITY_TO_CART, REMOVE_FROM_CART} from "./types";

export const getProductsAction = (categories) => (dispatch) => {
    getProducts(categories).then((products) => {
        console.log(products);
        dispatch({type: 'SET_PRODUCTS', payload: products.data});
    });
};

export const increaseQuantity = (itemNo) => ({
    type: INCREASE_QUANTITY_TO_CART,
    payload: itemNo
})


export const decreaseQuantity = (itemNo) => ({
    type: DECREASE_QUANTITY_TO_CART,
    payload: itemNo
})


export const removeProductFromCart = (itemNo) => ({
    type: REMOVE_FROM_CART,
    payload: itemNo
})


