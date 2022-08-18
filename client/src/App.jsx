import React from 'react';
import './App.scss';
import Grid from '@mui/material/Grid';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import ProductCard from './components/Product_card/ProductCard';
import Error from './components/Error/Error';

function App() {
	return (
		<Grid
			container
			justifyContent="center"
			style={{ maxWidth: '2300px', margin: '0 auto' }}
		>
			<Grid item xs={2} sx={{ display: { xs: 'none', md: 'block' } }}>
				<Nav />
			</Grid>
			<Grid item xl={9} md={10} xs={12}>
				<Header />
				<Main />
				<ProductCard />
				<Error />
				<Footer />
			</Grid>
		</Grid>
	);
}

export default App;
