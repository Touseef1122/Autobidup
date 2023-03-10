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
import { getAllPosts } from '../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../src/hooks';
// _data
import { _testimonials } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page, ErrorScreen, Breadcrumbs, Iconify } from '../../src/components';
// sections
import { styled } from '@mui/material/styles';
import { Caritemlist, Carousel, Contactinfo } from '../../src/sections/@travel/displaymaincar';
import { TravelTourDetails } from '../../src/sections/@travel';
import Loader from './UsedCars/Loader';
import ChatButton from './ChatButton';

import Carfilterbar from '../../src/sections/@travel/filters/carfilterbar';
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
