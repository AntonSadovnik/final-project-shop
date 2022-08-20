import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';


export default function ProductCard (props) {
    const theme = undefined;
    const {data} = props;
    const {title, portion, price, imgSrc, article} = data;
    return (<Card key={article} className="card" sx={{
        borderRadius: 5,
        background: 'white',
        overflow: 'hidden',
        maxWidth: '288px',
        maxHeight: '400px',
        boxSizing: 'border-box'
        }}>
       <CardMedia
              component="img"
              alt="not display"
              height="210,36"
              width="253"
              image={imgSrc}
              className="img"
            />
             <CardContent sx={{ paddingBottom: '0px' }}>
             <ThemeProvider theme={theme}>
              <Typography gutterBottom variant="h6" component="div" className='title' sx={{ fontSize: 22 }}>
              {title}
              </Typography>
              </ThemeProvider>
              <Typography variant="body2" component="div" color="text.secondary" className='portion' sx={{marginBottom: "0"}}>
              {portion}
              <Divider textAlign="center" style={{color: 'black', marginTop: '20px'}} />
              </Typography>
            
              <Typography variant="body2" component="div"  className='card-bottom' sx={{position: "relative",
              display: 'flex',justifyContent: 'space-between',padding: 0,}}>
              <Typography variant="body2" component="div"  className='price' sx={{alignSelf: "center",
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