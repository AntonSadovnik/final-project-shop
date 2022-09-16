import * as React from 'react';
import Box from '@mui/material/Box';
import { IconButton, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function SuccessfulReview({ setOpen, open }) {
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: { xs: '200px', sm: '400px' },
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	const handleClose = () => {
        setOpen(false);
        window.location.reload();
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					Your review was successfully sent. Thank you!
				</Typography>
				<IconButton
					sx={{
						position: 'absolute',
						top: '25px',
						right: '20px',
						bgcolor: 'background.paper',
					}}
					edge="start"
					color="inherit"
					onClick={handleClose}
					aria-label="close"
				>
					<CloseIcon />
				</IconButton>
			</Box>
		</Modal>
	);
}
