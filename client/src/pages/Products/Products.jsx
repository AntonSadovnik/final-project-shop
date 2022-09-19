import React, { useEffect } from 'react';
import { Box, Grid, Typography, Pagination } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getProductsAction } from '../../store/actions';
import ProductCard from '../../components/ProductListing/Card/Card';
import menuItemsContent from '../../components/Nav/config';
import SimpleAccordion from '../../components/AboutCompany/AboutCompany';
import Socials from '../../components/Footer/components/socials/Socials';
import SortSelect from '../../components/ProductListing/SortSelect/SortSelect';
import Filter from '../../components/Filter/Filter';

const getQuery = (s) => s.includes('?') && s.substr(s.lastIndexOf('?') + 1);

function Products() {
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams({});
	const currentParams = Object.fromEntries(searchParams);

	useEffect(() => {
		dispatch(
			getProductsAction(
				`perPage=6&startPage=1&${getQuery(window.location.href)}`
			)
		);
	}, [searchParams]);

	const { products } = useSelector((state) => state.products);
	const components = products.map((product) => (
		<ProductCard
			key={product.itemNo}
			data={product}
			onClick={() => dispatch(addToCart(product))}
		/>
	));

	const categoryTitle =
		currentParams.categories.charAt(0).toUpperCase() +
		currentParams.categories.slice(1);
	const categoryImgPath = menuItemsContent().find(
		(el) => el.alt.toLowerCase() === categoryTitle.toLowerCase()
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
					<Grid>
						<Filter />
					</Grid>
					<Grid sx={{ width: { xs: '100%', sm: '50%', lg: 'fit-content' } }}>
						<SortSelect />
					</Grid>
				</Grid>
				<Grid container sx={{ rowGap: { xs: '10px', sm: '50px' } }}>
					{components}
					<Pagination />
				</Grid>
				<Grid sx={{ margin: { xs: '30px 0 20px', sm: '40px 0 0' } }}>
					<SimpleAccordion />
				</Grid>
				<Grid display={{ xs: 'block', sm: 'none' }} textAlign="center">
					<Socials />
				</Grid>
			</Grid>
		</main>
	);
}

export default Products;
