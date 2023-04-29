import PropTypes from 'prop-types';
// import Loader from './Premium/Loader';
// import { services, summary, service } from '../../_data/mock/forChauffeursData';
import { useState } from 'react';
// icons
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
import Loader from '../UsedCars/Loader.js';
// @mui
import { Typography, Grid, Box, Stack, Card, CardMedia } from '@mui/material';
// utils
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, Breadcrumbs, Image } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import Expertcall from '../../../src/sections/@travel/mechanic/expertcall';
import Call from '../../../src/sections/@travel/mechanic/callno';
import img1 from '../../../src/Assets/Images/expert1.jpg';
import img2 from '../../../src/Assets/Images/expert2.jpg';
import expert from '../../../src/Assets/Images/expert.jpg';
import Pagination from '@mui/material/Pagination';
import ChatButton from '../ChatButton';

import { BusinessOverview } from '../../../src/sections/@travel';
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------
var items = [
  {
    image: img1,
    heading: 'Lisa Zen',
    city: 'Lahore',
    years: '2',
    path: '/travel/mechanic/profile',
  },
  {
    image: img2,
    heading: 'Lisa Zen',
    city: 'Lahore',
    years: '2',
    path: '/travel/mechanic/profile',
  },
];
export default function Callexpert({ posts }) {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Page title="Call Expert | AutoBidUp">
      <Loader />
      <Box sx={{ overflowX: 'hidden' }}>
        <Box pt="8%" sx={{ maxWidth: '100%', position: 'relative', textAlign: 'center' }}>
          <Image src={expert.src} sx={{ height: '60vh' }} />
          <Typography
           fontSize="40px" fontWeight="bold" p="25px" color="black"
            sx={{
              position: 'absolute',
              top: '80%',
              left: ' 50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            Our Experts at your Service
          </Typography>
        </Box>
        {/* <Breadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Components', href: '/components' },
            { name: 'Breadcrumbs' },
          ]}
          sx={{ mb: 4 }}
        /> */}
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Call />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Expertcall item={items} />
          </Grid>
          <Stack spacing={2} justifyContent={'center'} alignItems={'center'}>
              {/* <Typography >Page: {page}</Typography> */}
              <Pagination
                sx={{
                  fontSize: '4.5rem',
                  fontWeight: 'bold',
                  '& .MuiPaginationItem-root': {
                    padding: '12px',
                  },
                  '& .MuiButtonBase-root': {
                    minWidth: '50px',
                    minHeight: '50px',
                  },
                }}
                count={5}
                page={page}
                onChange={handleChange}
              />
            </Stack>
        </Grid>
      </Box>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

Callexpert.getLayout = function getLayout(page) {
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
