import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { getReviews } from '../../api/Api';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import ReviewsInput from '../../components/ReviewsInput/ReviewsInput';

function Reviews() {
	const [reviews, setReviews] = useState(null);
	const [catalog, setCatalog] = useState(null);
	const customer = useSelector((state) => state.customer);
	const navigate = useNavigate();

	function reviewsList() {
		if (!reviews) {
			getReviews()
				.then((comments) => {
					setReviews(comments.data);
				})
				.catch(() => {
					navigate('/backError');
				});
		} else if (reviews) {
			const reviewsCatalog = reviews.map((item) => (
				<ReviewCard
					key={Math.random()}
					name={item.customer.firstName}
					text={item.content}
				/>
			));
			setCatalog(reviewsCatalog);
		}
	}

	useEffect(() => {
		reviewsList();
	}, [reviews]);

	return (
		<Box sx={{ padding: { xs: '30px 15px 90px', sm: '30px 15px 30px' } }}>
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
						fontSize: '20px',
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
