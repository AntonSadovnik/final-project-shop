import React from 'react';
import { Box, Typography } from '@mui/material';
import style from './Return.module.scss';

function Return() {
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
				Refund
			</Typography>
			<Typography
				color="text.secondary"
				variant="h6"
				component="h2"
				fontSize="18px"
				sx={{ marginBottom: '9px' }}
			>
				The unconditional basis for the return of the Buyer&apos;s money,
				provided that the Seller performs all the necessary actions to fulfill
				the order, is the fact of delivery of obviously damaged Goods, which the
				Consumer reasonably declares at the time of refusal to receive the
				Goods.
				<span className={style.text}>
					According to the Decree of the Cabinet of Ministers of Ukraine dated
					March 19, 1994 On the implementation of certain provisions of the Law
					of Ukraine &ldquo;On the Protection of Consumer Rights&rdquo;, food
					products are not subject to exchange or return.
				</span>
			</Typography>
		</Box>
	);
}
export default Return;
