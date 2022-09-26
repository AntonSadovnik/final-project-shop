import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import GppBadIcon from '@mui/icons-material/GppBad';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Loader from '../Loader/Loader';

export function OrderMessage({
	open,
	handleClose,
	orderProcessing,
	success,
	error,
}) {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title" sx={{ textAlign: 'center' }}>
				{orderProcessing && 'Processing... It might take a second'}
				{success && 'Your order has been successfully placed'}
				{error && 'Oops! Something went wrong, please try again later'}
			</DialogTitle>
			<DialogContent>
				{orderProcessing && <Loader />}
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					{success && (
						<ThumbUpOffAltIcon fontSize="large" sx={{ color: '#ff9846' }} />
					)}
					{error && <GppBadIcon fontSize="large" sx={{ color: '#d50000' }} />}
				</div>
			</DialogContent>
		</Dialog>
	);
}
