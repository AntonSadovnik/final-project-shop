import { React, useState, useEffect } from 'react';
import { Grid, CardMedia, Typography, CardActionArea, Stack } from '@mui/material';
// CardContent,
import { useParams } from "react-router-dom";

// import axios from 'axios';
import getProduct from "../../api/getProduct";
// import getProducts from "../../api/getProducts";

// import { useSelector } from 'react-redux';



function ProductCard() {
    const [product, setProduct] = useState({});

    const { id } = useParams();


    useEffect(() => {
        getProduct(id).then((products) => { const pr = products; setProduct({ pr }); console.log(product); })
        console.log(product);
    }, []);


    const cardPicture = "/images/img_productCard/set_img.jpg";
    const cardMinus = "/images/img_productCard/minus.png";
    const cardAdd = "/images/img_productCard/add.png";
    const cardForward = "/images/img_productCard/forward.png";
    const cardBack = "/images/img_productCard/back.png";
    const cardWeight = "290 grams";
    // const cardPrice = product.currentPrice ? product.currentPrice : 110;
    const quantityGoods = "1";
    const cardCompound = "Salmon, Philadelphia cheese, cucumber, avocado";

    return (

        <Stack
            className="product-card"
            style={{
                margin: '0 auto',
            }}
        >

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
                    />

                    <Typography
                        variant="body2"
                        component="span"
                        style={{
                            marginRight: '21px',
                            marginLeft: '18px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '18px',
                            lineHeight: '22px',
                        }}
                        sx={{
                            color: { xs: '#000000' },
                        }}
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
                        style={{
                            marginRight: '21px',
                            marginLeft: '21px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '18px',
                            lineHeight: '22px',
                        }}
                        sx={{
                            color: { xs: '#000000' },
                        }}
                    >
                        Back
                    </Typography>

                    <CardMedia
                        className="product-card__switch-img"
                        component="img"
                        image={cardBack}
                        alt="set picture"
                        sm={{
                            height: '20px',
                            width: '20px',
                        }}
                    />
                </Stack>


            </Stack>

            <Grid container
                xs={12}
                spacing={0}
                className="product-card_grid"
                sm={{
                    width: '100 %',
                }}
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
                    sm={{
                        width: '100 %',
                    }}
                    sx={{
                        padding: { xs: '7px 7px', md: '20px 20px' },
                    }}
                >

                    <Stack
                        className="product-card_grid-item-container"
                        direction="column"
                        justifyContent="center"
                        // alignItems="flex-start"
                        spacing={2}
                        sm={{
                            marginBottom: '47px',
                        }}
                        sx={{
                            alignItems: { xs: 'center', md: 'flex-start' },
                            margin: { xs: '0 auto', md: 'none' },
                        }}
                    >

                        <Stack
                            className="product-card_grid-prodact-info"
                            sm={{
                                width: '100 %',
                            }}

                            direction="column"
                            justifyContent="center"
                            sx={{
                                alignItems: { xs: 'center', md: 'flex-start' },
                            }}
                        >

                            <Typography
                                className="product-card_grid-title"
                                variant="h3"
                                component="h3"
                                sm={{
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                }}
                                sx={{
                                    textAlign: { xs: 'center', md: 'start' },
                                    color: { xs: '#000000' },
                                    fontSize: { xs: '28px', sm: '38px', md: '48px', lx: '58px' },
                                    lineHeight: { xs: '35px', sm: '48px', md: '60px', lx: '70px' },
                                }}
                            >
                                Philadelphia and
                                salmon set
                            </Typography>

                            <Typography
                                className="product-card_grid-prodact-weight"
                                variant="body2"
                                component="p"
                                sm={{
                                    fontStyle: 'normal',
                                    fontWeight: '300',
                                    fontSize: '18px',
                                    lineHeight: '22px',
                                }}
                                sx={{
                                    padding: { xs: '30px 0' },
                                    color: { xs: '#FF9846' },
                                }}
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
                                    variant="h4"
                                    component="span"
                                    sm={{
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '24px',
                                        lineHeight: '30px',
                                        marginRight: '30px',
                                    }}
                                    sx={{
                                        color: { xs: '#000000' },
                                    }}
                                >
                                    {product.currentPrice ? product.currentPrice : 110}$
                                </Typography>


                                <Stack
                                    className="product-card_grid-blok-count"
                                    direction="row"
                                    spacing={1}
                                    justifyContent="space-between"
                                    alignItems="center"
                                    sm={{
                                        margin: '0 19px',
                                    }}
                                >

                                    <CardMedia
                                        className="product-card_grid-img-minus"
                                        component="img"
                                        image={cardMinus}
                                        alt="Minus"
                                        sm={{
                                            height: '2px',
                                            width: '10px',
                                        }}
                                    />

                                    <Typography
                                        className="product-card_grid-count"
                                        variant="h4"
                                        component="h6"
                                        sm={{
                                            fontStyle: 'normal',
                                            fontWeight: '700',
                                            fontSize: '36px',
                                            lineHeight: '45px',
                                            margin: '0 19px',
                                        }}
                                        sx={{
                                            color: { xs: '#000000' },
                                        }}
                                    >
                                        {quantityGoods}

                                    </Typography>


                                    <CardMedia
                                        className="product-card_grid-img-add"
                                        component="img"
                                        image={cardAdd}
                                        alt="Add"
                                        sm={{
                                            width: '30px',
                                            height: '30px',
                                            margin: '10px',
                                        }}

                                    />


                                </Stack>

                            </Stack>

                            <Stack
                                direction="column"
                                justifyContent="center"
                                spacing={1}
                                sx={{
                                    margin: { xs: '26px 0 5px 0' },
                                    alignItems: { xs: 'center', md: 'flex-start' },
                                }}
                            >

                                <Typography
                                    className="product-card_grid-compound-title"
                                    variant="h6"
                                    component="h6"
                                    sm={{
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: '18px',
                                        lineHeight: '22px',
                                        margin: '26px 0 5px 0',
                                    }}
                                    sx={{
                                        margin: { xs: '26px 0 5px 0' },
                                        textAlign: { xs: 'center', md: 'start' },
                                        color: { xs: '#111111' },
                                    }}
                                >
                                    Compound:
                                </Typography>

                                <Typography
                                    className="product-card_grid-compound"
                                    variant="body2"
                                    component="p"
                                    sx={{
                                        fontStyle: 'normal',
                                        fontWeight: '300',
                                        fontSize: '18px',
                                        lineHeight: '22px',
                                        textAlign: { xs: 'center', md: 'start' },
                                        color: { xs: '#111111' },
                                    }}
                                >
                                    {cardCompound}
                                </Typography>

                            </Stack>

                        </Stack>

                        <Stack
                            variant="contained"
                            component="a"
                            direction="row"
                            alignItems="center"
                            className="product-card_grid-button-want"
                            sx={{
                                borderRadius: '5px',
                                padding: '5px 65px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: '24px',
                                lineHeight: '30px',
                                textAlign: 'center',
                                color: { xs: '#F2F2F2' },
                                background: { xs: '#F46D40' },
                            }}

                        >
                            WANT!
                        </Stack>

                    </Stack>

                </Grid >

            </Grid >

        </Stack >

    );
}

export default ProductCard;
