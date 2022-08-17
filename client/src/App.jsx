import React from 'react';
import './App.scss';
import OfferSlider from './components/Offer/Offer';
import GridItem from './components/Grid/Grid'
import Grid from '@mui/material/Grid';

const App = () => {

    return(
        <Grid
			container
			justifyContent="center"
			style={{ maxWidth: '2300px', margin: '0 auto' }}
		>
			<Grid item xs={2} sx={{ display: { xs: 'none', md: 'block' } }}>
				<Nav />
			</Grid>
			<Grid item xl={9} md={10} xs={12}>
                <OfferSlider />
                <GridItem />
			</Grid>
		</Grid>
    );

}

export default App;
