import PropTypes from 'prop-types';
import { useState } from 'react';

import { corp1, services1, image1,title } from '../../../_data/mock/landing';

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
import {
  BusinessCorporations,
  BusinessOverview,
  TravelLandingCars,
  Text
} from '../../../src/sections/@travel';
import Main from '../../../src/sections/@travel/landingPage/main';
import Imagebg from '../../../src/sections/@travel/landingPage/imagebg';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

IGSRoyalLandingPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function IGSRoyalLandingPage({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }
  const [show, setShow] = useState(false);
  return (
    <Page title="Rolls-Royce">
      <Box sx={{ position: 'relative' }}>
        <Text tour={title} />
        <BusinessOverview image={image1} />
        <BusinessCorporations images={corp1} />
        <Main comp={services1} />
        <TravelLandingCars />
        <Imagebg />
      </Box>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

IGSRoyalLandingPage.getLayout = function getLayout(page) {
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
