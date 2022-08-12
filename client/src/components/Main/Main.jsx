import React from 'react';
import Grid from '@mui/material/Grid';

function Main() {
	return (
		<main>
			<Grid container justifyContent="space-around" backgroundColor="#F2F2F2">
				<Grid item style={{ padding: '30px 0 60px', width: '950px' }}>
					Main
				</Grid>
			</Grid>
		</main>
	);
}
export default Main;
