import Card from "@mui/material/Card";
import {
  Typography,
  IconButton,

  Grid,
} from '@mui/material';
import RemoveIcon from "@mui/icons-material/Remove";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decreaseQuantity, increaseQuantity} from "../../store/actions";

export default function ProductsInMobCart () {

  const dispatch = useDispatch()
  const {products} = useSelector(state => state.cart.cart)

  function incrQuantity(itemNo) {
    dispatch(increaseQuantity(itemNo))
  }

  function decrQuantity(itemNo) {
    dispatch(decreaseQuantity(itemNo))
  }

  const prod = products.map(item => <Card key={item.product.itemNo} sx={{mx: .5, px: 1}} >
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={3} display="flex" justifyContent= 'space-around'>
        <img style={{
          maxWidth: '90px', height: '62px'
        }} src={item.product.imageUrls[0]} alt="susi"/>

      </Grid>
      <Grid item xs={7}>
        <Typography id="modal-modal-description" sx={{ml: 1, fontSize: "18px"}}>{item.product.name}</Typography>
        <IconButton aria-label="delete" onClick={() => decrQuantity(item.product.itemNo)}>
          <RemoveIcon fontSize="small" sx={{color: 'black'}}/>
        </IconButton>
        <Typography id="modal-modal-amount" variant="body2" component="span" fontSize='18px' fontWeight='700'
                    sx={{marginX: '10px'}}>{item.cartQuantity}</Typography>
        <IconButton aria-label="delete" onClick={() => incrQuantity(item.product.itemNo)}>
          <AddCircleIcon color='secondary' fontSize="small"/>
        </IconButton>
        <Typography variant="body2" component="span" marginLeft='1rem' fontSize='18px'
                    fontWeight='700'>{item.product.currentPrice * item.cartQuantity}&#8372;</Typography>
      </Grid>
    </Grid>

  </Card>)
  return prod
}
