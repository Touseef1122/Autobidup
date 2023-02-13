import PropTypes from 'prop-types';
import { text, images } from '../../../_data/mock/airportTransfer';

// @mui
import { Box } from '@mui/material';
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
import { TravelLandingHero, TravelCityToCity, Text } from '../../../src/sections/@travel';
import Loader from './Loader';
import TravelLandingIntroduceOurServices from '../../../src/sections/@travel/landing/TravelLandingIntroduceOurServices';
import TravelLandingfull from '../../../src/sections/@travel/landing/TravelLandingfull';
import ChatButton from '../ChatButton';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

TravelLandingPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function TravelLandingPage({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Landing - Travel">
      <Loader />
      <ChatButton />
      <Box sx={{ position: 'relative' }}>
        <Text tour={text} />
        <TravelLandingHero tours={tours.slice(0, 5)} />
      </Box>
      <RootStyle>
        <TravelLandingIntroduceOurServices />
      </RootStyle>
      <TravelLandingfull />
      <TravelCityToCity tours={images} />
    </Page>
  );
}

// ----------------------------------------------------------------------

TravelLandingPage.getLayout = function getLayout(page) {
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
