import React from 'react';
import { Typography, Stack } from '@mui/material';

function Error() {

    return (

        <Stack
            className="error-card"
            component="section"
            xs={12}

        >

            <Stack
                className="error-card_block-switch"
                spacing={4}
            >

                <Typography
                    className="error-card_title"
                    variant="h4"
                    component="h4"
                >
                    Error 404
                </Typography>

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
