import React from 'react';
import '../App.scss';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main';
import About from '../pages/About/About';
import Ordering from '../pages/Ordering/Ordering';
import Shipping from '../pages/Shipping/Shipping';
import Reviews from '../pages/Reviews/Reviews';
import Product from '../pages/Product/Product';
import Return from '../pages/Return/Return';
import Products from '../pages/Products/Products';
import CartMob from '../components/Cart/CartMob';
import ErrorPage from '../pages/Error/ErrorPage';

function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/reviews" element={<Reviews />} />
			<Route path="/shipping" element={<Shipping />} />
			<Route path="/ordering" element={<Ordering />} />
			<Route path="/about" element={<About />} />
			<Route path="/products" element={<Products />} />
			<Route path="/products/:id" element={<Product />} />
			<Route path="/cart" element={<CartMob />} />
			<Route path="/return" element={<Return />} />
			<Route path="/backError" element={<ErrorPage backendError={1} />} />
			<Route path="*" element={<ErrorPage backendError={0} />} />
		</Routes>
	);
}

export default AppRouter;
