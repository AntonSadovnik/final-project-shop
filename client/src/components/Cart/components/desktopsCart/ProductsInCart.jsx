import {Typography, Box} from '@mui/material';
import * as React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import CartItem from "./CartItem";

export default function ProductsInCart({setOpen}) {

  const {products} = useSelector(state => state.cart.cart)

  const productItems = products.map(i => <CartItem key={i.product.itemNo} i={i}/>)
  const handleClose = () => {
    setOpen(false);
  };

  return (<>
      {
        products.length === 0 &&
        <Box sx={{display: "flex", justifyContent: "center"}} onClick={()=>handleClose()}>
          <NavLink to="/" style={{textDecoration: 'inherit'}}>
            <Typography
              variant='span'
              color='text.primary'
              display="flex"
              justifyContent="center"
              fontSize='21px'
              fontWeight='500'>
              Your basket is empty. Click to order.
            </Typography>
            <Box display="flex" justifyContent="center" sx={{mt: 2}}>
              <img
                src="https://st2.depositphotos.com/1007168/6107/v/950/depositphotos_61077089-stock-illustration-black-and-white-horse-cartoon.jpg"
                height='30%' width="30%" alt=""/>
            </Box>
          </NavLink>
        </Box>
      }
      {productItems}
    </>
  )
}