import React from 'react';
import Grid from '@mui/material/Grid';
import NoveltieSlider from '../Slider/components/noveltieSlider/Slider';
import RecommendedSlider from '../Slider/components/recommendedSlider/SliderTwo';
import Offer from "../Offer/Offer";
import GridItem from "../Grid/Grid"

function Main() {
	return (
		<main>
			<Grid
				container
				justifyContent="space-around"
				backgroundColor={(theme) => theme.palette.lightGrayColor.main}
			>
				<Grid item style={{ padding: '30px 0 60px' }}>
					<Offer/>
					<GridItem />
					<NoveltieSlider />
					<RecommendedSlider />
				</Grid>
			</Grid>
		</main>
	);
}
export default Main;
