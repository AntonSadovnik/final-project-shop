/* eslint-disable react/prop-types */

import {
	Grid,
	TextField,
} from '@mui/material';
import * as React from 'react';


function AddressForm({ formikData }) {


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
					value={formikData.values.street}
					onChange={formikData.handleChange}
					onBlur={formikData.onBlur}
					error={formikData.touched.street && Boolean(formikData.errors.street)}
					helperText={formikData.touched.street && formikData.errors.street}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					fullWidth
					id="house"
					name="house"
					label="House"
					type="house"
					value={formikData.values.house}
					onChange={formikData.handleChange}
					onBlur={formikData.onBlur}
					error={formikData.touched.house && Boolean(formikData.errors.house)}
					helperText={formikData.touched.house && formikData.errors.house}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					fullWidth
					id="apartment"
					name="apartment"
					label="Apt"
					type="apartment"
					value={formikData.values.apartment}
					onChange={formikData.handleChange}
					onBlur={formikData.onBlur}
					error={formikData.touched.apartment && Boolean(formikData.errors.apartment)}
					helperText={formikData.touched.apartment && formikData.errors.apartment}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					fullWidth
					id="entrance"
					name="entrance"
					label="Entrance"
					type="entrance"
					value={formikData.values.entrance}
					onChange={formikData.handleChange}
					onBlur={formikData.onBlur}
					error={formikData.touched.entrance && Boolean(formikData.errors.entrance)}
					helperText={formikData.touched.entrance && formikData.errors.entrance}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					fullWidth
					id="floor"
					name="floor"
					label="Floor"
					type="floor"
					value={formikData.values.floor}
					onChange={formikData.handleChange}
					onBlur={formikData.onBlur}
					error={formikData.touched.floor && Boolean(formikData.errors.floor)}
					helperText={formikData.touched.floor && formikData.errors.floor}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					fullWidth
					id="code"
					name="code"
					label="Code"
					type="code"
					value={formikData.values.code}
					onChange={formikData.handleChange}
					onBlur={formikData.onBlur}
					error={formikData.touched.code && Boolean(formikData.errors.code)}
					helperText={formikData.touched.code && formikData.errors.code}
				/>
			</Grid>
		</Grid>
	);
}

export default AddressForm;
