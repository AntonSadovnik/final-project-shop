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
				<Grid container maxWidth="950px" flexDirection="column">
					<Divider flexItem />
					<Grid
						container
						sx={{ marginTop: '22px' }}
						justifyContent="space-between"
					>
						<Grid item xs={3}>
							<Links />
						</Grid>
						<Grid
							item
							sx={{
								paddingBottom: '60px',
								borderLeft: '0.5px solid #A4ACAD',
							}}
							xs={4}
						>
							<Socials />
						</Grid>
						<Grid
							item
							xs={3}
							sx={{
								paddingBottom: '60px',
								borderLeft: '0.5px solid #A4ACAD',
							}}
						>
							<Grid
								container
								maxWidth="fit-content"
								sx={{ marginLeft: { lg: '40px', md: '20px' } }}
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
