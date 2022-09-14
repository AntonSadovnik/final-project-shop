import { React, useState } from 'react';
// import { useDispatch } from 'react-redux';
import {
	Grid,
	CardMedia,
	Typography,
	CardActionArea,
	Stack,
} from '@mui/material';
// import { useParams } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircle from '@mui/icons-material/RemoveCircle';
// import { getProduct, getProductsByCategory } from '../../api/Api';
import CustomButton from '../Button/Button';

// import { addToCart } from '../../store/actions';
// import BtnBack from './components/BtnBack';
// import BtnForward from './components/BtnForward';

function ProductDescriptionCard(props) {
	const [quantityGoods, setQuantityGoods] = useState(1);
	const {
		product: { imageUrls, name, weight, ingredients, currentPrice },
	} = props;

	const addQuantity = () => {
		setQuantityGoods(quantityGoods + 1);
	};

	const minusQuantity = () => {
		if (quantityGoods > 1) {
			setQuantityGoods(quantityGoods - 1);
		}
	};

	// const onClickButton = () => {
	// 	product.cartQuantity = quantityGoods;
	// 	dispatch(addToCart(product));
	// };

	return (
		<Stack>
			<Grid
				container
				xs={12}
				sm={{
					width: '100 %',
				}}
				sx={{
					height: { sm: '350px', md: '400px', lx: '700px' },
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
									fontSize: { xs: '28px', sm: '38px', md: '48px', lx: '58px' },
									lineHeight: {
										xs: '35px',
										sm: '48px',
										md: '60px',
										lx: '70px',
									},
								}}
							>
								{name}
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
									fontSize: { xs: '18px', sm: '20px', md: '22px', lx: '23px' },
									lineHeight: {
										xs: '22px',
										sm: '24px',
										md: '26px',
										lx: '28px',
									},
								}}
							>
								{weight} grams
							</Typography>

							<Stack
								direction="row"
								spacing={2}
								justifyContent="space-around"
								alignItems="center"
								sx={{
									maxWidth: { md: '500px' },
								}}
							>
								{/* <Typography
									sx={{
										textDecoration: 'line-through',
										color: { xs: '#000000' },
										fontSize: {
											xs: '20px',
											sm: '23px',
											md: '24px',
											lx: '25px',
										},
										lineHeight: {
											xs: '23px',
											sm: '28px',
											md: '28px',
											lx: '32px',
										},
									}}
									component="h5"
									display={displaycardPpromoPrice}
								>
									{cardPpromoPrice}
								</Typography> */}

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
											lx: '27px',
										},
										lineHeight: {
											xs: '27px',
											sm: '30px',
											md: '30px',
											lx: '34px',
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
											lx: '0 30px',
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
												lx: '27px',
											},
											lineHeight: {
												xs: '27px',
												sm: '30px',
												md: '30px',
												lx: '34px',
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
								// display={displayCompound}
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
							// onClick={onClickButton}
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
