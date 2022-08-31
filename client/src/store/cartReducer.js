import cartData from "../components/Cart/cartData";
import {DECREASE_QUANTITY_TO_CART, INCREASE_QUANTITY_TO_CART, REMOVE_FROM_CART} from "./types";

const initialState = { products: null, cart: cartData, filters: null };


const cartReducer = (state= initialState, action={}) => {
	console.log({ state, action });
	switch (action.type) {
		case 'SET_PRODUCTS': {
			return { ...state, products: action.payload };
		}
		case 'ADD_TO_CART': {
			return { ...state, cart: action.payload };
		}
		case INCREASE_QUANTITY_TO_CART: {
			const index = state.cart.products.findIndex((prod)=>prod.product.itemNo===action.payload)
			const cartCopy = {...state.cart}
			cartCopy.products[index].cartQuantity+=1
			return { ...state, cart: cartCopy };
		}
		case DECREASE_QUANTITY_TO_CART: {
			const index = state.cart.products.findIndex((prod)=>prod.product.itemNo===action.payload)
			const cartCopy = {...state.cart}
			cartCopy.products[index].cartQuantity-=1
			return { ...state, cart: cartCopy };
		}
		case REMOVE_FROM_CART: {
			const filteredProduct = state.cart.products.filter((prod)=>prod.product.itemNo!==action.payload)
			return { ...state, cart: {...state.cart, products: filteredProduct }};
		}

		default: {
			return state;
		}
	}
};

export default cartReducer;
