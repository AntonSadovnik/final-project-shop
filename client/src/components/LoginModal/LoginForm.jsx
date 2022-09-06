import * as React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';
// eslint-disable-next-line import/no-cycle
import RegistrationForm from './RegistrationForm';
import { login } from '../../api/Api';


export default function LoginForm({ setForm, setLoginModal }) {
	const [err, setErr] = React.useState(null);
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
					})
				.catch((error) =>{
					setErr(error.response.data[Object.keys(error.response.data)[0]]);}
					);

			},
		});

    const changeForm = () => {
			setForm(<RegistrationForm setForm={setForm} />);

		};

    return (
			<form onSubmit={formik.handleSubmit}>
				<Box>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Login
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						<TextField
							sx={{ marginBottom: '20px' }}
							fullWidth
							id="loginOrEmail"
							name="loginOrEmail"
							label="Email or login"
							value={formik.values.loginOrEmail}
							onBlur={formik.onBlur}
							onChange={formik.handleChange}
							error={
								formik.touched.loginOrEmail &&
								Boolean(formik.errors.loginOrEmail)
							}
							helperText={
								formik.touched.loginOrEmail && formik.errors.loginOrEmail
							}
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
						{' '}
						or{' '}
						<Box className="modal__change-form" onClick={changeForm}>
							Registration
						</Box>
					</Box>
				</Box>
			</form>
		);
}
