import React from 'react';
import { Stack } from '@mui/material';
import ProductCard from '../../components/ProductCard/ProductCard';
import RecommendedSlider from '../../components/Slider/components/recommendedSlider/SliderTwo';


function Product() {
	return (
		<main>
			<ProductCard />
			<Stack
				sx={{
					marginBottom: { xs: '35px', md: '55px' },
				}}
			>
				<RecommendedSlider />
			</Stack>
		</main>
	);
}
export default Product;
