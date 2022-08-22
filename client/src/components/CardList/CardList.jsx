import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
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
    return (
        <>  
            <div className='catalog-title'>
                <h1>Sets</h1>
                <img src='https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660240222/sushi-shop/Nav/%D0%A1%D0%B5%D1%82%D1%8B_kqi7dj.svg' alt=''/>
                <SortSelect className="select"/>
            </div>
            <Grid container spacing={6} sx={{
                maxWidth: '1260px',
            }}>
                {listItems}
            </Grid>
        </>
    );
}