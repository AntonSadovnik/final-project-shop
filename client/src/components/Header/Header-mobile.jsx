import React from 'react';
import { Button, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PhoneNumbers from './components/phone-numbers/PhoneNumbers';
import Logo from '../Logo/Logo';
import WorkHours from './components/work-hours/WorkHours';
import './components/activities/style.scss';

function HeaderMobile() {
	return (
		<header>
			<Grid
				container
				justifyContent="space-evenly"
				alignItems="center"
				sx={{ padding: '12px 0 8px', borderBottom: '0.5px solid #A4ACAD;' }}
			>
				<Grid item xs={2}>
					<Logo maxWidth="45px" maxHeight="45px" />
				</Grid>
				<Grid container wrap="nowrap" item xs={8}>
					<Grid
						container
						item
						alignItems="center"
						justifyContent="center"
						flexDirection="column"
					>
						<PhoneNumbers />
					</Grid>
					<Grid
						container
						item
						alignItems="center"
						justifyContent="center"
						flexDirection="column"
					>
						<WorkHours />
					</Grid>
				</Grid>
				<Grid item xs={1}>
					<Button className="header__buttons" disableRipple size="small">
						<SearchIcon
							color="grayColor"
							sx={{
								fontSize: '29px',
							}}
						/>
					</Button>
				</Grid>
			</Grid>
		</header>
	);
}

export default HeaderMobile;
