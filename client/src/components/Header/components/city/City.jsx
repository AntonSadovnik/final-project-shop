import React from 'react';
import { Typography } from '@mui/material';

function City() {
	return (
		<Typography fontSize="14px" color={(theme) => theme.palette.text.secondary}>
			City:
		</Typography>
	);
}

export default City;
export { City };
