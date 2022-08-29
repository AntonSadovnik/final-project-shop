import React from 'react';
import Grid from '@mui/material/Grid';
import NoveltieSlider from '../../components/Slider/components/noveltieSlider/Slider';
import RecommendedSlider from '../../components/Slider/components/recommendedSlider/SliderTwo';

function Main() {
	return (
		<main>
			<Grid
				container
				justifyContent="space-around"
				backgroundColor={(theme) => theme.palette.lightGrayColor.main}
			>
				<Grid item style={{ padding: '30px 0 60px' }}>
					<NoveltieSlider />
					<RecommendedSlider />
				</Grid>
			</Grid>
		</main>
	);
}
export default Main;
