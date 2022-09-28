import React from 'react';
import { Divider, Grid } from '@mui/material';
import Links from './components/links/Links';
import Socials from './components/socials/Socials';
import Contacts from './components/contacts/Contacts';

function Footer() {
	return (
		<footer>
			<Grid
				container
				justifyContent="space-around"
				backgroundColor={(theme) => theme.palette.lightGrayColor.main}
			>
				<Grid container maxWidth={950} flexDirection="column">
					<Divider flexItem />
					<Grid container marginTop={2.75} justifyContent="space-between">
						<Grid item xs={3}>
							<Links />
						</Grid>
						<Grid
							item
							paddingBottom={7.5}
							borderLeft="0.5px solid #A4ACAD"
							xs={4}
						>
							<Socials />
						</Grid>
						<Grid
							item
							xs={3}
							paddingBottom={7.5}
							borderLeft="0.5px solid #A4ACAD"
						>
							<Grid
								container
								maxWidth="fit-content"
								marginLeft={{ lg: 5, sm: 2.5 }}
							>
								<Contacts />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</footer>
	);
}
export default Footer;
