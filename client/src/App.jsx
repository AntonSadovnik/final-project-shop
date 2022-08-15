import React from 'react';
import './App.scss';
import Grid from '@mui/material/Grid';
import ProductCard from './components/Product_card/ProductCard';
import Error from './components/Error/Error';

function App() {
	return (
		<>
			<Grid container justifyContent="center">
				<Grid item xs={0} sm={2} md={2} lg={2} xl={2}
				>
					Nav
				</Grid>

				<Grid item xs={12} sm={9} md={9} lg={9} xl={9}>
					<ProductCard />
					<Error />
				</Grid>

			</Grid>

			{/* <Header /> */}
			{/* <ProductCard /> */}
			{/* <Routes><Route path="/" element={<Main />}></Route></Routes> */}
			{/* <Footer /> */}
		</>
	);
}

export default App;
