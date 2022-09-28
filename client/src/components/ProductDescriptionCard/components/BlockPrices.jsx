import { React } from 'react';
import { Typography, Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircle from '@mui/icons-material/RemoveCircle';

function BlockPrices(props) {
    const { minusQuantity, quantityGoods, addQuantity, currentPrice, previousPrice, } = props;

    return (
        <>
            <Stack direction="row" alignItems="center"
                justifyContent="space-around"
                spacing={0}
                sx={{ maxWidth: { md: '500px' } }}
            >
                {previousPrice && (
                    <Typography component="h5"
                        sx={{
                            textDecoration: 'line-through',
                            color: '#000000',
                            fontSize: { xs: '20px', sm: '22px', md: '23px', xl: '24px', },
                            lineHeight: { xs: '23px', sm: '28px', xl: '32px' },
                            marginBottom: { xs: '10px', md: '15px', xl: '20px' },
                        }} >
                        {previousPrice} UAH
                    </Typography>
                )}
            </Stack>

            <Stack direction="row" alignItems="center"
                justifyContent="space-around"
                spacing={1}
                sx={{ maxWidth: { md: '500px' } }}
            >
                <Typography variant="h4" component="h5"
                    sm={{ fontWeight: '700' }}
                    sx={{
                        color: { xs: '#000000' },
                        fontWeight: 'bold',
                        fontSize: { xs: '24px', sm: '25px', md: '26px', xl: '30px' },
                        lineHeight: { xs: '27px', sm: '30px', xl: '34px' },
                        marginRight: { xs: '5px', xl: '10px' },
                    }} >
                    {currentPrice} UAH
                </Typography>

                <Stack direction="row" alignItems="center"
                    justifyContent="space-between"
                    spacing={1}
                >
                    <RemoveCircle fontSize="large" onClick={minusQuantity}
                        sx={{ color: '#F46D40', cursor: 'pointer' }}
                    />

                    <Typography variant="h4" component="h6"
                        sm={{ fontWeight: '700', margin: '0 19px', }}
                        sx={{
                            fontWeight: '700',
                            color: { xs: '#000000' },
                            fontSize: { xs: '24px', md: '26px', xl: '27px' },
                            lineHeight: { xs: '27px', sm: '30px', xl: '34px' },
                        }}>
                        {quantityGoods}
                    </Typography>

                    <AddCircleIcon fontSize="large" onClick={addQuantity}
                        sx={{ color: '#F46D40', cursor: 'pointer' }}
                    />
                </Stack>
            </Stack>
        </>
    );
} export default BlockPrices;
