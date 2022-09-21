/* eslint-disable react/prop-types */

import { Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';
import * as React from 'react';

function ChangeForm({ formikData }) {
	return (
		<Grid
			sx={{
				height: { xs: 'auto', sm: '82px' },
			}}
			item
			xs={8}
		>
			<Grid columns={16} container>
				<Grid xs={10}>
					<FormControlLabel
						sx={{ marginTop: "10px" }}
						control={<Checkbox defaultChecked />}
						label="Prepare change with"
					/>
				</Grid>
				<Grid xs={6}>
					<TextField
						id="summ"
						name="summ"
						label="Summ"
						type="number"
						value={formikData.values.summ}
						onChange={formikData.handleChange}
						onBlur={formikData.onBlur}
						error={formikData.touched.summ && Boolean(formikData.errors.summ)}
						helperText={formikData.touched.summ && formikData.errors.summ}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default ChangeForm;
