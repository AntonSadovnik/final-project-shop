import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './style.scss';

export default function SortSelect() {
	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth variant="standard">
				<InputLabel id="select-label">Sorting</InputLabel>
				<Select
					className="products__sorting"
					labelId="select-label"
					label="Sorting"
					defaultValue="default"
				>
					<MenuItem value="default">Default</MenuItem>
					<MenuItem value="name">Name</MenuItem>
					<MenuItem value="firstCheaper">First cheaper</MenuItem>
					<MenuItem value="firstExprnsive">First more expensive</MenuItem>
					<MenuItem value="weight">The weight</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
