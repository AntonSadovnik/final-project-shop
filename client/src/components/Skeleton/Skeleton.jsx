import React, { useEffect, useState } from 'react';
import { Box, Stack, Skeleton, Typography} from '@mui/material';
import { getSaleProduct } from '../../api/Api';
import './skeleton.scss'

import OfferSlider from '../Slider/components/offerSlider/OfferSlider';

function OfferSliderSkeleton() {
  const [items, setItems] = useState();
  let content;
  useEffect(()=>{
    getSaleProduct().then(({data:{products}})=>{
      setTimeout(() => {
        setItems(products) 
      }, 1200);
    })
     .catch((error) => console.log(error))


   },[])

   if(!items){
    content = <Box direction="column" justifyContent="center" alignItems="flex-end" className='skeleton' width='100%' height={540} sx={{bgcolor:'#F2F2F2', marginBottom: '100px', display:'flex', alignItems:"flex-end",padding:'0 5px'  }}>
    <Stack className='slider-wrapper' direction="row" justifyContent="center" alignItems="center" maxWidth="940px" width="76vw" height={475} sx={{ bgcolor:'grey.400', borderRadius:'20px',paddingTop:'10px' }}>
    <Skeleton variant="rectangular" sx={{bgcolor:'grey.600'}} width='450px' height='250px' />
  
    <Typography direction="column" justifycontent="space-between" alignitems="flex-end" sx={{width:'45%', height:'100%', display:'flex', flexDirection:"column", alignItems:'flex-end',justifyContent:"space-around" }}>
    <Skeleton variant="text" sx={{ fontSize: '35px', bgcolor:'grey.600',}} width='220px'/>
    <Skeleton variant="text" sx={{ fontSize: '22px', bgcolor:'grey.600',marginTop:'-55px'}} width='70px'/>
    <Typography>
    <Skeleton variant="text" sx={{ fontSize: '35px', bgcolor:'grey.600',textAlign:'end', marginLeft:'15px'}} width='80px'/>
    <Skeleton variant="text" sx={{ fontSize: '40px', bgcolor:'grey.600', }} width='100px'  />
    </Typography>
    
    <Skeleton variant="rectangular"  sx={{bgcolor:'grey.600',borderRadius:'5px'}} width='150px' height='45px' />
    </Typography>
      
    </Stack>
    
       </Box>
  
       
   } else {
    content = <OfferSlider items={items}/>;
   } 
   
   return content

};

export default OfferSliderSkeleton;