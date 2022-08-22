import React from 'react';
import './App.scss';
import { Box, Grid } from '@mui/material';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Slider from './components/Slider/Slider';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import HeaderMobile from './components/Header/Header-mobile';
import FooterMobile from './components/Footer/FooterMobile';

function App() {
	return (
		<Grid
			container
			justifyContent="center"
			sx={{ maxWidth: '2300px', margin: '0 auto' }}
		>
			<Grid item xs={2} sx={{ display: { xs: 'none', md: 'block' } }}>
				<Nav />
			</Grid>
			<Grid item xl={9} md={10} xs={12}>
				<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
					<Header />
				</Box>
				<Box sx={{ display: { xs: 'block', sm: 'none' } }}>
					<HeaderMobile />
				</Box>
				<Main />
				<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
					<Footer />
				</Box>
				<Box sx={{ display: { xs: 'block', sm: 'none' } }}>
					<FooterMobile />
				</Box>
			</Grid>
		</Grid>

function App() {
	return (
		<>
			<Slider/>
			<Header />
			<Routes>{/* <Route path="/" element={<Main />}></Route> */}</Routes>
			{/* <Footer /> */}
		</>
	);
}
export default App;