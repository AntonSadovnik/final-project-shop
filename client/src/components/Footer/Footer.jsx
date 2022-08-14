import React from 'react';
import {
	Typography,
	Input,
	Divider,
	ListItemText,
	List,
	ListItemIcon,
	Grid,
} from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './style.scss';

function Footer() {
	return (
		<footer>
			<Grid container justifyContent="space-around" backgroundColor="#F2F2F2">
				<Grid container maxWidth="950px" flexDirection="column">
					<Divider flexItem />
					<Grid
						container
						style={{ marginTop: '22px' }}
						justifyContent="space-between"
					>
						<Grid item xs={3}>
							<Grid container>
								<List className="footer__links-wrap" disablePadding>
									<Typography component="li">
										<a href="/">About company</a>
									</Typography>
									<Typography component="li">
										<a href="/">Shipping and payment</a>
									</Typography>
									<Typography component="li">
										<a href="/">Return policy</a>
									</Typography>
								</List>
							</Grid>
						</Grid>
						<Grid
							item
							style={{
								paddingBottom: '60px',
								borderLeft: '0.5px solid #A4ACAD',
							}}
							xs={4}
						>
							<Grid container>
								<Grid item marginLeft="40px">
									<Typography fontWeight="500">Enter your number</Typography>
									<Input style={{ margin: '10px 0 20px' }} />
									<Typography
										fontSize="18px"
										color={(theme) => theme.palette.text.secondary}
									>
										Choose a convenient messenger for communication
									</Typography>
									<List disablePadding className="footer__socials-wrap">
										<ListItemIcon>
											<WhatsAppIcon style={{ color: '#1BD741' }} />
										</ListItemIcon>
										<ListItemIcon>
											<TelegramIcon style={{ color: '#61A8DE' }} />
										</ListItemIcon>
										<ListItemIcon>
											<InstagramIcon style={{ color: '#d85ed8' }} />
										</ListItemIcon>
									</List>
								</Grid>
							</Grid>
						</Grid>
						<Grid
							item
							xs={3}
							style={{
								paddingBottom: '60px',
								borderLeft: '0.5px solid #A4ACAD',
							}}
						>
							<Grid container marginLeft="40px">
								<List>
									<ListItemText>
										<a className="footer__contacts" href="tel:+996705188955">
											Tel: 996 705 188 955
										</a>
									</ListItemText>
									<ListItemText>
										<a className="footer__contacts" href="tel:+996555188955">
											Tel: 996 555 188 955
										</a>
									</ListItemText>
									<ListItemText className="footer__contacts">
										Bakaleev, 126
									</ListItemText>
								</List>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</footer>
	);
}
export default Footer;
