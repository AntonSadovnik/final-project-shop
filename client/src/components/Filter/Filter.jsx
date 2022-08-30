import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, Button, Checkbox, FormControlLabel, Menu } from '@mui/material';
import queryString from 'query-string';
import { addFilter } from '../../store/actions';

function Filter() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [spicy, setSpicy] = useState(searchParams.get('spicy'));
	const [vegetarian, setVegaterian] = useState(searchParams.get('vegetarian'));
	const queryParams = queryString.parse(window.location.search);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const dispatch = useDispatch();

	const handleOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	useEffect(() => {
		dispatch(addFilter(queryParams));
		setSpicy(searchParams.get('spicy'));
		setVegaterian(searchParams.get('vegetarian'));
	}, [searchParams.get('spicy'), searchParams.get('vegetarian')]);

	const handleChange = (name) => {
		if (searchParams.get(name)) {
			if (name === 'spicy') {
				setSpicy(false);
			}
			if (name === 'vegetarian') {
				setVegaterian(false);
			}
			handleClose();
			searchParams.delete(name);
			setSearchParams(searchParams);
		} else {
			if (name === 'spicy') {
				setSpicy(true);
			}
			if (name === 'vegetarian') {
				setVegaterian(true);
			}
			handleClose();
			setSearchParams({ ...queryParams, [name]: 'true' });
		}
	};

	return (
		<Box>
			<Button
				id="basic-button"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleOpen}
			>
				Filter ({Object.keys(queryParams).length - 1})
			</Button>
			<Menu
				className="filter"
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<FormControlLabel
					sx={{
						paddingLeft: '10px',
						display: 'block',
					}}
					control={
						<Checkbox
							checked={spicy}
							onChange={() => handleChange('spicy')}
							name="spicy"
						/>
					}
					label="Spicy"
				/>
				<FormControlLabel
					sx={{
						paddingLeft: '10px',
						display: 'block',
					}}
					control={
						<Checkbox
							checked={vegetarian}
							onChange={() => handleChange('vegetarian')}
							name="vegetarian"
						/>
					}
					label="Vegetarian"
				/>
			</Menu>
		</Box>
	);
}

export default Filter;
