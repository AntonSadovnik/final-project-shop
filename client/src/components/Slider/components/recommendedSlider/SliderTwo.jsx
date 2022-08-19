import React from 'react';
import Slider from "react-slick";
import { Typography, Stack } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../slider.scss";
import productItems from "../../data";
import SushiCard from './SushiCard';
import NextBtn from '../buttons/NextBtn';
import PrevBtn from '../buttons/PrevBtn';


function RecommendedSlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow:<PrevBtn /> ,
    nextArrow:<NextBtn /> ,
   
    responsive: [{
      breakpoint: 2300,
      settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      dots: false
      }
    },
      {
        breakpoint: 1200,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false
        }
      },
      {
        breakpoint: 900,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
      }
    ]
  };
  
	return (<Stack className='slider-wrapper' direction="column" justifyContent="center" alignItems="center"sx={{width:'78%',
      marginLeft: '12%', marginTop: '50px'}}>
    <Typography gutterBottom variant="h6" component="div" className='slider_title' sx={{ fontSize: 22, display:"flex",  justifyContent:"center", alignItems:"center", textAlign:"center"}}> 
        <h6>Recommended for this product</h6>
    </Typography> 
    <Slider {...settings}>
      {productItems.map((item)=>(item.slider==="two")&& <SushiCard key={item.article} item={item}/>)}
    </Slider>
   </Stack>
 
  )
}


export default RecommendedSlider;

