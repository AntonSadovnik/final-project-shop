import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './style.scss';

function PhoneNumbers() {
	return (
		<>
			<Typography>Our phone</Typography>
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
			<Grid container alignItems="center" justifyContent="center">
				<AccessTimeIcon color="hoverColor" />
				<Typography
					color={(theme) => theme.palette.text.secondary}
					fontSize="14px"
				>
					Work hours: 10:00-00:00
				</Typography>
			</Grid>
		</>
	);
}

export default PhoneNumbers;
