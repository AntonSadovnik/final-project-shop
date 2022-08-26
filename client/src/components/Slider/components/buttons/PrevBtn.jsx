import React from 'react';
import { Stack } from '@mui/material';
import PropTypes from 'prop-types';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


function PrevBtn(props) {
  const { onClick } = props;
  return (<Stack className='slider_btn' color="white" direction="row" justifyContent="center" alignItems="center" onClick={onClick} style={{background: "green", borderRadius: "50%", height:'60px', width:"60px",position:"absolute", top:"40%", left:"1%", zIndex:"1111"}}>
    <NavigateBeforeIcon onClick={onClick}/>
  </Stack>
  );
}

PrevBtn.propTypes = {
  onClick: PropTypes.func,
}
export default PrevBtn