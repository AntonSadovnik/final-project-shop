import * as React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';
import { postReview } from '../../api/Api';
import SuccessfulReview from './SuccessfulReview';

export default function ReviewsInput({ name }) {
	const [open, setOpen] = React.useState(false);
	const [err, setErr] = React.useState(null);
	const validationschema = yup.object({
		firstName: yup.string('Enter your name').required('Name is required'),
		content: yup
			.string('Enter your review')
			.min(20, 'Review must be between 20 and 100 characters')
			.max(100, 'Review must be between 20 and 100 characters')
			.required('Review is required'),
	});

	const handleClickOpen = () => {
		setOpen(true);
	};

	const formik = useFormik({
		initialValues: {
			firstName: name,
			content: '',
		},
		validationSchema: validationschema,
		onSubmit: (data) => {

			const review = {
				product: '632070730888dc13b467f037',
				content: data.content,
				firstName: data.firstName,
			};
			setOpen(true);
			postReview(review, localStorage.getItem('token'))
				.then((response) => {
					console.log(response)
				})
				.catch((error) => setErr(error.response.data[Object.keys(error.response.data)[0]]));

		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<SuccessfulReview
				open={open}
				setOpen={setOpen}
				handleClickOpen={handleClickOpen}
			/>
			<Box>
				<Typography component="div" id="modal-modal-description" sx={{ mt: 2 }}>
					<TextField
						component="span"
						sx={{ marginBottom: '20px' }}
						fullWidth
						id="firstName"
						name="firstName"
						label="Name"
						value={formik.values.firstName}
						onBlur={formik.onBlur}
						onChange={formik.handleChange}
						error={formik.touched.firstName && Boolean(formik.errors.firstName)}
						helperText={formik.touched.firstName && formik.errors.firstName}
					/>
					<TextField
						component="span"
						fullWidth
						multiline
						rows={4}
						id="content"
						name="content"
						label="Your Review"
						value={formik.values.content}
						onBlur={formik.onBlur}
						onChange={formik.handleChange}
						error={formik.touched.content && Boolean(formik.errors.content)}
						helperText={formik.touched.content && formik.errors.content}
					/>
				</Typography>
				<Typography component="div" sx={{ marginBottom: '20px' }}>
					{err}
				</Typography>
				<Button
					sx={{ marginBottom: '40px' }}
					color="primary"
					variant="contained"
					fullWidth
					type="submit"
				>
					Submit
				</Button>
			</Box>
		</form>
	);
}
