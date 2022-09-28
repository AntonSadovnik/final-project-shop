import React from 'react';
import { useDispatch } from 'react-redux';
import { Stack } from '@mui/material';
import ClientDataForm from '../../components/ClientDataForm/ClientDataForm';
import { OrderMessage } from '../../components/OrderMessage/OrderMessage';
import { placeOrder, removeOrderedProducts } from '../../api/placeOrders';
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

		placeOrder(newOrder)
			.then(() => {
				setOrderProcessing(false);
				setSuccess(true);
				setError(false);
				localStorage.removeItem('cart');
				dispatch(resetCart());
				resetForm();
				if (customerId) {
					removeOrderedProducts(localStorage.getItem('token'));
				}
			})
			.catch(() => {
				setOrderProcessing(false);
				setError(true);
				setSuccess(false);
			});
	};

	return (
		<main>
			<Stack alignItems="center">
				<ClientDataForm handleOrder={handleOrder} setOpenModal={setOpenModal} />
				<OrderMessage
					open={openOrderModal}
					handleClose={handleClose}
					orderProcessing={orderProcessing}
					success={success}
					error={error}
				/>
			</Stack>
		</main>
	);
}
export default Ordering;
