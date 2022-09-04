import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function SearchListItem({ product, handleSearchReset}) {
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
						sx={{ width: '100px', height: '100px' }}
					/>
				</ListItemAvatar>
				<Typography sx={{ flexGrow: 1, fontSize: '18px' }}>
					{product.name.toUpperCase()}
				</Typography>
				<Typography
					sx={{ fontWeight: 700, fontSize: '18px' }}
				>{`${product.currentPrice} ₴`}</Typography>
			</ListItem>
		</Link>
	);
}
