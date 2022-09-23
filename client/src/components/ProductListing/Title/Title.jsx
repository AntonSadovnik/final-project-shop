import React from 'react';
import { CardMedia, Typography } from '@mui/material';
import queryString from 'query-string';
import menuItemsContent from '../../Nav/config';

function Title() {
	const currentParams = queryString.parse(window.location.search);
	const categoryTitle =
		currentParams.categories.charAt(0).toUpperCase() +
		currentParams.categories.slice(1);
	const categoryImgPath = menuItemsContent().find(
		(el) => el.alt.toLowerCase() === categoryTitle.toLowerCase()
	).src;
	return (
		<>
			<CardMedia
				component="img"
				src={categoryImgPath}
				sx={{ marginRight: '20px', width: 'fit-content' }}
			/>
			<Typography variant="h4" component="h2">
				{categoryTitle}
			</Typography>
		</>
	);
}

export default Title;
