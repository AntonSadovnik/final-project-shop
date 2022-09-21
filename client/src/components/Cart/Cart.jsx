import * as React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import CustomButton from '../Button/Button'
import ProductsInCart from "./ProductsInCart";


export default function Cart(props) {
  const {products} = useSelector(state => state.cart.cart)
  const price = products.map(j => j.product.currentPrice * j.cartQuantity)
  const sum = () => {
    let s = 0;
    for (let i = 0; i < price.length; i += 1) {
      s += price[i]
    }
    return s
  }
  const {open, setOpen, scroll} = props;

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const {current: descriptionElement} = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const button = products.length === 0 &&
    <CustomButton disabled={products.length === 0} textStyle={{color: 'text.btnText'}} title="CHECKOUT"
                  onClick={handleClose}>
      Checkout
    </CustomButton> || products.length > 0 &&
    <NavLink to="/ordering" style={{textDecoration: 'inherit'}}>
      <CustomButton disabled={products.length === 0} textStyle={{color: 'text.btnText'}} title="CHECKOUT"
                    onClick={handleClose}>
        Checkout
      </CustomButton>
    </NavLink>

  return (
    <div>
      <Dialog open={open}
              onClose={handleClose} scroll={scroll} aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description">
        <Box minWidth='600px'>
          <DialogTitle>Your basket</DialogTitle>
        </Box>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText ref={descriptionElementRef} tabIndex={-1}>
            {
              products.length === 0 && <Box>
                <Typography  display="flex" justifyContent="center">Your cart is empty</Typography>
                 <Box display="flex" justifyContent="center">
                   <img
                    src="https://st2.depositphotos.com/1007168/6107/v/950/depositphotos_61077089-stock-illustration-black-and-white-horse-cartoon.jpg"
                    height='30%' width="30%" alt=""/>
                 </Box>
              </Box>
            }
            <ProductsInCart/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Typography variant="h6" component="span" color="black" sx={{mr: '2rem'}}>
            {sum()}&#8372;
          </Typography>
          {button}
        </DialogActions>
      </Dialog>
    </div>
  );
}