import {DECREASE_QUANTITY_TO_CART, INCREASE_QUANTITY_TO_CART, REMOVE_FROM_CART} from "../types/types";
import {decreaseQuantity, increaseQuantity, removeProductFromCart} from "../actions";

export const cartMiddleware = (store) => (dispatch) => (action) => {
    const state = store.getState()
    const cartCopy = {...state.cart.cart}
    const remove = (itemNo) => {
        const filteredProducts = state.cart.cart.products.filter((prod) => prod.product.itemNo !== itemNo)
        localStorage.setItem('cart', JSON.stringify({...cartCopy, products: filteredProducts}))
        return filteredProducts
    }

    if (action.type === INCREASE_QUANTITY_TO_CART) {
        const index = state.cart.cart.products.findIndex((prod) => prod.product.itemNo === action.payload)
        cartCopy.products[index].cartQuantity += 1
        localStorage.setItem('cart', JSON.stringify(cartCopy))
        return dispatch(increaseQuantity(cartCopy))
    }

    if (action.type === DECREASE_QUANTITY_TO_CART) {
        const index = state.cart.cart.products.findIndex((prod) => prod.product.itemNo === action.payload)
        if (cartCopy.products[index].cartQuantity<=1){
            return dispatch(removeProductFromCart({...cartCopy, products: remove(action.payload)}))
        }
        cartCopy.products[index].cartQuantity -= 1
        localStorage.setItem('cart', JSON.stringify(cartCopy))
        return dispatch(decreaseQuantity(cartCopy))
    }

    if (action.type === REMOVE_FROM_CART) {
        return dispatch(removeProductFromCart({...cartCopy, products: remove(action.payload)}))
    }

    return dispatch(action)
}
