import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, CardMedia, Typography, CardActionArea, Stack } from '@mui/material';
import { useParams, NavLink } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircle from '@mui/icons-material/RemoveCircle';
import NavigateBefore from '@mui/icons-material/NavigateBefore';
import NavigateNext from '@mui/icons-material/NavigateNext';
import { getProduct, getProductsByCategory } from "../../api/Api";
import CustomButton from '../Button/Button';


import { addToCart } from '../../store/actions';




function ProductCard() {
    const [product, setProduct] = useState({});
    const [forwardProductId, setForwardProductId] = useState("");
    const [backProductId, setBackProductId] = useState("");
    const [quantityGoods, setQuantityGoods] = useState(1);

    const dispatch = useDispatch()
    const { id } = useParams();
    const cardPicture = "imageUrls" in product ? product.imageUrls[0] : "";
    const cardWeight = "weight" in product ? product.weight : "";
    const cardTitle = "name" in product ? product.name : "";
    const cardPrice = "currentPrice" in product ? product.currentPrice : "";
    const cardPpromoPrice = "previousPrice" in product ? product.previousPrice : "";
    let cardCompound = "ingredients" in product ? product.ingredients : "";
    cardCompound = "contains" in product ? product.contains.toString() : cardCompound;
    const displayCompound = cardCompound !== "" ? "block" : "none";
    const displaycardPpromoPrice = cardPpromoPrice !== "" ? "block" : "none";



    const showProduct = () => getProduct(id).then(({ data: { products } }) => {
        getProductsByCategory(products[0].categories).then((data) => {
            const currentProductId = data.data.products.findIndex(element => element.itemNo === id);
            const forvardProd = (typeof data.data.products[currentProductId + 1] === 'undefined' ? 0 : currentProductId + 1);
            setForwardProductId(`/products/${data.data.products[forvardProd].itemNo}`);

            const backProd = typeof data.data.products[currentProductId - 1] === 'undefined' ? data.data.products.length - 1 : currentProductId - 1;
            setBackProductId(`/products/${data.data.products[backProd].itemNo}`);
        });
        return setProduct(products[0]);
    })

    useEffect(() => {
        showProduct();
    }, [])

    useEffect(() => {
        showProduct();
    }, [id])

    const addQuantity = () => {
        setQuantityGoods(quantityGoods + 1);
    }

    const minusQuantity = () => {
        if (quantityGoods > 1) { setQuantityGoods(quantityGoods - 1) };
    }

    const onClickButton = () => {
        product.cartQuantity = quantityGoods;
        dispatch(addToCart(product));
    }




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
                style={{ paddingLeft: 30, paddingRight: 30 }}
                sx={{
                    height: { xs: '60px', sm: '80px', md: '90px', lx: '110px' },
                }}
            >

                <NavLink to={backProductId}
                    style={{
                        textDecoration: 'none',
                    }}
                >

                    <Stack
                        variant="contained"
                        component="a"
                        direction="row"
                        alignItems="center"
                        className="product-card__switch-in-sheet"
                    >

                        <NavigateBefore
                            style={{
                                background: '#F46D40',
                                color: '#F2F2F2',
                                borderRadius: '50px',
                                height: '20px',
                                width: '20px',
                            }}
                        />


                        <Typography
                            variant="body2"
                            component="span"
                            style={{
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '18px',
                                lineHeight: '22px',
                            }}
                            sx={{
                                color: { xs: '#000000' },
                                margin: { xs: '0 0 0 12px', sm: '0 0 0 15px', md: '0 0 0 17px', lx: '0 0 0 18px' },
                            }}
                        >
                            Back
                        </Typography>


                    </Stack>
                </NavLink>


                <NavLink to={forwardProductId}
                    style={{
                        textDecoration: 'none',
                    }}
                >
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
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '18px',
                                lineHeight: '22px',
                            }}
                            sx={{
                                color: { xs: '#000000' },
                                margin: { xs: '0 13px 0 0', sm: '0 15px 0 0', md: '0 17px 0 0', lx: '0 19px 0 0' },

                            }}
                        >
                            Forward
                        </Typography>

                        <NavigateNext
                            style={{
                                background: '#F46D40',
                                color: '#F2F2F2',
                                borderRadius: '50px',
                                height: '20px',
                                width: '20px',
                            }}
                        />
                    </Stack>
                </NavLink>


            </Stack>

            <Grid container
                xs={12}
                spacing={0}
                className="product-card_grid"
                sm={{
                    width: '100 %',
                }}
                sx={{
                    height: { sm: '350px', md: '400px', lx: '700px' },
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
                            style={{
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: "flex-start",
                            }}
                            display='flex'
                            justifyContent="center"
                            alignItems="flex-start"
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
                                {cardTitle}
                            </Typography>

                            <Typography
                                className="product-card_grid-prodact-weight"
                                variant="body2"
                                component="p"
                                sm={{
                                    fontStyle: 'normal',
                                    fontWeight: '300',
                                }}
                                sx={{
                                    padding: { xs: '30px 0' },
                                    color: { xs: '#FF9846' },
                                    fontSize: { xs: '18px', sm: '20px', md: '22px', lx: '23px' },
                                    lineHeight: { xs: '22px', sm: '24px', md: '26px', lx: '28px' },
                                }}
                            >
                                {cardWeight} grams
                            </Typography>



                            <Stack
                                direction="row"
                                spacing={2}
                                justifyContent="space-around;"
                                alignItems="center"
                                sx={{
                                    maxWidth: { md: '500px' },
                                }}
                            >

                                <Typography
                                    sx={{
                                        textDecoration: 'line-through',
                                        color: { xs: '#000000' },
                                        fontSize: { xs: '20px', sm: '23px', md: '24px', lx: '25px' },
                                        lineHeight: { xs: '23px', sm: '28px', md: '28px', lx: '32px' },
                                    }}
                                    component="h5"
                                    display={displaycardPpromoPrice}
                                >
                                    {cardPpromoPrice}
                                </Typography>


                                <Typography
                                    className="product-card_grid-prodact-price"
                                    variant="h4"
                                    component="span"
                                    sm={{
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                    }}
                                    sx={{
                                        color: { xs: '#000000' },
                                        fontWeight: 'bold',
                                        fontSize: { xs: '24px', sm: '25px', md: '25px', lx: '27px' },
                                        lineHeight: { xs: '27px', sm: '30px', md: '30px', lx: '34px' },
                                    }}
                                >
                                    {cardPrice} UAH
                                </Typography>



                                <Stack
                                    className="product-card_grid-blok-count"
                                    direction="row"
                                    spacing={1}
                                    justifyContent="space-between"
                                    alignItems="center"
                                    sx={{
                                        margin: { xs: '0 19px', sm: '0 22px', md: '0 25px', lx: '0 30px' },
                                    }}
                                >

                                    <RemoveCircle
                                        style={{ color: '#F46D40' }}
                                        fontSize='large'
                                        onClick={minusQuantity}
                                    />

                                    <Typography
                                        className="product-card_grid-count"
                                        variant="h4"
                                        component="h6"
                                        sm={{
                                            fontStyle: 'normal',
                                            fontWeight: '700',
                                            margin: '0 19px',
                                        }}
                                        sx={{
                                            color: { xs: '#000000' },
                                            fontSize: { xs: '24px', sm: '24px', md: '26px', lx: '27px' },
                                            lineHeight: { xs: '27px', sm: '30px', md: '30px', lx: '34px' },
                                        }}
                                    >
                                        {quantityGoods}

                                    </Typography>


                                    <AddCircleIcon
                                        fontSize='large'
                                        style={{ color: '#F46D40' }}
                                        onClick={addQuantity}
                                    />


                                </Stack>

                            </Stack>


                            <Stack
                                direction="column"
                                justifyContent="center"
                                spacing={1}
                                display={displayCompound}

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
                                        margin: { xs: '0 0 5px 0', md: '26px 0 5px 0' },
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

                        <CustomButton
                            title="Want!"
                            onClick={onClickButton}
                            textStyle={{
                                color: '#F2F2F2',
                                borderRadius: '5px',
                                padding: '5px 65px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: '23px',
                                lineHeight: '28px',
                                textAlign: 'center',
                            }}
                            btnStyle={{
                                background: '#F46D40',
                                margin: { xs: '50px 0 0' },
                                padding: { xs: '0' },
                            }}
                        />

                    </Stack>

                </Grid >

            </Grid >

        </Stack >

    );
}

export default ProductCard;

