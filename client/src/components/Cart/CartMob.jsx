import * as React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import RemoveIcon from '@mui/icons-material/Remove';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from "@mui/material/Button";
import {decreaseQuantity, increaseQuantity} from "../../store/actions";

export default function CartMob() {
    const dispatch = useDispatch()
    const {products} = useSelector(state=> state.cart.cart)

    const productQuantity = products.map( i =>i.cartQuantity )
    let summQuantity = 0
    for (let i=0; i < productQuantity.length; i += 1){
        summQuantity += productQuantity[i]
    }
    const productPrice = products.map( i =>i.product.currentPrice*i.cartQuantity)
    let summForPay = 0
    for (let i=0; i < productPrice.length; i += 1){
        summForPay += productPrice[i]
    }

    function incrQuantity(itemNo) {
        dispatch(increaseQuantity(itemNo))
    }

    function decrQuantity(itemNo) {
        dispatch(decreaseQuantity(itemNo))
    }

    console.log(products.length)

    return (
        <Box sx={{ padding: '10px 0px 90px' }}>
            <Box sx={{display:"flex",justifyContent:"center"}}>
                {products.length === 0 && <NavLink to="/" noWrap='true' style={{  textAlign: 'center', textDecoration: 'inherit'}} > <Typography  variant='span' color='text.primary' fontSize='24px' fontWeight='500' sx={{mb: '10px'}}>Your basket is empty let&apos;s make an order? </Typography></NavLink> }
                {products.length !== 0&&<Typography variant='span' color='text.primary' fontSize='24px' fontWeight='500' sx={{mb: '10px'}}>Your basket</Typography>}

            </Box>
            {
                products.map(item => <Card key = {item.product.itemNo} sx={{margin: '10px', display:"flex", bgcolor: "backgroungColor.main"}}>
                <img style={{width: '76px', marginRight: "14px",height: '62px'
                            }} src={item.product.imageUrls[0]} alt="susi"/>
                <Box>
                <Typography id="modal-modal-description" sx={{ml: 1, fontSize: "18px"}}>{item.product.name}</Typography>
                <IconButton aria-label="delete"  onClick={()=>decrQuantity(item.product.itemNo)}>
                    <RemoveIcon  fontSize="small" sx={{color: 'black'}}/>
                </IconButton>
                <Typography id="modal-modal-amount" variant="body2" component="span" fontSize='18px' fontWeight='700' sx={{marginX: '10px'}}>{item.cartQuantity}</Typography>
                <IconButton aria-label="delete" onClick={()=>incrQuantity(item.product.itemNo)}>
                    <AddCircleIcon color='secondary'  fontSize="small"/>
                </IconButton>
                <Typography variant="body2" component="span" marginX='.1rem' fontSize='18px' fontWeight='700'>{item.product.currentPrice * item.cartQuantity}&#8372;</Typography>
                </Box>
            </Card>)}
            {products.length !== 0 &&
            <Card sx={{bgcolor: "backgroungColor.main"}}>
                <Box sx={{display:"flex",justifyContent:"center"}}>
                    <Typography variant='span' color='text.hoverText' fontSize='24px' fontWeight='500' sx={{mb: '10px'}}>Pay for oder</Typography>
                    </Box>
                <Box  sx={{paddingX:'40px', fontSize: "18px", borderBottom:' .5px #A4ACAD solid', display:'flex', justifyContent: 'space-between' }}>
                    <Typography fontSize='18px' fontWeight='400'>
                        {`${summQuantity} items`}
                    </Typography>
                    <Typography fontSize='18px' fontWeight='400'>
                        {summForPay} &#8372;
                    </Typography>
                </Box>
                <Box  sx={{paddingX:'40px', fontSize: "18px", borderBottom:' .5px #A4ACAD solid', display:'flex', justifyContent: 'space-between' }}>
                    <Typography fontSize='18px' fontWeight='400'>
                        Delivery
                    </Typography>
                    <Typography fontSize='18px' fontWeight='400'>
                        Free
                    </Typography>
                </Box>
            </Card>}
            {products.length !== 0 &&
            <Box sx={{display:"flex", justifyContent:"center", marginTop:'10px'}}>
                <NavLink to="/ordering" style={{ textDecoration: 'inherit'}}>
                    <Button variant="contained" >
                        <Typography variant='subtitle2' color='text.btnText'>
                            Checkout
                        </Typography>
                    </Button>
                </NavLink>

            </Box>}

        </Box>
    );
}
