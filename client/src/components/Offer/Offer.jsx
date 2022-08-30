import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import './offer.scss';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import sliderItems from './items';

function OfferSlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		prevArrow: false,
		nextArrow: false,
	};

	return (
		<Slider {...settings} justifyContent="center">
			{sliderItems().map((e) => {
				const { src, title, subtitle, cross, text } = e;
				return (
					<Box
						sx={{
							maxWidth: 950,
							display: { sm: 'none', xs: 'none' },
							position: 'relative',
						}}
					>
						<img src={src} className="offer-slider__item" alt="img" />
						<Box sx={{ position: 'absolute', top: 60, right: 20 }}>
							<Typography
								sx={{
									fontSize: 24,
									textAlign: 'right',
									fontWeight: 'bold',
								}}
								component="p"
							>
								{title}
							</Typography>
							<Typography
								color={(theme) => theme.palette.text.hoverText}
								sx={{
									marginTop: '10px',
									textAlign: 'right',
								}}
								component="p"
							>
								{subtitle}
							</Typography>
							<Typography
								sx={{
									textDecoration: 'line-through',
									marginTop: '80px',
									fontWeight: 'bold',
									textAlign: 'right',
								}}
								component="h5"
							>
								{cross}
							</Typography>
							<Typography
								sx={{
									fontSize: 24,
									marginTop: '20px',
									fontWeight: 'bold',
									textAlign: 'right',
								}}
								component="h3"
							>
								{text}
							</Typography>
						</Box>
						<Button
							className="offer-slider_button"
							sx={{
								position: 'absolute',
								right: 60,
								bottom: 80,
								borderRadius: 5,
								width: 200,
								height: 50,
								border: 0,
								fontSize: 24,
							}}
						>
							Want!
						</Button>
					</Box>
				);
			})}
		</Slider>
	);
}

export default OfferSlider;
