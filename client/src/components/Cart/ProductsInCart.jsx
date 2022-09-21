import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {Typography,IconButton,Grid, Box, useMediaQuery} from '@mui/material';
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import {decreaseQuantity, increaseQuantity, removeProductFromCart} from "../../store/actions";


export default function ProductsInCart () {

  const dispatch = useDispatch()
  const {products} = useSelector(state => state.cart.cart)
  const matches = useMediaQuery('(max-width:600px)');

  function incrQuantity(itemNo) {
    dispatch(increaseQuantity(itemNo))
  }

  function removeProduct(itemNo) {
    dispatch(removeProductFromCart(itemNo))
  }

  function decrQuantity(itemNo) {
    dispatch(decreaseQuantity(itemNo))
  }

  const prod = products.map(i => (
    <Box key={i.product.itemNo}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={2}>
          <img style={matches
            ? {maxWidth: '2rem', height: '2rem'}
            : {maxWidth: '5rem', height: '3rem'}
          }
               src={i.product.imageUrls[0]} alt="susi"/>
        </Grid>
        <Grid item xs={5}>
          <Typography sx={{width: '100%'}}>
            {i.product.name}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton aria-label="delete" onClick={() => decrQuantity(i.product.itemNo)}>
            <RemoveCircleOutlineIcon color="secondary" fontSize={matches ? 'small' : 'medium'}/>
          </IconButton>
        </Grid>
        <Grid item xs={1} sx={{textAlign: 'right'}}>
          <Typography variant="body2" component="span">
            {i.cartQuantity}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton aria-label="delete" onClick={() => incrQuantity(i.product.itemNo)}>
            <AddCircleOutlineIcon color="secondary" fontSize={matches ? 'small' : 'medium'}/>
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body2" component="span">
            {i.cartQuantity * i.product.currentPrice}&#8372;
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton aria-label="delete" onClick={() => removeProduct(i.product.itemNo)}>
            <CloseIcon color="grayText" fontSize={matches ? 'small' : 'medium'}/>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  ))
  return prod
}