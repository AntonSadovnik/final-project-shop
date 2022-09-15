import React from 'react';
import { Typography } from '@mui/material';

function Title(props) {
	const { title, weight } = props;
	return (
		<>
			<Typography
				variant="h3"
				component="h3"
				sx={{
					textAlign: { xs: 'center', md: 'start' },
					color: { xs: '#000000' },
					fontSize: { xs: '28px', sm: '38px', md: '48px', xl: '58px' },
					lineHeight: {
						xs: '35px',
						sm: '48px',
						md: '60px',
						xl: '70px',
					},
				}}
			>
				{title}
			</Typography>

			<Typography
				variant="body2"
				component="p"
				sx={{
					fontWeight: '300',
					margin: { xs: '15px 0', md: '30px 0' },
					color: { xs: '#FF9846' },
					fontSize: { xs: '18px', sm: '20px', md: '22px', xl: '23px' },
					lineHeight: {
						xs: '22px',
						sm: '24px',
						md: '26px',
						xl: '28px',
					},
				}}
			>
				{weight} grams
			</Typography>
		</>
	);
}

export default Title;
