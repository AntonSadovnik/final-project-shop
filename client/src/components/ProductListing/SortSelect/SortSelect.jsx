import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortSelect() {
	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="select-label">Sorting</InputLabel>
				<Select labelId="select-label" label="Sorting">
					<MenuItem value={5}>Default</MenuItem>
					<MenuItem value={10}>Name</MenuItem>
					<MenuItem value={20}>First cheaper</MenuItem>
					<MenuItem value={30}>First more expensive</MenuItem>
					<MenuItem value={40}>Number of pieces</MenuItem>
					<MenuItem value={50}>The weight</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
