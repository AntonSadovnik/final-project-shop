import React from 'react';
import './App.scss';
import Grid from '@mui/material/Grid';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<Grid container justifyContent="center">
			<Grid item xs={2}>
				<Nav />
			</Grid>
			<Grid item xs={9}>
				<Header />
				<Main />
				<Footer />
			</Grid>
		</Grid>
	);
}

export default App;
