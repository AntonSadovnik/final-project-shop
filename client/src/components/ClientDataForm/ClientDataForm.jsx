// /* eslint-disable react/jsx-props-no-spreading */
// /* eslint object-shorthand: ["error", "always", { "ignoreConstructors": true }] */
// /* eslint-env es6 */
// import * as React from 'react';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import {
// 	Button,
// 	Grid,
// 	Typography,
// 	TextField,
// 	ToggleButton,
// 	ButtonGroup,
// 	ToggleButtonGroup,
// 	Box,
// } from '@mui/material';
// import { useSelector } from 'react-redux';
// import AddressForm from './AddressForm';
// import ChangeForm from './ChangeForm';

// function ClientDataForm() {
// 	const [counter, setCounter] = React.useState(1);
// 	const [name, setName] = React.useState('');
// 	const [email, setEmail] = React.useState('');
// 	const [payment, setPayment] = React.useState('cash');
// 	const [delivery, setDelivery] = React.useState('courier');
// 	const [time, setTime] = React.useState('now');
// 	const [timePicker, setTimePicker] = React.useState(
// 		<Box
// 			sx={{
// 				height: { xs: 'auto', sm: '56px' },
// 			}}
// 		/>
// 	);
// 	const customer = useSelector((state) => state.customer);
// 	const city = useSelector((store) => store.city);
// 	const cartProducts = useSelector((store) => store.cart.cart.products);

// 	React.useEffect(() => {
// 		if (customer) {
// 			setName(customer.firstName);
// 			setEmail(customer.email);
// 		}
// 	}, [customer]);

// 	const validationschema = yup.object({
// 		name: yup.string('Enter your name').required('Name is required'),
// 		phone: yup.string('Enter your phone').required('Phone is required'),
// 		street: yup.string('Enter your street').required('Street is required'),
// 		house: yup.string('Enter your house').required('House is required'),
// 	});

// 	const formik = useFormik({
// 		initialValues: {
// 			name: name,
// 			phone: '',
// 			comment: '',
// 			promocode: '',
// 			email: email,
// 			street: '',
// 			house: '',
// 		},
// 		enableReinitialize: true,
// 		validationSchema: validationschema,
// 		onSubmit: (values) => {
// 			console.log(values);
// 		},
// 	});

// 	const handleIncrement = () => {
// 		setCounter(counter + 1);
// 	};

// 	const handleDecrement = () => {
// 		if (counter > 0) setCounter(counter - 1);
// 		else {
// 			setCounter(0);
// 		}
// 	};
// 	const [change, setChange] = React.useState(
// 		<ChangeForm formikData={formik} />
// 	);

// 	const handlePaymentChange = (
// 		_event: React.MouseEvent<HTMLElement>,
// 		nextView: string
// 	) => {
// 		setPayment(nextView);
// 		if (nextView === 'card') {
// 			setChange(
// 				<Box
// 					sx={{
// 						height: { xs: 'auto', sm: '147px' },
// 					}}
// 				/>
// 			);
// 		} else {
// 			setChange(<ChangeForm formikData={formik} />);
// 		}
// 	};

// 	const handleDeliveryChange = (
// 		event: React.MouseEvent<HTMLElement>,
// 		nextView: string
// 	) => {
// 		setDelivery(nextView);
// 	};

// 	const handleTimeChange = (
// 		event: React.MouseEvent<HTMLElement>,
// 		nextView: string
// 	) => {
// 		setTime(nextView);
// 		if (nextView === 'now') {
// 			setTimePicker(
// 				<Box
// 					sx={{
// 						height: { xs: 'auto', sm: '56px' },
// 					}}
// 				/>
// 			);
// 		} else {
// 			setTimePicker(
// 				<LocalizationProvider fullWidth dateAdapter={AdapterDateFns}>
// 					<TextField
// 						fullWidth
// 						id="time"
// 						label="Set time"
// 						type="time"
// 						InputLabelProps={{
// 							shrink: true,
// 						}}
// 						inputProps={
// 							{
// 								// step: 1800,
// 							}
// 						}
// 					/>
// 				</LocalizationProvider>
// 			);
// 		}
// 	};

// 	const calculateOrder = () =>
// 		cartProducts.reduce(
// 			(accumulator, productInfo) =>
// 				accumulator +
// 				productInfo.cartQuantity * productInfo.product.currentPrice,
// 			0
// 		);

// 	return (
// 		<Box>
// 			<form className="client-data-form" onSubmit={formik.handleSubmit}>
// 				<Typography fontSize={18} marginBottom="10px">
// 					Your are now in {city}
// 				</Typography>
// 				<Typography fontSize={18}>
// 					Your total order is {calculateOrder()} UAH
// 				</Typography>
// 				<Box className="client-data-form__container">
// 					<Grid spacing={1} container columns={8}>
// 						<Grid sx={{ height: 70 }} item xs={4}>
// 							<TextField
// 								fullWidth
// 								id="name"
// 								name="name"
// 								label="Name"
// 								value={formik.values.name}
// 								onBlur={formik.onBlur}
// 								onChange={formik.handleChange}
// 								error={formik.touched.name && Boolean(formik.errors.name)}
// 								helperText={formik.touched.name && formik.errors.name}
// 							/>
// 						</Grid>
// 						<Grid item xs={4}>
// 							<TextField
// 								sx={{ height: 70 }}
// 								fullWidth
// 								id="phone"
// 								name="phone"
// 								label="Phone"
// 								type="phone"
// 								value={formik.values.phone}
// 								onChange={formik.handleChange}
// 								onBlur={formik.onBlur}
// 								error={formik.touched.phone && Boolean(formik.errors.phone)}
// 								helperText={formik.touched.phone && formik.errors.phone}
// 							/>
// 						</Grid>
// 						<Grid item xs={8}>
// 							<ToggleButtonGroup
// 								fullWidth
// 								sx={{ height: '52px', paddingBottom: '5px' }}
// 								type="radio"
// 								id={payment}
// 								onBlur={formik.onBlur}
// 								value={payment}
// 								exclusive
// 								onChange={handlePaymentChange}
// 							>
// 								<ToggleButton
// 									id="cash"
// 									name="cash"
// 									value="cash"
// 									aria-label="cash"
// 								>
// 									Cash
// 								</ToggleButton>
// 								<ToggleButton
// 									id="card"
// 									name="card"
// 									value="card"
// 									aria-label="card"
// 								>
// 									Card upon receipt
// 								</ToggleButton>
// 							</ToggleButtonGroup>
// 						</Grid>
// 						{change}

// 						<Grid item xs={8}>
// 							<TextField
// 								fullWidth
// 								id="comment"
// 								name="comment"
// 								label="Comment"
// 								type="comment"
// 								value={formik.values.comment}
// 								onChange={formik.handleChange}
// 								onBlur={formik.onBlur}
// 								error={formik.touched.comment && Boolean(formik.errors.comment)}
// 								helperText={formik.touched.comment && formik.errors.comment}
// 							/>
// 						</Grid>
// 						<Grid item xs={8}>
// 							<Grid
// 								sx={{
// 									height: { xs: 'auto', sm: '56px' },
// 									alignItems: { xs: 'center' },
// 								}}
// 								container
// 								columns={10}
// 							>
// 								<Grid item xs={6}>
// 									<Typography>Regular sticks & soy sauce</Typography>
// 								</Grid>
// 								<Grid item xs={4}>
// 									<ButtonGroup
// 										fullWidth
// 										size="small"
// 										aria-label="small outlined button group"
// 									>
// 										<Button onClick={handleDecrement}>-</Button>
// 										<Button disabled>{counter}</Button>
// 										<Button onClick={handleIncrement}>+</Button>
// 									</ButtonGroup>
// 								</Grid>
// 							</Grid>
// 						</Grid>
// 						<Grid item xs={8}>
// 							<TextField
// 								fullWidth
// 								id="promocode"
// 								name="promocode"
// 								label="Promocode"
// 								type="promocode"
// 								value={formik.values.promocode}
// 								onChange={formik.handleChange}
// 								onBlur={formik.onBlur}
// 								error={
// 									formik.touched.promocode && Boolean(formik.errors.promocode)
// 								}
// 								helperText={formik.touched.promocode && formik.errors.promocode}
// 							/>
// 						</Grid>
// 					</Grid>

// 					<Grid spacing={1} container columns={8}>
// 						<Grid
// 							sx={{
// 								height: { xs: 'auto', sm: '225px' },
// 							}}
// 							item
// 							xs={8}
// 						>
// 							<ToggleButtonGroup
// 								fullWidth
// 								sx={{
// 									height: { sm: '56px' },
// 									marginBottom: { xs: '13px', sm: '23px' },
// 								}}
// 								value={delivery}
// 								exclusive
// 								onChange={handleDeliveryChange}
// 							>
// 								<ToggleButton value="courier" aria-label="courier">
// 									Courier
// 								</ToggleButton>
// 								<ToggleButton value="pickup" aria-label="pickup">
// 									Pickup
// 								</ToggleButton>
// 							</ToggleButtonGroup>
// 							{(delivery === 'courier') ? (<AddressForm formikData={formik} />) : ""}
// 						</Grid>

// 						<Grid item xs={8}>
// 							<ToggleButtonGroup
// 								fullWidth
// 								sx={{ height: 56 }}
// 								value={time}
// 								exclusive
// 								onChange={handleTimeChange}
// 							>
// 								<ToggleButton value="now" aria-label="now">
// 									Now
// 								</ToggleButton>
// 								<ToggleButton value="onTime" aria-label="onTime">
// 									On time
// 								</ToggleButton>
// 							</ToggleButtonGroup>
// 						</Grid>
// 						<Grid item xs={8}>
// 							{timePicker}
// 						</Grid>
// 						<Grid item xs={8}>
// 							<TextField
// 								fullWidth
// 								id="email"
// 								name="email"
// 								label="Email"
// 								type="email"
// 								value={formik.values.email}
// 								onChange={formik.handleChange}
// 								onBlur={formik.onBlur}
// 								error={formik.touched.email && Boolean(formik.errors.email)}
// 								helperText={formik.touched.email && formik.errors.email}
// 							/>
// 						</Grid>
// 					</Grid>
// 				</Box>

// 				<Button color="primary" variant="contained" fullWidth type="submit">
// 					Submit
// 				</Button>
// 			</form>
// 		</Box>
// 	);
// }

// export default ClientDataForm;
