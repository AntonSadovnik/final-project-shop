import * as React from 'react';
import {useSelector} from "react-redux";
import {Badge, Button, Typography} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function IconCart () {
  const {products} = useSelector(state => state.cart.cart)
  const quantityProductsInCart = products.reduce((prev, curr) => prev + curr.cartQuantity, 0)
  return (
    <Button
      disableRipple
      sx={{padding: '0', minWidth: 0, flexDirection: 'column'}}
    >
      <Badge badgeContent={quantityProductsInCart} color="primary">
        <ShoppingCartIcon color="hoverColor" sx={{fontSize: '30px'}}/>
      </Badge>
      <Typography color={(theme) => theme.palette.text.primary}>
        Cart
      </Typography>
    </Button>
  );
};