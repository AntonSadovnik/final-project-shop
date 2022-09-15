import React from 'react';
import Grid from '@mui/material/Grid';
import NoveltieSlider from '../../components/Slider/components/noveltieSlider/Slider';
import GridItem from '../../components/Grid/Grid';
import SimpleAccordion from '../../components/AboutCompany/AboutCompany';
import Socials from '../../components/Footer/components/socials/Socials';

import OfferSliderSkeleton from '../../components/Skeleton/Skeleton';

function Main() {
	
	return (
		<main>


<Grid

container
justifyContent="space-around"
flexDirection="column"
backgroundColor={(theme) => theme.palette.lightGrayColor.main}
sx={{overflow:'hidden'}}
>

<Grid sx={{ padding: '30px 0 60px', width: '100%' }}>
<Grid sx={{ display: { md: 'block', xs: 'none' } }}>
	
	
	<OfferSliderSkeleton/>
	</Grid>
	<Grid container justifyContent="center">
		<GridItem />
	</Grid>
	<Grid
		container
		justifyContent="center"
		sx={{ display: { xs: 'none', sm: 'flex' }, marginTop: '50px' }}
	>
		<NoveltieSlider />
	</Grid>
	<Grid
		container
		justifyContent="center"
		sx={{ marginTop: { sm: '50px', xs: '20px' } }}
	>
		<Grid item sm={10} xs={11}>
			<SimpleAccordion />
		</Grid>
	</Grid>
	<Grid
		container
		textAlign="center"
		sx={{ display: { xs: 'flex', sm: 'none' }, marginTop: '20px' }}
	>
		<Socials />
	</Grid>
</Grid>
</Grid>  
		</main>
	);
}
export default Main;
