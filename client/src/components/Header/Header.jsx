import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Divider } from '@mui/material';
import PhoneNumbers from './components/phone-numbers/PhoneNumbers';
import Activities from './components/activities/Activities';
import { City } from './components/city/City';
import Logo from '../Logo/Logo';
import WorkHours from './components/work-hours/WorkHours';

function Header() {
	return (
		<header>
			<Grid
				container
				backgroundColor={(theme) => theme.palette.lightGrayColor.main}
			>
				<Grid
					item
					xs={2}
					flexDirection="column"
					align="center"
					padding="6px 0 8px"
					display={{ xs: 'none', md: 'block' }}
				>
					<PhoneNumbers />
					<Grid container alignItems="center" justifyContent="center">
						<WorkHours />
					</Grid>
				</Grid>
				<Divider
					flexItem
					orientation="vertical"
					sx={{ marginLeft: '10px', display: { xs: 'none', md: 'block' } }}
				/>
				<Grid
					container
					item
					md={9.7}
					sm={12}
					justifyContent="space-between"
					alignItems="center"
					padding={{ sm: '10px 0', md: 0 }}
				>
					<Grid item display={{ sm: 'block', md: 'none' }}>
						<NavLink
							style={{
								textDecoration: 'none',
							}}
							to="/"
						>
							<Logo maxWidth="40px" maxHeight="40px" />
						</NavLink>
					</Grid>
					<Grid item marginLeft={1.25} xs={2}>
						<City />
					</Grid>
					<Grid
						item
						container
						justifyContent="space-between"
						xl={6}
						lg={7}
						sm={9}
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
