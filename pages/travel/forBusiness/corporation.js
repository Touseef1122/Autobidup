import PropTypes from 'prop-types';

import {
  services,
  summary,
  image,
  buttons,
  buttons1,
  text,
  title
} from '../../../_data/mock/businessCorporations';

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
// components
import { Page, ErrorScreen } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import ChatButton from '../ChatButton'

import Loader from '../Premium/Loader'
import {
  BusinessCorporations,
  BusinessOverview,
  BusinessStrategies,
  BusinessTestimonials,
  Text
} from '../../../src/sections/@travel';
import TravelTourItemButton from '../../../src/sections/@travel/tours/TravelTourItemButton';

import TravelLandingfull from '../../../src/sections/@travel/landing/TravelLandingfull';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

Corporation.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function Corporation({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Corporations">
      <Loader/>
      <ChatButton/>
      <Box sx={{ position: 'relative' }}>
      <Text tour={title}/>
        <BusinessOverview image={image} />
        <BusinessCorporations images={services} />
        <Container>
          <TravelTourItemButton travelButtons={buttons} />
          <TravelTourItemButton travelButtons={buttons1} />
          <BusinessStrategies icons={summary} />
          <BusinessTestimonials text={text} />
        </Container>
        <TravelLandingfull />
      </Box>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

Corporation.getLayout = function getLayout(page) {
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
