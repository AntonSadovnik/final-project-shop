import getProducts from "../api/getProducts";
import {getAllProducts} from "../api/Api";
import {GET_PRODUCTS_INIT, ADD_TO_CART, ADD_FILTER} from "./types/types"

export const getProductsAction = (categories) => (dispatch) => {
	getProducts(categories).then((products) => {
		console.log(products);
		dispatch({ type: 'SET_PRODUCTS', payload: products.data });
	});
};

export const getProductsRequest =()=> async(dispatch)=>{
	try{
		const {data} = await getAllProducts()
		dispatch({type:GET_PRODUCTS_INIT,payload: data})
	}catch(error){
		console.log(error)
	}
}

export const addToCart =(data)=> async(dispatch)=>{
	try{

	 dispatch({type:ADD_TO_CART ,payload:data})
	}catch(error){
		console.log(error)
	}
}

export const addFilter = (data) => (dispatch) => {
	try {
		dispatch({ type: ADD_FILTER, payload: data });
	} catch (error) {
		console.log(error);
	}
};