import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getProductsAction } from '../../store/actions';
import ProductCard from '../../components/ProductListing/Card/Card';
import SimpleAccordion from '../../components/AboutCompany/AboutCompany';
import Socials from '../../components/Footer/components/socials/Socials';
import SortSelect from '../../components/ProductListing/SortSelect/SortSelect';
import Filter from '../../components/Filter/Filter';
import Title from '../../components/ProductListing/Title/Title';
import NoResults from '../../components/ProductListing/NoResults/NoResults';
import ProductsPagination from '../../components/ProductListing/ProductsPagination/ProductsPagination';

function Products() {
	const getQuery = (s) => s.includes('?') && s.substr(s.lastIndexOf('?') + 1);

	const perPageProducts = 6;
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams({});
	const { products, productsQuantity } = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(
			getProductsAction(
				`perPage=${perPageProducts}&${getQuery(window.location.href)}`
			)
		);
	}, [searchParams]);

	const components = products.map((product) => (
		<ProductCard
			key={product.itemNo}
			data={product}
			onClick={() => dispatch(addToCart(product))}
		/>
	));

	return (
		<main>
			<Grid
				sx={{
					padding: {
						xs: '15px 15px 90px',
						sm: '15px 15px 30px',
						lg: '30px 111px 60px',
					},
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
						<Title />
					</Grid>
					<Grid>
						<Filter />
					</Grid>
					<Grid sx={{ width: { xs: '100%', sm: '50%', lg: 'fit-content' } }}>
						<SortSelect />
					</Grid>
				</Grid>
				<Grid container sx={{ rowGap: { xs: '10px', sm: '50px' } }}>
					{components.length ? components : <NoResults />}
				</Grid>
				{components.length ? (
					<Grid>
						<ProductsPagination
							productsQuantity={productsQuantity}
							perPageProducts={perPageProducts}
						/>
					</Grid>
				) : null}
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
