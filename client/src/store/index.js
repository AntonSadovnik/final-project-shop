import { combineReducers } from "redux";

import ProductsReducer from "./reducers/ProductsReducer";

import CartReducer from "./reducers/cartReducer";

import FilterReducer from './reducers/FilterReducer';


export const reducers = combineReducers({
	products:ProductsReducer,
	cart:CartReducer,
	filter:FilterReducer,
});

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || {products:[]}
export const initialValues ={
	
	cart: {cart: cartFromLocalStorage},
}