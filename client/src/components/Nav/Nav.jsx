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
import './style.scss';

function Nav() {
	const menuItems = [
		{
			src: 'https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660239942/sushi-shop/Nav/pizza_dqtwbh.svg',
			alt: 'Pizza',
		},
		{
			src: 'https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660240222/sushi-shop/Nav/%D0%A1%D0%B5%D1%82%D1%8B_kqi7dj.svg',
			alt: 'Sets',
		},
		{
			src: 'https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660240222/sushi-shop/Nav/%D0%92%D0%BE%D0%BA_grx9px.svg',
			alt: 'WOK',
		},
		{
			src: 'https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660240222/sushi-shop/Nav/Group_ayopq8.svg',
			alt: 'Rolls',
		},
		{
			src: 'https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660240221/sushi-shop/Nav/sushi_m1amjq.svg',
			alt: 'Sushi',
		},
		{
			src: 'https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660240221/sushi-shop/Nav/salads_yhmxyh.svg',
			alt: 'Salads',
		},
		{
			src: 'https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660240220/sushi-shop/Nav/soups_d7t4tf.svg',
			alt: 'Soups',
		},
		{
			src: 'https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660240220/sushi-shop/Nav/corndog_tmqhun.svg',
			alt: 'Corndogs',
		},
		{
			src: 'https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660240221/sushi-shop/Nav/drinks_w1km50.svg',
			alt: 'Drinks',
		},
		{
			src: 'https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660240220/sushi-shop/Nav/offers_e7derq.svg',
			alt: 'Stock',
		},
	];

	return (
		<nav>
			<Box className="nav__logo-wrap" align="center">
				<img
					src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660238641/sushi-shop/Nav/logo_xxz8a9.svg"
					alt="logo"
				/>
				<Typography className="nav__logo-title">Romsem</Typography>
				<Divider />
			</Box>
			<MenuList>
				{menuItems.map((e) => {
					const { src, alt } = e;
					return (
						<MenuItem
							className="nav__menu-item"
							key={alt}
							disableGutters
							disableRipple
						>
							<ListItemIcon>
								<img src={src} alt={alt} />
							</ListItemIcon>
							<ListItemText>
								<Typography className="nav__menu-text">{alt}</Typography>
							</ListItemText>
						</MenuItem>
					);
				})}
			</MenuList>
		</nav>
	);
}
export default Nav;
