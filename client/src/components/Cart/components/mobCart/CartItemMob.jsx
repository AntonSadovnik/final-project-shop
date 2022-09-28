import * as React from 'react';
import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {Grid, IconButton, Typography} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Card from "@mui/material/Card";
import {decreaseQuantity, increaseQuantity} from "../../../../store/actions";

export default function CartItemMob({item}) {
  const dispatch = useDispatch()
  function incrQuantity(itemNo) {
    dispatch(increaseQuantity(itemNo))

  }

  function decrQuantity(itemNo) {
    dispatch(decreaseQuantity(itemNo))
  }

  const img = useMemo(() => <Grid item xs={3} display="flex" justifyContent='space-around'><img style={{
    maxWidth: '90px', height: '62px'
  }} src={item.product.imageUrls[0]} alt="susi"/></Grid>, [item.product]);

  const productName = useMemo(() => <Typography id="modal-modal-description" sx={{
    ml: 1,
    fontSize: "18px"
  }}>{item.product.name}</Typography>, [item.product.name]);

  const productInCartMob = useMemo(() => <Card  sx={{mx: .5, p: 1, mt:1}}>
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {img}
      <Grid item xs={8} >
        {productName}

        <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{mx: 2}}
        >
          <Grid item xs={2} display="flex" justifyContent="center">
            <IconButton aria-label="delete" onClick={() => decrQuantity(item.product.itemNo)}>
              <RemoveIcon fontSize="small" sx={{color: 'black'}}/>
            </IconButton>
          </Grid>
          <Grid item xs={2} display="flex" justifyContent="center">
            <Typography id="modal-modal-amount" variant="body2" component="span" fontSize='18px' fontWeight='700'
                        sx={{marginX: '10px', align: 'justify'}}>{item.cartQuantity}</Typography>
          </Grid>
          <Grid item xs={2} display="flex" justifyContent="center">
            <IconButton aria-label="delete" onClick={() => incrQuantity(item.product.itemNo)}>
              <AddCircleIcon color='secondary' fontSize="small"/></IconButton>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="right">
            <Typography variant="body2" component="span" marginRight='2rem' fontSize='18px'
                        fontWeight='700'>{item.product.currentPrice * item.cartQuantity}&#8372;</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Card>, [item.cartQuantity, item]);

  return productInCartMob
};