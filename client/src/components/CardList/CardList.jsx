import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';
import ProductCard from '../Card/Card';
import SortSelect from '../SortSelect/SortSelect';
import { items } from './config';

import './cardList.scss'

export default function CardList() {

    const listItems = items.map((item) =>
        <Grid xs={2} key={item.id}>
            <ProductCard data={item} />
        </Grid>
    );

    return (
        <Box sx={{ padding: '30px 0px' }}>
            <Stack direction="row" justifyContent="space-between" spacing={2} sx={{ paddingBottom: '30px' }}
            xs={{ flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }} xs={{ flexDirection: 'column' }}>
                    <Box
                        component='img'
                        sx={{
                            height: 43
                        }}
                        alt='Sets svg'
                        src='https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660240222/sushi-shop/Nav/%D0%A1%D0%B5%D1%82%D1%8B_kqi7dj.svg'
                    />
                    {/* <img src='https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660240222/sushi-shop/Nav/%D0%A1%D0%B5%D1%82%D1%8B_kqi7dj.svg' alt='' /> */}
                    <Typography component="h1" sx={{ fontSize: '36px', fontWeight: 'bold', marginLeft: '20px'}}>
                        Sets
                    </Typography>
                </Box>
                    <SortSelect className="select" />

            </Stack>
            <Grid container columns={{ xs: 2, md: 4, lg: 6 }} rowSpacing='30px' columnSpacing={{ md: '50px', lg: '40px' }} sx={{
                maxWidth: '950px',

            }}>
                {listItems}
            </Grid>
        </Box>
    );
}