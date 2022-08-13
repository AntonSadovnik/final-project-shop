import React from 'react';
import Grid from '@mui/material/Grid';
import './style.scss';

function Main() {
	return (
		<main>
			<Grid container justifyContent="space-around" backgroundColor="#F2F2F2">
				<Grid className="main__content-wrap" item>
					Main
				</Grid>
			</Grid>
		</main>
	);
}
export default Main;
