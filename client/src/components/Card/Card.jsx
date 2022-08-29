import React from 'react';
import { Card,
    CardContent,
    CardMedia,
    Typography,
    Button, 
    CardActions,
    Divider
 } from '@mui/material';
import PropTypes from 'prop-types';


export default function ProductCard (props) {
    const {data} = props;
    const {title, portion, price, imgSrc, article} = data;
    return (<Card key={article} className="card" sx={{
        borderRadius: 5,
        background: 'white',
        overflow: 'hidden',
        maxWidth: '288px',
        maxHeight: '400px',
        boxSizing: 'border-box',
        padding: '0px',
        margin: '0px'
        }}>
       <CardMedia
              component="img"
              alt="not display"
              height="210px"
              width="253px"
              fit="cover"
              image={imgSrc}
              className="img"
            />
             <CardContent sx={{ paddingBottom: '0px' }}>
              <Typography gutterBottom variant="h6" component="p" className='title' sx={{ fontSize: 22 }}>
              {title}
              </Typography>
              <Typography variant="body2" component="p" color="text.secondary" className='portion' sx={{marginBottom: "0"}}>
              {portion}
              <Divider style={{color: 'black', marginTop: '20px'}} />
              </Typography>
            
              <Typography variant="body2" component="p"  className='card-bottom' sx={{position: "relative",
              display: 'flex',justifyContent: 'space-between',padding: 0,}}>
              <Typography variant="body2" component="p"  className='price' sx={{alignSelf: "center",
        fontWeight: 700,
                }}>
              {price}
              </Typography>
              <CardActions component="div">
              <Button variant="contained" sx={{paddingLeft: 5, paddingRight:5 }}>Wish</Button>
              </CardActions>    
              </Typography>
              </CardContent>
          </Card>)
}

ProductCard.propTypes = {
    data: PropTypes.object,
}