import React from 'react';
import { Typography } from '@mui/material';

function Price(props) {
	const { previousPrice, currentPrice } = props;
	return (
		<>
			{previousPrice && (
				<Typography
					sx={{
						textDecoration: 'line-through',
						color: { xs: '#000000' },
						fontSize: {
							xs: '20px',
							sm: '23px',
							md: '24px',
							xl: '25px',
						},
						lineHeight: {
							xs: '23px',
							sm: '28px',
							md: '28px',
							xl: '32px',
						},
						marginRight: '10px',
					}}
					component="h5"
				>
					{previousPrice}
				</Typography>
			)}
			<Typography
				variant="h4"
				component="span"
				sx={{
					color: { xs: '#000000' },
					fontWeight: 'bold',
					fontSize: {
						xs: '24px',
						sm: '25px',
						md: '25px',
						xl: '27px',
					},
					lineHeight: {
						xs: '27px',
						sm: '30px',
						md: '30px',
						xl: '34px',
					},
				}}
			>
				{currentPrice} UAH
			</Typography>
		</>
	);
}

export default Price;
