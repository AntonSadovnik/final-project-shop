import { SET_PRODUCTS } from '../types/types';

const store =[];


const ProductsReducer = (state=store, action) => {

  switch (action.type) {
		case SET_PRODUCTS:
			{
				return { ...state, products: action.payload };
			}
		default:
			return state;
	}


}

export default ProductsReducer