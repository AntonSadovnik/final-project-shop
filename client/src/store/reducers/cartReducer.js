import {
    DECREASE_QUANTITY_TO_CART,
    INCREASE_QUANTITY_TO_CART,
    REMOVE_FROM_CART,
    ADD_TO_CART,
    SET_CART,
    RESET_CART
} from "../types/types";

const initialState = {cart: {}};


const cartReducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case SET_CART: {
            return {...state, cart: action.payload};
        }

        case ADD_TO_CART: {
            return {
                ...state,
                cart: {...state.cart, products: [...state.cart.products, action.payload]}
            };
        }

        case INCREASE_QUANTITY_TO_CART: {

            return {...state, cart: action.payload};
        }

        case DECREASE_QUANTITY_TO_CART: {
            return {...state, cart: action.payload};
        }

        case REMOVE_FROM_CART: {
            return {...state, cart: action.payload};
        }

        case RESET_CART: {
            return {...state, cart: {products: []}};
        }

        default: {
            return state;
        }
    }
};

export default cartReducer;
