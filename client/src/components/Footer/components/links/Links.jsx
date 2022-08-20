import React from 'react';
import { Typography, List, Grid } from '@mui/material';
import './style.scss';

function Links() {
	return (
		<Grid container>
			<List className="footer__links-wrap" disablePadding>
				<Typography component="li">
					<a href="/">About company</a>
				</Typography>
				<Typography component="li">
					<a href="/">Shipping and payment</a>
				</Typography>
				<Typography component="li">
					<a href="/">Return policy</a>
				</Typography>
			</List>
		</Grid>
	);
}

export default Links;
