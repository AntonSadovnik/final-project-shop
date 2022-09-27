import * as React from 'react';
import {useSelector} from "react-redux";
import {useMemo} from "react";
import {NavLink} from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import ProductsInMobCart from "./components/mobCart/ProductsInMobCart";

export default function CartMob() {
  const {products} = useSelector(state => state.cart.cart)

  const productQuantity = products.map(i => i.cartQuantity)
  let sumQuantity = 0
  for (let i = 0; i < productQuantity.length; i += 1) {
    sumQuantity += productQuantity[i]
  }
  const productPrice = products.map(i => i.product.currentPrice * i.cartQuantity)
  let sumForPay = 0
  for (let i = 0; i < productPrice.length; i += 1) {
    sumForPay += productPrice[i]
  }
  const cartFooter = useMemo(() => <Box sx={{
    mb: 1,
    px: 5,
    fontSize: "18px",
    borderBottom: ' .5px #A4ACAD solid',
    display: 'flex',
    justifyContent: 'space-between'
  }}>
    <Typography fontSize='18px' fontWeight='400'>
      Delivery
    </Typography>
    <Typography fontSize='18px' fontWeight='400'>
      Free
    </Typography>
  </Box>, []);
  const cartFooterTitle = useMemo(() => <Box sx={{display: "flex", justifyContent: "center"}}>
    <Typography variant='span' color='text.hoverText' fontSize='24px' fontWeight='500' sx={{mb: 1}}>Pay for
      oder</Typography>
  </Box>, []);
  const cartTitle = useMemo(() => <Typography variant='span' color='text.primary' fontSize='24px' fontWeight='500'>
    Your basket
  </Typography>, []);

  return (
    <Box sx={{bgcolor: "backgroungColor.main", pt:2}}>
      <Box sx={{display: "flex", justifyContent: "center", pb:2}}>
        {products.length === 0 &&
        <NavLink to="/"  style={{textAlign: 'center', textDecoration: 'inherit'}}>
          <Box display="flex" justifyContent="center" sx={{mb:2}}>
            <img
              src="https://st2.depositphotos.com/1007168/6107/v/950/depositphotos_61077089-stock-illustration-black-and-white-horse-cartoon.jpg"
              height='30%' width="30%" alt=""/>
          </Box>
          <Typography variant='span' color='text.primary' fontSize='24px' fontWeight='500'>
            Your basket is empty. Click to order.
          </Typography>
        </NavLink>}
        {products.length !== 0 && cartTitle}
      </Box>

      <ProductsInMobCart/>
      {products.length !== 0 &&
      <Card sx={{m:.5}}>
        {cartFooterTitle}
        <Box sx={{
          mb: 2,
          px: 5,
          fontSize: "18px",
          borderBottom: ' .5px #A4ACAD solid',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Typography fontSize='18px' fontWeight='400'>
            {sumQuantity}
          </Typography>
          <Typography fontSize='18px' fontWeight='400'>
            {sumForPay} &#8372;
          </Typography>
        </Box>

        {cartFooter}
      </Card>}
      {products.length !== 0 &&
      <Box sx={{display: "flex", justifyContent: "center"}}>
        <NavLink to="/ordering" style={{textDecoration: 'inherit'}}>
          <Button variant="contained">
            <Typography variant='subtitle2' color='text.btnText'>
              CHECKOUT
            </Typography>
          </Button>
        </NavLink>
      </Box>}
    </Box>
  );
}
