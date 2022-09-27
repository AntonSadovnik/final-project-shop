import React from 'react';
import { Box, Typography } from '@mui/material';

function ReviewCard({name, text}) {
	return (
		<Box
			key={Math.random()}
			sx={{
				paddingLeft: { xs: '10px', sm: '20px' },
				paddingRight: { xs: '10px', sm: '20px' },
				paddingTop: { xs: '10px', sm: '10px' },
				paddingBottom: { xs: '10px', sm: '10px' },
				textAlign: 'justify',
				border: '1px solid #A4ACAD',
				borderRadius: '15px',
				marginBottom: '10px',
			}}
		>
			<Typography
				key={Math.random()}
				fontSize="18px"
				sx={{ marginBottom: '9px' }}
			>
				{name}
			</Typography>
			<Typography key={Math.random()} color="text.secondary" fontSize="15px">
				{text}
			</Typography>
		</Box>
	);
}
export default ReviewCard;
