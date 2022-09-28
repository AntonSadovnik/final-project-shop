import * as React from 'react';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';
import { validationSchemaRegistration } from './validationSchema';
// eslint-disable-next-line import/no-cycle
import LoginForm from './LoginForm';
import { registrateCustomer } from '../../api/Api';
// eslint-disable-next-line import/no-cycle
import SuccessfullRegistration from './SuccessfulRegistration';

export default function RegistrationForm({ setForm }) {
	const [err, setErr] = React.useState(null);

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			firstName: '',
			lastName: '',
			login: '',
		},
		validationSchema: validationSchemaRegistration,
		onSubmit: (values) => {
			registrateCustomer(values)
				.then(() => {
					setForm(<SuccessfullRegistration setForm={setForm} />);
				})
				.catch((error) =>
					setErr(error.response.data[Object.keys(error.response.data)[0]])
				);
		},
	});

	const changeForm = () => {
		setForm(<LoginForm setForm={setForm} />);
	};

	return (
		<form onSubmit={formik.handleSubmit}>
			<Box>
				<Typography component="div" id="modal-modal-title" variant="h6">
					Registration
				</Typography>
				<Typography component="div" id="modal-modal-description" sx={{ mt: 2 }}>
					<TextField
						sx={{ marginBottom: '20px' }}
						fullWidth
						id="firstName"
						name="firstName"
						label="First name"
						value={formik.values.firstName}
						onBlur={formik.onBlur}
						onChange={formik.handleChange}
						error={formik.touched.firstName && Boolean(formik.errors.firstName)}
						helperText={formik.touched.firstName && formik.errors.firstName}
					/>
					<TextField
						sx={{ marginBottom: '20px' }}
						fullWidth
						id="lastName"
						name="lastName"
						label="Last name"
						value={formik.values.lastName}
						onBlur={formik.onBlur}
						onChange={formik.handleChange}
						error={formik.touched.lastName && Boolean(formik.errors.lastName)}
						helperText={formik.touched.lastName && formik.errors.lastName}
					/>
					<TextField
						sx={{ marginBottom: '20px' }}
						fullWidth
						id="login"
						name="login"
						label="Login"
						value={formik.values.login}
						onBlur={formik.onBlur}
						onChange={formik.handleChange}
						error={formik.touched.login && Boolean(formik.errors.login)}
						helperText={formik.touched.login && formik.errors.login}
					/>
					<TextField
						sx={{ marginBottom: '20px' }}
						fullWidth
						id="email"
						name="email"
						label="Email"
						type="email"
						value={formik.values.email}
						onBlur={formik.onBlur}
						onChange={formik.handleChange}
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
					/>
					<TextField
						type="password"
						sx={{ marginBottom: '20px' }}
						fullWidth
						id="password"
						name="password"
						label="Password"
						value={formik.values.password}
						onBlur={formik.onBlur}
						onChange={formik.handleChange}
						error={formik.touched.password && Boolean(formik.errors.password)}
						helperText={formik.touched.password && formik.errors.password}
					/>
				</Typography>
				<Typography component="div" sx={{ marginBottom: '20px', color: 'red' }}>
					{err}
				</Typography>
				<Button
					sx={{ marginBottom: '20px' }}
					color="primary"
					variant="contained"
					fullWidth
					type="submit"
				>
					Submit
				</Button>
				<Box
					sx={{
						textAlign: 'center',
						fontFamily: "'Nunito Sans', sans-serif",
					}}
				>
					or{' '}
					<Box
						sx={{
							cursor: 'pointer',
							display: 'inline-block',
							margin: '0 auto',
							textAlign: ' center',
							'&:hover': { color: '#f46d40' },
						}}
						onClick={changeForm}
					>
						Login
					</Box>
				</Box>
			</Box>
		</form>
	);
}
