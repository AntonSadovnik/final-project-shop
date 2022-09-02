import React, {useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {addToCart, getProductsAction} from "../../store/actions";

function Products() {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();
    const currentParams = Object.fromEntries(searchParams);
    console.log('currentParams.categories',currentParams.categories)
    useEffect(() => {
        dispatch(getProductsAction(`categories=${currentParams.categories}`))
    }, [currentParams.categories])
    const {products} = useSelector(state => state.products)
    const components = products.map(product=><button onClick={()=>dispatch(addToCart(product))} type='button' key={product.itemNo}>{product.itemNo}</button>)
        console.log(products)

    return <main>Products page {components}</main>;
}

export default Products;
