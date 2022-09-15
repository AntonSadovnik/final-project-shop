import React from 'react';
import { Typography } from '@mui/material';

function Ingredients(props) {
	const { ingredients } = props;
	return (
		ingredients && (
			<>
				<Typography
					variant="h6"
					component="h6"
					sm={{
						fontWeight: '500',
						fontSize: '18px',
						lineHeight: '22px',
						margin: '26px 0 5px 0',
					}}
					sx={{
						margin: { xs: '0 0 5px 0', md: '26px 0 5px 0' },
						textAlign: { xs: 'center', md: 'start' },
						color: { xs: '#111111' },
					}}
				>
					Compound:
				</Typography>

				<Typography
					variant="body2"
					component="p"
					sx={{
						fontWeight: '300',
						fontSize: '18px',
						lineHeight: '22px',
						textAlign: { xs: 'center', md: 'start' },
						color: { xs: '#111111' },
					}}
				>
					{ingredients}
				</Typography>
			</>
		)
	);
}

export default Ingredients;
