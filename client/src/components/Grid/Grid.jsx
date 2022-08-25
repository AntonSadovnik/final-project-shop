import React from 'react';
import Grid from '@mui/material/Grid';
import './grid.scss'
import {Box, Typography} from "@mui/material";

const GridItem = () => {


    return (
        <Grid container
              md={6} sm={12} xs={12}
            direction="row" justifyContent="center"
            rowSpacing={{sm: 1, md: 2, xs: 1}}
            columnSpacing={{sm: 1, md: 2, xs: 1}} sx={{marginTop: 30 , maxWidth: 950}}>
            <Grid item >
                <Box className='card'>
                    <img
                        src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660312127/sushi-shop/main/Grid/Combo_n5xgkt.jpg"
                        className='card_image' alt="combo"
                    />
                    <Typography className='card_text' component="h3">Combo</Typography>
                </Box>
            </Grid>
            <Grid item md={3} sm={6} xs={6}>
                <Box className="card">
                    <img src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660155599/sushi-shop/main/Grid/Sushi_uzurzt.jpg" 
                    className='card_image' alt="sushi"/>
                    <Typography className='card_text' component="h3">Sushi</Typography>
                </Box>
            </Grid>
            <Grid item md={3} sm={6} xs={6}>
                <Box className="card card_hidden">
                    <img src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660571268/sushi-shop/main/Grid/Soups_anwq6w.jpg"
                         className='card_image' alt="soups"/>
                    <Typography className='card_text' component="h3">Soups</Typography>
                </Box>
            </Grid>
            <Grid item>
                <Box className="card">
                    <img src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660155599/sushi-shop/main/Grid/pizza_tpoawl.jpg"
                    className='card_image' alt="pizza"/>
                    <Typography className='card_text' component="h3">Pizza</Typography>
                </Box>
            </Grid>
            <Grid item className="grid_block_item">
                <Box className="card">
                    <img src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660155600/sushi-shop/main/Grid/Sale_wqty6w.jpg"
                    className='card_image' alt="sales"/>
                    <Typography className='card_text' component="h3">Sales</Typography>
                </Box>
            </Grid>
            <Grid item sx={{display: {md:'none', sm:'block'}}} xs={6}>
                <Box className="card card_hidden">
                    <img src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660571268/sushi-shop/main/Grid/Sets_arn9m7.jpg"
                         className='card_image' alt="sets"/>
                    <Typography className='card_text' component="h3">Sets</Typography>
                </Box>
            </Grid>
            <Grid item sx={{display: {md:'none', sm:'block'}}}  xs={6}>
                <Box className="card card_hidden">
                    <img src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660571268/sushi-shop/main/Grid/Wok_fjeqdk.jpg"
                         className='card_image' alt="wok"/>
                    <Typography className='card_text' component="h3">Wok</Typography>
                </Box>
            </Grid>
            <Grid item sx={{display: {md:'none', sm:'block'}}}  xs={6}>
                <Box className="card card_hidden">
                    <img src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660571268/sushi-shop/main/Grid/Rolls_z6yest.jpg"
                         className='card_image' alt="rolls"/>
                    <Typography className='card_text' component="h3">Rolls</Typography>
                </Box>
            </Grid>
            <Grid item sx={{display: {md:'none', sm:'block'}}} xs={6}>
                <Box className="card card_hidden">
                    <img src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660571268/sushi-shop/main/Grid/Salads_fgkfdi.jpg"
                         className='card_image' alt="salads"/>
                    <Typography className='card_text' component="h3">Salads</Typography>
                </Box>
            </Grid>
            <Grid item sx={{display: {md:'none', sm:'block'}}}  xs={6}>
                <Box className="card card_hidden">
                    <img src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660571268/sushi-shop/main/Grid/Drinks_ulvocd.jpg"
                         className='card_image' alt="drinks"/>
                    <Typography className='card_text' component="h3">Drinks</Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default GridItem;