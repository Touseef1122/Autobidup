import PropTypes from 'prop-types';

import { services, summary, image, buttons,title } from '../../../_data/mock/businessOverview';

// @mui
import { Box, Container, Typography } from '@mui/material';
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
import Loader from '../UsedCars/Loader'
import {
  BusinessOverview,
  BusinessStrategies,
  BusinessTravelAgencies,
  Text
} from '../../../src/sections/@travel';
import TravelTourItemButton from '../../../src/sections/@travel/tours/TravelTourItemButton';
import ChatButton from '../ChatButton'

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

Overview.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function Overview({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Overview">
      <Loader/>
      <ChatButton/>
      <Box sx={{ position: 'relative' }}>
      <Text tour={title}/>
        <BusinessOverview image={image} />
        <BusinessTravelAgencies tours={services} />
        <Container>
          <Typography color="black" fontSize="50px" fontWeight="bold" textAlign="center" alignItems="center" pb="25px">
            Top reasons to choose AutoBidup as your new transportation partner
          </Typography>
        </Container>
        <BusinessStrategies icons={summary} />
      </Box>
      <Container sx={{ mb: 6 }}>
        <TravelTourItemButton travelButtons={buttons} />
      </Container>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

Overview.getLayout = function getLayout(page) {
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
