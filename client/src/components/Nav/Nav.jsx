import React from 'react';
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
import './style.scss';

function Nav() {
	return (
		<nav>
			<Box sx={{ paddingTop: '25px' }} align="center">
				<Logo />
				<Typography
					sx={{
						fontWeight: 300,
						fontSize: '30px',
						textTransform: 'uppercase',
						margin: '10px 0 30px',
					}}
				>
					Romsem
				</Typography>
				<Divider />
			</Box>
			<MenuList>
				{menuItemsContent().map((e) => {
					const { src, alt } = e;
					return (
						<MenuItem
							className="nav__menu-item"
							key={alt}
							disableGutters
							disableRipple
							sx={{
								marginTop: { lg: '30px', md: '10px' },
								marginLeft: { lg: '10px', md: '0' },
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
