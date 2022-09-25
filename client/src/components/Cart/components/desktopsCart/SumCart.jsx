import {useSelector} from "react-redux";
import {Typography} from "@mui/material";
import * as React from "react";

export default function SumCart() {
  const {products} = useSelector(state => state.cart.cart)
  const price = products.map(j => j.product.currentPrice * j.cartQuantity)
  const sum = price.reduce((total, currentValue) => total + currentValue ,0)

  return <Typography variant="h6" component="span" color="black" sx={{mr: '2rem'}}>
    {sum}&#8372;
  </Typography>
}