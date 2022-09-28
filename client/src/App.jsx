import React from 'react';
import { Box, Grid } from '@mui/material';
import AppRouter from './appRouter/AppRouter';

import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import HeaderMobile from './components/Header/Header-mobile';
import Footer from './components/Footer/Footer';
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
				<Box>
					<AppRouter />
				</Box>
				<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
					<Footer />
				</Box>
				<Box sx={{ display: { xs: 'block', sm: 'none' } }}>
					<FooterMobile />
				</Box>
			</Grid>
		</Grid>
	);
}

export default App;
