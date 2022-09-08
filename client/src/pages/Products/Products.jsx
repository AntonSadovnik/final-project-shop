import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getProductsAction } from '../../store/actions';
import ProductCard from '../../components/ProductListing/Card/Card';
import menuItemsContent from '../../components/Nav/config';
import SimpleAccordion from '../../components/AboutCompany/AboutCompany';
import Socials from '../../components/Footer/components/socials/Socials';
import SortSelect from '../../components/ProductListing/SortSelect/SortSelect';

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
			<Grid
				sx={{
					padding: { xs: '15px 0 30px', lg: '30px 111px 60px' },
					backgroundColor: '#F2F2F2',
				}}
			>
				<Grid
					container
					sx={{
						marginBottom: '30px',
						justifyContent: { xs: 'center', lg: 'space-between' },
						alignItems: 'center',
						flexDirection: { xs: 'column', lg: 'row' },
					}}
				>
					<Grid
						item
						container
						width="fit-content"
						alignItems="center"
						sx={{ marginBottom: { xs: '16px', lg: '0' } }}
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
					<Grid sx={{ width: { xs: '100%', sm: '50%', lg: 'fit-content' } }}>
						<SortSelect />
					</Grid>
				</Grid>
				<Grid container sx={{ rowGap: { xs: '10px', sm: '50px' } }}>
					{components}
				</Grid>
				<Grid sx={{ margin: { xs: '60px 0 20px', sm: '174px 0 0' } }}>
					<SimpleAccordion />
				</Grid>
				<Grid sx={{ display: { xs: 'block', sm: 'none' } }} textAlign="center">
					<Socials />
				</Grid>
			</Grid>
		</main>
	);
}

export default Products;
