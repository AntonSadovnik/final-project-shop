import React from 'react';
import Grid from '@mui/material/Grid';
import SliderF from '../Slider/Slider';
import SliderTwo from '../Slider/SliderTwo';

function Main() {
	return (
		<main>
			<Grid
				container
				justifyContent="space-around"
				backgroundColor={(theme) => theme.palette.lightGrayColor.main}
			>
				<Grid item style={{ padding: '30px 0 60px' }}>
					Main
				 <SliderF/>
				 <SliderTwo/>
				</Grid>
			</Grid>
		</main>
	);
}
export default Main;
