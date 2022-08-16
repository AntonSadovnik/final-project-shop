import React from 'react';
import { Grid, Button, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import './style.scss';

function Activities() {
	return (
		<>
			<Grid item lg={7} md={7}>
				<Typography className="header__links" component="a" href="/">
					Reviews
				</Typography>
				<Typography className="header__links" component="a" href="/">
					Shipping and payment
				</Typography>
			</Grid>
			<Grid container item justifyContent="space-evenly" md={4}>
				<Button className="header__buttons" disableRipple size="small">
					<ShoppingCartIcon
						color="grayColor"
						sx={{
							fontSize: '40px',
						}}
					/>
				</Button>
				<Button className="header__buttons" disableRipple size="small">
					<SearchIcon
						color="grayColor"
						sx={{
							fontSize: '40px',
						}}
					/>
				</Button>
				<Button className="header__buttons" disableRipple size="small">
					<LoginIcon
						color="grayColor"
						sx={{
							fontSize: '40px',
						}}
					/>
				</Button>
			</Grid>
		</>
	);
}

export default Activities;
