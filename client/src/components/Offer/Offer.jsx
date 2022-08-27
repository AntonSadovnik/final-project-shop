import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.scss';
import './offer.scss';
import Button from "@mui/material/Button";
import {Box, Typography} from "@mui/material";
import sliderItems from "./items";
import theme from "../../Styles/Theme";


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
                <Slider className="offer_slider" {...settings}
                        justifyContent="center"


                >
                    {sliderItems().map((e) =>{
                        const {src, title, subtitle, cross, text} = e;
                        return(
                            <Box className="offer_slider_container"
                                 sx={{maxWidth: 950, display: {sm: 'none', xs: 'none'}, position: 'relative'}}
                            >
                                <img src={src}
                                     className='offer_slider_item' alt="img"
                                     // sx={{paddingRight: 350, width: 600 , height: 470}}
                                />
                                <Typography className="offer_slider_title"
                                            sx={{position: 'absolute', top: 90, right: 60, fontSize: 24, lineHeight: 30}}
                                            component="p">
                                    {title}
                                </Typography>
                                <Typography className="offer_slider_subtitle"
                                            sx={{position: 'absolute', top: 90, right: 60}}
                                            component="p">
                                    {subtitle}
                                </Typography>
                                <Typography className="offer_slider_text_cross"
                                            sx={{position: 'absolute', top: 170, right: 60, textDecoration: 'line-through'}}
                                            component="h5">
                                    {cross}
                                </Typography>
                                <Typography className="offer_slider_text"
                                            sx={{position: 'absolute', top: 200, right: 60, fontSize: 24, lineHeight: 30}}
                                            component="h3">
                                    {text}
                                </Typography>
                                <Button className='offer_slider_button'
                                        sx={{ position: 'absolute', right: 60, bottom: 80, borderRadius: 5, width: 200, height: 50, border: 0, fontSize: 24}}
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