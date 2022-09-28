import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';
// eslint-disable-next-line import/no-cycle
import RegistrationForm from './RegistrationForm';
import { login } from '../../api/Api';
import { createCartAfterLogin } from '../../store/actions';

export default function LoginForm({ setForm, setLoginModal }) {
	const [err, setErr] = React.useState(null);
	const dispatch = useDispatch();
	const validationschema = yup.object({
		loginOrEmail: yup
			.string('Enter your email or login')
			.required('Email or login is required'),
		password: yup
			.string('Enter your password')
			.min(7, '*Password must be between 7 and 30 characters')
			.max(30, '*Password must be between 7 and 30 characters')
			.required('password is required'),
	});

	const formik = useFormik({
		initialValues: {
			loginOrEmail: '',
			password: '',
		},
		validationSchema: validationschema,
		onSubmit: (userData) => {
			login(userData)
				.then((response) => {
					localStorage.setItem('token', response.data.token);
					setLoginModal(false);
					dispatch(createCartAfterLogin(response.data.token));
				})
				.catch((error) => {
					setErr(error.response.data[Object.keys(error.response.data)[0]]);
				});
		},
	});

	const changeForm = () => {
		setForm(<RegistrationForm setForm={setForm} />);
	};

	return (
		<form onSubmit={formik.handleSubmit}>
			<Box>
				<Typography component="div" id="modal-modal-title" variant="h6">
					Login
				</Typography>
				<Typography component="div" id="modal-modal-description" sx={{ mt: 2 }}>
					<TextField
						component="span"
						sx={{ marginBottom: '20px' }}
						fullWidth
						id="loginOrEmail"
						name="loginOrEmail"
						label="Email or login"
						value={formik.values.loginOrEmail}
						onBlur={formik.onBlur}
						onChange={formik.handleChange}
						error={
							formik.touched.loginOrEmail && Boolean(formik.errors.loginOrEmail)
						}
						helperText={
							formik.touched.loginOrEmail && formik.errors.loginOrEmail
						}
					/>
					<TextField
						component="span"
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
				<Typography component="div" sx={{ marginBottom: '20px' }}>
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
				<Typography
					component="div"
					sx={{
						textAlign: 'center',
						fontFamily: "'Nunito Sans', sans-serif",
					}}
				>
					{' '}
					or{' '}
					<Typography
						component="div"
						sx={{
							cursor: 'pointer',
							display: 'inline-block',
							margin: '0 auto',
							textAlign: ' center',
							'&:hover': { color: '#f46d40' },
						}}
						onClick={changeForm}
					>
						Registration
					</Typography>
				</Typography>
			</Box>
		</form>
	);
}
