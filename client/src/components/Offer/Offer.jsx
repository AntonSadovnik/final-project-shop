import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.scss';
import './offer.scss';
import Button from "@mui/material/Button";
import {Box, Typography} from "@mui/material";


const OfferSlider = () => {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
                <Slider className="offer_slider" {...settings}>
                    <Box className="offer_slider_container">
                        <img src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660425308/sushi-shop/main/Grid/set2_spnfk5.png" className='offer_slider_item' alt=""/>
                        <Typography className="offer_slider_title"  component="h2">"Philadelphia and salmon"</Typography>
                        <Typography className="offer_slider_subtitle" component="p">1260 grams 36 peaces</Typography>
                        <Typography className="offer_slider_text_cross" component="h5">1599 UAH</Typography>
                        <Typography className="offer_slider_text" component="h3">599 UAH</Typography>
                        <Button className='offer_slider_button'>Want!</Button>
                    </Box>
                    <Box className="offer_slider_container">
                        <img src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660483148/sushi-shop/main/Slider/set3_ycfd31.png" className='offer_slider_item' alt=""/>
                        <Typography className="offer_slider_title"  component="h2">"Philadelphia and salmon"</Typography>
                        <Typography className="offer_slider_subtitle" component="p">1260 grams 36 peaces</Typography>
                        <Typography className="offer_slider_text_cross" component="h5">1599 UAH</Typography>
                        <Typography className="offer_slider_text" component="h3">599 UAH</Typography>
                        <Button className='offer_slider_button'>Want!</Button>
                    </Box>
                    <Box className="offer_slider_container">
                        <img src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660057825/sushi-shop/products/sets/88_i9wklx.png" className='offer_slider_item' alt=""/>
                        <Typography className="offer_slider_title"  component="h2">"Philadelphia and salmon"</Typography>
                        <Typography className="offer_slider_subtitle" component="p">1260 grams 36 peaces</Typography>
                        <Typography className="offer_slider_text_cross" component="h5">1599 UAH</Typography>
                        <Typography className="offer_slider_text" component="h3">599 UAH</Typography>
                        <Button className='offer_slider_button'>Want!</Button>
                    </Box>
                    <Box className="offer_slider_container">
                        <img src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660483151/sushi-shop/main/Slider/set5_kdnl4h.png" className='offer_slider_item' alt=""/>
                        <Typography className="offer_slider_title"  component="h2">"Philadelphia and salmon"</Typography>
                        <Typography className="offer_slider_subtitle" component="p">1260 grams 36 peaces</Typography>
                        <Typography className="offer_slider_text_cross" component="h5">1599 UAH</Typography>
                        <Typography className="offer_slider_text" component="h3">599 UAH</Typography>
                        <Button className='offer_slider_button'>Want!</Button>
                    </Box>
                    <Box className="offer_slider_container">
                        <img src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660483423/sushi-shop/main/Slider/set1_rbfnes.png" className='offer_slider_item' alt=""/>
                        <Typography className="offer_slider_title"  component="h2">"Philadelphia and salmon"</Typography>
                        <Typography className="offer_slider_subtitle" component="p">1260 grams 36 peaces</Typography>
                        <Typography className="offer_slider_text_cross" component="h5">1599 UAH</Typography>
                        <Typography className="offer_slider_text" component="h3">599 UAH</Typography>
                        <Button className='offer_slider_button'>Want!</Button>
                    </Box>
                    <Box className="offer_slider_container">
                        <img src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660057824/sushi-shop/products/sets/djfmset_gzq4kf.png" className='offer_slider_item' alt=""/>
                        <Typography className="offer_slider_title"  component="h2">"Philadelphia and salmon"</Typography>
                        <Typography className="offer_slider_subtitle" component="p">1260 grams 36 peaces</Typography>
                        <Typography className="offer_slider_text_cross" component="h5">1599 UAH</Typography>
                        <Typography className="offer_slider_text" component="h3">599 UAH</Typography>
                        <Button className='offer_slider_button'>Want!</Button>
                    </Box>
                </Slider>
        );
}

export default OfferSlider;