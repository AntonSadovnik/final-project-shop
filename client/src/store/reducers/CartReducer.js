import {SET_PRODUCTS, ADD_TO_CART, DELETE_FROM_CART } from "../types/types";

const store ={cart:[],
}

const CartReducer = (state=store, action) => {
	switch (action.type) {
		case SET_PRODUCTS: {
			return { ...state, products: action.payload };
		}
		case ADD_TO_CART: {
		
			return { ...state, cart: [...state.cart,action.payload] };
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
