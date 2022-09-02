import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import { getProductsRequest } from '../../store/actions';

import NoveltieSlider from '../../components/Slider/components/noveltieSlider/Slider';
import Offer from '../../components/Offer/Offer';
import GridItem from '../../components/Grid/Grid';
import SimpleAccordion from '../../components/AboutCompany/AboutCompany';
import Socials from '../../components/Footer/components/socials/Socials';

function Main() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsRequest());
	}, []);

	return (
		<main>
			<Grid
				container
				justifyContent="space-around"
				flexDirection="column"
				backgroundColor={(theme) => theme.palette.lightGrayColor.main}
			>
				<Grid item sx={{ padding: '30px 0 60px', width: '100%' }}>
					<Grid sx={{ display: { md: 'block', xs: 'none' } }}>
						<Offer />
					</Grid>
					<Grid container justifyContent="center">
						<GridItem />
					</Grid>
					<Grid
						container
						justifyContent="center"
						sx={{ display: { xs: 'none', sm: 'flex' } }}
					>
						<NoveltieSlider />
					</Grid>
					<Grid container justifyContent="center">
						<SimpleAccordion />
					</Grid>
					<Grid
						container
						textAlign="center"
						sx={{ display: { xs: 'flex', sm: 'none' } }}
					>
						<Socials />
					</Grid>
				</Grid>
			</Grid>
		</main>
	);
}
export default Main;
