import React from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import GppBadIcon from '@mui/icons-material/GppBad';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ClientDataForm from '../../components/ClientDataForm/ClientDataForm';
import {
	placeNonAuthOrder,
	removeOrderedProducts,
} from '../../api/placeOrders';
import Loader from '../../components/Loader/Loader';
import { resetCart } from '../../store/actions';

function Ordering() {
	const [openOrderModal, setOpenModal] = React.useState(false);
	const [orderProcessing, setOrderProcessing] = React.useState(true);
	const [error, setError] = React.useState(false);
	const [success, setSuccess] = React.useState(false);
	const dispatch = useDispatch();

	const handleClose = () => setOpenModal(false);

	const handleOrder = (userData, cartProducts, resetForm, customerId) => {
		setOrderProcessing(true);
		setSuccess(false);
		setError(false);

		let newOrder = {};

		if (customerId) {
			newOrder = { customerId, ...userData };
		} else {
			newOrder = { products: cartProducts, ...userData };
		}

		placeNonAuthOrder(newOrder)
			.then(() => {
				localStorage.removeItem('cart');
				dispatch(resetCart());
				resetForm();
				setSuccess(true);
				setError(false);
				removeOrderedProducts(localStorage.getItem('token'));
			})
			.catch(() => {
				setError(true);
				setSuccess(false);
			})
			.finally(() => setOrderProcessing(false));
	};

	return (
		<main>
			<ClientDataForm handleOrder={handleOrder} setOpenModal={setOpenModal} />
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
		</main>
	);
}
export default Ordering;
