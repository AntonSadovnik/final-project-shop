import getProducts from "../api/getProducts";

export const getProductsAction = (categories) => (dispatch) => {
	getProducts(categories).then((products) => {
		console.log(products);
		dispatch({ type: 'SET_PRODUCTS', payload: products.data });
	});
};
