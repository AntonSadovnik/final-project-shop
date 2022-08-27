import React from 'react';
import { Card, Button, CardContent, CardMedia, Typography, CardActions, } from '@mui/material/';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../slider.scss";


function SushiCard({item}){
  
  return(<Card key={item._id}  direction="column"
  
  className="card" sx={{ padding: 0,
  background: '#F2F2F2',
  overflow: 'hidden',
  maxWidth: '290px',
  minWidth:'200px',
  boxSizing: "content-box",
  display: "flex",
  flexDirection: "column",
  border:"none",
  boxShadow:"none"

  }}>
   <Typography variant="body2" component="div" color="text.secondary"  sx={{ background:"white", borderRadius:"50%",width:200, height:200,display:"flex",justifyContent:"center", alignItems:"center", alignSelf:"center" 
  }}>
   <CardMedia 
        component="img"
        alt="not display"
        height="190px"
        weight="160px"
        image={item.imageUrls[0]}/>
        </Typography>
 
       <CardContent>
        <Typography gutterBottom variant="h6" component="div" className='card-title' sx={{ fontSize: 20, display:"flex",justifyContent:"center", alignItems:"center", marginTop:"0px", flexDirection:"column", textAlign:"center", height:'80px',marginBottom:"30px",
       }}>
        {item.name[0].toUpperCase()+item.name.slice(1)}
        <Typography variant="body2" component="div"  className='card-bottom' sx={{position: "relative",
        display: 'flex', justifyContent: "center",alignContent:"center", padding:"10px"}} >
        <Typography variant="body2" component="div" className='card-price' sx={{alignSelf: "center",
          fontWeight: 700, marginRight:"0px", lineHight:"30.05px",textAlign:"center"  }}>
        {item.currentPrice} <span> UAH</span> 
        </Typography>
        <CardActions component="div">
     
        <Button variant="text" sx={{display:"inline-block", position: "absolute", right: "-30px"}}><AddCircleIcon fontSize='large'/></Button>
        </CardActions>
        
        </Typography>
        </Typography>
       
       
        </CardContent>
    </Card>)
}

export default SushiCard