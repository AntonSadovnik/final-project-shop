import React from 'react';
import { Card, Button, CardContent, CardMedia, Typography, CardActions, Divider, Stack} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../slider.scss";


const theme = createTheme();

theme.typography.h6 ={
  fontSize: '24px',
  '@media (min-width:900px) and (max-width: 980px)':{
  fontSize:'20px'
  }
}

function NoveltiesCard({item}){
  
return (<Card key={item.article} className="card" sx={{ padding: 0,
  borderRadius: 5,
  background: 'white',
  overflow: 'hidden',
  maxWidth: '290px',
  minWidth:'225px',
  boxSizing: 'content-box',
  margin:"0 70px"
  }}>

<Typography  component="div" className='title' sx={{display:"flex"}}>
<CardMedia
        component="img"
        alt="not display"
        image={item.imgSrc}
        className="img"
        sx={{width:"253px", height:"203px", objectFit:"cover"}}
      />
        </Typography>
       
       <CardContent>
       <ThemeProvider theme={theme}>
        <Typography gutterBottom variant="h6" component="div" className='title' sx={{ fontSize: 22 }}>
        {item.title}
        </Typography>
        </ThemeProvider>
        <Typography variant="body2" component="div" color="text.secondary" className='portion' sx={{marginBottom: "0"}}>
        {item.portion}
        <Divider textAlign="right" style={{color: 'black', marginTop: '20px'}} />
        </Typography>
        <Stack > 
      
        <Typography variant="body2" component="div"  className='card-bottom' sx={{marginTop: "10px",position: "relative",
        display: 'flex', justifyContent: 'space-between',padding: 0,}}>
        <Typography variant="body2" component="div"  className='price' sx={{alignSelf: "center",
        fontWeight: 700, marginRight:"-30px", lineHight:"30.05px"}}>
        {item.price}
        </Typography>
        
        <CardActions component="div">
        <Button variant="contained" sx={{paddingLeft: 4, paddingRight:5, marginRight:'-10px' }}>Wish</Button>
        </CardActions>
        
        </Typography>
        </Stack>
        </CardContent>
    </Card>)


}

export default NoveltiesCard