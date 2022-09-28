import * as yup from 'yup';

const phoneRegex = /^(?:(\+)?38)?(0\d{9})$/;
const nameRegex = /^([A-Za-z\u0400-\u04FF]+\s)*[A-Za-z\u0400-\u04FF]*$/g;

export const validationSchema = yup.object({
	name: yup
		.string('Enter your name')
		.matches(nameRegex, 'Only: a-z, A-Z, а-я, А-Я.')
		.min(2, 'Min 2 symbols')
		.required('Name is required'),
	mobile: yup
		.string('Enter your mobile')
		.matches(phoneRegex, 'Invalid phone')
		.required('Phone is required'),
	street: yup
		.string('Enter your street')
		.min(4, 'Min 4 symbols')
		.max(20, 'Max 20 symbols')
		.required('Street is required'),
	house: yup
		.string('Enter your house')
		.max(5, 'Max 5 symbols')
		.required('House is required'),
	email: yup.string('Enter your email').required('Email is required'),
});
