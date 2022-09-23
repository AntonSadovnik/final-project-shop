import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
	MenuList,
	MenuItem,
	ListItemText,
	ListItemIcon,
	Typography,
	Divider,
	Box,
} from '@mui/material';
import Logo from '../Logo/Logo';
import menuItemsContent from './config';

function Nav() {
	const navigate = useNavigate();
	const handleClick = (alt) => {
		navigate({
			pathname: '/products',
			search: `?categories=${alt.toLowerCase()}`,
		});
	};

	return (
		<nav>
			<Box sx={{ paddingTop: '25px' }} align="center">
				<NavLink
					style={{
						textDecoration: 'none',
					}}
					to="/"
				>
					<Logo />
					<Typography
						sx={{
							color: '#000000',
							fontWeight: 300,
							fontSize: '30px',
							textTransform: 'uppercase',
							textDecoration: 'none',
							margin: '10px 0 30px',
						}}
					>
						Romsem
					</Typography>
				</NavLink>
				<Divider />
			</Box>
			<MenuList
				className="menu"
				sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
			>
				{menuItemsContent().map((e) => {
					const { src, alt } = e;
					return (
						<MenuItem
							onClick={() => handleClick(alt)}
							className="nav__menu-item"
							key={alt}
							disableGutters
							disableRipple
							sx={{
								marginTop: { lg: '30px', md: '10px' },
								marginLeft: { lg: '10px', md: '0' },
								'&:hover': { background: 'none', color: '#ff9846' },
							}}
						>
							<ListItemIcon>
								<img src={src} alt={alt} />
							</ListItemIcon>
							<ListItemText>
								<Typography
									sx={{
										fontSize: { lg: '1.5em', md: '1.2em' },
										marginLeft: { lg: '20px', md: '10px' },
									}}
								>
									{alt}
								</Typography>
							</ListItemText>
						</MenuItem>
					);
				})}
			</MenuList>
		</nav>
	);
}
export default Nav;
