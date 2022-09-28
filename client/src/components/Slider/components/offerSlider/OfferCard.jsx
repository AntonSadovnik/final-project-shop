import React from 'react';

import { NavLink } from 'react-router-dom';
import { Card, Button, CardContent, CardMedia, Typography, CardActions, Stack} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch} from 'react-redux';
import { addToCart } from '../../../../store/actions';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../slider.scss";


const theme = createTheme();
theme.typography.h6 ={
  fontSize: '24px',
  '@media (min-width:900px) and (max-width: 980px)':{
  fontSize:'30px',
  }
}

function OfferCard({item}){
  const dispatch= useDispatch()
  const path = `/products/${item.itemNo}`
return (<Card key={item.id} className="card blockquote" sx={{ display:'flex',
  padding: '10px 30px',
  borderRadius: 5,
  background: 'white',
  overflow:'hidden',
  maxWidth:'82vw',
  height:'475px',
  width:'100%',
  boxSizing:'border-box',
  marginBottom:'50px',
  
  }}>

<Typography  component="div" className='title' sx={{display:"flex"}}>
<NavLink
						style={{
							textDecoration: 'none',
						}}
						to={path}
					>
<CardMedia
        component="img"
        alt="not display"
        image={item.imageUrls[0]}
        className="sale-slider-img"
        sx={{display:"flex", width:"450px", height:"450px", objectFit:'contain', alignSelf:'center'}}
      />
      </NavLink>
        </Typography>
       
       <CardContent direction="column" justifycontent="space-between" alignitems="flex-end" sx={{width:'45%', display:'flex', flexDirection:"column", alignItems:'flex-end',justifyContent:"space-around", marginLeft:'-10px'}}>
       <ThemeProvider theme={theme}>
       
        <Typography gutterBottom variant="h6" component="div" className='title' sx={{fontSize: 30,marginTop:"20px", marginBottom:"28px", textAlign:'center', position:'absolute', top: 20,  }}>
        <NavLink
						style={{
							textDecoration: 'none',
              color:'black'
						}}
						to={path}
					>
        {item.name[0].toUpperCase()+item.name.slice(1)} 
        </NavLink>
        </Typography>
        
        <Typography variant="body2" component="div" color="text.secondary" className='portion' sx={{marginBottom: "0", textAlign:'end', color:'#FF9846', }}>
        {item.weight} <span> gramm </span>
       
        </Typography>
        
        
        </ThemeProvider>
       
        <Typography variant="body2" component="div"  className='price' sx={{textAlign:'center',fontSize:18,fontWeight: 500,
         lineHight:"30.05px"}}>{item.price}
         {item.currentPrice} <span> UAH</span>
        <Typography variant="body2" component="div" color="text.secondary" className='portion' sx={{textAlign:'end',fontSize:20,
        fontWeight: 700, lineHight:"30.05px", textDecoration:'line-through', color:'black'}}>
         {item.previousPrice} <span> UAH</span>
       
        </Typography>
        </Typography>
        <Stack > 
      
        <Typography variant="body2" component="div"  className='card-bottom' sx={{marginTop: "10px",position: "relative",
        display: 'flex', justifyContent: 'space-between', padding:0,}}>
        
        
        <CardActions component="div">
        <Button variant="contained" sx={{padding:'10px 70px', marginBottom:'-50px',color:'white', fontSize:'24px' }} onClick={()=>dispatch(addToCart(item))}>Want</Button>
        </CardActions>
        
        </Typography>
        </Stack>
        </CardContent>
    </Card>)


}




export default OfferCard
