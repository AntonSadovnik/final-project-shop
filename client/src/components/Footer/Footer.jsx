import React from 'react';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const CustomList = styled(List)(
	({ theme }) => `
    padding-bottom: 60px;
    & li{
        margin-bottom: 20px;
    }
    & li:last-of-type{
        margin-bottom: 0;
    }
    & a {
        color: ${theme.palette.text.primary};
        text-decoration: none;
    }
    & a:hover {
        color: ${theme.palette.text.hoverText};
    }
    `
);

function Footer() {
	return (
		<footer>
			<Grid container justifyContent="space-around" backgroundColor="#F2F2F2">
				<Grid container maxWidth="950px" flexDirection="column">
					<Divider flexItem />
					<Grid container marginTop="22px" justifyContent="space-between">
						<Grid item>
							<Grid container>
								<CustomList>
									<Typography component="li">
										<a href="/">About company</a>
									</Typography>
									<Typography component="li">
										<a href="/">Shipping and payment</a>
									</Typography>
									<Typography component="li">
										<a href="/">Return policy</a>
									</Typography>
								</CustomList>
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
