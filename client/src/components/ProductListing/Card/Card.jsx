import React from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	CardActions,
	Divider,
	Grid,
} from '@mui/material';
import CustomButton from '../../Button/Button';
// import PropTypes from 'prop-types';

export default function ProductCard(props) {
	const {
		data: { name, ingredients, weight, currentPrice, imageUrls, itemNo },
		onClick,
	} = props;
	const title = name.charAt(0).toUpperCase() + name.slice(1);
	return (
		<Grid container item md={4} sm={6} xs={12}>
			<Card
				key={itemNo}
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
				}}
			>
				<Grid item>
					<CardMedia
						component="img"
						alt="not display"
						sx={{
							fit: 'cover',
						}}
						image={imageUrls}
					/>
				</Grid>
				<Grid item width="100%">
					<CardContent sx={{ padding: 0 }}>
						<Typography
							variant="h6"
							component="p"
							sx={{ fontSize: { xs: '18px', sm: '24px' }, fontWeight: 500 }}
						>
							{title}
						</Typography>
						<Typography
							variant="body2"
							component="p"
							color="text.secondary"
							sx={{ marginBottom: '0', fontSize: { xs: '14px', sm: '18px' } }}
						>
							{ingredients} ({weight}g)
							<Divider
								sx={{
									color: 'black',
									marginTop: '20px',
									display: { xs: 'none', md: 'block' },
								}}
							/>
						</Typography>
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
								{currentPrice}$
							</Typography>
							<CardActions component="div" sx={{ padding: 0 }}>
								<CustomButton
									title="Wish"
									btnStyle={{
										width: { xs: '95px', sm: '143px' },
										height: { xs: '26px', sm: '40px' },
									}}
									textStyle={{
										fontWeight: 500,
										color: '#F2F2F2',
										fontSize: { xs: '18px', sm: '24px' },
									}}
									onClick={onClick}
								/>
							</CardActions>
						</Grid>
					</CardContent>
				</Grid>
			</Card>
		</Grid>
	);
}

// ProductCard.propTypes = {
//     data: PropTypes.object,
// }
