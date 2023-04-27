import PropTypes from 'prop-types';
// import Loader from './Premium/Loader';
// import { services, summary, service } from '../../_data/mock/forChauffeursData';
import { useState } from 'react';
// icons
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';

// @mui
import { Container, Grid, Box,Stack,Button } from '@mui/material';
// utils
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, Breadcrumbs,Iconify } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import Landing from '../../../src/sections/@travel/mechanic/landing';
import { TravelTourDetails } from '../../../src/sections/@travel';
import img1 from '../../../src/Assets/Images/FordMinivan.jpg';
import Loader from '../UsedCars/Loader.js';
import Carfilterbar from '../../../src/sections/@travel/filters/carfilterbar'
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function Mechaniclanding({ posts }) {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const { data: courses = [], error, isLoading } = useRequest('/api/e-learning/courses');

//   const handleMobileOpen = () => {
//     setMobileOpen(true);
//   };

//   const handleMobileClose = () => {
//     setMobileOpen(false);
//   };

//   if (error) {
//     return <ErrorScreen />;
//   }
  return (
    <Page title="Mechanic Module | AutoBidUp">
      <Loader/>
      <Box sx={{ mb:6, overflowX:"hidden" }}>
        {/* <Breadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Components', href: '/components' },
            { name: 'Breadcrumbs' },
          ]}
          sx={{ mb: 4 }}
        /> */}
       <Landing/>
      </Box>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

Mechaniclanding.getLayout = function getLayout(page) {
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
