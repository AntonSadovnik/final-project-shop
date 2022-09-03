	import axios from "axios"

	 export const getRecommendedProduct=()=>axios.get('/api/products/filter?categories=drinks');

	 export const getNoveltieProduct=()=>axios.get('/api/products/filter?promo=new');

	 export const getPopularProduct=()=>axios.get('/api/products/filter?promo=popular');

	 export const getAllProducts=()=>axios.get('/api/products')

	 export const getSaleProduct=()=>axios.get('/api/products/filter?promo=sale')