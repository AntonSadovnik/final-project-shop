import React from 'react';
import Box from '@mui/material/Box';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

const CustomMenuItem = styled(MenuItem)(
	({ theme }) => `
    margin-top: 30px;
    margin-left: 10px;
	:hover {
		background: none;
		color:${theme.palette.text.hoverText};
	}
	& p {
		font-size: 1.5em;
		margin-left: 20px;
	}
`
);
const CustomTypography = styled(Typography)`
	& {
		font-weight: 300;
		font-size: 30px;
		text-transform: uppercase;
		margin: 10px 0 30px;
	}
`;
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
			<Box style={{ paddingTop: '25px' }} align="center">
				<img
					src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660238641/sushi-shop/Nav/logo_xxz8a9.svg"
					alt="logo"
				/>
				<CustomTypography>Romsem</CustomTypography>
				<Divider />
			</Box>
			<MenuList>
				{menuItems.map((e) => {
					const { src, alt } = e;
					return (
						<CustomMenuItem key={alt} disableGutters disableRipple>
							<ListItemIcon>
								<img src={src} alt={alt} />
							</ListItemIcon>
							<ListItemText>
								<Typography>{alt}</Typography>
							</ListItemText>
						</CustomMenuItem>
					);
				})}
			</MenuList>
		</nav>
	);
}
export default Nav;
