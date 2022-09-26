import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import React from "react";
import {useSelector} from "react-redux";


function CartIcon () {
  const {products} = useSelector(state => state.cart.cart)
  const quantityProductsInCart = products.reduce((prev, curr) => prev + curr.cartQuantity,0)

  return <Badge badgeContent={quantityProductsInCart} color="primary">
    <ShoppingCartIcon
      color="grayColor"
      sx={{
        fontSize: '40px',
      }}
    />
  </Badge>
}
export default CartIcon;