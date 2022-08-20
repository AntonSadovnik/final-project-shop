import React from 'react';
import { Grid, Button, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import './style.scss';
import Cart from "../../../Cart/Cart";

function Activities() {

	const [open, setOpen] = React.useState(false);
	const [scroll, setScroll] = React.useState('paper');

	const handleClickOpen = () => () => {
		setOpen(true);
		setScroll('paper');
	};

	return (
		<>
			<Cart open={open} setOpen={setOpen} scroll={scroll} setScroll={setScroll} handleClickOpen={handleClickOpen}/>
			<Grid item container lg={7} sm={7} alignItems="center">
				<Typography className="header__links" component="a" href="/">
					Reviews
				</Typography>
				<Typography className="header__links" component="a" href="/">
					Shipping and payment
				</Typography>
			</Grid>
			<Grid container item justifyContent="space-evenly" sm={4}>
				<Button className="header__buttons" disableRipple size="small" onClick={handleClickOpen('paper')}>
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
						sx={{
							color: '#1BD741',
							fontSize: '40px',
						}}
					/>
				</Button>
			</Grid>
		</>
	);
}

export default Activities;
