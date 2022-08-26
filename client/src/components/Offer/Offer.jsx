import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.scss';
import './offer.scss';
import Button from "@mui/material/Button";
import {Box, Typography} from "@mui/material";
import sliderItems from "./items";


const OfferSlider = () => {

        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
            prevArrow: false,
            nextArrow: false
        };

        return (
                <Slider className="offer_slider" {...settings}>
                    {sliderItems().map((e) =>{
                        const {src, title, subtitle, cross, text} = e;
                        return(
                            <Box className="offer_slider_container">
                                <img src={src}
                                     className='offer_slider_item' alt="img"/>
                                <Typography className="offer_slider_title"  component="h2">{title}</Typography>
                                <Typography className="offer_slider_subtitle" component="p">{subtitle}</Typography>
                                <Typography className="offer_slider_text_cross" component="h5">{cross}</Typography>
                                <Typography className="offer_slider_text" component="h3">{text}</Typography>
                                <Button className='offer_slider_button'>Want!</Button>
                            </Box>
                        );
                    })}

                </Slider>
        );
}

export default OfferSlider;