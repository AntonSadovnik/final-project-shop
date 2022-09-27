import axios from 'axios';

export const createCart = (newCart, token) =>
    axios.post("/api/cart", newCart, {
        headers: {
            Authorization: token,
        }
    });
export const getCart = (token) =>
    axios.get("/api/cart", {
        headers: {
            Authorization: token,
        }
    });
export const addProductToCartOnServer = (idProduct, token) =>
    axios.put(`/api/cart/${idProduct}`,{}, {
        headers: {
            Authorization: token,
        }
    })

export const decreaseCartOnServer = (idProduct, token) =>
    axios.delete(`/api/cart/product/${idProduct}`,{
        headers: {
            Authorization: token,
        }
    })

export const removeProductFromServer = (idProduct, token) =>
    axios.delete(`/api/cart/${idProduct}`,{
        headers: {
            Authorization: token,
        }
    })
export const deleteCartFromServer = (token) =>
    axios.delete(`/api/cart/`,{
        headers: {
            Authorization: token,
        }
    })
export const updatedCart = (productsForUpdate, token) =>
    axios.put(`/api/cart`, productsForUpdate,{
    headers: {
        Authorization: token,
    }
})
