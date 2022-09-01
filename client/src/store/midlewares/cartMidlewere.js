import {DECREASE_QUANTITY_TO_CART, INCREASE_QUANTITY_TO_CART, REMOVE_FROM_CART} from "../types/types";
import {decreaseQuantity, increaseQuantity, removeProductFromCart} from "../actions";

export const cartMiddleware = (store) => (dispatch) => (action) => {
    const state = store.getState()

    if (action.type === INCREASE_QUANTITY_TO_CART) {
        const index = state.cart.cart.products.findIndex((prod) => prod.product.itemNo === action.payload)
        const cartCopy = {...state.cart.cart}
        cartCopy.products[index].cartQuantity += 1
        localStorage.setItem('cart', JSON.stringify(cartCopy))
        return dispatch(increaseQuantity(cartCopy))
    }

    if (action.type === DECREASE_QUANTITY_TO_CART) {
        const index = state.cart.cart.products.findIndex((prod) => prod.product.itemNo === action.payload)
        const cartCopy = {...state.cart.cart}
        cartCopy.products[index].cartQuantity -= 1
        localStorage.setItem('cart', JSON.stringify(cartCopy))
        return dispatch(decreaseQuantity(cartCopy))
    }

    if (action.type === REMOVE_FROM_CART) {
        const cartCopy = {...state.cart.cart}

        const filteredProducts = state.cart.cart.products.filter((prod) => prod.product.itemNo !== action.payload)
        localStorage.setItem('cart', JSON.stringify({...cartCopy, products: filteredProducts}))
        return dispatch(removeProductFromCart({...cartCopy, products: filteredProducts}))
    }


    return dispatch(action)

}
