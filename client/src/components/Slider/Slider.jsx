import React from 'react';
import Slider from "react-slick";
import Typography from '@mui/material/Typography';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import productItems from "./data";
import SetCard from './SetCard';





function NextBtn(props) {
  const { onClick } = props;
  console.log(onClick)
  return (<Typography  component="div" className='title' color="white"
  alignItems="center"  onClick={onClick} style={{display: "flex", justifyContent:"center", alignItems:"center", background: "green", borderRadius: "50%", height:'60px', width:"60px",position:"absolute", top:"40%", left:"-20px", zIndex:"1111"}}>
 
  <NavigateBeforeIcon onClick={onClick}/>
  </Typography>
  );
}
function PrevBtn(props) {
const { onClick } = props;
console.log(onClick)
  return (<Typography  component="div" className='title' color="white"
  alignItems="center"  onClick={onClick} style={{display: "flex", justifyContent:"center", alignItems:"center", background: "green", borderRadius: "50%", height:'60px', width:"60px",position:"absolute", top:"40%", right:"-20px", zIndex:"1111" }}>
  <NavigateNextIcon onClick={onclick} />
  </Typography>
  );
}


function SliderF() {
  const settings = {
    dots: true,
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
  
	return <Typography key="123" component="div" className='slider-wrapper' color="white" sx={{width:'78%',
    marginLeft: '12%',
    marginTop: '50px'}}>
  
  <Slider {...settings}>
  {productItems.map((item)=>(item.slider==="one") && <SetCard  item={item}/>
   
  )}
  
  </Slider>
  </Typography>
}




export default SliderF;


