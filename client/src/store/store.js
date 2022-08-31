import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './cartReducer';



// eslint-disable-next-line no-underscore-dangle
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
	? // eslint-disable-next-line no-underscore-dangle
	  window.__REDUX_DEVTOOLS_EXTENSION__()
	: (f) => f;

const store = createStore(
	cartReducer,
	compose(applyMiddleware(thunk), devTools)
);

export default store;
