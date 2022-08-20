import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

function Logo(props) {
	const { maxWidth, maxHeight } = props;
	return (
		<Box
			component="img"
			sx={{ maxHeight: { maxHeight }, maxWidth: { maxWidth } }}
			src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660238641/sushi-shop/Nav/logo_xxz8a9.svg"
			alt="logo"
		/>
	);
}

Logo.defaultProps = { maxHeight: null, maxWidth: null };
Logo.propTypes = {
	maxWidth: PropTypes.string,
	maxHeight: PropTypes.string,
};
export default Logo;
