import { combineReducers } from "redux";

import ProductsReducer from "./reducers/ProductsReducer";

import CartReducer from "./reducers/CartReducer";


export const reducers = combineReducers({ProductsReducer, CartReducer})