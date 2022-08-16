import React from 'react';
import { Typography, Input, List, ListItemIcon, Grid } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './style.scss';

function Socials() {
	return (
		<Grid container>
			<Grid item sx={{ marginLeft: { lg: '40px', sm: '20px' } }}>
				<Typography fontWeight="500">Enter your number</Typography>
				<Input sx={{ margin: '10px 0 20px' }} />
				<Typography
					fontSize="18px"
					color={(theme) => theme.palette.text.secondary}
				>
					Choose a convenient messenger for communication
				</Typography>
				<List className="footer__socials-wrap" disablePadding>
					<ListItemIcon>
						<WhatsAppIcon sx={{ color: '#1BD741' }} />
					</ListItemIcon>
					<ListItemIcon>
						<TelegramIcon sx={{ color: '#61A8DE' }} />
					</ListItemIcon>
					<ListItemIcon>
						<InstagramIcon sx={{ color: '#d85ed8' }} />
					</ListItemIcon>
				</List>
			</Grid>
		</Grid>
	);
}

export default Socials;
