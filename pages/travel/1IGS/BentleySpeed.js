import PropTypes from 'prop-types';
import { useState } from 'react';

import { corp3, services3, image3,title} from '../../../_data/mock/landing';

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

export default function BentleySpeed({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }
  const [show, setShow] = useState(false);
  return (
    <Page title="Bentley Mulsanne Speed">
      <Box sx={{ position: 'relative' }}>
      <Text tour={title}/>
        <BusinessOverview image={image3} />
        <BusinessCorporations images={corp3} />
        <Main comp={services3} />
        <TravelLandingCars />
        <Imagebg />
      </Box>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

BentleySpeed.getLayout = function getLayout(page) {
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
