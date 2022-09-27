import React from 'react';
import { Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



function NextBtn(props) {
  const { onClick } = props;
    return (<Stack className='slider_btn' color="white" direction="row" justifyContent="center" alignItems="center" onClick={onClick} style={{ background: "green", borderRadius: "50%", height:'60px', width:"60px",position:"absolute", top:"40%", right:"0.5%", zIndex:"1111", cursor:'pointer'}}>
    <NavigateNextIcon onClick={onclick} />
    </Stack>
    );
  }
 
  export default NextBtn