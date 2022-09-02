import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {reducers, initialValues} from './index';
import {cartMiddleware} from "./midlewares/cartMidlewere";

// eslint-disable-next-line no-underscore-dangle
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    ? // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f;

const store = createStore(
    reducers,
    initialValues,
    compose(applyMiddleware(thunk, cartMiddleware), devTools)
);

export default store;


/* import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import CartReducerDima from './reducer';

const initialState = { products: null, cart: null, filters: null };
// eslint-disable-next-line no-underscore-dangle
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
	? // eslint-disable-next-line no-underscore-dangle
	  window.__REDUX_DEVTOOLS_EXTENSION__()
	: (f) => f;

const store = createStore(
    carReducer,
	initialState,
	compose(applyMiddleware(thunk), devTools)
);

export default store; */