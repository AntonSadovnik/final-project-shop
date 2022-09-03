import React, { useState } from 'react';
import { Typography, Box, Menu, MenuItem } from '@mui/material';
import ExpandCircleDownSharpIcon from '@mui/icons-material/ExpandCircleDownSharp';
import { menuItemHover } from './styles';

const CITIES = ['Kyiv', 'Odesa', 'Dnipro', 'Kharkiv'];

function City() {
	const [anchorEl, setAnchorEl] = useState(null);
	const [city, setCity] = useState(CITIES[0]);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleCitySelection = (selectedCity) => {
		if (city !== selectedCity) {
			setCity(selectedCity);
		}
		handleClose();
	};

	return (
		<>
			<Box
				sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
				id="click-box"
				aria-controls={open ? 'menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<Typography
					fontSize="14px"
					color={(theme) => theme.palette.text.secondary}
					sx={{ display: 'flex', flexDirection: 'column', flexBasis: '50px' }}
				>
					<span>City:</span>
					<span>{city}</span>
				</Typography>
				<ExpandCircleDownSharpIcon sx={{ color: '#ff9846' }} />
			</Box>

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
						key={Date.now().toString()}
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
