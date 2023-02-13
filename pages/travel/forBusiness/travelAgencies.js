import PropTypes from 'prop-types';

import {
  services,
  summary,
  image,
  buttons,
  text,
  title
} from '../../../_data/mock/businessTravelAgencies';

// @mui
import { Box, Container } from '@mui/material';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// _data
import Loader from '../Premium/Loader'
import { _testimonials } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import {
  BusinessTravelEvents,
  BusinessTestimonials,
  BusinessStrategies,
  BusinessOverview,
  Text
} from '../../../src/sections/@travel';
import TravelTourItemButton from '../../../src/sections/@travel/tours/TravelTourItemButton';
import ChatButton from '../ChatButton'

import TravelLandingBrands from '../../../src/sections/@travel/landing/TravelLandingBrands';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

TravelAgency.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function TravelAgency({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Travel Agencies">
      <Loader/>
      <ChatButton/>
      <Box sx={{ position: 'relative' }}>
      <Text tour={title}/>
        <BusinessOverview image={image} />
        <Container>
          <BusinessTravelEvents tours={services} />
          <TravelTourItemButton travelButtons={buttons} />
        </Container>
        <BusinessStrategies icons={summary} />
      </Box>
      <Container sx={{ mb: 6 }}>
        <BusinessTestimonials text={text} />
      </Container>
      <TravelLandingBrands />
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

TravelAgency.getLayout = function getLayout(page) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
