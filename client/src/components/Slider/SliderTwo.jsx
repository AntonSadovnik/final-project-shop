import React from 'react';
import Slider from "react-slick";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import productItems from "./data";
import SushiCard from './SushiCard';


function NextBtn(props) {
  const { onClick } = props;
 
  return (<Typography  component="div" className='title' color="white"
  alignItems="center"  onClick={onClick} style={{display: "flex", justifyContent:"center", alignItems:"center", background: "green", borderRadius: "50%", height:'60px', width:"60px",position:"absolute", top:"30%", left:"-10%", zIndex:"1111"}}>
 
  <NavigateBeforeIcon onClick={onClick}/>
  </Typography>
  );
}
function PrevBtn(props) {
const { onClick } = props;

  return (<Typography  component="div" className='title' color="white"
  alignItems="center"  onClick={onClick} style={{display: "flex", justifyContent:"center", alignItems:"center", background: "green", borderRadius: "50%", height:'60px', width:"60px",position:"absolute", top:"30%", right:"-10%", zIndex:"1111" }}>

  <NavigateNextIcon onClick={onclick} />
  </Typography>
  );
}


function SliderTwo() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow:<PrevBtn /> ,
    nextArrow:<NextBtn /> ,
   
    responsive: [
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
	return <Typography  component="div" className='slider-wrapper' color="black" sx={{width:'78%',
  marginLeft: '12%', marginTop: '50px'}}>
    <Typography gutterBottom variant="h6" component="div" className='title' sx={{ fontSize: 22, display:"flex",justifyContent:"center", alignItems:"center"
  }}>
        <h6>Recommended for this product</h6>
        </Typography> 
  <Slider {...settings} sx={{display:'flex',
  justifyContent: 'center'}}>
  {productItems.map((item)=>(item.slider==="two")&& <SushiCard  item={item}/>
  
  )}
 
  </Slider>
    <Typography variant="body2" component="div" color="text.secondary" >
        <Divider component="div" fontSize="large"/>
    </Typography>
       
    <div>divider</div>
</Typography>
}


export default SliderTwo;