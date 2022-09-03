import React, { useState } from 'react';
import axios from 'axios';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	Box,
	TextField,
	List,
	useTheme,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';
import SearchListItem from './components/SearchListItem';
import SearchListEmpty from './components/SearchListEmpty';

export default function Search({ openSearch, setOpenSearch }) {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setSearchResult] = useState();
	const [inputError, setInputError] = useState({
		hasError : false,
		errorType: '',
	});

	const handleClose = () => {
		setOpenSearch(false);
	};

	const handleInputChange = (event) => {
		setSearchValue(event.target.value);
		setInputError({ hasError: false, errorType: '' });
	};

	const handleSearch = () => {
		if (searchValue.trim()) {
			axios
				.post('api/products/search', { query: searchValue.trim() })
				.then((result) => {
					console.log(result);
					setSearchResult(result);
				})
				.catch((err) => {
					console.error(err);
					setInputError({
						hasError: true,
						errorType: 'Oops! Something went wrong. Sorry...',
					});
				});
		} else {
			setInputError({ hasError : true, errorType: 'The field is empty' });
		}
	};

	return (
		<Dialog
			fullScreen={fullScreen}
			open={openSearch}
			onClose={handleClose}
			aria-labelledby="responsive-dialog-title"
			maxWidth="lg"
			sx={{
				'& .MuiDialog-container': {
					justifyContent: 'center',
					alignItems: 'flex-start',
				},
			}}
		>
			<DialogContent>
				<Box
					sx={{
						width: 900,
						maxWidth: '100%',
						display: 'flex',
						alignItems: 'center',
						columnGap: '10px',
						marginBottom: '10px',
					}}
				>
					<TextField
						fullWidth
						id="fullWidth"
						placeholder="search by dish or ingredient"
						value={searchValue}
						onChange={handleInputChange}
						error={inputError.hasError}
						helperText={inputError.errorType}
						inputProps={{ style: { fontSize: 25 } }}
						FormHelperTextProps={{
							style: {
								fontSize: '18px',
								margin: '0px',
								position: 'absolute',
								bottom: -28,
							},
						}}
					/>
					<SearchIcon
						sx={{
							color: `${inputError.hasError ? 'red' : '#aaa'}`,
							fontSize: '40px',
							cursor: 'pointer',
						}}
						onClick={handleSearch}
					/>
				</Box>
				{searchResult && (
					<List sx={{ width: '100%' }}>
						{searchResult.data.length ? (
							searchResult.data.map((product) => (
								<SearchListItem product={product} />
							))
						) : (
							<SearchListEmpty />
						)}
					</List>
				)}
			</DialogContent>
			<DialogActions>
				<Button
					sx={{ fontSize: '18px', fontWeight: 700 }}
					onClick={handleClose}
				>
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
}
