import React from 'react';
import '../App.scss';
import { Route, Routes } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import Header from '../components/Header/Header';
import Main from '../pages/Main/Main';
import Nav from '../components/Nav/Nav';
import About from '../pages/About/About';
import Footer from '../components/Footer/Footer';
import HeaderMobile from '../components/Header/Header-mobile';
import FooterMobile from '../components/Footer/FooterMobile';
import Ordering from '../pages/Ordering/Ordering';
import Shipping from '../pages/Shipping/Shipping';
import Reviews from '../pages/Rewiews/Reviews';
import Product from '../pages/Product/Product';
import Return from '../pages/Return/Return';
import Products from '../pages/Products/Products';
import Error from '../components/Error/Error';


function AppRouter(){
  return(<Grid
    container
    justifyContent="center"
    sx={{ maxWidth: '2300px', margin: '0 auto' }}
  >
    <Grid item xs={2} sx={{ display: { xs: 'none', md: 'block' } }}>
      <Nav />
    </Grid>
    <Grid item xl={9} md={10} xs={12}>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Header />
      </Box>
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <HeaderMobile />
      </Box>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/ordering" element={<Ordering />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/return" element={<Return />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Footer />
      </Box>
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <FooterMobile />
      </Box>
    </Grid>
  </Grid>
    
)
}


export default  AppRouter;






