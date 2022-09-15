import React from 'react';
import { CircularProgress, } from '@mui/material';
import { LoadingButton } from '@mui/lab';

function LoadingElement() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				paddingTop: 10,
			}}
		>
		 	<LoadingButton
				loading
				variant="text"
				loadingIndicator={
					<CircularProgress size={30} style={{ color: '#ff9846' }} />
				}
			/> 
		
		</div>
	);
}

export default LoadingElement;
