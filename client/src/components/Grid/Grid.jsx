import React from 'react';
import { useNavigate } from 'react-router';
import { Box, Typography, Grid } from '@mui/material';
import gridItems from './itemGrid';
import gridItemsHidden from './itemGridHidden';

function GridItem() {
	const navigate = useNavigate();
	const handleClick = (alt) => {
		navigate({
			pathname: '/products',
			search: `?categories=${alt.toLowerCase()}`,
		});
	};

	return (
		<Grid
			container
			justifyContent="center"
			rowSpacing={{ sm: 1, md: 2, xs: 1 }}
			columnSpacing={{ sm: 1, md: 2, xs: 1 }}
			sx={{ marginTop: 30, maxWidth: 950 }}
		>
			{gridItems().map((e) => {
				const { layout, src, alt, text } = e;
				return (
					<Grid item {...layout} key={alt}>
						<Box
							sx={{
								position: 'relative',
								borderRadius: 5,
								overflow: 'hidden',
								width: '100%',
								height: '100%',
								cursor: 'pointer',
							}}
							onClick={() => handleClick(alt)}
						>
							<Box
								component="img"
								src={src}
								alt={alt}
								width="100%"
								height="100%"
							/>
							<Typography
								sx={{
									left: 10,
									bottom: 10,
									position: 'absolute',
									fontSize: { md: 24, sm: 32, xs: 24 },
								}}
								color="#ffffff"
								component="h3"
							>
								{text}
							</Typography>
						</Box>
					</Grid>
				);
			})}

			{gridItemsHidden().map((e) => {
				const { src, alt, text } = e;
				return (
					<Grid
						key={alt}
						item
						sx={{ display: { md: 'none', sm: 'block' } }}
						sm={4}
						xs={6}
					>
						<Box
							sx={{
								position: 'relative',
								borderRadius: 5,
								overflow: 'hidden',
							}}
							onClick={() => handleClick(alt)}
						>
							<Box
								component="img"
								src={src}
								alt={alt}
								width="100%"
								height="100%"
							/>
							<Typography
								sx={{
									left: 10,
									top: 10,
									position: 'absolute',
									fontSize: { sm: 32, xs: 24 },
								}}
								color="#ffffff"
								component="h3"
							>
								{text}
							</Typography>
						</Box>
					</Grid>
				);
			})}
		</Grid>
	);
}

export default GridItem;
