import React from 'react';
import { Typography, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Error() {

	return (
		<Stack
			className="error-card"
			component="section"
			xs={12}
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			sx={{
				padding: { xs: '7px', md: '0 30px 22px' },
				margin: { xs: '20px 0', md: '40px 0' },
			}}
		>
			<Stack
				className="error-card_block-switch"
				spacing={4}
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				sx={{
					padding: { xs: '7px', md: '0 30px 22px' },
					margin: { xs: '20px 0', md: '40px 0' },
				}}
			>
				<Typography
					className="error-card_title"
					variant="h4"
					component="h4"
					style={{
						display: 'block',
						textAlign: 'center',
					}}
					sx={{
						fontSize: { xs: '25px', md: '35px', lx: '45px', lg: '55px' },
						marginBottom: { xs: '10px', md: '35px', lx: '45px' },

					}}
				>
					Error 404
				</Typography>

				<Typography
					className="error-card_content"
					variant="h5"
					component="span"
					style={{
						textAlign: 'center',
					}}
					sx={{
						fontSize: { xs: '15px', md: '25px', lx: '35px' },
						marginBottom: { xs: '10px', md: '25px', lx: '35px' },

					}}
				>
					Unfortunately, there is no such page.
				</Typography>

				<Typography
					className="error-card_content-switch-home-page"
					variant="body2"
					component="p"
					sx={{
						color: { xs: '#a4acad' },
					}}
				>
					But there are rolls, pizza and noodles:
				</Typography>

				<NavLink
					style={{
						textDecoration: 'none',
					}}
					to="/"
				>
					<Stack
						variant="contained"
						component="a"
						className="error-card_switch-home-page"
						style={{
							borderRadius: '5px',
							padding: '5px 65px',
							fontStyle: 'normal',
							fontWeight: '500',
							textAlign: 'center',
						}}
						sx={{
							fontSize: { xs: '14px', md: '24px', lx: '34px' },
							lineHeight: { xs: '20px', md: '35px', lx: '45px' },
							background: { xs: '#F46D40' },
							color: { xs: '#F2F2F2' },
						}}

					>
						OUR MENU
					</Stack>
				</NavLink>
			</Stack >
		</Stack >
	);
}

export default Error;
