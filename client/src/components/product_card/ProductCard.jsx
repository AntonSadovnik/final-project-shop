import React from 'react';
import { Card, Grid, Button, CardMedia, CardContent, Typography, CardActions, CardActionArea, Stack } from '@mui/material';

// import { createTheme } from '@mui/material/styles';
// import { makeStyles } from '@mui';
// import { styled } from '@mui/material/styles';
// import { makeStyles } from '@material-ui/core/styles';


const cardPicture = "/images/img_productCard/set_img.jpg";
const cardMinus = "/images/img_productCard/minus.png";
const cardAdd = "/images/img_productCard/add.png";
const cardWeight = "290 grams";
const cardPrice = "110";
const quantityGoods = "1";
const cardCompound = "Salmon, Philadelphia cheese, cucumber, avocado";

function ProductCard() {

    // const theme = createTheme({
    //     palette: {
    //         hex: {
    //             main: '#FF9846',
    //         }
    //     }
    // });

    // const useStyles = makeStyles({
    //     // root: {
    //     //     maxWidth: 345,
    //     // },
    //     // media: {
    //     //     height: 140,
    //     // },
    // });


    return (

        <Card>
            {/* className={classes.root} */}
            <Grid container spacing={0}>
                <Grid container item xs={12} sm={12} md={7} lg={7} xl={7}>
                    <CardActionArea>
                        <Stack
                            spacing={1}
                            justifyContent="center"
                            alignItems="flex-end"
                        >
                            <CardMedia
                                component="img"
                                height="435"
                                image={cardPicture}
                                alt="set picture"
                            // className={classes.media}
                            />
                        </Stack>

                    </CardActionArea>
                </Grid>
                <Grid container item xs={12} sm={12} md={5} lg={5} xl={5} >

                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={4}
                    >

                        <CardContent>

                            <CardActionArea>

                                <Typography
                                    variant="h3"
                                    component="h3"
                                    font-style="normal"
                                    font-weight="500"
                                    font-size="48px"
                                    line-height="60px"
                                >
                                    Philadelphia and
                                    salmon set
                                </Typography>

                                <Typography
                                    variant="body2"
                                    // color="textSecondary"
                                    component="p"
                                // color={theme.palette.hex}
                                >
                                    {cardWeight}
                                </Typography>

                                <Stack
                                    weight="112"
                                    direction="row"
                                    spacing={1}
                                    justifyContent="flex-start"
                                    alignItems="center"
                                >
                                    <Typography
                                        variant="h3"
                                        component="span"
                                        margin-top="20px"
                                    >
                                        {cardPrice}$
                                    </Typography>

                                    <CardMedia
                                        component="img"
                                        // height="40px"
                                        weight="40px"
                                        image={cardMinus}
                                        alt="Minus"
                                    />

                                    <Typography
                                        variant="h3"
                                        component="h3"
                                    >
                                        {quantityGoods}

                                    </Typography>


                                    <CardMedia
                                        component="img"
                                        height="40"
                                        weight="40"
                                        image={cardAdd}
                                        alt="Add"
                                    />

                                </Stack>

                                {/* <Typography
                                        variant="h3"
                                        component="span"
                                        margin-top="20px"
                                    >
                                        {cardPrice} $
                                    </Typography> */}



                            </CardActionArea>


                            <CardActionArea>

                                <Typography
                                    variant="h4"
                                    component="h6"
                                >
                                    Compound:
                                </Typography>

                                <Typography
                                    variant="body2"
                                    component="p"
                                // color={theme.palette.hex}
                                >
                                    {cardCompound}
                                </Typography>

                            </CardActionArea>
                        </CardContent>


                        <CardActions component="div">
                            <Button variant="contained" size="small" color="primary">
                                Want!
                            </Button>
                        </CardActions>

                    </Stack>

                </Grid>

            </Grid >



        </Card >
    );
}

export default ProductCard;
