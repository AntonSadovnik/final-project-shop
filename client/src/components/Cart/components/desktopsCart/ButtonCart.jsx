// import {useMediaQuery} from "@mui/material";
import {NavLink} from "react-router-dom";
import * as React from "react";
import {useMemo} from "react";
import {useSelector} from "react-redux";
import CustomButton from "../../../Button/Button";


export default function ButtonCart (props) {

  const {products} = useSelector(state => state.cart.cart)
  const {
    setOpen
  } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const button = useMemo(() => (products.length === 0 &&
    <CustomButton disabled={products.length === 0} textStyle={{color: 'text.btnText'}} title="CHECKOUT"
                  onClick={handleClose}>
      Checkout
    </CustomButton> || products.length > 0 &&
    <NavLink to="/ordering" style={{textDecoration: 'inherit'}}>
      <CustomButton disabled={products.length === 0} textStyle={{color: 'text.btnText'}} title="CHECKOUT"
                    onClick={handleClose}>
        Checkout
      </CustomButton>
    </NavLink>),  [products.length > 0])


  return button
}