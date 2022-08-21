import React from 'react';
import { Typography, Box } from '@mui/material';
import './style.scss';

function PhoneNumbers() {
	return (
		<>
			<Typography sx={{ xs: { fontSize: '12px' }, md: { fontSize: '1em' } }}>
				Our phone
			</Typography>
			<Box>
				<Box margin="5px 0">
					<a className="header__phone-number" href="tel:+996705188955">
						996 705 188 955
					</a>
				</Box>
				<Box margin="5px 0">
					<a className="header__phone-number" href="tel:+996555188955">
						996 555 188 955
					</a>
				</Box>
			</Box>
		</>
	);
}

export default PhoneNumbers;
