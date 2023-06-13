import PropTypes from 'prop-types';
// import Loader from './UsedCars/Loader';
// import { services, summary, service } from '../../_data/mock/forChauffeursData';
import { useState } from 'react';
// icons
import filterIcon from '@iconify/icons-carbon/filter';
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, DRAWER_WIDTH } from '../../../src/config';

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
const items = [
  
];

export default function Cart() {
  // const [mobileOpen, setMobileOpen] = useState(false);
  // const [page, setPage] = useState(1);
  // const handleChange = (event, value) => {
  //   setPage(value);
  // };
  // const { data: courses = [], error, isLoading } = useRequest('/api/e-learning/courses');

  // const handleMobileOpen = () => {
  //   setMobileOpen(true);
  // };

  // const handleMobileClose = () => {
  //   setMobileOpen(false);
  // };

  // if (error) {
  //   return <ErrorScreen />;
  // }
  const router = useRouter();
  const { data } = router.query;
  const item = data ? JSON.parse(data) : null;
  console.log("item data",item)
  items.push(item)
  console.log("Items",items)
  const handleRemoveItem = (productId) => {
    const updatedItems = items.filter((item) => item.pid !== productId);
    setItems(updatedItems);
  };
  const totalPrice = items.reduce((total, item) => {return total + (parseFloat(item?.price) || 0)}, 0);
  // const totalPrice = (items) => items
  // .map((item) => item.price)
  // .reduce((acc, value) => acc + value, 0)
  console.log(totalPrice)

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
