import React from 'react';
import { Box, Typography } from '@mui/material';

function Shipping() {
	return (
		<Box
			sx={{
				padding: { xs: '20px', sm: '50px' },
				textAlign: 'justify',
			}}
		>
			<Typography
				variant="h6"
				component="h2"
				fontSize="24px"
				sx={{ marginBottom: '9px' }}
			>
				Shipping
			</Typography>
			<Typography
				variant="h6"
				component="h2"
				color="text.secondary"
				fontSize="18px"
				sx={{ marginBottom: '9px' }}
			>
				<Typography style={{ fontSize: '18px', marginBottom: '15px' }}>
					Delivery service works in Kyiv, Odesa, Dnipro, and Kharkiv.
				</Typography>
				<Typography style={{ fontSize: '18px', marginBottom: '15px' }}>
					Cost of the order delivery is{' '}
					<span style={{ color: 'black', fontWeight: 700 }}>free.</span>
				</Typography>
				<Typography style={{ fontSize: '18px', marginBottom: '15px' }}>
					<span style={{ color: 'black', fontWeight: 700 }}>
						We don&apos;t have minimal order sum.
					</span>{' '}
					So you can freely order any amount of goods and enjoy our free
					delivery.
				</Typography>
				<Typography style={{ fontSize: '18px', marginBottom: '15px' }}>
					We deliver your order to your location during{' '}
					<span style={{ color: 'black', fontWeight: 700 }}>1,5 hours.</span> We
					cook all the orders on a first-come, as soon as we receive them.
					Depending on external circumstances (time of the day, weather
					conditions, traffic jams, restaurant loading, your order volume and
					distance of you location) the delivery time may change. We are
					grateful to you in advance for your understanding.
					<br />
					<span style={{ color: 'black', fontWeight: 700 }}>
						Nice bonus:
					</span>{' '}
					to every roll we give 1 free suite of soy sauce, ginger and wasabi. To
					every sushi set – 3 sets of soy sauce, 30 g of ginger and 15 g of
					wasabi, which are packed in one container.
				</Typography>
			</Typography>
			<Typography
				variant="h6"
				component="h2"
				fontSize="24px"
				sx={{ marginBottom: '9px' }}
			>
				How to make and pay your order?
			</Typography>
			<Typography
				variant="h6"
				component="h2"
				color="text.secondary"
				fontSize="18px"
				sx={{ marginBottom: '9px' }}
			>
				<Typography style={{ fontSize: '18px', marginBottom: '15px' }}>
					We are taking orders every day from 10:00 till 11:00.
				</Typography>
				<Typography style={{ fontSize: '18px', marginBottom: '15px' }}>
					Delivery service works every day from 10:00 till 00:00.
				</Typography>
				<Typography style={{ fontSize: '18px', marginBottom: '15px' }}>
					{' '}
					You can order delivery using the website or by making a call to the
					phone numbers:
					<br />
					<span style={{ color: 'black', fontWeight: 700 }}>
						996 705 188 955
					</span>
					<br />
					<span style={{ color: 'black', fontWeight: 700 }}>
						996 705 188 955
					</span>
				</Typography>
				<Typography style={{ fontSize: '18px', marginBottom: '15px' }}>
					If you need an order for a specific time, you can inform the operator
					or select the desired time of delivery on our website&apos;s
					application form.
				</Typography>
				<Typography style={{ fontSize: '18px', marginBottom: '15px' }}>
					<span style={{ color: 'black', fontWeight: 700 }}>
						You can pay for the order by cash or credit card to the courier.
					</span>
				</Typography>
			</Typography>
		</Box>
	);
}
export default Shipping;
