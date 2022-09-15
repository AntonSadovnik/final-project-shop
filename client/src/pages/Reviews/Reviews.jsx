import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { getReviews } from '../../api/Api';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import ReviewsInput from '../../components/ReviewsInput/ReviewsInput';

function Reviews() {
	const [reviews, setReviews] = useState(null);
	const [catalog, setCatalog] = useState(null);
	const customer = useSelector((state) => state.customer);

	function reviewsList() {
		if (!reviews) {
			getReviews()
				.then((comments) => {
					setReviews(comments.data);
				})
				.catch((err) => {
					console.log(err);
				});
		} else if (reviews) {
			const reviewsCatalog = reviews.map((item) => (
					<ReviewCard name={item.customer.firstName} text={item.content} />
				));
			setCatalog(reviewsCatalog);
		}
	}

	useEffect(() => {
		reviewsList();
	}, [reviews]);

	return (
		<Box sx={{ padding: '30px' }}>
			<Typography sx={{ paddingBottom: '20px' }} variant="h4" component="h2">
				Reviews
			</Typography>
			{customer ? (
				<ReviewsInput name={customer.firstName} />
			) : (
				<Box
					sx={{
						paddingBottom: { xs: '10px', sm: '25px' },
							fontFamily: "'Nunito Sans', sans-serif",
							fontSize: '20px'
					}}
				>
					Please, log in or registrate to leave the review
				</Box>
			)}
			<Box className="product-list">{catalog || <p>Loading..</p>}</Box>
		</Box>
	);
}

export default Reviews;
