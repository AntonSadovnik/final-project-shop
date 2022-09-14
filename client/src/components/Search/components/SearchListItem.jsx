import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
	ListItem,
	ListItemAvatar,
	Avatar,
	Box,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Ingredients = styled('div')(({ theme }) => ({
	fontSize: '14px',
	[theme.breakpoints.down('sm')]: {
		display: 'none',
	},
	fontFamily: theme.typography.fontFamily,
}));

export default function SearchListItem({ product, handleSearchReset }) {
	return (
		<Link
			to={`/products/${product.itemNo}`}
			style={{ textDecoration: 'none', color: 'inherit' }}
			onClick={handleSearchReset}
		>
			<ListItem
				alignItems="flex-start"
				divider
				sx={{ display: 'flex', alignItems: 'center', columnGap: '20px' }}
			>
				<ListItemAvatar>
					<Avatar
						alt="product"
						src={product.imageUrls[0]}
						sx={{
							width: { xs: '80px', sm: '100px' },
							height: { xs: '80px', sm: '100px' },
						}}
					/>
				</ListItemAvatar>
				<Box sx={{ flexGrow: 1 }}>
					<Typography sx={{ fontSize: { xs: '14px', sm: '18px' }, fontWeight: 700 }}>
						{product.name}
					</Typography>
					<Ingredients>
						{product.ingredients && `ingredients: ${product.ingredients}`}
						{product.contains && `set contains: ${product.contains}`}
					</Ingredients>
				</Box>
				<Typography
					sx={{
						fontWeight: 700,
						fontSize: { xs: '14px', sm: '18px' },
						minWidth: { xs: '40px', sm: '60px' },
						textAlign: 'right',
					}}
				>{`${product.currentPrice} ₴`}</Typography>
			</ListItem>
		</Link>
	);
}
