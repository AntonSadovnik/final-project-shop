import * as yup from 'yup';

const phoneRegex = /^(?:(\+)?38)?(0\d{9})$/;

export const validationSchema = yup.object({
	name: yup.string('Enter your name').required('Name is required'),
	mobile: yup
		.string('Enter your mobile')
		.matches(phoneRegex, 'Invalid phone')
		.required('Phone is required'),
	street: yup.string('Enter your street').required('Street is required'),
	house: yup.string('Enter your house').required('House is required'),
	email: yup.string('Enter your email').required('Email is required'),
});
