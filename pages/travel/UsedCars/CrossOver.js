import { useState } from 'react';
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
import { Caritemlist, Carousel, Contactinfo } from '../../../src/sections/@travel/displaymaincar';
import { TravelTourDetails } from '../../../src/sections/@travel';
import img1 from '../../../src/Assets/Images/FordMinivan.jpg';
import Loader from './Loader';
import ChatButton from '../ChatButton';
import filterIcon from '@iconify/icons-carbon/filter';
import Carfilterbar from '../../../src/sections/@travel/filters/carfilterbar';
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
    image: img1,
    heading: 'Honda',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
  },
  {
    image: img1,
    heading: 'Honda',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
  },
  {
    image: img1,
    heading: 'Honda',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
  },
  {
    image: img1,
    heading: 'Honda',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
  },
  {
    image: img1,
    heading: 'Honda',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
  },
  {
    image: img1,
    heading: 'Honda',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
  },
  {
    image: img1,
    heading: 'Honda',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
  },
  {
    image: img1,
    heading: 'Honda',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
  },
  {
    image: img1,
    heading: 'Honda',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
  },
  {
    image: img1,
    heading: 'Honda',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
  },
  {
    image: img1,
    heading: 'Honda',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
  },
  {
    image: img1,
    heading: 'Honda',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
  },
  {
    image: img1,
    heading: 'Honda',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
  },
  {
    image: img1,
    heading: 'Honda',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
  },
  {
    image: img1,
    heading: 'Honda',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
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
    <Page title="CrossOver">
      <RootStyle>
        <Loader />
        <ChatButton />
        <Container sx={{ marginTop: { xs: '33%', sm: '6%' }, mb: 6, overflowX: 'hidden' }}>
          <Typography variant="h2" mb="20px" textAlign={'center'}>
          CrossOver{' '}
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
            <Carfilterbar mobileOpen={mobileOpen} onMobileClose={handleMobileClose} />

            <Box
              sx={{
                flexGrow: 1,
              }}
            >
              <Caritemlist item={items} />
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
