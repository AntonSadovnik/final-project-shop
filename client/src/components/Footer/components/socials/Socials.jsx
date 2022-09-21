import React from 'react';
import { Typography, List, ListItemIcon, Grid } from '@mui/material';
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
				>
					<a
						href="https://uk-ua.facebook.com/"
						target="_blank"
						rel="noreferrer"
						style={{ textDecoration: 'none'}}
					>
						<ListItemIcon>
							<FacebookIcon sx={{ color: '#61A8DE'}} fontSize='large'/>
						</ListItemIcon>
					</a>

					<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
						<ListItemIcon>
							<InstagramIcon sx={{ color: '#d85ed8' }} fontSize='large'/>
						</ListItemIcon>
					</a>
				</List>
			</Grid>
		</Grid>
	);
}

export default Socials;
