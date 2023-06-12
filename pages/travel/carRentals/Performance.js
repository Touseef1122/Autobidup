import PropTypes from 'prop-types';
// import Loader from './UsedCars/Loader';
// import { services, summary, service } from '../../_data/mock/forChauffeursData';
import { useState } from 'react';
// icons
import filterIcon from '@iconify/icons-carbon/filter';
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, DRAWER_WIDTH } from '../../../src/config';
import Filter from './ItemFilter.js';
// @mui
import { Container, Grid, Box, Stack, Button, Typography } from '@mui/material';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// _data
import { _testimonials } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, Breadcrumbs, Iconify } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import { Caritem, Carousel, Contactinfo } from '../../../src/sections/@travel/displaymaincar';
import { TravelTourDetails } from '../../../src/sections/@travel';
import a from '../../../src/assets/images/SI1.JPg';
import b from '../../../src/assets/images/SI2.JPg';
import c from '../../../src/assets/images/SI3.JPg';
import Loader from '../UsedCars/Loader';
import ChatButton from '../ChatButton';

import Storefilterbar from '../../../src/sections/@travel/filters/storefilterbar';
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------
const items = [
  {
    image: a,
    heading: 'LG',
    city: 'Lighter',
    price: '200 RS',
  },
  {
    image: b,
    heading: 'LG',
    city: 'Charger',
    price: '800 RS',
  },
  {
    image: c,
    heading: 'LG',
    city: 'Mobile Holder',
    price: '300 RS',
  },
  {
    image: a,
    heading: 'LG',
    city: 'Lighter',
    price: '200 RS',
  },
  {
    image: b,
    heading: 'LG',
    city: 'Charger',
    price: '800 RS',
  },
  {
    image: c,
    heading: 'LG',
    city: 'Mobile Holder',
    price: '300 RS',
  },
  {
    image: a,
    heading: 'LG',
    city: 'Lighter',
    price: '200 RS',
  },
  {
    image: b,
    heading: 'LG',
    city: 'Charger',
    price: '800 RS',
  },
  {
    image: c,
    heading: 'LG',
    city: 'Mobile Holder',
    price: '300 RS',
  },
  {
    image: a,
    heading: 'LG',
    city: 'Lighter',
    price: '200 RS',
  },
  {
    image: b,
    heading: 'LG',
    city: 'Charger',
    price: '800 RS',
  },
  {
    image: c,
    heading: 'LG',
    city: 'Mobile Holder',
    price: '300 RS',
  },
  {
    image: a,
    heading: 'LG',
    city: 'Lighter',
    price: '200 RS',
  },
  {
    image: b,
    heading: 'LG',
    city: 'Charger',
    price: '800 RS',
  },
  {
    image: c,
    heading: 'LG',
    city: 'Mobile Holder',
    price: '300 RS',
  },
  {
    image: a,
    heading: 'LG',
    city: 'Lighter',
    price: '200 RS',
  },
  {
    image: b,
    heading: 'LG',
    city: 'Charger',
    price: '800 RS',
  },
  {
    image: c,
    heading: 'LG',
    city: 'Mobile Holder',
    price: '300 RS',
  },
  {
    image: a,
    heading: 'LG',
    city: 'Lighter',
    price: '200 RS',
  },
  {
    image: b,
    heading: 'LG',
    city: 'Charger',
    price: '800 RS',
  },
  {
    image: c,
    heading: 'LG',
    city: 'Mobile Holder',
    price: '300 RS',
  },
  {
    image: a,
    heading: 'LG',
    city: 'Lighter',
    price: '200 RS',
  },
  {
    image: b,
    heading: 'LG',
    city: 'Charger',
    price: '800 RS',
  },
  {
    image: c,
    heading: 'LG',
    city: 'Mobile Holder',
    price: '300 RS',
  },
  {
    image: a,
    heading: 'LG',
    city: 'Lighter',
    price: '200 RS',
  },
  {
    image: b,
    heading: 'LG',
    city: 'Charger',
    price: '800 RS',
  },
  {
    image: c,
    heading: 'LG',
    city: 'Mobile Holder',
    price: '300 RS',
  },
];

import Pagination from '@mui/material/Pagination';

export default function Displaycarlist({ posts }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const { data: courses = [], error, isLoading } = useRequest('/api/e-learning/courses');
  const [searchValues, setSearchValues] = useState('');

  const handleFilterClick = (searchValue) => {
    console.log('Search Value:', searchValue);    
    setSearchValues(searchValue)
  };

  const handleMobileOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  if (error) {
    return <ErrorScreen />;
  }
  return (
    <Page title="Performance : Store">
      <RootStyle>
        <Loader />
        <ChatButton />
        <Container sx={{ marginTop: { xs: '33%', sm: '6%' }, mb: 6, overflowX: 'hidden' }}>
          <Typography variant="h2" mb="20px" textAlign={'center'}>
            Performance
          </Typography>
          <Button
              color="inherit"
              variant="contained"
              startIcon={<Iconify icon={filterIcon} sx={{ width: 18, height: 18 }} />}
              onClick={handleMobileOpen}
              sx={{
                display: { md: 'none' },
              }}
            >
              Filters
        </Button>
          <Stack direction={{ xs: 'column', sm: 'row' }}>
          <Storefilterbar mobileOpen={mobileOpen} onMobileClose={handleMobileClose} onFilterClick={handleFilterClick}/>
            <Box
              sx={{
                flexGrow: 1
              }}
            >
              <Caritem search={searchValues} value={4} />
            </Box>
          </Stack>
        </Container>
        <Stack spacing={2} justifyContent={'center'} alignItems={'center'}>
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
            count={10}
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </RootStyle>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

Displaycarlist.getLayout = function getLayout(page) {
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
