import React from 'react';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import GppBadIcon from '@mui/icons-material/GppBad';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ClientDataForm from '../../components/ClientDataForm/ClientDataForm';
import { placeNonAuthOrder } from '../../api/placeOrders';
import LoadingElement from '../../components/Search/components/LoadingElement';

function Ordering() {
	const [openOrderModal, setOpenModal] = React.useState(false);
	const [orderProcessing, setOrderProcessing] = React.useState(true);
	const [error, setError] = React.useState(false);
	const [success, setSuccess] = React.useState(false);

	const handleClose = () => setOpenModal(false);

	const handleNonAuthOrder = (userData, cartProducts) => {
		const newOrder = {
			products: cartProducts,
			...userData,
		};

		placeNonAuthOrder(newOrder)
			.then(() => {
				localStorage.removeItem('cart');
				setSuccess(true);
			})
			.catch(() => setError(true))
			.finally(() => setOrderProcessing(false));
	};

	return (
		<main>
			<ClientDataForm
				handleNonAuthOrder={handleNonAuthOrder}
				setOpenModal={setOpenModal}
			/>
			<Dialog
				open={openOrderModal}
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
					{orderProcessing && <LoadingElement />}
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						{error && <GppBadIcon fontSize="large" sx={{ color: '#d50000' }} />}
						{success && (
							<ThumbUpOffAltIcon fontSize="large" sx={{ color: '#ff9846' }} />
						)}
					</div>
				</DialogContent>
			</Dialog>
		</main>
	);
}
export default Ordering;
