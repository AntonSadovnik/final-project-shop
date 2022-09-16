import { React } from 'react';
import { NavLink } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import NavigateBefore from '@mui/icons-material/NavigateBefore';

function BtnBack(props) {
	const { backProductId } = props;

	return (
		<NavLink
			to={backProductId}
			style={{
				textDecoration: 'none',
			}}
		>
			<Stack direction="row" alignItems="center">
				<NavigateBefore
					sx={{
						background: '#F46D40',
						color: '#F2F2F2',
						borderRadius: '50px',
						height: '20px',
						width: '20px',
					}}
				/>
				<Typography
					sx={{
						fontSize: '18px',
						color: '#000',
						marginLeft: '18px',
					}}
				>
					Back
				</Typography>
			</Stack>
		</NavLink>
	);
}

export default BtnBack;
