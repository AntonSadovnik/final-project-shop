import React from 'react';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
// import { styled } from '@mui/material/styles';

function Footer() {
	return (
		<footer>
			<Grid container justifyContent="space-around" backgroundColor="#F2F2F2">
				<Grid container maxWidth="950px" flexDirection="column">
					<Divider flexItem />
					<Grid container marginTop="22px" justifyContent="space-between">
						<Grid item>
							<List>
								<ListItemText>About company</ListItemText>
								<ListItemText>Shipping and payment</ListItemText>
								<ListItemText>Return policy</ListItemText>
							</List>
							<Divider orientation="vertical" />
						</Grid>
						<Grid item>
							<List>
								<ListItemText>About company</ListItemText>
								<ListItemText>Shipping and payment</ListItemText>
								<ListItemText>Return policy</ListItemText>
							</List>
						</Grid>
						<Grid item>
							<List>
								<ListItemText>About company</ListItemText>
								<ListItemText>Shipping and payment</ListItemText>
								<ListItemText>Return policy</ListItemText>
							</List>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</footer>
	);
}
export default Footer;
