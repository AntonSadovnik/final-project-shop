import { CardMedia, Grid, Stack } from '@mui/material';
import { React } from 'react';

function PdpImage(props) {
	const { imageUrls, name } = props;
	return (
		<Grid container item xs={12} sm={7} md={7}>
			<Stack spacing={1} justifyContent="center" width="100%">
				<CardMedia component="img" image={imageUrls} alt={name} />
			</Stack>
		</Grid>
	);
}

export default PdpImage;
