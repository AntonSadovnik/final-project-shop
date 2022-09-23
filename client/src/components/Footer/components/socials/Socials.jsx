import React from 'react';
import { Typography, List, ListItemIcon, Grid, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Socials() {
	return (
		<Grid container sx={{ justifyContent: { xs: 'center', sm: 'flex-start' } }}>
			<Grid item sx={{ marginLeft: { lg: '40px', sm: '20px' } }}>
				<Typography
					fontSize="18px"
					color={(theme) => theme.palette.text.secondary}
					textAlign="center"
				>
					You can follow us on:
				</Typography>
				<List
					disablePadding
					sx={{
						marginTop: 1.25,
						svg: {
							width: 50,
							height: 50,
							opacity: 0.5,
							cursor: 'pointer',
							'&:hover': { opacity: 1 },
						},
					}}
				>
					<ListItemIcon>
						<Link
							href="https://uk-ua.facebook.com/"
							target="_blank"
							rel="noreferrer"
						>
							<FacebookIcon sx={{ color: '#61A8DE' }} />
						</Link>
					</ListItemIcon>
					<ListItemIcon>
						<Link
							href="https://www.instagram.com/"
							target="_blank"
							rel="noreferrer"
						>
							<InstagramIcon sx={{ color: '#d85ed8' }} />
						</Link>
					</ListItemIcon>
				</List>
			</Grid>
		</Grid>
	);
}

export default Socials;
