import { SET_PRODUCTS } from '../types/types';

const store = {products: []};


const ProductsReducer = (state=store, action) => {

  switch (action.type) {
		case SET_PRODUCTS:
			{
				return { ...state, ...action.payload };
			}
		default:
			return state;
	}
}

export default ProductsReducer