import { React } from 'react';
import { Grid, Typography, Stack, } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircle from '@mui/icons-material/RemoveCircle';
import CustomButton from '../../Button/Button';
import ImgPdCard from './ImgPdCard';

function BlockDrawCard(props) {
    const { cardPicture, cardTitle, cardWeight, grams, displaycardPpromoPrice,
        cardPpromoPrice, cardPrice, minusQuantity, quantityGoods, addQuantity,
        displayCompound, cardCompound, onClickButton } = props;

    return (
        <Grid container xs={12} sm={{ width: '100 %', }}
            sx={{ height: { sm: '350px', md: '400px', xl: '700px' }, }} >

            <ImgPdCard cardPicture={cardPicture} />

            <Grid container item xs={12} sm={5} sx={{ padding: { xs: '7px 7px', md: '20px 20px' }, }} >

                <Stack direction="column" justifyContent="center" sm={{ marginBottom: '47px', }}
                    sx={{
                        alignItems: { xs: 'center', md: 'flex-start' },
                        margin: { xs: '0 auto', md: 'none' },
                    }}>

                    <Stack direction="column" justifyContent="center"
                        sm={{ width: '100 %', }}
                        sx={{ alignItems: { xs: 'center', md: 'flex-start' }, }} >

                        <Typography variant="h3" component="h3"
                            sm={{ fontStyle: 'normal', fontWeight: '500', }}
                            sx={{
                                textAlign: { xs: 'center', md: 'start' },
                                color: { xs: '#000000' },
                                fontSize: { xs: '28px', sm: '38px', md: '48px', xl: '58px' },
                                lineHeight: { xs: '35px', sm: '48px', md: '60px', xl: '70px', },
                            }}>
                            {cardTitle}
                        </Typography>

                        <Typography variant="body2" component="p"
                            sm={{ fontStyle: 'normal', fontWeight: '300', }}
                            sx={{
                                margin: { xs: '15px 0', md: '30px 0' },
                                color: { xs: '#FF9846' },
                                fontSize: { xs: '18px', sm: '20px', md: '22px', xl: '23px' },
                                lineHeight: { xs: '22px', sm: '24px', md: '26px', xl: '28px', },
                            }}>
                            {cardWeight} {grams}
                        </Typography>

                        <Stack direction="row" justifyContent="space-around" lignItems="center"
                            spacing={0}
                            sx={{ maxWidth: { md: '500px' }, }} >

                            <Typography component="h5" display={displaycardPpromoPrice}
                                sx={{
                                    textDecoration: 'line-through',
                                    color: { xs: '#000000' },
                                    fontSize: { xs: '20px', sm: '22px', md: '23px', xl: '24px', },
                                    lineHeight: { xs: '23px', sm: '28px', xl: '32px', },
                                    marginBottom: { xs: '10px', md: '15px', xl: '20px', },
                                }} >
                                {cardPpromoPrice} UAH
                            </Typography>
                        </Stack>

                        <Stack direction="row" justifyContent="space-around" alignItems="center"
                            spacing={1} sx={{ maxWidth: { md: '500px' }, }} >

                            <Typography variant="h4" component="h5"
                                sm={{ fontStyle: 'normal', fontWeight: '700', }}
                                sx={{
                                    color: { xs: '#000000' },
                                    fontWeight: 'bold',
                                    fontSize: { xs: '24px', sm: '25px', md: '26px', xl: '30px', },
                                    lineHeight: { xs: '27px', sm: '30px', xl: '34px', },
                                    marginRight: { xs: '5px', xl: '10px', },
                                }} >
                                {cardPrice} UAH
                            </Typography>

                            <Stack direction="row" justifyContent="space-between" alignItems="center"
                                spacing={1} >

                                <RemoveCircle fontSize="large" onClick={minusQuantity}
                                    sx={{ color: '#F46D40', cursor: 'pointer' }} />

                                <Typography variant="h4" component="h6"
                                    sm={{ fontStyle: 'normal', fontWeight: '700', margin: '0 19px', }}
                                    sx={{
                                        fontWeight: '700',
                                        color: { xs: '#000000' },
                                        fontSize: { xs: '24px', md: '26px', xl: '27px', },
                                        lineHeight: { xs: '27px', sm: '30px', xl: '34px', },
                                    }} >
                                    {quantityGoods}
                                </Typography>

                                <AddCircleIcon fontSize="large" onClick={addQuantity}
                                    sx={{ color: '#F46D40', cursor: 'pointer' }} />

                            </Stack>
                        </Stack>

                        <Stack display={displayCompound} direction="column" justifyContent="center" spacing={1}
                            sx={{
                                margin: { xs: '16px 0 5px 0' },
                                alignItems: { xs: 'center', md: 'flex-start' },
                            }}>

                            <Typography variant="h6" component="h6"
                                sm={{ fontStyle: 'normal', fontWeight: '500', fontSize: '18px', lineHeight: '22px', margin: '26px 0 5px 0', }}
                                sx={{
                                    margin: { xs: '0 0 5px 0', md: '26px 0 5px 0' },
                                    textAlign: { xs: 'center', md: 'start' },
                                    color: { xs: '#111111' },
                                }}>
                                Compound:
                            </Typography>

                            <Typography variant="body2" component="p"
                                sx={{
                                    fontStyle: 'normal',
                                    fontWeight: '300',
                                    fontSize: '18px',
                                    lineHeight: '22px',
                                    textAlign: { xs: 'center', md: 'start' },
                                    color: { xs: '#111111' },
                                }}>
                                {cardCompound}
                            </Typography>
                        </Stack>
                    </Stack>

                    <CustomButton title="Want!" onClick={onClickButton}
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
                            background: '#F46D40', padding: { xs: '0' },
                            margin: { xs: '30px 0 0', sm: '35px 0 0', md: '40px 0 0', xl: '50px 0 0' },
                        }} />
                </Stack>
            </Grid>
        </Grid>
    )
} export default BlockDrawCard;
