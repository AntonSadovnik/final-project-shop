import * as React from "react";
import {useSelector} from "react-redux";
import CartItemMob from "./CartItemMob";

export default function ProductsInMobCart () {
  const {products} = useSelector(state => state.cart.cart)

  const prod = products.map(item =><CartItemMob key={item.product._id} item={item}/>)
  return prod
}