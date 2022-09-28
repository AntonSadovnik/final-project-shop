import { combineReducers } from 'redux';
import ProductsReducer from './reducers/ProductsReducer';
import CartReducer from './reducers/cartReducer';
import FilterReducer from './reducers/FilterReducer';
import CustomerReducer from './reducers/CustomerReducer';
import LoginReducer from './reducers/LoginReducer';
import cityReducer from './reducers/cityReducer';

export const reducers = combineReducers({
	products: ProductsReducer,
	cart: CartReducer,
	filter: FilterReducer,
	customer: CustomerReducer,
	isLoggedIn: LoginReducer,
	city: cityReducer,
});

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || {
	products: [],
};
export const initialValues = {
	cart: { cart: cartFromLocalStorage },
};
