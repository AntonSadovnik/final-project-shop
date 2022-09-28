import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

function ProductsPagination(props) {
	const { productsQuantity, perPageProducts } = props;
	const [page, setPage] = useState(1);
	const [searchParams, setSearchParams] = useSearchParams({});
	const currentParams = Object.fromEntries(searchParams);

	useEffect(() => {
		if (currentParams.startPage) {
			setPage(Number(currentParams.startPage));
		} else {
			setPage(1);
		}
		window.scrollTo({ behavior: 'smooth', top: '0px' });
	}, [currentParams.startPage]);

	return (
		<Pagination
			page={page}
			count={Math.ceil(productsQuantity / perPageProducts)}
			sx={{ paddingTop: 2, ul: { justifyContent: 'center' } }}
			onChange={(_, value) => {
				setPage(value);
				setSearchParams({ ...currentParams, startPage: value });
			}}
		/>
	);
}

export default ProductsPagination;
