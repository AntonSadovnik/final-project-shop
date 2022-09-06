import { combineReducers } from "redux";

import ProductsReducer from "./reducers/ProductsReducer";

import CartReducer from "./reducers/cartReducer";

import FilterReducer from './reducers/FilterReducer';

import CustomerReducer from './reducers/CustomerReducer';

import LoginReducer from './reducers/LoginReducer';


export const reducers = combineReducers({
	products: ProductsReducer,
	cart: CartReducer,
	filter: FilterReducer,
	customer: CustomerReducer,
	isLoggedIn: LoginReducer,
});

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || {products:[]}
export const initialValues ={
	// products: [],
	// filter: [],
	cart: {cart: cartFromLocalStorage},
}
