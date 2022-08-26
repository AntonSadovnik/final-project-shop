import * as React from 'react';
import {Button, Typography} from '@mui/material';



export default function CustomButton ({title, colorTitle, colorButton, onClick}) {

    return (
        <Button variant="contained" color={`${colorButton}`} onClick={onClick}>
            <Typography color={`${colorTitle}`}>
                {title}
            </Typography>

        </Button>
    );
}