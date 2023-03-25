import PropTypes from 'prop-types';
// import Loader from './UsedCars/Loader';
// import { services, summary, service } from '../../_data/mock/forChauffeursData';
import { useState } from 'react';
// icons
import filterIcon from '@iconify/icons-carbon/filter';
// import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, DRAWER_WIDTH } from '../../src/config';

// @mui
import { Container, Grid, Box, Stack, Button, Typography } from '@mui/material';
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
// sections
import { styled } from '@mui/material/styles';
import { Caritemlist, Carousel, Contactinfo } from '../../../src/sections/@travel/displaymaincar';
import { TravelLandingHero } from '../../../src/sections/@travel';
import AuctionCards from './Auctioncards'
import Loader from '../UsedCars/Loader';
import ChatButton from '../ChatButton';
import Galviston from '../../../src/assets/images/bentley8.jpg';
import Houston from '../../../src/assets/images/BMW3Series.jpg';
import Dallas from '../../../src/assets/images/FordMustang.jpg';
import Austin from '../../../src/assets/images/FordMinivan.jpg';

import Carfilterbar from '../../../src/sections/@travel/filters/carfilterbar';
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------



import Pagination from '@mui/material/Pagination';

export default function Displaycarlist({ posts }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const { data: courses = [], error, isLoading } = useRequest('/api/e-learning/courses');

  const handleMobileOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  if (error) {
    return <ErrorScreen />;
  }
  return (
    <Page title="Auction">
      <RootStyle>
        <Loader />
        <ChatButton />
        <TravelLandingHero/>
        <AuctionCards  posts={bestcities}/>
       
      </RootStyle>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

Displaycarlist.getLayout = function getLayout(page) {
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
const bestcities = [
  {
    id: 1,
    name: 'Honda City',
    dis: '2019',
    price: 'Rs 3,000,000',
    img: Houston,
  },
  {
    id: 2,
    name: 'Crola Atlas',
    dis: '2020',
    price: 'Rs 3,000,000',
    img: Dallas,
  },
  {
    id: 3,
    name: 'Mehran',
    dis: '2016',  
      price: 'Rs 3,000,000',

    img: Austin,
  },
  {
    id: 4,
    price: 'Rs 3,000,000',
    name: 'Jeep',
    dis: '2018',
    img: Galviston,
  },
  {
    id: 5,
    price: 'Rs 3,000,000',
    name: 'Honda City',
    dis: '2019',
    img: Houston,
  },
  {
    id: 6,
    price: 'Rs 3,000,000',
    name: 'Crola Atlas',
    dis: '2020',
    img: Dallas,
  },
  {
    id: 7,
    name: 'Mehran',
    price: 'Rs 3,000,000',
    dis: '2016',
    img: Austin,
  },
  {
    id: 8,
    name: 'Jeep',
    price: 'Rs 3,000,000',
    dis: '2018',
    img: Galviston,
  },
  {
    id: 9,
    name: 'Honda City',
    dis: '2019',
    price: 'Rs 3,000,000',
    img: Houston,
  },
  {
    id: 10,
    name: 'Crola Atlas',
    price: 'Rs 3,000,000',
    dis: '2020',
    img: Dallas,
  },
  {
    id: 11,
    price: 'Rs 3,000,000',
    name: 'Mehran',
    dis: '2016',
    img: Austin,
  },
  {
    id: 12,
    name: 'Jeep',
    price: 'Rs 3,000,000',
    dis: '2018',
    img: Galviston,
  }
];
