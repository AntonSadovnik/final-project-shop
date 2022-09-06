import { combineReducers } from "redux";

import ProductsReducer from "./reducers/ProductsReducer";

import CartReducer from "./reducers/cartReducer";

import FilterReducer from './reducers/FilterReducer';

import cityReducer from "./reducers/cityReducer";


export const reducers = combineReducers({
	products:ProductsReducer,
	cart:CartReducer,
	filter:FilterReducer,
	city:cityReducer
});

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || {products:[]}
export const initialValues ={
	// products: [],
	// filter: [],
	cart: {cart: cartFromLocalStorage},
}