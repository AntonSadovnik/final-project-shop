import * as React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {
    Box,
    Typography,
    IconButton,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    useMediaQuery,
    Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CustomButton from '../Button/Button'
import {decreaseQuantity, increaseQuantity, removeProductFromCart} from "../../store/actions";


export default function Cart(props) {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.cart.cart)
    const price = products.map(j => j.product.currentPrice * j.cartQuantity)
    const sum = () => {
        let s = 0;
        for (let i = 0; i < price.length; i += 1) {
            s += price[i]
        }
        return s
    }
    // const [open, setOpen] = React.useState(false);
    // const [scroll, setScroll] = React.useState('paper');
    const matches = useMediaQuery('(max-width:600px)');
    const {open, setOpen, scroll} = props;

    // const handleClickOpen = () => () => {
    //     setOpen(true);
    //     setScroll('paper');
    // };

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

    function incrQuantity(itemNo) {
        dispatch(increaseQuantity(itemNo))
    }

    function removeProduct(itemNo) {
        dispatch(removeProductFromCart(itemNo))
    }

    function decrQuantity(itemNo) {
        dispatch(decreaseQuantity(itemNo))
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} scroll={scroll} aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description">
                <Box>
                    <DialogTitle>Your basket</DialogTitle>
                </Box>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText ref={descriptionElementRef} tabIndex={-1}>
                        {
                            products.length === 0 && <Typography>Your cart is empty</Typography>
                        }
                        {products.map((i) => (
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
                                            <RemoveCircleOutlineIcon color="secondary"
                                                                     fontSize={matches ? 'small' : 'medium'}/>
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={1} sx={{textAlign: 'right'}}>
                                        <Typography variant="body2" component="span">
                                            {i.cartQuantity}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <IconButton aria-label="delete" onClick={() => incrQuantity(i.product.itemNo)}>
                                            <AddCircleOutlineIcon color="secondary"
                                                                  fontSize={matches ? 'small' : 'medium'}
                                            />
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
                        ))}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Typography variant="h6" component="span" color="black" sx={{mr: '2rem'}}>
                        {sum()}&#8372;
                    </Typography>
                    <NavLink to="/ordering" style={{ textDecoration: 'inherit'}}>
                        <CustomButton disabled={products.length === 0} textStyle={{color: 'text.btnText'}} title="CHECKOUT" onClick={handleClose}>
                            Checkout
                        </CustomButton>
                    </NavLink>
                </DialogActions>
            </Dialog>
        </div>
    );
}

