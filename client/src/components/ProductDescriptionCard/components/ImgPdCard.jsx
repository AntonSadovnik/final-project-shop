import { React } from 'react';
import { Grid, CardMedia, Stack, } from '@mui/material';

function ImgPdCard(props) {
    const { cardPicture } = props;

    return (
        <Grid container item xs={12} sm={7} >
            <Stack width="100%"
                spacing={1}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    margin: '0 auto',
                }}

            >
                <CardMedia
                    component="img"
                    image={cardPicture}
                    alt="set picture"
                    background-size="cover"
                    background-repeat="no-repeat"
                    background-position="center"
                    width="100%"
                    object-fit="cover"
                />
            </Stack>
        </Grid>
    )
}
export default ImgPdCard;
