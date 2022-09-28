import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Menu, MenuItem, Grid } from '@mui/material';
import ExpandCircleDownSharpIcon from '@mui/icons-material/ExpandCircleDownSharp';
import { menuItemHover } from './styles';
import { setCity } from '../../../../store/actions';

const CITIES = ['Kyiv', 'Odesa', 'Dnipro', 'Kharkiv'];

function City() {
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = useState(null);
	const [stateCity, setStateCity] = useState(CITIES[0]);
	const open = Boolean(anchorEl);

	useEffect(() => {
		if (!localStorage.getItem('city')) {
			localStorage.setItem('city', stateCity);
			dispatch(setCity(stateCity));
		} else {
			dispatch(setCity(localStorage.getItem('city')));
			setStateCity(localStorage.getItem('city'));
		}
	}, []);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleCitySelection = (selectedCity) => {
		if (stateCity !== selectedCity) {
			setStateCity(selectedCity);
			dispatch(setCity(selectedCity));
			localStorage.setItem('city', selectedCity);
		}
		handleClose();
	};

	return (
		<>
			<Grid
				container
				alignItems="center"
				sx={{ cursor: 'pointer' }}
				id="click-box"
				aria-controls={open ? 'menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<Typography
					fontSize={14}
					color={(theme) => theme.palette.text.secondary}
					display="flex"
					flexDirection="column"
					flexBasis={50}
				>
					<span>City:</span>
					<span>{stateCity}</span>
				</Typography>
				<ExpandCircleDownSharpIcon sx={{ color: '#ff9846' }} />
			</Grid>

			<Menu
				id="menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'click-box',
					disablePadding: true,
				}}
				autoFocus={false}
			>
				{CITIES.map((oneCity) => (
					<MenuItem
						key={`${Date.now().toString()}${oneCity}`}
						sx={menuItemHover}
						onClick={() => handleCitySelection(oneCity)}
					>
						{oneCity}
					</MenuItem>
				))}
			</Menu>
		</>
	);
}

export default City;
export { City };
