import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import ProductCard from '../Card/Card';
import SortSelect from '../SortSelect/SortSelect';
import { items } from './config';

import './cardList.scss'

export default function CardList() {

    const listItems = items.map((item) =>
        <Grid xs={4} key={item.id}>
            <ProductCard data={item} />
        </Grid>
    );

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Box align='center'>
            <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Box flexDirection='row'>
                    <img src='https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660240222/sushi-shop/Nav/%D0%A1%D0%B5%D1%82%D1%8B_kqi7dj.svg' alt='' />
                    <Typography component="h1" sx={{ fontSize: '20px', fontWeight: 'bold',}}>
                        Sets
                    </Typography>
                </Box>
                    <SortSelect className="select" />

            </Stack>
            <Grid container spacing={6} sx={{
                maxWidth: '1260px',
                marginLeft: 'auto',
                marginRight: 'auto',

            }}>
                {listItems}
            </Grid>
        </Box>
    );
}