import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Typography } from '@mui/material';

function WorkHours() {
	return (
		<>
			<AccessTimeIcon color="hoverColor" />
			<Typography
				color={(theme) => theme.palette.text.secondary}
				fontSize={14}
				align="center"
			>
				Work hours: 10:00-00:00
			</Typography>
		</>
	);
}
export default WorkHours;
