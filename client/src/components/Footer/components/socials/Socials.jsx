import React from 'react';
import { Typography, List, ListItemIcon, Grid, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Socials() {
	return (
		<Grid container justifyContent={{ xs: 'center', sm: 'flex-start' }}>
			<Grid item marginLeft={{ lg: 5, sm: 2.5 }}>
				<Typography
					fontSize={18}
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
