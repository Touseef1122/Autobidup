import PropTypes from 'prop-types';

import {
  services,
  summary,
  image,
  buttons,
  text,
  title
} from '../../../_data/mock/businessStrategicPartnerships';

// @mui
import { Box, Container } from '@mui/material';
import Loader from '../Premium/Loader'
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// _data
import { _testimonials } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import {
  BusinessStrategies,
  BusinessOverview,
  BusinessTravelAgencies,
  BusinessTestimonials,
  TravelLandingBrands,
  Text
} from '../../../src/sections/@travel';
import TravelTourItemButton from '../../../src/sections/@travel/tours/TravelTourItemButton';
import ChatButton from '../ChatButton'

import TravelLandingfull from '../../../src/sections/@travel/landing/TravelLandingfull';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

StrategicPartnership.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function StrategicPartnership({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Strategic Partnerships">
      <Loader/>
      <ChatButton/>
      <Box sx={{ position: 'relative' }}>
      <Text tour={title}/>
        <BusinessOverview image={image} />
        <BusinessTravelAgencies tours={services} />
        <Container>
          <TravelTourItemButton travelButtons={buttons} />
          <BusinessStrategies icons={summary} />
          <BusinessTestimonials text={text} />
        </Container>
        <TravelLandingfull />
        <TravelLandingBrands />
      </Box>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

StrategicPartnership.getLayout = function getLayout(page) {
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
