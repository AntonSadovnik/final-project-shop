/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useFormik } from 'formik';
import * as yup from 'yup';
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
} from '@mui/material';

function ClientDataForm() {
	const [counter, setCounter] = React.useState(1);
	const [payment, setPayment] = React.useState('cash');
	const [delivery, setDelivery] = React.useState('courier');
	const [time, setTime] = React.useState('now');
	const [timePicker, setTimePicker] = React.useState(
		<div className="client-data-form__time-box" />
	);

	const validationschema = yup.object({
		name: yup.string('Enter your name').required('Name is required'),
		phone: yup
			.string('Enter your phone')
			// .min(8, 'phone should be of minimum 10 characters length')
			.required('phone is required'),
	});

	const formik = useFormik({
		initialValues: {
			name: '',
			phone: '',
			comment: '',
			promocode: '',
			email: '',
		},
		validationSchema: validationschema,
		onSubmit: (values) => {
			console.log(values);
		},
	});
	const addressForm = (
		<Grid
			className="address-form"
			alignItems="flex-start"
			spacing={1}
			container
			columns={8}
		>
			<Grid item xs={6}>
				<TextField
					fullWidth
					id="street"
					name="street"
					label="Street"
					type="street"
					value={formik.values.street}
					onChange={formik.handleChange}
					onBlur={formik.onBlur}
					error={formik.touched.street && Boolean(formik.errors.street)}
					helperText={formik.touched.street && formik.errors.street}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					fullWidth
					id="house"
					name="house"
					label="House"
					type="house"
					value={formik.values.house}
					onChange={formik.handleChange}
					onBlur={formik.onBlur}
					error={formik.touched.house && Boolean(formik.errors.house)}
					helperText={formik.touched.house && formik.errors.house}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					fullWidth
					id="apartment"
					name="apartment"
					label="Apt"
					type="apartment"
					value={formik.values.apartment}
					onChange={formik.handleChange}
					onBlur={formik.onBlur}
					error={formik.touched.apartment && Boolean(formik.errors.apartment)}
					helperText={formik.touched.apartment && formik.errors.apartment}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					fullWidth
					id="entrance"
					name="entrance"
					label="Entrance"
					type="entrance"
					value={formik.values.entrance}
					onChange={formik.handleChange}
					onBlur={formik.onBlur}
					error={formik.touched.entrance && Boolean(formik.errors.entrance)}
					helperText={formik.touched.entrance && formik.errors.entrance}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					fullWidth
					id="floor"
					name="floor"
					label="Floor"
					type="floor"
					value={formik.values.floor}
					onChange={formik.handleChange}
					onBlur={formik.onBlur}
					error={formik.touched.floor && Boolean(formik.errors.floor)}
					helperText={formik.touched.floor && formik.errors.floor}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					id="code"
					name="code"
					label="Code"
					type="code"
					value={formik.values.code}
					onChange={formik.handleChange}
					onBlur={formik.onBlur}
					error={formik.touched.code && Boolean(formik.errors.code)}
					helperText={formik.touched.code && formik.errors.code}
				/>
			</Grid>
		</Grid>
	);


	const handleIncrement = () => {
		setCounter(counter + 1);
	};

	const handleDecrement = () => {
		if (counter > 0) setCounter(counter - 1);
		else {
			setCounter(0);
		}
	};

	const [address, setAddress] = React.useState(addressForm);
	const [change, setChange] = React.useState(
		<Grid className="client-data-form__change" item xs={8}>
			<FormControlLabel
				className="client-data-form__change-text"
				control={<Checkbox defaultChecked />}
				label="Prepare change with"
			/>
			<TextField
				className="client-data-form__change-input"
				id="summ"
				name="summ"
				label="Summ"
				type="summ"
				value={formik.values.summ}
				onChange={formik.handleChange}
				onBlur={formik.onBlur}
				error={formik.touched.summ && Boolean(formik.errors.summ)}
				helperText={formik.touched.summ && formik.errors.summ}
			/>
		</Grid>
	);

	const handlePaymentChange = (
		event: React.MouseEvent<HTMLElement>,
		nextView: string
	) => {
		setPayment(nextView);
		if (nextView === 'card') {
			setChange(<div className="client-data-form__change-box" />);
		} else {
			setChange(
				<Grid className="client-data-form__change" item xs={8}>
					<FormControlLabel
						className="client-data-form__change-text"
						control={<Checkbox defaultChecked />}
						label="Prepare change with"
					/>

					<TextField
						className="client-data-form__change-input"
						id="summ"
						name="summ"
						label="Summ"
						type="summ"
						value={formik.values.summ}
						onChange={formik.handleChange}
						onBlur={formik.onBlur}
						error={formik.touched.summ && Boolean(formik.errors.summ)}
						helperText={formik.touched.summ && formik.errors.summ}
					/>
				</Grid>
			);
		}
	};

	const handleDeliveryChange = (
		event: React.MouseEvent<HTMLElement>,
		nextView: string
	) => {
		setDelivery(nextView);
		if (address) {
			setAddress(null);
		} else {
			setAddress(addressForm);
		}
	};

	const handleTimeChange = (
		event: React.MouseEvent<HTMLElement>,
		nextView: string
	) => {
		setTime(nextView);
		if (nextView === 'now') {
			setTimePicker(
				<div className="client-data-form__time-box"/>
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
						inputProps={{
							step: 1800,
						}}
					/>
				</LocalizationProvider>
			);
		}
	};

	return (
		<div>
			<form className="client-data-form" onSubmit={formik.handleSubmit}>
				<Typography fontSize={24}>Your data</Typography>
				<div className="client-data-form__container">
					<Grid spacing={1} container columns={8}>
						<Grid className="client-data-form__grid-item" item xs={4}>
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
								className="client-data-form__grid-item"
								fullWidth
								id="phone"
								name="phone"
								label="Phone"
								type="phone"
								value={formik.values.phone}
								onChange={formik.handleChange}
								onBlur={formik.onBlur}
								error={formik.touched.phone && Boolean(formik.errors.phone)}
								helperText={formik.touched.phone && formik.errors.phone}
							/>
						</Grid>
						<Grid item xs={8}>
							<ToggleButtonGroup
								fullWidth
								className="client-data-form__payment"
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
						<Grid  item xs={8}>
							<ButtonGroup
								className="client-data-form__sticks"
								size="small"
								aria-label="small outlined button group"
							>
								<Typography className="client-data-form__sticks-box">
									Regular sticks & soy sauce
								</Typography>
								<Button onClick={handleDecrement}>-</Button>
								<Button disabled>{counter}</Button>
								<Button onClick={handleIncrement}>+</Button>
							</ButtonGroup>
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
						<Grid className="client-data-form__address" item xs={8}>
							<ToggleButtonGroup
								fullWidth
								className="client-data-form__delivery"
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
							{address}
						</Grid>

						<Grid item xs={8}>
							<ToggleButtonGroup
								fullWidth
								className="client-data-form__time"
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
							/>
						</Grid>
					</Grid>
				</div>

				<Button color="primary" variant="contained" fullWidth type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
}

export default ClientDataForm;
