import * as React from 'react';
import { Typography } from '@mui/material';

export default function SearchListEmpty() {
	return (
		<Typography sx={{ fontSize: '18px' }}>
			Sorry, there are no results for your search
		</Typography>
	);
}
