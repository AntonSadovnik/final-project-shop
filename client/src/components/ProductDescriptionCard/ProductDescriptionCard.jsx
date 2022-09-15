/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	Grid,
	CardMedia,
	Typography,
	CardActionArea,
	Stack,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircle from '@mui/icons-material/RemoveCircle';
import CustomButton from '../Button/Button';
import { addToCart } from '../../store/actions';

function ProductDescriptionCard(props) {
	const cartProducts = useSelector((state) => state.cart.cart.products);
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
			itemNo,
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
		// const cartProduct = cartProducts.find(
		// 	({ product }) => product.itemNo === itemNo
		// );
		dispatch(addToCart(product));
		// if (cartProduct) {
		// 	cartProduct.cartQuantity = quantityGoods;
		// 	// console.log(cartProduct);
		// 	dispatch(addToCart(cartProduct));
		// }
		// else {
		// 	const { product } = props;
		// 	const newCartProduct = { ...product, cartQuantity: quantityGoods };
		// 	dispatch(addToCart(product));
		// }
		// product.cartQuantity = quantityGoods;
		// dispatch(addToCart(product));
	};

	return (
		<Stack>
			<Grid
				container
				xs={12}
				sm={{
					width: '100 %',
				}}
				sx={{
					height: { sm: '350px', md: '400px', xl: '700px' },
				}}
			>
				<Grid container item xs={12} md={7}>
					<CardActionArea>
						<Stack spacing={1} justifyContent="center" alignItems="flex-start">
							<CardMedia component="img" image={imageUrls} alt="set picture" />
						</Stack>
					</CardActionArea>
				</Grid>

				<Grid
					container
					item
					xs={12}
					md={5}
					sm={{
						width: '100 %',
					}}
					sx={{
						padding: { xs: '7px 7px', md: '20px 20px' },
					}}
				>
					<Stack
						direction="column"
						justifyContent="center"
						sm={{
							marginBottom: '47px',
						}}
						sx={{
							alignItems: { xs: 'center', md: 'flex-start' },
							margin: { xs: '0 auto', md: 'none' },
						}}
					>
						<Stack
							sm={{
								width: '100 %',
							}}
							direction="column"
							justifyContent="center"
							sx={{
								alignItems: { xs: 'center', md: 'flex-start' },
							}}
						>
							<Typography
								variant="h3"
								component="h3"
								sm={{
									fontWeight: '500',
								}}
								sx={{
									textAlign: { xs: 'center', md: 'start' },
									color: { xs: '#000000' },
									fontSize: { xs: '28px', sm: '38px', md: '48px', xl: '58px' },
									lineHeight: {
										xs: '35px',
										sm: '48px',
										md: '60px',
										xl: '70px',
									},
								}}
							>
								{title}
							</Typography>

							<Typography
								variant="body2"
								component="p"
								sm={{
									fontWeight: '300',
								}}
								sx={{
									padding: { xs: '30px 0' },
									color: { xs: '#FF9846' },
									fontSize: { xs: '18px', sm: '20px', md: '22px', xl: '23px' },
									lineHeight: {
										xs: '22px',
										sm: '24px',
										md: '26px',
										xl: '28px',
									},
								}}
							>
								{weight} grams
							</Typography>

							<Stack
								direction="row"
								justifyContent="space-around"
								alignItems="center"
								sx={{
									maxWidth: { md: '500px' },
								}}
							>
								{previousPrice && (
									<Typography
										sx={{
											textDecoration: 'line-through',
											color: { xs: '#000000' },
											fontSize: {
												xs: '20px',
												sm: '23px',
												md: '24px',
												xl: '25px',
											},
											lineHeight: {
												xs: '23px',
												sm: '28px',
												md: '28px',
												xl: '32px',
											},
											marginRight: '10px',
										}}
										component="h5"
									>
										{previousPrice}
									</Typography>
								)}
								<Typography
									variant="h4"
									component="span"
									sm={{
										fontWeight: '700',
									}}
									sx={{
										color: { xs: '#000000' },
										fontWeight: 'bold',
										fontSize: {
											xs: '24px',
											sm: '25px',
											md: '25px',
											xl: '27px',
										},
										lineHeight: {
											xs: '27px',
											sm: '30px',
											md: '30px',
											xl: '34px',
										},
									}}
								>
									{currentPrice} UAH
								</Typography>

								<Stack
									direction="row"
									spacing={1}
									justifyContent="space-between"
									alignItems="center"
									sx={{
										margin: {
											xs: '0 19px',
											sm: '0 22px',
											md: '0 25px',
											xl: '0 30px',
										},
									}}
								>
									<RemoveCircle
										sx={{ color: '#F46D40' }}
										fontSize="large"
										onClick={minusQuantity}
									/>

									<Typography
										variant="h4"
										component="h6"
										sm={{
											fontStyle: 'normal',
											fontWeight: '700',
											margin: '0 19px',
										}}
										sx={{
											color: { xs: '#000000' },
											fontSize: {
												xs: '24px',
												sm: '24px',
												md: '26px',
												xl: '27px',
											},
											lineHeight: {
												xs: '27px',
												sm: '30px',
												md: '30px',
												xl: '34px',
											},
										}}
									>
										{quantityGoods}
									</Typography>

									<AddCircleIcon
										fontSize="large"
										sx={{ color: '#F46D40' }}
										onClick={addQuantity}
									/>
								</Stack>
							</Stack>

							<Stack
								direction="column"
								justifyContent="center"
								spacing={1}
								sx={{
									margin: { xs: '26px 0 5px 0' },
									alignItems: { xs: 'center', md: 'flex-start' },
								}}
							>
								<Typography
									variant="h6"
									component="h6"
									sm={{
										fontWeight: '500',
										fontSize: '18px',
										lineHeight: '22px',
										margin: '26px 0 5px 0',
									}}
									sx={{
										margin: { xs: '0 0 5px 0', md: '26px 0 5px 0' },
										textAlign: { xs: 'center', md: 'start' },
										color: { xs: '#111111' },
									}}
								>
									Compound:
								</Typography>

								<Typography
									variant="body2"
									component="p"
									sx={{
										fontWeight: '300',
										fontSize: '18px',
										lineHeight: '22px',
										textAlign: { xs: 'center', md: 'start' },
										color: { xs: '#111111' },
									}}
								>
									{ingredients}
								</Typography>
							</Stack>
						</Stack>

						<CustomButton
							title="Want!"
							onClick={handleAddToCart}
							textStyle={{
								color: '#F2F2F2',
								borderRadius: '5px',
								padding: '5px 65px',
								fontWeight: '500',
								fontSize: '23px',
								lineHeight: '28px',
								textAlign: 'center',
							}}
							btnStyle={{
								background: '#F46D40',
								margin: { xs: '50px 0 0' },
								padding: { xs: '0' },
							}}
						/>
					</Stack>
				</Grid>
			</Grid>
		</Stack>
	);
}

export default ProductDescriptionCard;
