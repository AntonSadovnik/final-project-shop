import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import RemoveIcon from '@mui/icons-material/Remove';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from "@mui/material/Button";


const arr =  [
    ['Philadelphia with tuna', "https://966.ua/upload/imagickAgent/detail/ebc/ebc412185a13657020d30a160952605f.jpeg2000",3,300],
    ["Biggest Philadelphia","https://966.ua/upload/imagickAgent/section/358/358262124230e834d537b161a0aa8ae1.jpeg2000",5,134],
    ["Sushi with tuna","https://966.ua/upload/imagickAgent/section/2c6/2c6ebbb3cabc124c3496b047c0ee7e29.jpeg2000",1,456],
    ['Philadelphia with tuna', "https://966.ua/upload/imagickAgent/detail/ebc/ebc412185a13657020d30a160952605f.jpeg2000",2,214],
    ["Biggest Philadelphia","https://966.ua/upload/imagickAgent/section/358/358262124230e834d537b161a0aa8ae1.jpeg2000",4,130],
    ["Sushi with tuna","https://966.ua/upload/imagickAgent/section/2c6/2c6ebbb3cabc124c3496b047c0ee7e29.jpeg2000",1,321],
    ['Philadelphia with tuna', "https://966.ua/upload/imagickAgent/detail/ebc/ebc412185a13657020d30a160952605f.jpeg2000",3,300],
    ["Biggest Philadelphia","https://966.ua/upload/imagickAgent/section/358/358262124230e834d537b161a0aa8ae1.jpeg2000",5,134],
    ["Sushi with tuna","https://966.ua/upload/imagickAgent/section/2c6/2c6ebbb3cabc124c3496b047c0ee7e29.jpeg2000",1,456],
    ['Philadelphia with tuna', "https://966.ua/upload/imagickAgent/detail/ebc/ebc412185a13657020d30a160952605f.jpeg2000",2,214],
    ["Biggest Philadelphia","https://966.ua/upload/imagickAgent/section/358/358262124230e834d537b161a0aa8ae1.jpeg2000",4,130],
    ["Sushi with tuna","https://966.ua/upload/imagickAgent/section/2c6/2c6ebbb3cabc124c3496b047c0ee7e29.jpeg2000",1,321],
    ['Philadelphia with tuna', "https://966.ua/upload/imagickAgent/detail/ebc/ebc412185a13657020d30a160952605f.jpeg2000",3,300],
    ["Biggest Philadelphia","https://966.ua/upload/imagickAgent/section/358/358262124230e834d537b161a0aa8ae1.jpeg2000",5,134],
    ["Sushi with tuna","https://966.ua/upload/imagickAgent/section/2c6/2c6ebbb3cabc124c3496b047c0ee7e29.jpeg2000",1,456],
    ['Philadelphia with tuna', "https://966.ua/upload/imagickAgent/detail/ebc/ebc412185a13657020d30a160952605f.jpeg2000",2,214],
    ["Biggest Philadelphia","https://966.ua/upload/imagickAgent/section/358/358262124230e834d537b161a0aa8ae1.jpeg2000",4,130],
    ["Sushi with tuna","https://966.ua/upload/imagickAgent/section/2c6/2c6ebbb3cabc124c3496b047c0ee7e29.jpeg2000",1,321],
]


export default function CartMob() {
    return (
        <Box sx={{ bgcolor: "backgroungColor.main",paddingTop: '10px' }}>
            <Box sx={{display:"flex",justifyContent:"center"}}>
                <Typography variant='span' color='text.primary' fontSize='24px' fontWeight='500' sx={{mb: '10px'}}>Your basket</Typography>
            </Box>
            {
            arr.map(i => <Card sx={{margin: '10px', display:"flex"}}>
                <img style={{maxWidth: '90px', marginRight: "14px",height: '62px'
                            }} src={i[1]} alt="susi"/>
                <Box>
                <Typography id="modal-modal-description" sx={{ml: 1, fontSize: "18px"}}>{i[0]}</Typography>
                <IconButton aria-label="delete">
                    <RemoveIcon  fontSize="small" sx={{color: 'black'}}/>
                </IconButton>
                <Typography id="modal-modal-amount" variant="body2" component="text1" fontSize='18px' fontWeight='700' sx={{marginX: '10px'}}>{i[2]}</Typography>
                <IconButton aria-label="delete">
                    <AddCircleIcon color='secondary'  fontSize="small"/>
                </IconButton>
                <Typography variant="body2" component="text1" marginX='.1rem' fontSize='18px' fontWeight='700'>{i[2] * i[3]}$</Typography>
                </Box>
            </Card>)}
            <Card sx={{margin: '10px'}}>
                <Box sx={{display:"flex",justifyContent:"center"}}>
                    <Typography variant='span' color='text.hoverText' fontSize='24px' fontWeight='500' sx={{mb: '10px'}}>Pay for oder</Typography>
                    </Box>
                <Box  sx={{mb: '12px',paddingX:'40px', fontSize: "18px", borderBottom:' .5px #A4ACAD solid', display:'flex', justifyContent: 'space-between' }}>
                    <Typography fontSize='18px' fontWeight='400'>
                        1 item
                    </Typography>
                    <Typography fontSize='18px' fontWeight='400'>
                        summ pay for
                    </Typography>
                </Box>
                <Box  sx={{mb: '12px',paddingX:'40px', fontSize: "18px", borderBottom:' .5px #A4ACAD solid', display:'flex', justifyContent: 'space-between' }}>
                    <Typography fontSize='18px' fontWeight='400'>
                        Delivery
                    </Typography>
                    <Typography fontSize='18px' fontWeight='400'>
                        Free
                    </Typography>
                </Box>
            </Card>
            <Box sx={{display:"flex", justifyContent:"center"}}>
            <Button variant="contained" ><Typography variant='subtitle2' color='text.btnText'>
                оформить заказ
            </Typography></Button>
            </Box>
        </Box>
    );
}