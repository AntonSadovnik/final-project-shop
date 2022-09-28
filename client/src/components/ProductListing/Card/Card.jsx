import React from 'react';
import { useNavigate } from 'react-router';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
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
					maxWidth: { xs: 'fit-content', md: 288 },
					borderRadius: 5,
					boxSizing: 'border-box',
					padding: '0 18px',
					cursor: 'pointer',
				}}
				onClick={() => handleClick(itemNo)}
			>
				<Grid item xs={6} sm={12}>
					<CardMedia component="img" alt="not display" image={imageUrls[0]} />
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
							marginLeft: { xs: 1.87, sm: 0 },
						}}
					>
						<Typography
							variant="h6"
							component="p"
							fontSize={{ xs: 18, sm: 24 }}
							fontWeight={500}
						>
							{title} - {weight}
							{categories === 'drinks' ? 'ml' : 'g'}
						</Typography>
						<Box>
							<Divider
								sx={{
									display: { xs: 'none', md: 'block' },
									marginTop: 2.5,
								}}
							/>
							<Grid
								container
								justifyContent="space-between"
								alignItems="center"
								marginTop={0.75}
							>
								<Typography
									variant="body2"
									component="p"
									fontWeight={700}
									fontSize={{ xs: 18, sm: 24 }}
								>
									{currentPrice}&#8372;
								</Typography>

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
							</Grid>
						</Box>
					</CardContent>
				</Grid>
			</Card>
		</Grid>
	);
}
