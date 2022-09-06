import * as React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';
// eslint-disable-next-line import/no-cycle
import LoginForm from './LoginForm';
import { registrateCustomer } from '../../api/Api';
import SuccessfullRegistration from './SuccessfulRegistration';

export default function RegistrationForm({ setForm }) {
	const [err, setErr] = React.useState(null);
	const validationschema = yup.object({
		email: yup.string('Enter your email').required('Email is required'),
		password: yup
			.string('Enter your password')
			.min(7, '*Password must be between 7 and 30 characters')
			.max(30, '*Password must be between 7 and 30 characters')
			.required('Password is required'),
		firstName: yup
			.string('Enter your First name')
			.required('First name is required'),
		lastName: yup
			.string('Enter your Last name')
			.required('Last name is required'),
		login: yup
			.string('Login your password')
			.min(3, '*Login must be between 3 and 10 characters')
			.max(10, '*Login must be between 3 and 10 characters')
			.required('Login is required'),
	});

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			firstName: '',
			lastName: '',
			login: '',
		},
		validationSchema: validationschema,
		onSubmit: (values) => {
			registrateCustomer(values)
				.then(() => {
					setForm(<SuccessfullRegistration />);
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
				<Typography id="modal-modal-title" variant="h6" component="h2">
					Registration
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
				<Typography sx={{ marginBottom: '20px' }}>{err}</Typography>
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
					<Box className="modal__change-form" onClick={changeForm}>
						Login
					</Box>
				</Box>
			</Box>
		</form>
	);
}
