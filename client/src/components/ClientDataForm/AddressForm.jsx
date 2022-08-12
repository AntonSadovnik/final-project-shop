import { Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';

function AddressForm() {

	const validationschema = yup.object({
		name: yup.string('Enter your name').required('Name is required'),
		phone: yup
			.string('Enter your phone')
			.min(8, 'phone should be of minimum 10 characters length')
			.required('phone is required'),
	});

	const formik = useFormik({
		initialValues: {
			apartment: '',
			entrance: '',
			floor: '',
			code: '',
			street: '',
			house: '',
		},
		validationSchema: validationschema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
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
					fullWidth
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
}

export default AddressForm;
