import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';
import ProductCard from '../Card/Card';
import SortSelect from '../SortSelect/SortSelect';
import { items } from './config';

export default function CardList() {

    const listItems = items.map((item) =>
        <Grid xs={1} key={item.id}>
            <ProductCard data={item} />
        </Grid>
    );

    return (
        <Box sx={{ padding: '30px 0px', margin: '0 15px'}}>
            <Stack direction={{xs: 'column', md: "row"}} justifyContent="space-between" alignItems='center' spacing={2} sx={{ paddingBottom: '30px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                    <Box
                        component='img'
                        sx={{
                            height: 43
                        }}
                        alt='Sets svg'
                        src='https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660240222/sushi-shop/Nav/%D0%A1%D0%B5%D1%82%D1%8B_kqi7dj.svg'
                    />
                    <Typography component="h1" sx={{ fontSize: '36px', fontWeight: 'bold', marginLeft: '20px'}}>
                        Sets
                    </Typography>
                </Box>
                    <SortSelect className="select" />

            </Stack>
            <Grid container columns={{ xs: 1, md: 3, lg: 3 }} rowSpacing='30px' columnSpacing={{ md: '40px', lg: '50px' }} sx={{
                maxWidth: '950px',

            }}>
                {listItems}
            </Grid>
        </Box>
    );
}