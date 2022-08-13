import React from 'react';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import './style.scss';

function Footer() {
	return (
		<footer>
			<Grid container justifyContent="space-around" backgroundColor="#F2F2F2">
				<Grid container maxWidth="950px" flexDirection="column">
					<Divider flexItem />
					<Grid container marginTop="22px" justifyContent="space-between">
						<Grid item>
							<Grid container>
								<List
									className="footer__content-wrap"
									style={{ paddingBottom: '60px' }}
								>
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
						<Grid item>
							<Grid container>
								<Divider orientation="vertical" flexItem />
								<List>
									<ListItemText>About company</ListItemText>
									<ListItemText>Shipping and payment</ListItemText>
									<ListItemText>Return policy</ListItemText>
								</List>
							</Grid>
						</Grid>
						<Grid item>
							<Grid container>
								<Divider orientation="vertical" flexItem />
								<List>
									<ListItemText>About company</ListItemText>
									<ListItemText>Shipping and payment</ListItemText>
									<ListItemText>Return policy</ListItemText>
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
