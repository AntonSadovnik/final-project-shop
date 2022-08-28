import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import Grid from '@mui/material/Grid';
import { getProductsRequest } from '../../store/actions'

import NoveltieSlider from '../../components/Slider/components/noveltieSlider/Slider';
import RecommendedSlider from '../../components/Slider/components/recommendedSlider/SliderTwo';

function Main() {
const dispatch = useDispatch()

useEffect(()=>{
	dispatch(getProductsRequest())
},[])

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
