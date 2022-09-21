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
					Many retailers will accept returns provided that the customer has a
					receipt as a proof of purchase, and that certain other conditions,
					which depend on the retailer&apos;s policies, are met. These may include
					the merchandise being in a certain condition (usually resellable if
					not defective), no more than a certain amount of time having passed
					since the purchase, and sometimes that identification be provided
					(though usually only if a receipt is not provided). In some cases,
					only exchanges or store credit are offered, again usually only without
					a receipt, or after an initial refund period has passed. Some
					retailers charge a restocking fee for non-defective returned
					merchandise, but typically only if the packaging has been opened.
					There are various reasons why customers may wish to return
					merchandise. These include a change of one&apos;s mind buyer&apos;s
					remorse, quality of the merchandise, personal dissatisfaction, or a
					mistaken purchase of the wrong product. For clothing or other sized
					items, it may be a lack of a correct fit. Sometimes, there may be a
					product recall in which the manufacturer has requested or been ordered
					that the merchandise be brought back to the store. Also, gift receipts
					are offered sometimes when an item is purchased for another person,
					and the recipient can exchange this item for another item of
					comparable value, or for store credit, often on a gift card.
				</span>
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
