import React from 'react';
import Grid from '@mui/material/Grid';

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
				</Grid>
			</Grid>
		</main>
	);
}
export default Main;
