import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Typography, Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircle from '@mui/icons-material/RemoveCircle';
import CustomButton from '../Button/Button';
import { addToCart } from '../../store/actions';
import PdpImage from './components/PdpImage';
import Price from './components/Price';
import Ingredients from './components/Ingredients';
import Title from './components/Title';

function ProductDescriptionCard(props) {
	const [quantityGoods, setQuantityGoods] = useState(1);
	const dispatch = useDispatch();
	const {
		product: {
			imageUrls,
			name,
			weight,
			ingredients,
			currentPrice,
			previousPrice,
		},
	} = props;
	const title = name ? name.charAt(0).toUpperCase() + name.slice(1) : '';

	const addQuantity = () => {
		setQuantityGoods(quantityGoods + 1);
	};

	const minusQuantity = () => {
		if (quantityGoods > 1) {
			setQuantityGoods(quantityGoods - 1);
		}
	};

	const handleAddToCart = () => {
		const { product } = props;
		const cartProduct = { ...product };
		cartProduct.cartQuantity = quantityGoods;
		dispatch(addToCart(cartProduct));
	};

	return (
		<>
			<PdpImage imageUrls={imageUrls} name={name} />
			<Grid
				container
				item
				xs={12}
				md={5}
				sm={5}
				sx={{
					padding: { xs: '7px 7px', md: '20px 20px' },
				}}
			>
				<Stack
					direction="column"
					justifyContent="center"
					sx={{
						alignItems: { xs: 'center', md: 'flex-start' },
						margin: { xs: '0 auto', md: '0' },
					}}
				>
					<Stack
						direction="column"
						justifyContent="center"
						sx={{
							alignItems: { xs: 'center', md: 'flex-start' },
						}}
					>
						<Title title={title} weight={weight} />
						<Stack
							direction="row"
							flexWrap="wrap"
							justifyContent="space-around"
							alignItems="center"
							sx={{
								maxWidth: { md: '500px' },
							}}
						>
							<Price
								currentPrice={currentPrice}
								previousPrice={previousPrice}
							/>
							<Stack
								direction="row"
								spacing={1}
								justifyContent="space-between"
								alignItems="center"
								sx={{
									margin: {
										xs: '0 19px',
										md: '0 25px',
										xl: '0 30px',
									},
								}}
							>
								<RemoveCircle
									sx={{ color: '#F46D40', cursor: 'pointer' }}
									fontSize="large"
									onClick={minusQuantity}
								/>

								<Typography
									variant="h4"
									component="h6"
									sx={{
										fontWeight: '700',
										margin: '0 19px',
										color: { xs: '#000000' },
										fontSize: {
											xs: '24px',
											xl: '27px',
										},
									}}
								>
									{quantityGoods}
								</Typography>

								<AddCircleIcon
									fontSize="large"
									sx={{ color: '#F46D40', cursor: 'pointer' }}
									onClick={addQuantity}
								/>
							</Stack>
						</Stack>

						<Stack
							direction="column"
							justifyContent="center"
							sx={{
								margin: { xs: '26px 0 5px 0' },
								alignItems: { xs: 'center', md: 'flex-start' },
							}}
						>
							<Ingredients ingredients={ingredients} />
						</Stack>
					</Stack>

					<CustomButton
						title="Want!"
						onClick={handleAddToCart}
						textStyle={{
							color: '#F2F2F2',
							fontSize: '23px',
						}}
						btnStyle={{
							background: '#F46D40',
							marginTop: { xs: '50px', sm: '25px', md: '50px' },
							padding: '5px 65px',
						}}
					/>
				</Stack>
			</Grid>
		</>
	);
}

export default ProductDescriptionCard;
