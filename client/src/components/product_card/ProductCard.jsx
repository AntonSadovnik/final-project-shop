import React from 'react';
import { Grid, CardMedia, CardContent, Typography, CardActionArea, Stack } from '@mui/material';

const cardPicture = "/images/img_productCard/set_img.jpg";
const cardMinus = "/images/img_productCard/minus.png";
const cardAdd = "/images/img_productCard/add.png";
const cardForward = "/images/img_productCard/forward.png";
const cardBack = "/images/img_productCard/back.png";
const cardWeight = "290 grams";
const cardPrice = "110";
const quantityGoods = "1";
const cardCompound = "Salmon, Philadelphia cheese, cucumber, avocado";

function ProductCard() {

    return (

        <Stack

            className="product-card" >

            <Stack
                className="product-card_block-switch"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={4}
                style={{ height: 120, paddingLeft: 30, paddingRight: 30 }}
            >

                <Stack
                    variant="contained"
                    component="a"
                    direction="row"
                    alignItems="center"
                    className="product-card__switch-in-sheet"
                >

                    <CardMedia
                        component="img"
                        height="20"
                        image={cardForward}
                        alt="set picture"
                        style={{ marginRight: 10 }}
                    />

                    <Typography
                        variant="body2"
                        component="span"
                    >
                        Forward
                    </Typography>


                </Stack>



                <Stack
                    variant="contained"
                    component="a"
                    direction="row"
                    alignItems="center"
                    className="product-card__switch-in-sheet"
                >

                    <Typography
                        className="product-card__switch-text"
                        variant="body2"
                        component="span"
                        style={{ marginRight: 21, marginLeft: 21 }}
                    >
                        Back
                    </Typography>

                    <CardMedia
                        className="product-card__switch-img"
                        component="img"
                        image={cardBack}
                        alt="set picture"
                    />
                </Stack>


            </Stack>

            <Grid container
                xs={12}
                spacing={0}
                className="product-card_grid"
            >

                <Grid container item
                    xs={12} md={7}
                    className="product-card_grid-item"
                >

                    <CardActionArea>
                        <Stack
                            className="product-card_grid-picture-container"
                            spacing={1}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <CardMedia
                                className="product-card_grid-picture"
                                component="img"
                                image={cardPicture}
                                alt="set picture"
                            />
                        </Stack>

                    </CardActionArea>
                </Grid>



                <Grid container item
                    xs={12} md={5}
                    className="product-card_grid-item"
                >

                    <Stack
                        className="product-card_grid-item-container"
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={2}
                    >

                        <CardContent
                            className="product-card_grid-prodact-info"
                        >

                            <Typography
                                className="product-card_grid-title"
                                variant="h3"
                                component="h3"
                            >
                                Philadelphia and
                                salmon set
                            </Typography>

                            <Typography
                                className="product-card_grid-prodact-weight"
                                variant="body2"
                                component="p"
                            >
                                {cardWeight}
                            </Typography>

                            <Stack
                                direction="row"
                                spacing={4}
                                justifyContent="flex-start"
                                alignItems="center"
                            >
                                <Typography
                                    className="product-card_grid-prodact-price"
                                    variant="h3"
                                    component="span"
                                >
                                    {cardPrice}$
                                </Typography>


                                <Stack
                                    className="product-card_grid-blok-count"
                                    direction="row"
                                    spacing={1}
                                    justifyContent="space-between"
                                    alignItems="center"
                                >

                                    <CardMedia
                                        className="product-card_grid-img-minus"
                                        component="img"
                                        image={cardMinus}
                                        alt="Minus"
                                    />

                                    <Typography
                                        className="product-card_grid-count"
                                        variant="h3"
                                        component="h6"
                                    >
                                        {quantityGoods}

                                    </Typography>


                                    <CardMedia
                                        className="product-card_grid-img-add"
                                        component="img"
                                        image={cardAdd}
                                        alt="Add"
                                    />


                                </Stack>

                            </Stack>

                            <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="flex-start"
                                spacing={1}
                            >

                                <Typography
                                    className="product-card_grid-compound-title"
                                    variant="h4"
                                    component="h6"
                                >
                                    Compound:
                                </Typography>

                                <Typography
                                    className="product-card_grid-compound"
                                    variant="body2"
                                    component="p"
                                >
                                    {cardCompound}
                                </Typography>

                            </Stack>

                        </CardContent>

                        <Stack
                            variant="contained"
                            component="a"
                            direction="row"
                            alignItems="center"
                            className="product-card_grid-button-want"
                        >
                            WANT!
                        </Stack>

                    </Stack>

                </Grid>

            </Grid >

        </Stack>

    );
}

export default ProductCard;
