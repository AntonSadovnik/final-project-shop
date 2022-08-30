import { ADD_TO_CART, DELETE_FROM_CART } from "../types/types";

const store ={_id:null,
products:[]
};


const CartReducer = (state=store, action) => {
	switch (action.type) {
		case ADD_TO_CART: {

			return { ...state, products: [...state.products,action.payload] };
		}
		case DELETE_FROM_CART: {
			return { ...state, cart: action.payload };
		}
		default: {
			return state;
		}
	}
};

export default CartReducer;
