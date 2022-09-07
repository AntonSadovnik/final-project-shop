import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getProductsAction } from '../../store/actions';
import ProductCard from '../../components/ProductListing/Card/Card';
import menuItemsContent from '../../components/Nav/config';

function Products() {
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams();
	const currentParams = Object.fromEntries(searchParams);
	useEffect(() => {
		dispatch(getProductsAction(`categories=${currentParams.categories}`));
	}, [currentParams.categories]);
	const { products } = useSelector((state) => state.products);
	const components = products.map((product) => (
		<ProductCard data={product} onClick={() => dispatch(addToCart(product))} />
	));
	const categoryTitle =
		currentParams.categories.charAt(0).toUpperCase() +
		currentParams.categories.slice(1);
	const categoryImgPath = menuItemsContent().find(
		(el) => el.alt.toLocaleLowerCase() === categoryTitle.toLocaleLowerCase()
	).src;
	return (
		<main>
			<Grid sx={{ padding: { xs: '15px 0 0', lg: '30px 111px 60px' } }}>
				<Grid
					container
					sx={{
						marginBottom: '30px',
						justifyContent: { xs: 'center', lg: 'flex-start' },
					}}
				>
					<Box
						component="img"
						src={categoryImgPath}
						sx={{ marginRight: '20px' }}
					/>
					<Typography variant="h4" component="h2">
						{categoryTitle}
					</Typography>
				</Grid>
				<Grid container sx={{ rowGap: '50px' }}>
					{components}
				</Grid>
			</Grid>
		</main>
	);
}

export default Products;
