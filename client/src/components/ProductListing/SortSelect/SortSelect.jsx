import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortSelect() {
	const [searchParams, setSearchParams] = useSearchParams({});
	const [sortValue, setSortValue] = useState('default');
	let currentParams = Object.fromEntries(searchParams);

	useEffect(() => {
		setSortValue('default');
	}, [currentParams.categories]);

	useEffect(() => {
		if (sortValue === 'default') {
			currentParams = Object.fromEntries(searchParams);
			delete currentParams.sort;
			setSearchParams({ ...currentParams });
		} else {
			setSearchParams({ ...currentParams, sort: sortValue });
		}
	}, [sortValue]);

	return (
		<Box minWidth={120}>
			<FormControl fullWidth variant="standard">
				<InputLabel id="select-label">Sorting</InputLabel>
				<Select
					sx={{
						'&::before': {
							borderBottom: '0.5px solid #a4acad',
						},
						'&:hover::before': {
							borderBottom: '0.5px solid #a4acad !important',
						},
					}}
					labelId="select-label"
					value={sortValue}
					onChange={(e) => setSortValue(e.target.value)}
				>
					<MenuItem value="default">Default</MenuItem>
					<MenuItem value="name">Name</MenuItem>
					<MenuItem value="currentPrice">First cheaper</MenuItem>
					<MenuItem value="-currentPrice">First more expensive</MenuItem>
					<MenuItem value="-weight">The weight</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
