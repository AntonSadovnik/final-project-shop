import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';

const arr = [
	[
		'Philadelphia with tuna',
		'https://966.ua/upload/imagickAgent/detail/ebc/ebc412185a13657020d30a160952605f.jpeg2000',
		3,
		300,
	],
	[
		'Biggest Philadelphia',
		'https://966.ua/upload/imagickAgent/section/358/358262124230e834d537b161a0aa8ae1.jpeg2000',
		5,
		134,
	],
	[
		'Sushi with tuna',
		'https://966.ua/upload/imagickAgent/section/2c6/2c6ebbb3cabc124c3496b047c0ee7e29.jpeg2000',
		1,
		456,
	],
	[
		'Philadelphia with tuna',
		'https://966.ua/upload/imagickAgent/detail/ebc/ebc412185a13657020d30a160952605f.jpeg2000',
		2,
		214,
	],
	[
		'Biggest Philadelphia',
		'https://966.ua/upload/imagickAgent/section/358/358262124230e834d537b161a0aa8ae1.jpeg2000',
		4,
		130,
	],
	[
		'Sushi with tuna',
		'https://966.ua/upload/imagickAgent/section/2c6/2c6ebbb3cabc124c3496b047c0ee7e29.jpeg2000',
		1,
		321,
	],
	[
		'Philadelphia with tuna',
		'https://966.ua/upload/imagickAgent/detail/ebc/ebc412185a13657020d30a160952605f.jpeg2000',
		3,
		300,
	],
	[
		'Biggest Philadelphia',
		'https://966.ua/upload/imagickAgent/section/358/358262124230e834d537b161a0aa8ae1.jpeg2000',
		5,
		134,
	],
	[
		'Sushi with tuna',
		'https://966.ua/upload/imagickAgent/section/2c6/2c6ebbb3cabc124c3496b047c0ee7e29.jpeg2000',
		1,
		456,
	],
	[
		'Philadelphia with tuna',
		'https://966.ua/upload/imagickAgent/detail/ebc/ebc412185a13657020d30a160952605f.jpeg2000',
		2,
		214,
	],
	[
		'Biggest Philadelphia',
		'https://966.ua/upload/imagickAgent/section/358/358262124230e834d537b161a0aa8ae1.jpeg2000',
		4,
		130,
	],
	[
		'Sushi with tuna',
		'https://966.ua/upload/imagickAgent/section/2c6/2c6ebbb3cabc124c3496b047c0ee7e29.jpeg2000',
		1,
		321,
	],
	[
		'Philadelphia with tuna',
		'https://966.ua/upload/imagickAgent/detail/ebc/ebc412185a13657020d30a160952605f.jpeg2000',
		3,
		300,
	],
	[
		'Biggest Philadelphia',
		'https://966.ua/upload/imagickAgent/section/358/358262124230e834d537b161a0aa8ae1.jpeg2000',
		5,
		134,
	],
	[
		'Sushi with tuna',
		'https://966.ua/upload/imagickAgent/section/2c6/2c6ebbb3cabc124c3496b047c0ee7e29.jpeg2000',
		1,
		456,
	],
	[
		'Philadelphia with tuna',
		'https://966.ua/upload/imagickAgent/detail/ebc/ebc412185a13657020d30a160952605f.jpeg2000',
		2,
		214,
	],
	[
		'Biggest Philadelphia',
		'https://966.ua/upload/imagickAgent/section/358/358262124230e834d537b161a0aa8ae1.jpeg2000',
		4,
		130,
	],
	[
		'Sushi with tuna',
		'https://966.ua/upload/imagickAgent/section/2c6/2c6ebbb3cabc124c3496b047c0ee7e29.jpeg2000',
		1,
		321,
	],
];

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

			<Dialog
				open={open}
				onClose={handleClose}
				scroll={scroll}
				aria-labelledby="scroll-dialog-title"
				aria-describedby="scroll-dialog-description"
			>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<DialogTitle id="scroll-dialog-title">Your basket</DialogTitle>
				</Box>
				<DialogContent dividers={scroll === 'paper'}>
					<DialogContentText
						id="scroll-dialog-description"
						ref={descriptionElementRef}
						tabIndex={-1}
					>
						{arr.map((i) => (
							<div>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
										borderBottom: 'solid 2px rgb(228, 231, 232)',
									}}
								>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
										}}
									>
										<img
											style={
												matches
													? {
															maxWidth: '2rem',
															marginRight: '2px',
															height: '2rem',
													  }
													: {
															maxWidth: '5rem',
															marginRight: '5px',
															height: '3rem',
													  }
											}
											src={i[1]}
											alt="susi"
										/>
										<Typography
											id="modal-modal-description"
											sx={matches ? { ml: 1, fontSize: '10px' } : { ml: 3 }}
										>
											{i[0]}
										</Typography>
									</Box>
									<Box sx={{ display: 'flex', alignItems: 'center' }}>
										<IconButton aria-label="delete">
											<RemoveCircleOutlineIcon
												color="secondary"
												fontSize={matches ? 'small' : 'medium'}
											/>
										</IconButton>
										<Typography
											id="modal-modal-amount"
											variant="body2"
											component="text1"
										>
											{i[2]}
										</Typography>
										<IconButton aria-label="delete">
											<AddCircleOutlineIcon
												color="secondary"
												fontSize={matches ? 'small' : 'medium'}
											/>
										</IconButton>
										<Typography
											variant="body2"
											component="text1"
											marginX={matches ? '.1rem' : '2rem'}
										>
											{i[2] * i[3]}$
										</Typography>
										<IconButton aria-label="delete">
											<CloseIcon
												color="grayText"
												fontSize={matches ? 'small' : 'medium'}
											/>
										</IconButton>
									</Box>
								</Box>
							</div>
						))}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Typography
						variant="h6"
						component="text1"
						color="black"
						sx={{ mr: '2rem' }}
					>
						1500$
					</Typography>
					<Button
						variant="contained"
						color="secondary"
						size={matches ? 'small' : 'medium'}
						onClick={handleClose}
					>
						Checkout
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
