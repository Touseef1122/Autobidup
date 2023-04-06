import PropTypes from 'prop-types';
// import Loader from './UsedCars/Loader';
// import { services, summary, service } from '../../_data/mock/forChauffeursData';
import { useState } from 'react';
// icons
import filterIcon from '@iconify/icons-carbon/filter';
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, DRAWER_WIDTH } from '../../../src/config';

// @mui
import { Container, Grid, Box,Stack,Button } from '@mui/material';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// _data
import { _testimonials } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, Breadcrumbs,Iconify } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
// import { Cartt } from '../../../src/sections/@travel/accessories/cartitem';
import Order from '../../../src/sections/@travel/accessories/order';
import Item from '../../../src/sections/@travel/accessories/item';
import { TravelTourDetails } from '../../../src/sections/@travel';
import img1 from '../../../src/Assets/Images/FordMinivan.jpg';

import Carfilterbar from '../../../src/sections/@travel/filters/carfilterbar'
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
  }
];

export default function Cart() {
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
    <Page title="Cart | Accessories">
      {/* <Loader/> */}
      <Container sx={{ marginTop: { xs: '33%', sm: '15%' }, mb:6, overflowX:"hidden" }}>
        {/* <Breadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Components', href: '/components' },
            { name: 'Breadcrumbs' },
          ]}
          sx={{ mb: 4 }}
        /> */}
         <Grid container justifyContent="center">
          <Grid item xs={12} sm={9}>
            <Item item={items}/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Order/>
          </Grid>
        </Grid>
         {/* <Button
              color="inherit"
              variant="contained"
              startIcon={<Iconify icon={filterIcon} sx={{ width: 18, height: 18 }} />}
              onClick={handleMobileOpen}
              sx={{
                display: { md: 'none' },
              }}
            >
              Filters
        </Button>  */}
        {/* <Stack spacing={6} direction={{ xs: 'column', sm: 'row' }}>
          <Carfilterbar mobileOpen={mobileOpen} onMobileClose={handleMobileClose} />

          <Box
            sx={{
              flexGrow: 1,
              // pl: { md: 8 },
              // width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
            }}
          >
            <Caritemlist item={items} />
          </Box>
        </Stack> */}
        {/* tours={services} icons={summary} services={service}  */}
      </Container>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

Cart.getLayout = function getLayout(page) {
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
