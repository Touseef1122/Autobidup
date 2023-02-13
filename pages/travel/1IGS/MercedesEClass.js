import PropTypes from 'prop-types';
import { useState } from 'react';

import { corp7, services7, image7 ,title} from '../../../_data/mock/landing';

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

// BentleyMulsanne.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

export default function MercedesE({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }
  const [show, setShow] = useState(false);
  return (
    <Page title="Mercedes E Class">
      <Box sx={{ position: 'relative' }}>
      <Text tour={title} />
        <BusinessOverview image={image7} />
        <BusinessCorporations images={corp7} />
        <Main comp={services7} />
        <TravelLandingCars />
        <Imagebg />
      </Box>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

MercedesE.getLayout = function getLayout(page) {
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
