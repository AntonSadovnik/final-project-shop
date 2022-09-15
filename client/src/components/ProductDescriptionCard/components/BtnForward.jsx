import { React } from 'react';
import { NavLink } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import NavigateNext from '@mui/icons-material/NavigateNext';

function BtnForward(props) {
	const { forwardProductId } = props;

	return (
		<NavLink
			to={forwardProductId}
			style={{
				textDecoration: 'none',
			}}
		>
			<Stack direction="row" alignItems="center">
				<Typography
					sx={{
						fontSize: '18px',
						color: '#000',
						marginRight: '18px',
					}}
				>
					Forward
				</Typography>
				<NavigateNext
					sx={{
						background: '#F46D40',
						color: '#F2F2F2',
						borderRadius: '50px',
						height: '20px',
						width: '20px',
					}}
				/>
			</Stack>
		</NavLink>
	);
}

export default BtnForward;
