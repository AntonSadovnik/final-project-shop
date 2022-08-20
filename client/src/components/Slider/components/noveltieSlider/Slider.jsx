import React from 'react';
import Slider from 'react-slick';
import { Stack } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../slider.scss";
import productItems from "../../data";
import NoveltiesCard from './NoveltiesCard';
import NextBtn from '../buttons/NextBtn';
import PrevBtn from '../buttons/PrevBtn';


function NoveltieSlider() {
  const settings = {
    dots: true,
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
      
      }
    },
      {
        breakpoint: 1200,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: true
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
  
	return ( <Stack className='slider-wrapper' direction="row" justifyContent="center" alignItems="center" sx={{marginTop: '50px'}}>
 
  <Slider {...settings}>
  {productItems.map((item)=>(item.slider==="one") && <NoveltiesCard key={item.article} item={item}/>
   
  )}
  
  </Slider>
  </Stack>)
}

export default NoveltieSlider


