import React from 'react';
import { Stack } from '@mui/material';
import ProductDescriptionCard from '../../components/ProductDescriptionCard/ProductDescriptionCard';
import RecommendedSlider from '../../components/Slider/components/recommendedSlider/SliderTwo';

function Product() {
	return (
		<main
			sx={{
				margin: { xs: '0 auto' },
			}}
		>
			<ProductDescriptionCard />
			<Stack
				sx={{
					marginBottom: { xs: '0', md: '0' },
				}}
			>
				<RecommendedSlider />
			</Stack>
		</main>
	);
}
export default Product;
