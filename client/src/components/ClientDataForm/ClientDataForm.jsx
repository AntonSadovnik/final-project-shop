/* eslint-disable react/jsx-props-no-spreading */
/* eslint object-shorthand: ["error", "always", { "ignoreConstructors": true }] */
/* eslint-env es6 */
import * as React from 'react';
import { useFormik } from 'formik';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
	Button,
	Grid,
	Typography,
	TextField,
	ToggleButton,
	ButtonGroup,
	ToggleButtonGroup,
	Box,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { validationSchema } from './validationSchema';
import AddressForm from './AddressForm';
import ChangeForm from './ChangeForm';

function ClientDataForm({ handleOrder, setOpenModal }) {
	const [sauceAndSticksNum, setSauceAndSticksNum] = React.useState(1);
	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [payment, setPayment] = React.useState('cash');
	const [delivery, setDelivery] = React.useState('courier');
	const [time, setTime] = React.useState('now');
	const [timePicker, setTimePicker] = React.useState(
		<Box
			sx={{
				height: { xs: 'auto', sm: '56px' },
			}}
		/>
	);
	const customer = useSelector((state) => state.customer);
	const city = useSelector((state) => state.city);
	const cartProducts = useSelector((state) => state.cart.cart.products);
	const isLoggedIn = useSelector((state) => state.isLoggedIn);

	React.useEffect(() => {
		if (customer) {
			setName(customer.firstName);
			setEmail(customer.email);
		}
	}, [customer]);

	const formik = useFormik({
		initialValues: {
			name,
			mobile: '',
			comment: '',
			promocode: '',
			email,
			street: '',
			house: '',
		},
		enableReinitialize: true,
		validationSchema,
		onSubmit: (values) => {
			const userData = {
				...values,
				payment,
				delivery,
				sauceAndSticksNum,
				time,
			};
			const resetForm = () => {
				formik.resetForm();
			};
			if (isLoggedIn) {
				handleOrder(userData, cartProducts, resetForm, customer._id);
			} else {
				handleOrder(userData, cartProducts, resetForm);
			}
			setOpenModal(true);
		},
	});

	const handleIncrement = () => {
		setSauceAndSticksNum(sauceAndSticksNum + 1);
	};

	const handleDecrement = () => {
		if (sauceAndSticksNum > 0) setSauceAndSticksNum(sauceAndSticksNum - 1);
		else {
			setSauceAndSticksNum(0);
		}
	};
	const [change, setChange] = React.useState(
		<ChangeForm formikData={formik} />
	);

	const handlePaymentChange = (
		_event: React.MouseEvent<HTMLElement>,
		nextView: string
	) => {
		setPayment(nextView);
		if (nextView === 'card') {
			setChange(
				<Box
					sx={{
						height: { xs: 'auto', sm: '147px' },
					}}
				/>
			);
		} else {
			setChange(<ChangeForm formikData={formik} />);
		}
	};

	const handleDeliveryChange = (
		event: React.MouseEvent<HTMLElement>,
		nextView: string
	) => {
		setDelivery(nextView);
	};

	const handleTimeChange = (
		event: React.MouseEvent<HTMLElement>,
		nextView: string
	) => {
		setTime(nextView);
		if (nextView === 'now') {
			setTimePicker(
				<Box
					sx={{
						height: { xs: 'auto', sm: '56px' },
					}}
				/>
			);
		} else {
			setTimePicker(
				<LocalizationProvider fullWidth dateAdapter={AdapterDateFns}>
					<TextField
						fullWidth
						id="time"
						label="Set time"
						type="time"
						InputLabelProps={{
							shrink: true,
						}}
						inputProps={{}}
					/>
				</LocalizationProvider>
			);
		}
	};

	const calculateOrder = () =>
		cartProducts.reduce(
			(accumulator, productInfo) =>
				accumulator +
				productInfo.cartQuantity * productInfo.product.currentPrice,
			0
		);

	return (
		<Box
			sx={{
				maxWidth: '760px',
				padding: { xs: '20px 20px 90px 20px', sm: '20px' },
			}}
		>
			<form onSubmit={formik.handleSubmit}>
				<Typography fontSize={18} marginBottom="10px">
					Your are now in {city}
				</Typography>
				<Typography fontSize={18} color="red">
					{cartProducts.length
						? `Your total order is ${calculateOrder()} UAH`
						: 'The cart is empty'}
				</Typography>
				<Box
					sx={{
						padding: '30px 0px',
						gridGap: '20px',
						display: 'flex',
						flexDirection: { xs: 'column', sm: 'row' },
					}}
				>
					<Grid spacing={1} container columns={8}>
						<Grid sx={{ height: 70 }} item xs={4}>
							<TextField
								fullWidth
								id="name"
								name="name"
								label="Name"
								value={formik.values.name}
								onBlur={formik.onBlur}
								onChange={formik.handleChange}
								error={formik.touched.name && Boolean(formik.errors.name)}
								helperText={formik.touched.name && formik.errors.name}
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								sx={{ height: 70 }}
								fullWidth
								id="mobile"
								name="mobile"
								label="mobile"
								type="mobile"
								value={formik.values.mobile}
								onChange={(e) => {
									if (
										/^[0-9\b+]+$/.test(e.target.value) ||
										e.target.value === ''
									) {
										formik.handleChange(e);
									}
								}}
								onBlur={formik.onBlur}
								error={formik.touched.mobile && Boolean(formik.errors.mobile)}
								helperText={formik.touched.mobile && formik.errors.mobile}
								inputProps={{ maxLength: 13 }}
							/>
						</Grid>
						<Grid item xs={8}>
							<ToggleButtonGroup
								fullWidth
								sx={{ height: '52px', paddingBottom: '5px' }}
								type="radio"
								id={payment}
								onBlur={formik.onBlur}
								value={payment}
								exclusive
								onChange={handlePaymentChange}
							>
								<ToggleButton
									id="cash"
									name="cash"
									value="cash"
									aria-label="cash"
								>
									Cash
								</ToggleButton>
								<ToggleButton
									id="card"
									name="card"
									value="card"
									aria-label="card"
								>
									Card upon receipt
								</ToggleButton>
							</ToggleButtonGroup>
						</Grid>
						{change}

						<Grid item xs={8}>
							<TextField
								fullWidth
								id="comment"
								name="comment"
								label="Comment"
								type="comment"
								value={formik.values.comment}
								onChange={formik.handleChange}
								onBlur={formik.onBlur}
								error={formik.touched.comment && Boolean(formik.errors.comment)}
								helperText={formik.touched.comment && formik.errors.comment}
							/>
						</Grid>
						<Grid item xs={8}>
							<Grid
								sx={{
									height: { xs: 'auto', sm: '56px' },
									alignItems: { xs: 'center' },
								}}
								container
								columns={10}
							>
								<Grid item xs={6}>
									<Typography>Regular sticks & soy sauce</Typography>
								</Grid>
								<Grid item xs={4}>
									<ButtonGroup
										fullWidth
										size="small"
										aria-label="small outlined button group"
									>
										<Button onClick={handleDecrement}>-</Button>
										<Button disabled>{sauceAndSticksNum}</Button>
										<Button onClick={handleIncrement}>+</Button>
									</ButtonGroup>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={8}>
							<TextField
								fullWidth
								id="promocode"
								name="promocode"
								label="Promocode"
								type="promocode"
								value={formik.values.promocode}
								onChange={formik.handleChange}
								onBlur={formik.onBlur}
								error={
									formik.touched.promocode && Boolean(formik.errors.promocode)
								}
								helperText={formik.touched.promocode && formik.errors.promocode}
							/>
						</Grid>
					</Grid>

					<Grid spacing={1} container columns={8}>
						<Grid
							sx={{
								height: { xs: 'auto', sm: '225px' },
							}}
							item
							xs={8}
						>
							<ToggleButtonGroup
								fullWidth
								sx={{
									height: { sm: '56px' },
									marginBottom: { xs: '13px', sm: '23px' },
								}}
								value={delivery}
								exclusive
								onChange={handleDeliveryChange}
							>
								<ToggleButton value="courier" aria-label="courier">
									Courier
								</ToggleButton>
								<ToggleButton value="pickup" aria-label="pickup">
									Pickup
								</ToggleButton>
							</ToggleButtonGroup>
							{delivery === 'courier' ? (
								<AddressForm formikData={formik} />
							) : (
								''
							)}
						</Grid>

						<Grid item xs={8}>
							<ToggleButtonGroup
								fullWidth
								sx={{ height: 56 }}
								value={time}
								exclusive
								onChange={handleTimeChange}
							>
								<ToggleButton value="now" aria-label="now">
									Now
								</ToggleButton>
								<ToggleButton value="onTime" aria-label="onTime">
									On time
								</ToggleButton>
							</ToggleButtonGroup>
						</Grid>
						<Grid item xs={8}>
							{timePicker}
						</Grid>
						<Grid item xs={8}>
							<TextField
								fullWidth
								id="email"
								name="email"
								label="Email"
								type="email"
								value={formik.values.email}
								onChange={formik.handleChange}
								onBlur={formik.onBlur}
								error={formik.touched.email && Boolean(formik.errors.email)}
								helperText={formik.touched.email && formik.errors.email}
								FormHelperTextProps={{
									style: {
										position: 'absolute',
										bottom: -22,
									},
								}}
							/>
						</Grid>
					</Grid>
				</Box>

				<Button
					color="primary"
					variant="contained"
					fullWidth
					type="submit"
					disabled={!cartProducts.length}
				>
					Submit
				</Button>
			</form>
		</Box>
	);
}

export default ClientDataForm;
