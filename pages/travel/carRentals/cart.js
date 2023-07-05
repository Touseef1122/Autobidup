import PropTypes from 'prop-types';
// import Loader from './UsedCars/Loader';
// import { services, summary, service } from '../../_data/mock/forChauffeursData';
// icons
import filterIcon from '@iconify/icons-carbon/filter';
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, DRAWER_WIDTH } from '../../../src/config';
import React, { useContext,useState } from 'react';
import { GlobalContext } from '../../../src/contexts/GlobalContext';
// @mui
import { Typography, Grid, Box, Stack, Button } from '@mui/material';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// _data
import { _testimonials } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, Breadcrumbs, Iconify } from '../../../src/components';
import { useRouter } from 'next/router';

// sections
import { styled } from '@mui/material/styles';
// import { Cartt } from '../../../src/sections/@travel/accessories/cartitem';
import Order from '../../../src/sections/@travel/accessories/order';
import Item from '../../../src/sections/@travel/accessories/item';
import { TravelTourDetails } from '../../../src/sections/@travel';
import img1 from '../../../src/Assets/Images/FordMinivan.jpg';
import sell from '../../../src/Assets/Images/cart.jpg';
import Loader from '../UsedCars/Loader';
import ChatButton from '../ChatButton';
import { useEffect } from 'react';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------
const styling = {
  backgroundImage: `url(${sell.src})`,
  width: '100%',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};
let items = [];

export default function Cart() {

  const { globalVariable, setGlobalVariable } = useContext(GlobalContext);
  
  if(globalVariable.length>0){
    let it=globalVariable.pop();
    items.push(it);
    localStorage.setItem('cartItems',JSON.stringify(items))

    
  }
  console.log(items)
  // const router = useRouter();
  // const { data } = router.query;
  // const item = data ? JSON.parse(data) : null;
  // console.log("item data",item)
  // items.push(item)
  // console.log("Items",items)
  const handleRemoveItem = (productId) => {
    const updatedItems = items.filter((item) => item.pid !== productId);
    setItems(updatedItems);
  };
  const totalPrice = items.reduce((total, item) => {return total + (parseFloat(item?.price) || 0)}, 0);
  // const totalPrice = (items) => items
  // .map((item) => item.price)
  // .reduce((acc, value) => acc + value, 0)
  console.log(totalPrice)

  useState(() => {
    // if (typeof window !== 'undefined') {
    //   value = localStorage.getItem('firstname') || '';
    //   console.log(value);
      // 
      if (typeof window !== 'undefined') {
      if(JSON.parse(localStorage.getItem('cartItems')).length!=0){
        items=JSON.parse(localStorage.getItem('cartItems'));
        console.log(items);
      }
    }

  }, [])
  useEffect(() => {
    //check refresh page
   
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; // Some browsers require a return value to show a custom confirmation message
      // Perform any necessary cleanup or additional logic before the page is refreshed
      localStorage.setItem('cartItems',JSON.stringify(items))
      console.log('Page is being refreshed...');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);



  return (
    <Page title="Cart | Accessories">
      <Loader/>
      <ChatButton/>
      <Box
        sx={{
          marginTop: { xs: '18%', sm: '13%',md:"12%" },
          mb: 6,
          overflowX: 'hidden',
          pl: '5%',
          pr: '5%',
          
        }}
      >
        <Typography variant="h2"> Shopping Cart </Typography>
        <Grid spacing={2} container justifyContent="center">
          <Grid item xs={12} sm={7} md={8}>
            
          {items.length > 0 && <Item item={items} onRemoveItem={handleRemoveItem}/>}
          </Grid>
          <Grid item xs={12} sm={5} md={4}>
            <Order totalPrice={totalPrice} />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

Cart.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
