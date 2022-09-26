import * as React from 'react';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';
import ProductsInCart from "./components/desktopsCart/ProductsInCart";
import ButtonCart from "./components/desktopsCart/ButtonCart";
import SumCart from "./components/desktopsCart/SumCart";


export default function Cart(props) {
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

  return (
    <div>
      <Dialog open={open}
              onClose={handleClose}
              scroll={scroll} aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description">
        <Box minWidth='600px'>
          <DialogTitle>Your basket</DialogTitle>
        </Box>
        <DialogContent dividers={scroll === 'paper'}>
          <Box ref={descriptionElementRef} tabIndex={-1}>
            <ProductsInCart setOpen={setOpen}/>
          </Box>
        </DialogContent>
        <DialogActions>
          <SumCart/>
          <ButtonCart setOpen={setOpen}/>
        </DialogActions>
      </Dialog>
    </div>
  );
}