import React from 'react';
import Grid from '@mui/material/Grid';
import './grid.scss';
import { Box, Typography } from '@mui/material';
import gridItems from './itemGrid';
import gridItemsHidden from './itemGridHidden';



function GridItem() {
	return (
	
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			rowSpacing={{ sm: 1, md: 2, xs: 1 }}
			columnSpacing={{ sm: 1, md: 2, xs: 1 }}
			className="ff88888 blockquote"
			sx={{ marginTop: 30, maxWidth: 950, display:'flex', justifyContent:'center', alignItems:'center',alignSelf:'center', borderRadius:'15px', padding:'0px 10px 10px 0px' }}
		>
			
			{gridItems().map((e) => {
				const { layout, src, alt, text } = e;
				return (
					<Grid item {...layout}>
						<Box
							sx={{
								position: 'relative',
								borderRadius: 5,
								overflow: 'hidden',
								width: '100%',
								height: '100%',
							}}
						>
							<img
								src={src}
								sx={{ display: 'block', objectFit: 'cover' }}
								className="card__image"
								alt={alt}
							/>
							<Typography
								sx={{ left: 20, bottom: 10, position: 'absolute' }}
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
					<Grid item sx={{ display: { md: 'none', sm: 'block' } }} xs={6}>
						<Box
							className="card"
							sx={{ position: 'relative', borderRadius: 5, overflow: 'hidden' }}
						>
							<img
								src={src}
								sx={{ display: 'block', objectFit: 'cover' }}
								className="card__image"
								alt={alt}
							/>
							<Typography
								sx={{
									left: 20,
									bottom: 10,
									position: 'absolute',
									fontSize: 24,
									lineHeight: 30,
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
