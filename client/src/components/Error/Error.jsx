import React from 'react';
import { CardMedia, Typography, Stack } from '@mui/material';

function Error() {

    return (

        <Stack
            className="error-card"
            component="section"
            xs={12} sm={12} md={12} lg={12} xl={12}
        >

            <Stack
                className="error-card_block-switch"
                spacing={3}
            >

                <CardMedia
                    className="error-card_picture"
                    component="img"
                    image="/images/img_error-page/error.jpg"
                    alt="error picture"
                />

                <Typography
                    className="error-card_content"
                    variant="h5"
                    component="span"
                >
                    Unfortunately, there is no such page.
                </Typography>


                <Typography
                    className="error-card_content-switch-home-page"
                    variant="body2"
                    component="p"
                >
                    But there are rolls, pizza and noodles:
                </Typography>


                <Stack
                    variant="contained"
                    component="a"
                    className="error-card_switch-home-page"
                >
                    OUT MENU
                </Stack>

            </Stack>

        </Stack >
    );
}

export default Error;
