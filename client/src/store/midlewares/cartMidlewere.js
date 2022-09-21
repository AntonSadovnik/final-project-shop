import {
  ADD_TO_CART, CREATE_CART_AFTER_LOGIN,
  DECREASE_QUANTITY_TO_CART,
  INCREASE_QUANTITY_TO_CART,
  REMOVE_FROM_CART
} from "../types/types";
import {decreaseQuantity, increaseQuantity, removeProductFromCart, setCart} from "../actions";
import {
  addProductToCartOnServer,
  createCart,
  decreaseCartOnServer, deleteCartFromServer,
  getCart,
  removeProductFromServer
} from "../../api/cart";

export const cartMiddleware = (store) => (dispatch) => (action) => {
  const state = store.getState()
  const cartCopy = {...state.cart.cart}
  const remove = (itemNo) => {
    const filteredProducts = state.cart.cart.products.filter((prod) => prod.product.itemNo !== itemNo)
    localStorage.setItem('cart', JSON.stringify({...cartCopy, products: filteredProducts}))
    return filteredProducts
  }


  if (action.type === CREATE_CART_AFTER_LOGIN) {
    const {products} = store.getState().cart.cart
    const productsToCart = products.map(item => ({product: item.product._id, cartQuantity: item.cartQuantity}))
    const newCart = {
      products: productsToCart
    };

    createCart(newCart, action.payload).catch(err => {
      if (err.response.status === 400) {
        getCart(action.payload).then(response => {
          const productsInLocalStorage = JSON.parse(localStorage.getItem('cart'))?.products ?? []
          const productsFromCart = response.data.products
          const newArr = [...productsFromCart]

          if (productsInLocalStorage.length) {
            for (let i = 0; i < productsInLocalStorage.length; i += 1) {
              const foundIndex = productsFromCart.findIndex(item => item.product._id === productsInLocalStorage[i].product._id)
              if (foundIndex !== -1) { // if found
                newArr[foundIndex].cartQuantity += productsInLocalStorage[i].cartQuantity
              } else {
                newArr.push(productsInLocalStorage[i])
              }
            }
            deleteCartFromServer(localStorage.getItem('token')).then(() => {
              const productsToCart2 = newArr.map(item => ({
                product: item.product._id,
                cartQuantity: item.cartQuantity
              }))
              const newCart2 = {
                products: productsToCart2
              };
              createCart(newCart2, localStorage.getItem('token')).then(data => {
                localStorage.setItem('cart', JSON.stringify({products: data.data.products}))
                dispatch(setCart({products: data.data.products}))
                console.log(data.data.products)
              })
            })

            return
          }

          dispatch(setCart(response.data))
        })
      }
    });
    return dispatch(action);
  }

  if (action.type === ADD_TO_CART) {
    const cart = JSON.parse(localStorage.getItem('cart')) || {products: []}
    const index = cart.products.findIndex((prod) => prod.product.itemNo === action.payload.itemNo)
    const quantityProductToCard = action.payload.cartQuantity || 1
    if (state.isLoggedIn) {
      addProductToCartOnServer(action.payload._id, localStorage.getItem('token'))

    }
    if (index === -1) {
      const productToAdd = {product: action.payload, cartQuantity: quantityProductToCard}
      cart.products.push(productToAdd)
      localStorage.setItem('cart', JSON.stringify(cart))
      return dispatch({type: ADD_TO_CART, payload: productToAdd})
    }
    cart.products[index].cartQuantity += quantityProductToCard
    localStorage.setItem('cart', JSON.stringify(cart))
    return dispatch(increaseQuantity(cart))
  }


  if (action.type === INCREASE_QUANTITY_TO_CART) {
    const index = state.cart.cart.products.findIndex((prod) => prod.product.itemNo === action.payload)
    const idProduct = state.cart.cart.products.find((prod) => prod.product.itemNo === action.payload).product._id
    cartCopy.products[index].cartQuantity += 1
    localStorage.setItem('cart', JSON.stringify(cartCopy))
    if (state.isLoggedIn) {
      addProductToCartOnServer(idProduct, localStorage.getItem('token'))
    }
    return dispatch(increaseQuantity(cartCopy))
  }


  if (action.type === DECREASE_QUANTITY_TO_CART) {
    const index = state.cart.cart.products.findIndex((prod) => prod.product.itemNo === action.payload)
    const idProduct = state.cart.cart.products.find((prod) => prod.product.itemNo === action.payload).product._id
    if (state.isLoggedIn) {
      decreaseCartOnServer(idProduct, localStorage.getItem('token'))
    }
    if (cartCopy.products[index].cartQuantity <= 1) {
      return dispatch(removeProductFromCart({...cartCopy, products: remove(action.payload)}))
    }
    cartCopy.products[index].cartQuantity -= 1
    localStorage.setItem('cart', JSON.stringify(cartCopy))
    return dispatch(decreaseQuantity(cartCopy))
  }


  if (action.type === REMOVE_FROM_CART) {
    const idProduct = state.cart.cart.products.find((prod) => prod.product.itemNo === action.payload).product._id
    if (state.isLoggedIn) {
      removeProductFromServer(idProduct, localStorage.getItem('token'))
    }
    return dispatch(removeProductFromCart({...cartCopy, products: remove(action.payload)}))
  }
  return dispatch(action)
}
