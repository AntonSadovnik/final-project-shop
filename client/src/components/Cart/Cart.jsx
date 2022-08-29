import * as React from 'react';
import {
	Box,Typography,IconButton, Dialog, DialogActions,DialogContent, DialogContentText,DialogTitle, useMediaQuery, Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CustomButton from '../Button/Button'
import arr from './data'


export default function Cart(props) {
	// const [open, setOpen] = React.useState(false);
	// const [scroll, setScroll] = React.useState('paper');
	const matches = useMediaQuery('(max-width:600px)');
	const { open, setOpen, scroll } = props;

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
			const { current: descriptionElement } = descriptionElementRef;
			if (descriptionElement !== null) {
				descriptionElement.focus();
			}
		}
	}, [open]);

	return (
		<div>
			{/* <Button onClick={handleClickOpen('paper')}>Open modal</Button> */}
			<Dialog   open={open} onClose={handleClose} scroll={scroll} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description" >
				<Box>
					<DialogTitle>Your basket</DialogTitle>
				</Box>
				<DialogContent dividers={scroll === 'paper'}>
					<DialogContentText ref={descriptionElementRef} tabIndex={-1}>
						{arr.map((i) => (
							<Box>

							<Grid container spacing={3} alignItems="center">

								<Grid item xs={2} >
									<img style={ matches
												? {maxWidth: '2rem', height: '2rem'}
												: {maxWidth: '5rem', height: '3rem'}
												}
										src={i[1]} alt="susi"/>

								</Grid>
								<Grid item xs={5}>
									<Typography  sx={{width: '100%'}}>
										{i[0]}
									</Typography>
								</Grid>
								<Grid item xs={1} >
									<IconButton aria-label="delete">
										<RemoveCircleOutlineIcon color="secondary" fontSize={matches ? 'small' : 'medium'}/>
									</IconButton>
								</Grid>
								<Grid item xs={1} sx={{textAlign: 'right'}}>
									<Typography variant="body2" component="text1" >
										{i[2]}
									</Typography>
								</Grid>
								<Grid item xs={1}>
									<IconButton aria-label="delete" >
										<AddCircleOutlineIcon color="secondary" fontSize={matches ? 'small' : 'medium'}
										/>
									</IconButton>
								</Grid>
								<Grid item  xs={1}>
									<Typography variant="body2" component="text1" >
										{i[2] * i[3]}$
									</Typography>
								</Grid>
								<Grid item xs={1}>
									<IconButton aria-label="delete">
										<CloseIcon color="grayText" fontSize={matches ? 'small' : 'medium'}/>
									</IconButton>
								</Grid>
							</Grid>
							</Box>
						))}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Typography variant="h6" component="text1" color="black" sx={{ mr: '2rem' }}>
						1500$
					</Typography>
					<CustomButton colorTitle="text.btnText" colorButton="secondary" title="CHECKOUT" >
						Checkout
					</CustomButton>
				</DialogActions>
			</Dialog>
		</div>
	);
}
