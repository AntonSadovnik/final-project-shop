import * as yup from 'yup';

const nameRegex = /^[A-Za-z\u0400-\u04FF]*$/g;

export const validationSchemaRegistration = yup.object({
  email: yup.string('Enter your email').required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(7, '*Password must be between 7 and 30 characters')
    .max(30, '*Password must be between 7 and 30 characters')
    .required('Password is required'),
  firstName: yup
    .string('Enter your First name')
    .matches(nameRegex, 'Only: a-z, A-Z, а-я, А-Я.')
		.min(2, '*Min 2 symbols')
    .required('First name is required'),
  lastName: yup
    .string('Enter your Last name')
    .matches(nameRegex, 'Only: a-z, A-Z, а-я, А-Я.')
		.min(3, '*Min 3 symbols')
    .required('Last name is required'),
  login: yup
    .string('Login your password')
    .min(3, '*Login must be between 3 and 10 characters')
    .max(10, '*Login must be between 3 and 10 characters')
    .required('Login is required'),
});