import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

function FooterMobile() {
	return (
		<footer>
			<Grid
				container
				sx={{ padding: '11px 0', borderTop: '1px solid #A4ACAD' }}
				justifyContent="space-evenly"
			>
				<Grid item>
					<Button
						disableRipple
						sx={{ padding: '0', minWidth: 0, flexDirection: 'column' }}
					>
						<RestaurantMenuIcon color="hoverColor" sx={{ fontSize: '30px' }} />
						<Typography color={(theme) => theme.palette.text.primary}>
							Menu
						</Typography>
					</Button>
				</Grid>
				<Grid item>
					<Button
						disableRipple
						sx={{ padding: '0', minWidth: 0, flexDirection: 'column' }}
					>
						<ShoppingCartIcon color="hoverColor" sx={{ fontSize: '30px' }} />
						<Typography color={(theme) => theme.palette.text.primary}>
							Cart
						</Typography>
					</Button>
				</Grid>
				<Grid item>
					<Button
						disableRipple
						sx={{ padding: '0', minWidth: 0, flexDirection: 'column' }}
					>
						<ThumbUpOffAltIcon color="hoverColor" sx={{ fontSize: '30px' }} />
						<Typography color={(theme) => theme.palette.text.primary}>
							Reviews
						</Typography>
					</Button>
				</Grid>
			</Grid>
		</footer>
	);
}

export default FooterMobile;
