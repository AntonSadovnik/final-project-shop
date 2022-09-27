import React, { useEffect } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { deleteCustomer, setCustomer, setLogout } from '../../store/actions';
import LoginModal from '../LoginModal/LoginModal';
import IconCart from "./components/iconCart/IconCart";

function FooterMobile() {
	const [loginModal, setLoginModal] = React.useState(false);
	const [loginButton, setLoginButton] = React.useState(null);

	const handleScroll =()=>{
		window.scrollTo({ behavior: 'smooth', top: '0px' });
	}

	const dispatch = useDispatch();
	const navigate = useNavigate(); 	
	const isLoggedIn = useSelector((state) => state.isLoggedIn);

	const handleLoginOpen = () => {
		setLoginModal(true);
	};

	const handleLogout = () => {
		dispatch(setLogout(navigate));
		dispatch(deleteCustomer());
		setLoginButton(
			<Button
				onClick={handleLoginOpen}
				disableRipple
				sx={{ padding: 0, minWidth: 0, flexDirection: 'column' }}
			>
				<LoginIcon
					sx={{
						color: '#1BD741',
						fontSize: 30,
					}}
				/>
				<Typography color={(theme) => theme.palette.text.primary}>
					Login
				</Typography>
			</Button>
		);
		window.location.reload();
	};

	useEffect(
		() => {
			if (localStorage.getItem('token')) {
				dispatch(setCustomer());
				setLoginButton(
					<Button
						onClick={handleLogout}
						disableRipple
						sx={{ padding: 0, minWidth: 0, flexDirection: 'column' }}
					>
						<LogoutIcon
							sx={{
								color: 'red',
								fontSize: 30,
							}}
						/>
						<Typography color={(theme) => theme.palette.text.primary}>
							Logout
						</Typography>
					</Button>
				);
			} else {
				setLoginButton(
					<Button
						onClick={handleLoginOpen}
						disableRipple
						sx={{ padding: 0, minWidth: 0, flexDirection: 'column' }}
					>
						<LoginIcon
							sx={{
								color: '#1BD741',
								fontSize: 30,
							}}
						/>
						<Typography color={(theme) => theme.palette.text.primary}>
							Login
						</Typography>
					</Button>
				);
			}
		},
		[localStorage.getItem('token')],
		isLoggedIn
	);

	return (
		<footer>
			<LoginModal
				loginModal={loginModal}
				setLoginModal={setLoginModal}
				handleLoginOpen={handleLoginOpen}
			/>
			<Grid
				container
				padding="11px 0"
				borderTop="1px solid #A4ACAD"
				position="fixed"
				bottom={0}
				backgroundColor="white"
				zIndex={11111}
				justifyContent="space-evenly"
			>
				<Grid item>
					<NavLink
						style={{
							textDecoration: 'none',
						}}
						to="/"
					>
						<Button
							disableRipple
							onClick={handleScroll}
							sx={{ padding: 0, minWidth: 0, flexDirection: 'column' }}
						>
							<RestaurantMenuIcon color="hoverColor" sx={{ fontSize: 30 }} />

							<Typography color={(theme) => theme.palette.text.primary}>
								Menu
							</Typography>
						</Button>
					</NavLink>
				</Grid>
				<Grid item>
					<NavLink
						style={{
							textDecoration: 'none',
						}}
						to="/cart"
					>
						<IconCart/>
					</NavLink>
				</Grid>
				<Grid item>
					<NavLink
						style={{
							textDecoration: 'none',
						}}
						to="/reviews"
					>
						<Button
							disableRipple
							sx={{ padding: 0, minWidth: 0, flexDirection: 'column' }}
						>
							<ThumbUpOffAltIcon color="hoverColor" sx={{ fontSize: 30 }} />
							<Typography color={(theme) => theme.palette.text.primary}>
								Reviews
							</Typography>
						</Button>
					</NavLink>
				</Grid>
				<Grid item>{loginButton}</Grid>
			</Grid>
		</footer>
	);
}

export default FooterMobile;
