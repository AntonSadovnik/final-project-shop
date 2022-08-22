import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import productItems from './data';
import style from './style.scss'


function Card (item) {
  {<Card key={item.article} className="card" sx={{ padding: 0,
    borderRadius: 5,
    background: 'white',
    overflow: 'hidden',
   
    }}>
   <CardMedia
          component="img"
          alt="not display"
          height="203"
          weight="253"
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
      </Card>)
    )}
}