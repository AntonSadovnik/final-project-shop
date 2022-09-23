import React from 'react';
import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PhoneNumbers from './components/phone-numbers/PhoneNumbers';
import Logo from '../Logo/Logo';
import WorkHours from './components/work-hours/WorkHours';
import Search from '../Search/Search';

function HeaderMobile() {
	const [openSearch, setOpenSearch] = React.useState(false);

	const handleOpenSearchClick = () => {
		setOpenSearch(true);
	};

	return (
		<header>
			<Search openSearch={openSearch} setOpenSearch={setOpenSearch} />
			<Grid
				container
				justifyContent="space-evenly"
				alignItems="center"
				sx={{ padding: '12px 0 8px', borderBottom: '0.5px solid #A4ACAD;' }}
			>
				<Grid item xs={2}>
					<NavLink
						style={{
							textDecoration: 'none',
						}}
						to="/"
					>
						<Logo maxWidth="45px" maxHeight="45px" />
					</NavLink>
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
					<Button
						disableRipple
						size="small"
						onClick={handleOpenSearchClick}
						sx={{ minWidth: 0, padding: 0 }}
					>
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
