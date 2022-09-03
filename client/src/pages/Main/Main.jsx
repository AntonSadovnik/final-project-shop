import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
import { getProductsRequest } from '../../store/actions';
import NoveltieSlider from '../../components/Slider/components/noveltieSlider/Slider';
import RecommendedSlider from '../../components/Slider/components/recommendedSlider/SliderTwo';
import OfferSlider from '../../components/Slider/OfferSlider.jsx/OfferSlider';
import GridItem from '../../components/Grid/Grid';

function Main() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsRequest());
	}, []);

	return (
		<main>
			<Stack
				container
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				sx={{width:'100%'}}
				backgroundColor={(theme) => theme.palette.lightGrayColor.main}
			>   
			<Grid >
			<OfferSlider />
			<GridItem />
			<NoveltieSlider />
			<RecommendedSlider />

			</Grid>
{/* sx={{width:'90%'}} */}
			

				{/* <Grid item style={{ padding: '30px 0 60px' }}>
					<Grid sx={{ display: { md: 'block', xs: 'none' } }}>
						 <Offer /> 
						
					</Grid>
					<Grid container justifyContent="center">
					<OfferSlider />
						<GridItem />
					</Grid>
					<NoveltieSlider />
					<RecommendedSlider />
				</Grid> */}
			</Stack>
		</main>
	);
}
export default Main;
