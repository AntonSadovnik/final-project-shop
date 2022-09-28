import React from 'react';
import { Typography, Box, Link } from '@mui/material';

function PhoneNumbers() {
	return (
		<>
			<Typography>Our phone</Typography>
			<Box sx={{ a: { color: '#ff9846', fontSize: { xs: 12, md: '1rem' } } }}>
				<Box margin="5px 0">
					<Link href="tel:+996705188955">996 705 188 955</Link>
				</Box>
				<Box margin="5px 0">
					<Link href="tel:+996555188955">996 555 188 955</Link>
				</Box>
			</Box>
		</>
	);
}

export default PhoneNumbers;
