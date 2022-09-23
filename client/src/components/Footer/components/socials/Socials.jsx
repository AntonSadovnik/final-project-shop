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
					className="footer__socials-wrap"
					disablePadding
					sx={{
						marginTop: 1.25,
						'& > div': {
							justifyContent: 'center',
							'&>svg': {
								width: 50,
								height: 50,
								opacity: 0.5,
								cursor: 'pointer',
								'&:hover': { opacity: 1 },
							},
						},
					}}
				>
					<ListItemIcon>
						<FacebookIcon
							sx={{ color: '#61A8DE' }}
							href="https://uk-ua.facebook.com/"
							target="_blank"
							rel="noreferrer"
						/>
					</ListItemIcon>
					<ListItemIcon>
						<InstagramIcon
							sx={{ color: '#d85ed8' }}
							href="https://www.instagram.com/"
							target="_blank"
							rel="noreferrer"
						/>
					</ListItemIcon>
				</List>
			</Grid>
		</Grid>
	);
}

export default Socials;
