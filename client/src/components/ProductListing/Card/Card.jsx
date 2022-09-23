import React from 'react';
import { useNavigate } from 'react-router';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	CardActions,
	Divider,
	Grid,
	Box,
} from '@mui/material';
import CustomButton from '../../Button/Button';

export default function ProductCard(props) {
	const navigate = useNavigate();
	const handleClick = (productId) => {
		navigate({
			pathname: `/products/${productId}`,
		});
	};
	const {
		data: { name, weight, currentPrice, imageUrls, itemNo, categories },
		onClick,
	} = props;
	const title = name.charAt(0).toUpperCase() + name.slice(1);
	return (
		<Grid container item md={4} sm={6} xs={12}>
			<Card
				sx={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: { xs: 'row', sm: 'column' },
					maxWidth: { xs: 'auto', md: '288px' },
					borderRadius: 5,
					background: 'white',
					boxSizing: 'border-box',
					justifyContent: 'space-between',
					padding: '0 18px',
					cursor: 'pointer',
				}}
				onClick={() => handleClick(itemNo)}
			>
				<Grid item xs={6} sm={12}>
					<CardMedia
						component="img"
						alt="not display"
						sx={{
							fit: 'cover',
						}}
						image={imageUrls[0]}
					/>
				</Grid>
				<Grid item width="100%" xs={6} sm={12}>
					<CardContent
						sx={{
							display: 'flex',
							flexDirection: 'column',
							height: '100%',
							justifyContent: 'space-between',
							boxSizing: 'border-box',
							padding: 0,
							marginLeft: { xs: '15px', sm: 0 },
						}}
					>
						<Typography
							variant="h6"
							component="p"
							sx={{ fontSize: { xs: '18px', sm: '24px' }, fontWeight: 500 }}
						>
							{title} - {weight}
							{categories === 'drinks' ? 'ml' : 'g'}
						</Typography>
						<Box>
							<Divider
								sx={{
									color: 'black',
									marginTop: '20px',
									display: { xs: 'none', md: 'block' },
								}}
							/>
							<Grid
								container
								justifyContent="space-between"
								sx={{ marginTop: '6px' }}
							>
								<Typography
									variant="body2"
									component="p"
									sx={{
										alignSelf: 'center',
										fontWeight: 700,
										fontSize: { xs: '18px', sm: '24px' },
									}}
								>
									{currentPrice}&#8372;
								</Typography>
								<CardActions component="div" sx={{ padding: 0 }}>
									<CustomButton
										title="Want!"
										btnStyle={{
											width: { xs: '95px', sm: '143px' },
											height: { xs: '26px', sm: '40px' },
										}}
										textStyle={{
											fontWeight: 500,
											color: '#F2F2F2',
											fontSize: { xs: '18px', sm: '24px' },
										}}
										onClick={(e) => {
											e.stopPropagation();
											onClick();
										}}
									/>
								</CardActions>
							</Grid>
						</Box>
					</CardContent>
				</Grid>
			</Card>
		</Grid>
	);
}
