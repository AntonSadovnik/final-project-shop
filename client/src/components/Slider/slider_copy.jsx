/* import React from 'react';
import Slider from "react-slick";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import productItems from "./data";


function NextBtn(props) {
  const { onClick } = props;
  //position:"absolute", top:"40%", left:"-20px", zIndex:"1111"
  return (<div
    style={{ display: "flex", justifyContent:"center", alignItems:"center", background: "green", borderRadius: "50%", height:60, width:"60px", }}
    onClick={onClick}
  > <NavigateBeforeIcon/></div>
  );
}

function PrevBtn(props) {
const {  onClick } = props;
//position:"absolute", top:"40%", right:"-20px", zIndex:"1111"
  return (<div
    style={{ display: "flex", justifyContent:"center", alignItems:"center", background: "green", borderRadius: "50%", height:60, width:"60px", }}
    onClick={onClick}
  > <NavigateNextIcon/></div>
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
    
    prevArrow: <NextBtn />,
    nextArrow: <PrevBtn />,
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
	return <div className='slider-wrapper'>
  
  <Slider {...settings}  
   style={{ display: "flex", justifyContent:"center", alignItems:"center",   }}>
  {productItems.map((item)=>(<Typography variant="body2" component="div" color="text.secondary"  style={{position:'reletive'}}><Card key={item.article} className="card" sx={{ padding: 0,
  borderRadius: 5,
  background: 'white',
  overflow: 'hidden',
  maxWidth: '290px',
  }}>
 <CardMedia
        component="img"
        alt="not display"
        height="203"
        width="253"
        image={item.imgSrc}
        className="img"
      />
       <CardContent>
        <Typography gutterBottom variant="h6" component="div" className='title' sx={{ fontSize: 22,
  }}>
        {item.title}
        </Typography>
        <Typography variant="body2" component="div" color="text.secondary" className='portion'>
        {item.portion}
        </Typography>

        <Typography variant="body2" component="div"  className='card-bottom'>
        <Typography variant="body2" component="div"  className='price'>
        {item.price}
        </Typography>
        <CardActions component="div">
        <Button variant="contained" sx={{paddingLeft: 5, paddingRight:5 }}>Wish</Button>
        </CardActions>
        
        </Typography>
        </CardContent>
    </Card></Typography>
    
    )
  )}
 
  </Slider>
  
  </div>;
}





export default SliderF; */
