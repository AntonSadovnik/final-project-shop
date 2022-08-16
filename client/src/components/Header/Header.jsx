import React from 'react';
import { Grid, Divider } from '@mui/material';
import PhoneNumbers from './components/phone-numbers/PhoneNumbers';
import Activities from './components/activities/Activities';
import { City } from './components/city/City';

function Header() {
	return (
		<header>
			<Grid
				container
				backgroundColor={(theme) => theme.palette.lightGrayColor.main}
			>
				<PhoneNumbers />
				<Divider flexItem orientation="vertical" sx={{ marginLeft: '10px' }} />
				<Grid
					container
					item
					xs={9.7}
					justifyContent="space-between"
					alignItems="center"
				>
					<Grid item marginLeft="10px" xs={2}>
						<City />
					</Grid>
					<Grid
						item
						container
						justifyContent="space-between"
						xl={6}
						lg={7}
						md={9}
					>
						<Activities />
					</Grid>
				</Grid>
			</Grid>
			<Divider />
		</header>
	);
}

export default Header;
