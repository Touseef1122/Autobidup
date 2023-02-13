import PropTypes from 'prop-types';

import { services, summary, image, buttons, text,title } from '../../../_data/mock/businessEventServices';

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
import ChatButton from '../ChatButton'

// sections

import { styled } from '@mui/material/styles';
import {
  BusinessStrategies,
  BusinessOverview,
  BusinessTestimonials,
  BusinessCorporations,
  Text
} from '../../../src/sections/@travel';
import TravelTourItemButton from '../../../src/sections/@travel/tours/TravelTourItemButton';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

EventServices.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function EventServices({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Event Services">
      <Loader/>
      <ChatButton/>
      <Box sx={{ position: 'relative' }}>
      <Text tour={title}/>
        <BusinessOverview image={image} />
        <BusinessCorporations images={services} />
        <Container>
          <BusinessStrategies icons={summary} />
          <TravelTourItemButton travelButtons={buttons} />
          <BusinessTestimonials text={text} />
        </Container>
      </Box>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

EventServices.getLayout = function getLayout(page) {
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
