import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Typography, Stack } from '@mui/material';
import {
	getRecommendedProduct,
	getProductsByCategory,
} from '../../../../api/Api';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../slider.scss';
import SushiCard from './SushiCard';
import NextBtn from '../buttons/NextBtn';
import PrevBtn from '../buttons/PrevBtn';

function RecommendedSlider({ category }) {
	const [items, setItems] = useState();
	const [categories, setCategories] = useState();
	const [error, setError] = useState(false);

	useEffect(() => {
		try {
			if (category === 'drinks') {
				getRecommendedProduct().then(({ data: { products } }) => {
					setItems(products);
					setCategories(category);
				});
			} else if (category === 'sushi') {
				getProductsByCategory(category).then(({ data: { products } }) => {
					setItems(products);
					setCategories('sushi');
				});
			}
		} catch (err) {
			setError(true);
		}
	}, []);

	useEffect(() => {
		try {
			if (categories === 'drinks') {
				getProductsByCategory(category).then(({ data: { products } }) => {
					setItems(products);
					setItems(products);
					setCategories('drinks');
				});
			} else if (categories === 'sushi') {
				getRecommendedProduct().then(({ data: { products } }) => {
					setItems(products);
					setCategories('sushi');
				});
			}
		} catch (err) {
			setError(true);
		}
	}, [category]);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		prevArrow: <PrevBtn />,
		nextArrow: <NextBtn />,

		responsive: [
			{
				breakpoint: 2300,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	if (!items) {
		return null;
	}

	if (error) {
		return <Typography>Oooops, something went wrong!!!</Typography>;
	}
	return (
		<Stack
			className="slider-wrapp"
			direction="column"
			justifyContent="center"
			alignItems="center"
			sx={{ marginTop: '50px', background: '#F2F2F2', padding: '20px' }}
		>
			<Typography
				gutterBottom
				variant="h6"
				component="div"
				className="slider_title"
				sx={{
					fontSize: 22,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					textAlign: 'center',
				}}
			>
				<h6>Recommended for this product</h6>
			</Typography>
			<Slider {...settings} className="slider">
				{items.map((item) => (
					<SushiCard key={item.itemNo} item={item} />
				))}
			</Slider>
		</Stack>
	);
}

export default RecommendedSlider;
