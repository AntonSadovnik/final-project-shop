import * as React from 'react';
import { Typography, Box } from '@mui/material';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';

export default function SearchListEmpty() {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', columnGap: '10px', marginTop: '10px'}}>
			<SentimentDissatisfiedOutlinedIcon fontSize="large" sx={{color: '#aaa'}}/>
			<Typography sx={{ fontSize: '22px' }}>
				Sorry, there are no results for your search
			</Typography>
		</Box>
	);
}
