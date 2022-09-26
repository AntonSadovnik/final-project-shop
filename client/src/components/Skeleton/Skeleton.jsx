import React, { useEffect, useState } from 'react';
import { Box, Stack, Skeleton, Typography} from '@mui/material';
import { getSaleProduct } from '../../api/Api';
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
    content = <Box component="span" direction="column" justifyContent="center" alignItems="flex-end" className='skeleton' sx={{bgcolor:'#F2F2F2', marginBottom: '100px', display:'flex', alignItems:"flex-end", width:'100%', height:{sm:'none',md:525,lg:525,xl:525}}}>
    <Stack  component="span" className='slider-wrapper' direction="row" justifyContent="center" alignItems="center" maxWidth="950px"  height={470} sx={{ bgcolor:'grey.400', borderRadius:'20px', width:{sm:'56vw',md:'70vw',lg:'940px',xl:'940px' },height:{md:470,lg:470,xl:470} }}>
    <Skeleton component="span" variant="rectangular" sx={{bgcolor:'grey.600', marginLeft:'30px'}} width='450px' height='250px' />
  
    <Typography component="span" direction='column' justifycontent='space-between' alignitems='flex-end' sx={{width:'45%', height:'100%', display:'flex', flexDirection:'column', alignItems:'flex-end',justifyContent:'space-around',marginRight:'35px' }}>
    <Skeleton component="span" variant="text" sx={{ fontSize: '35px', bgcolor:'grey.600',}} width='220px'/>
    <Skeleton component="span" variant="text" sx={{ fontSize: '22px', bgcolor:'grey.600',marginTop:'-55px'}} width='70px'/>
    <Typography>
    <Skeleton component="span" variant="text" sx={{ fontSize: '35px', bgcolor:'grey.600',textAlign:'end', marginLeft:'15px'}} width='80px'/>
    <Skeleton component="span" variant="text" sx={{ fontSize: '40px', bgcolor:'grey.600', }} width='100px'  />
    </Typography>
    
    <Skeleton component="span" variant="rectangular"  sx={{bgcolor:'grey.600',borderRadius:'5px'}} width='150px' height='45px' />
    </Typography>
      
    </Stack>
    
       </Box>
  
   }else {
    content = <OfferSlider items={items}/>;
   } 
   
   return content

};

export default OfferSliderSkeleton;