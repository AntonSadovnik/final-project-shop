import { combineReducers } from "redux";

import ProductsReducer from "./reducers/ProductsReducer";

import CartReducer from "./reducers/CartReducer";

import FilterReducer from './reducers/FilterReducer';


export const reducers = combineReducers({
	products:ProductsReducer,
	cart:CartReducer,
	filter:FilterReducer,
});