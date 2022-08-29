const reducer = (state, action) => {
	console.log({ state, action });
	switch (action.type) {
		case 'SET_PRODUCTS': {
			return { ...state, products: action.payload };
		}
		case 'ADD_TO_CART': {
			return { ...state, cart: action.payload };
		}
		case 'DELETE_FROM_CART': {
			return { ...state, cart: action.payload };
		}
		default: {
			return state;
		}
	}
};

export default reducer;
