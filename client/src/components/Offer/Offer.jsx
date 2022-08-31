import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import sliderItems from './items';
import CustomButton from '../Button/Button';
import 'slick-carousel/slick/slick.scss';
import './offer.scss';

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
		arrows: false,
	};

	return (
		<Slider {...settings} justifyContent="center">
			{sliderItems().map((e) => {
				const { src, title, subtitle, cross, text } = e;
				return (
					<Box
						sx={{
							maxWidth: 950,
							position: 'relative',
						}}
					>
						<img src={src} className="offer-slider__item" alt="img" />
						<Box
							sx={{
								position: 'absolute',
								top: { lg: 60, sm: 40 },
								right: { lg: 20, sm: 0 },
								textAlign: 'right',
								maxWidth: '25%',
							}}
						>
							<Typography
								sx={{
									fontSize: 24,
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
								}}
								component="p"
							>
								{subtitle}
							</Typography>
							<Typography
								sx={{
									textDecoration: 'line-through',
									marginTop: '40%',
									fontWeight: 'bold',
								}}
								component="h5"
							>
								{cross}
							</Typography>
							<Typography
								sx={{
									fontSize: 24,
									marginTop: '5%',
									fontWeight: 'bold',
								}}
								component="h3"
							>
								{text}
							</Typography>
							<CustomButton
								className="offer-slider__button"
								title="Want!"
								textStyle={{ color: '#fff' }}
								btnStyle={{
									background: '#F46D40',
									boxShadow: 'none',
									width: '80%',
									marginTop: '70%',
								}}
							/>
						</Box>
					</Box>
				);
			})}
		</Slider>
	);
}

export default OfferSlider;
