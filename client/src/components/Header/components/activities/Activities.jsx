import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Cart from '../../../Cart/Cart';
import LoginModal from '../../../LoginModal/LoginModal';
import {
	deleteCustomer,
	setCustomer,
	setLogout,
} from '../../../../store/actions';
import Search from '../../../Search/Search';
import CartIcon from "./CartIcon";


function Activities() {
	const [open, setOpen] = React.useState(false);
	const [loginButton, setLoginButton] = React.useState(null);
	const [loginModal, setLoginModal] = React.useState(false);
	const [scroll, setScroll] = React.useState('paper');
	const dispatch = useDispatch();
	const [openSearch, setOpenSearch] = React.useState(false);
	const isLoggedIn = useSelector((state) => state.isLoggedIn);

	const handleOpenSearchClick = () => {
		setOpenSearch(true);
	};

	const handleClickOpen = (type) => {
		setOpen(true);
		setScroll(type);
	};
	const handleLoginOpen = () => {
		setLoginModal(true);
	};

	const handleLogout = () => {
		dispatch(setLogout());
		dispatch(deleteCustomer());
		setLoginButton(
			<LoginIcon
				onClick={handleLoginOpen}
				sx={{
					color: '#1BD741',
					fontSize: 40,
				}}
			/>
		);
		window.location.reload();
	};

	useEffect(
		() => {
			if (localStorage.getItem('token')) {
				dispatch(setCustomer());
				setLoginButton(
					<LogoutIcon
						onClick={handleLogout}
						sx={{
							color: 'red',
							fontSize: 40,
						}}
					/>
				);
			} else {
				setLoginButton(
					<LoginIcon
						onClick={handleLoginOpen}
						sx={{
							color: '#1BD741',
							fontSize: 40,
						}}
					/>
				);
			}
		},
		[localStorage.getItem('token')],
		isLoggedIn
	);

	return (
		<>
			<Cart
				open={open}
				setOpen={setOpen}
				scroll={scroll}
				setScroll={setScroll}
				handleClickOpen={handleClickOpen}
			/>
			<LoginModal
				loginModal={loginModal}
				setLoginModal={setLoginModal}
				handleLoginOpen={handleLoginOpen}
			/>
			<Search openSearch={openSearch} setOpenSearch={setOpenSearch} />
			<Grid
				item
				container
				lg={7}
				sm={7}
				alignItems="center"
				sx={{
					a: {
						color: '#111',
						'&:hover': { color: '#ff9846' },
						'&:first-of-type': { marginRight: 1.25 },
					},
				}}
			>
				<NavLink
					style={{
						textDecoration: 'none',
					}}
					to="/reviews"
				>
					<Typography>Reviews</Typography>
				</NavLink>
				<NavLink
					style={{
						textDecoration: 'none',
					}}
					to="/shipping"
				>
					<Typography>Shipping and payment</Typography>
				</NavLink>
			</Grid>
			<Grid
				container
				item
				justifyContent="space-evenly"
				sm={4}
				sx={{
					button: {
						padding: 0,
						minWidth: 0,
						'&:hover': {
							background: 'none',
						},
					},
				}}
			>
				<Button
					disableRipple
					size="small"
					onClick={() => handleClickOpen('paper')}
				>
					<CartIcon/>
				</Button>
				<Button disableRipple size="small" onClick={handleOpenSearchClick}>
					<SearchIcon
						color="grayColor"
						sx={{
							fontSize: 40,
						}}
					/>
				</Button>
				<Button disableRipple size="small">
					{loginButton}
				</Button>
			</Grid>
		</>
	);
}

export default Activities;
