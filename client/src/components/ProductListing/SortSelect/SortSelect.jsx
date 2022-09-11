import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { setSort } from '../../../store/actions';
import './style.scss';

export default function SortSelect() {
	const dispatch = useDispatch();
	const [sortValue, setSortValue] = useState('default');
	const [searchParams] = useSearchParams();
	const currentParams = Object.fromEntries(searchParams);

	useEffect(() => {
		setSortValue('default');
	}, [currentParams.categories]);

	useEffect(() => {
		dispatch(setSort(sortValue));
	}, [sortValue]);

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth variant="standard">
				<InputLabel id="select-label">Sorting</InputLabel>
				<Select
					className="products__sorting"
					labelId="select-label"
					value={sortValue}
					onChange={(e) => setSortValue(e.target.value)}
				>
					<MenuItem value="default">Default</MenuItem>
					<MenuItem value="name">Name</MenuItem>
					<MenuItem value="firstCheaper">First cheaper</MenuItem>
					<MenuItem value="firstExpensive">First more expensive</MenuItem>
					<MenuItem value="weight">The weight</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
