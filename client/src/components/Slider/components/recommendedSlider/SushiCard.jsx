import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Button, CardContent, CardMedia, Typography, CardActions, } from '@mui/material/';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch} from 'react-redux';
import { addToCart } from '../../../../store/actions';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function SushiCard({item}){
  const handleScroll =()=>{
		window.scrollTo({ behavior: 'smooth', top: 130 });
	}
  const dispatch= useDispatch()
  const path = `/products/${item.itemNo}`
  return(<Card key={item.itemNo}  direction="column"
  
  className="card" sx={{ padding: 0,
  background: 'transparent',
  overflow: 'hidden',
  maxWidth: '290px',
  minWidth:'200px',
  boxSizing: "content-box",
  display: "flex",
  flexDirection: "column",
  border:"none",
  boxShadow:"none",
  flexGrow: 1,
  flexShrink:1,
  }}>
   <Typography variant="body2" component="div" color="text.secondary"  sx={{ background:'white', borderRadius:"50%",width:200, height:200,display:"flex",justifyContent:"center", alignItems:"center", alignSelf:"center" 
  }}>
          <NavLink
						style={{
							textDecoration: 'none',
              color:'black'
						}}
						to={path}
					>
   <CardMedia 
        onClick={handleScroll}
        component="img"
        alt="not display"
        height="190px"
        weight="160px"
        image={item.imageUrls[0]}/>
        </NavLink>
        </Typography>
 
       <CardContent>
        <Typography gutterBottom variant="h6" component="div" className='card-title' sx={{ fontSize: 20, display:"flex",justifyContent:"center", alignItems:"center", marginTop:"0px", flexDirection:"column", textAlign:"center", height:'80px',marginBottom:"30px",
       }}>
        <NavLink
        onClick={handleScroll} 
				style={{
							textDecoration: 'none',
              color:'black'
						}}
				to={path}
					>
        {item.name[0].toUpperCase()+item.name.slice(1)}
        </NavLink>
        <Typography variant="body2" component="div"  className='card-bottom' sx={{position: "relative",
        display: 'flex', justifyContent: "center",alignContent:"center", padding:"10px"}} >
        <Typography variant="body2" component="div" className='card-price' sx={{alignSelf: "center",
          fontWeight: 700, marginRight:"0px", lineHight:"30.05px",textAlign:"center"  }}>
        {item.currentPrice} <span> UAH</span> 
        </Typography>
        <CardActions component="div">
     
        <Button variant="text" sx={{display:"inline-block", position: "absolute", right: "-30px"}} onClick={()=>dispatch(addToCart(item))}><AddCircleIcon fontSize='large'/></Button>
        </CardActions>
        
        </Typography>
        </Typography>
       
       
        </CardContent>
    </Card>)
}

export default SushiCard