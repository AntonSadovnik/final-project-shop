import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Stack, Button,Typography } from '@mui/material';
import { getNoveltieProduct, getPopularProduct } from '../../../../api/Api';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../slider.scss";
import NoveltiesCard from './NoveltiesCard';
import NextBtn from '../buttons/PrevBtn';
import PrevBtn from '../buttons/NextBtn';



function NoveltieSlider() {
const [items, setItems] = useState();
const [button, setButton]= useState('left');

 useEffect(()=>{
  if(button==="left")
  getNoveltieProduct().then(({data:{products}})=>setItems(products))
  if(button==="right")
  getPopularProduct().then(({data:{products}})=>setItems(products))
 },[button])

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
  if(!items){return null}
	return (<Stack direction="column" justifyContent="center" alignItems="center">
  <Typography  component="div" className='btn-container' sx={{display:"flex", alignSelf:'flex-start'}}>
 <Button onClick={()=>setButton('left')}  sx={{paddingLeft: 4, paddingRight:5, marginRight:'-10px' }}>Novelties</Button>
 <Button  onClick={()=>setButton('right')} sx={{paddingLeft: 4, paddingRight:5, marginRight:'-10px' }}>Popular</Button>
 </Typography>
  <Stack className='slider-wrapper' direction="row" justifyContent="center" alignItems="center" sx={{marginTop: '50px'}}>
 
  <Slider {...settings}>

  {items.map((item)=>  <NoveltiesCard key={item._id} item={item}/>
  )}
  
  </Slider>
  </Stack>
  </Stack>)
}

NoveltieSlider.propTypes = {
  name: PropTypes.string,
  imageUrls: PropTypes.shape([]),
}

export default NoveltieSlider


