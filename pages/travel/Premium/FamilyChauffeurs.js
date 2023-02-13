import PropTypes from 'prop-types';

import {
  Licenece,
  summary,
  image,
  Licenece1,

} from '../../../_data/mock/Licenece';

// @mui
import { Box, Container } from '@mui/material';
import Loader from './Loader';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
import { DownloadAppCareer } from '../../../src/sections/download-app';
import TravelLandingBrands from '../../../src/sections/@travel/landing/TravelLandingBrands';
// _data
import { _testimonials } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import {
  BusinessCorporations,
  BusinessOverview,
  BusinessStrategies,
  Text
} from '../../../src/sections/@travel';
import TravelTourItemButton from '../../../src/sections/@travel/tours/TravelTourItemButton';
import ChatButton from '../ChatButton'
import TravelLandingIntroduceOurServices from '../../../src/sections/@travel/landing/TravelLandingIntroduceOurServices';
import   TravelLandingIntroduce from '../../../src/sections/@travel/landing/TravelLandingIntroduce';
import TravelLandingCars from '../../../src/sections/@travel/landing/TravelLandingCars';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

RoyalFleetlicense.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function RoyalFleetlicense({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Corporations">
      <Loader/>
      <ChatButton/>
      <Box sx={{ position: 'relative' }}>
      <Text/>
        <BusinessOverview image={image} />
        <TravelLandingIntroduceOurServices />

        {/* <Container> */}
        <TravelLandingIntroduce />
          <BusinessCorporations images={Licenece1} />
          <TravelLandingCars />
          <TravelLandingBrands />
          <DownloadAppCareer />
        {/* </Container> */}
      </Box>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

RoyalFleetlicense.getLayout = function getLayout(page) {
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
