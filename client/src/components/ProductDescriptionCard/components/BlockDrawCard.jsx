import { React } from 'react';
import { Grid, Typography, Stack } from '@mui/material';
import CustomButton from '../../Button/Button';
import ImgPdCard from './ImgPdCard';
import BlockPrices from './BlockPrices';
import BlockCompound from './BlockCompound';

function BlockDrawCard(props) {
	const { product: {
		categories, contains, imageUrls, name,
		weight, ingredients, currentPrice, previousPrice,
	}, } = props;

	const { minusQuantity, quantityGoods, addQuantity, onClickButton } = props;

	return (
		<Grid container xs={12} sm={{ width: '100 %' }}
			sx={{ height: { sm: '350px', md: '400px', xl: '700px' } }}
		>
			<ImgPdCard cardPicture={imageUrls[0]} />

			<Grid container item xs={12} sm={5}
				sx={{ padding: { xs: '7px 7px', md: '20px 20px' } }}
			>
				<Stack direction="column" justifyContent="center"
					sm={{ marginBottom: '47px' }}
					sx={{
						alignItems: { xs: 'center', md: 'flex-start' },
						margin: { xs: '0 auto', md: 'none' },
					}}
				>
					<Stack direction="column" justifyContent="center"
						sm={{ width: '100 %' }}
						sx={{ alignItems: { xs: 'center', md: 'flex-start' } }}
					>
						<Typography variant="h3" component="h3"
							sm={{ fontWeight: '500' }}
							sx={{
								textAlign: { xs: 'center', md: 'start' },
								color: { xs: '#000000' },
								fontSize: { xs: '28px', sm: '38px', md: '48px', xl: '58px' },
								lineHeight: { xs: '35px', sm: '48px', md: '60px', xl: '70px' },
							}} >
							{name}
						</Typography>

						<Typography variant="body2" component="p"
							sm={{ fontWeight: '300' }}
							sx={{
								margin: { xs: '15px 0', md: '30px 0' },
								color: { xs: '#FF9846' },
								fontSize: { xs: '18px', sm: '20px', md: '22px', xl: '23px' },
								lineHeight: { xs: '22px', sm: '24px', md: '26px', xl: '28px' },
							}} >
							{weight} {categories === 'drinks' ? 'ml' : 'g'}
						</Typography>

						<BlockPrices currentPrice={currentPrice}
							previousPrice={previousPrice}
							minusQuantity={minusQuantity}
							quantityGoods={quantityGoods}
							addQuantity={addQuantity}
						/>

						<BlockCompound contains={contains} ingredients={ingredients} />
					</Stack>

					<CustomButton title="Want!" onClick={onClickButton}
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
							padding: { xs: '0' },
							margin: { xs: '30px 0 0', sm: '35px 0 0', md: '40px 0 0', xl: '50px 0 0', },
						}}
					/>
				</Stack>
			</Grid>
		</Grid>
	);
} export default BlockDrawCard;
