import React from 'react';
import { Grid, Button, Typography, Divider, Box } from '@mui/material';
import './style.scss';

function Header() {
	return (
		<header>
			<Grid container backgroundColor="#F2F2F2">
				<Grid
					item
					xs={2}
					flexDirection="column"
					align="center"
					padding="6px 0 8px"
				>
					<Typography>Our phone</Typography>
					<Box>
						<Box margin="5px 0;">
							<a className="header__phone-number" href="tel:+996705188955">
								996 705 188 955
							</a>
						</Box>
						<Box margin="5px 0;">
							<a className="header__phone-number" href="tel:+996555188955">
								996 555 188 955
							</a>
						</Box>
					</Box>
					<Typography
						color={(theme) => theme.palette.text.secondary}
						fontSize="14px"
					>
						<img
							className="watch-ico"
							src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660310827/sushi-shop/header/watch_kgbw0v.svg"
							alt="watch"
						/>
						Work hours: 10:00-00:00
					</Typography>
				</Grid>
				<Divider
					flexItem
					orientation="vertical"
					style={{ marginLeft: '10px' }}
				/>
				<Grid
					container
					item
					xs={9.7}
					justifyContent="space-between"
					alignItems="center"
				>
					<Grid item marginLeft="10px" xs={2}>
						<Typography fontSize="14px" color="#A4ACAD">
							City:
						</Typography>
					</Grid>
					<Grid item container justifyContent="space-between" xs={6}>
						<Grid item xs={6}>
							<Typography className="header__links" component="a" href="/">
								Reviews
							</Typography>
							<Typography className="header__links" component="a" href="/">
								Shipping and payment
							</Typography>
						</Grid>
						<Grid container item xs={4} justifyContent="flex-end">
							<Button className="header__buttons" disableRipple size="small">
								<svg
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									fill="#A4ACAD"
									width="30px"
									height="30px"
									viewBox="0 0 1000 1000"
								>
									<g>
										<path d="M367.3,665.4h440.5c11.8,0,21.6-6.9,25.5-17.7l155-411.1c2.9-8.8,2-17.7-2.9-25.5c-4.9-7.8-13.7-11.8-22.6-11.8l-254.1-1c-2.9-1-4.9-1-7.8-1c-2.9,0-4.9,0-7.8,1l-460.2-2.9l-35.3-95.2c-2.9-6.9-7.8-12.8-15.7-15.7l-134.4-54c-13.7-5.9-30.4,1-35.3,15.7c-5.9,13.7,1,30.4,15.7,35.3l123.6,49.1l37.3,101.1c0,0,0,1,1,1l135.4,364l-59.8,159.9c-2.9,8.8-2,17.7,2.9,25.5c4.9,7.8,13.7,11.8,22.6,11.8h16.7c-19.6,18.6-32.4,45.1-32.4,74.6c0,56.9,46.1,103,103,103c56.9,0,103-46.1,103-103c0-29.4-12.8-55.9-32.4-74.6h216.8c-19.6,18.6-32.4,45.1-32.4,74.6c0,56.9,46.1,103,103,103c56.9,0,103-46.1,103-103c0-29.4-12.8-55.9-32.4-74.6h28.5c14.7,0,27.5-12.8,27.5-27.5c0-14.7-12.8-27.5-27.5-27.5H332l28.5-75.5C360.4,664.4,363.4,665.4,367.3,665.4z M375.1,914.6c-26.5,0-48.1-21.6-48.1-48.1c0-26.5,21.6-48.1,48.1-48.1c26.5,0,48.1,21.6,48.1,48.1C423.2,893,401.6,914.6,375.1,914.6z M732.3,914.6c-26.5,0-48.1-21.6-48.1-48.1c0-26.5,21.6-48.1,48.1-48.1c26.5,0,48.1,21.6,48.1,48.1C780.3,893,758.8,914.6,732.3,914.6z M673.4,384.8v90.3H512.5v-90.3H673.4L673.4,384.8z M512.5,329.8v-78.5l160.9,1v77.5H512.5z M839.2,474.1H727.4v-90.3h145.2L839.2,474.1z M673.4,529v80.5H512.5V529H673.4z M457.5,474.1H336.9l-33.4-90.3h154V474.1z M356.5,529h101.1v80.5h-70.6L356.5,529z M789.2,610.4h-60.8V530h91.2L789.2,610.4z M894.2,329.8H728.3v-77.5l194.3,1L894.2,329.8z M457.5,250.4v78.5H282.9l-29.4-80.5L457.5,250.4z" />
									</g>
								</svg>
							</Button>
							<Button className="header__buttons" disableRipple size="small">
								<img
									src="https://res.cloudinary.com/dh6o5rpfe/image/upload/v1660315914/sushi-shop/header/search_ny57nh.svg"
									alt="search"
								/>
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Divider />
		</header>
	);
}

export default Header;
