import PropTypes from 'prop-types';

import { summary4 } from '../../../_data/mock/carRental';
import Loader from '../Premium/Loader';
// @mui
import { Box, Container } from '@mui/material';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// _data
import { _testimonials } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
import NewsletterCareer from '../../../src/sections/newsletter/NewsletterCareer';
// components
import { Page, ErrorScreen } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import { Rental } from '../../../src/sections/@travel';
import ChatButton from '../ChatButton'

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function PopularRentalCars({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Popular Rental Cars">
      <Loader />
      <ChatButton/>
      <Box sx={{ position: 'relative' }}>
        <Rental tour={summary4} />
        {/* <Box mt="6">helllllll</Box> */}
      </Box>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

PopularRentalCars.getLayout = function getLayout(page) {
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
