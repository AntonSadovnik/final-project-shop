import React from 'react';
import Grid from '@mui/material/Grid';
import './grid.scss'
import {Box, Typography} from "@mui/material";
import gridItems from "./itemGrid";
import gridItemsHidden from "./itemGridHidden";

const GridItem = () => {

    return (
        <Grid container
            direction="row" justifyContent="center"
            rowSpacing={{sm: 1, md: 2, xs: 1}}
            columnSpacing={{sm: 1, md: 2, xs: 1}} sx={{marginTop: 30 , maxWidth: 950}}>

            {gridItems().map((e) => {
                const {layout, src, alt, text} = e;
                return(
                    <Grid item {...layout}>
                        <Box className='card'
                             sx={{  position: 'relative', borderRadius: 5, overflow: 'hidden'}}
                        >
                            <img
                                src={src}
                                sx={{display: 'block', objectFit: 'cover'}}
                                className='card_image' alt={alt}
                            />
                            <Typography className='card_text'
                                        sx={{ left: 20, bottom: 10, position: 'absolute'}}
                                        component="h3">
                                {text}
                            </Typography>
                        </Box>
                    </Grid>
                )
            })}

            {gridItemsHidden().map((e) => {
                const {src, alt, text} = e;
                return(
                    <Grid item sx={{display: {md:'none', sm:'block'}}} xs={6}>
                        <Box className="card"
                             sx={{  position: 'relative', borderRadius: 5, overflow: 'hidden'}}
                        >
                            <img src={src}
                                 sx={{display: 'block', objectFit: 'cover'}}
                                 className='card_image' alt={alt}/>
                            <Typography className='card_text'
                                        sx={{ left: 20, bottom: 10, position: 'absolute', fontSize: 24, lineHeight: 30}}
                                        component="h3">
                                {text}
                            </Typography>
                        </Box>
                    </Grid>
                )
            })}
        </Grid>
    );
}

export default GridItem;