import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import ProductCard from '../Card/Card';
import Select from '../Select/Select';

import './cardList.scss'

export default function CardList() {
    const items = [{
        id: 1,
        title: "Set # 5",
        portion: "1600gmm, 40Items",
        price: "2150UAH",
        imgSrc: 'https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660057827/sushi-shop/products/sets/set5_mx8hp9.png',
        article: 'e34678'
    }, {
        id: 2,
        title: "Baked set",
        portion: "1000gmm, 24Items",
        price: "1170UAH",
        imgSrc: 'https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660057826/sushi-shop/products/sets/bakedset_qpaub0.png',
        article: 'e3467876'
    }, {
        id: 3,
        title: "Set # 2",
        portion: "895gmm, 22Items",
        price: "1530UAH",
        imgSrc: 'https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660057825/sushi-shop/products/sets/86_qcitmh.png',
        article: 'e346y872'
    }, {
        id: 4,
        title: "Set # 1",
        portion: "590gmm, 18Items",
        price: "1025UAH",
        imgSrc: 'https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660057825/sushi-shop/products/sets/88_i9wklx.png',
        article: 'e346yt1'
    }, {
        id: 5,
        title: "Set #6",
        portion: "1315gmm, 32Items",
        price: "1675UAH",
        imgSrc: 'https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660057825/sushi-shop/products/sets/set6_k9ovrf.png',
        article: 'e346yt4'
    }, {
        id: 6,
        title: "Set DJ FM",
        portion: "950gmm, 24Items",
        price: "1225UAH",
        imgSrc: 'https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660057824/sushi-shop/products/sets/djfmset_gzq4kf.png',
        article: 'e346yt5'
    }, {
        id: 7,
        title: "Set # 3",
        portion: "950gmm, 24Items",
        price: "1240UAH",
        imgSrc: 'https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660057824/sushi-shop/products/sets/22-1_wo82ch.png',
        article: 'e346yt0'
    }, {
        id: 8,
        title: "Set # 4",
        portion: "2120gmm, 54Items",
        price: "3130UAH",
        imgSrc: 'https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660057824/sushi-shop/products/sets/87_pgjvdy.png',
        article: 'e346yt3'
    }, {
        id: 9,
        title: "Set #7",
        portion: "650gmm, 16Items",
        price: "1305UAH",
        imgSrc: 'https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660548882/sushi-shop/products/sets/set7_n2kn2g.png',
        article: 'e346yt9'
    }
    ];
    const listItems = items.map((item) =>
        <Grid xs={4}>
            <ProductCard data={item} />
        </Grid>
    );
    return (
        <>  
            <div className='catalog-title'>
                <h1>Sets</h1>
                <span>
                    <img src='https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660240222/sushi-shop/Nav/%D0%A1%D0%B5%D1%82%D1%8B_kqi7dj.svg'/>
                </span>
                <Select className="select"/>
            </div>
            <Grid container spacing={6} sx={{
                maxWidth: '1260px',
            }}>
                {listItems}
            </Grid>
        </>
    );
}