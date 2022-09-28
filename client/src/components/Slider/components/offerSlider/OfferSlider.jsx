import React from 'react';
import Slider from 'react-slick';
import { Stack } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OfferCard from './OfferCard';

function OfferSlider({ items }) {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 5500,
		autoplaySpeed: 2500,
		arrows: false,

		responsive: [
			{
				breakpoint: 2300,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
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
	return (
		<Stack
			direction="column"
			justifyContent="center"
			alignItems="center"
			alignSelf="center"
			justifySelf="center"
			paddin="50px"
			sx={{ marginBottom: '50px' }}
			className="sale-slider"
		>
			<Stack
				className="slider-wrapper"
				direction="row"
				justifyContent="center"
				alignItems="center"
				sx={{
					marginTop: '50px',
					width: { sm: 'none', md: '80vw', lg: '940px', xl: '940px' },
				}}
			>
				<Slider {...settings}>
					{items.map((item) => (
						<OfferCard key={item.itemNo} item={item} />
					))}
				</Slider>
			</Stack>
		</Stack>
	);
}

export default OfferSlider;
