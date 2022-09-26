import * as React from 'react';
import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {Box, Grid, IconButton, Typography, useMediaQuery} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import {decreaseQuantity, increaseQuantity, removeProductFromCart} from "../../../../store/actions";

export default function CartItem({i}) {
  const dispatch = useDispatch()
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

  const lefPart = useMemo(() =>
    <>
      <Grid item xs={2} display="flex" justifyContent='space-around'>
        <img style={{matches}
          ? {maxWidth: '3rem', height: '3rem'}
          : {maxWidth: '5rem', height: '3rem'}
        }
             src={i.product.imageUrls[0]} alt="susi"
        />
      </Grid>
      <Grid item xs={5}>
        <Typography>
          {i.product.name}
        </Typography>
      </Grid>
    </>, [])

  const product = useMemo(()=><Box sx={{ my: 1 }}>
    <Grid container
          spacing={1}
          alignItems="center"
          direction="row"
          justifyContent="space-between">

      {lefPart}

      <Grid item xs={1}>
        <IconButton aria-label="delete" onClick={() => decrQuantity(i.product.itemNo)}>
          <RemoveCircleOutlineIcon color="secondary" fontSize={matches ? 'small' : 'medium'}/>
        </IconButton>
      </Grid>
      <Grid item xs={1} sx={{textAlign: 'right'}} display="flex" justifyContent="space-around">
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
  </Box>,[i, i.cartQuantity])

  return product;
};