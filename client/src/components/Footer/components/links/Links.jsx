import React from 'react';
import { Typography, List, Grid } from '@mui/material';
import './style.scss';
import { NavLink } from 'react-router-dom';

function Links() {
	return (
		<Grid container>
			<List className="footer__links-wrap" disablePadding sx={{marginLeft:'10px'}}>
				<Typography component="li">
					<NavLink to="/about">About company</NavLink>
				</Typography>
				<Typography component="li">
					<NavLink to="/shipping">Shipping and payment</NavLink>
				</Typography>
				<Typography component="li">
					<NavLink to="/return">Return policy</NavLink>
				</Typography>
			</List>
		</Grid>
	);
}

export default Links;
