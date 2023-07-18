import PropTypes from 'prop-types';
// import Loader from './UsedCars/Loader';
// import { services, summary, service } from '../../_data/mock/forChauffeursData';

// @mui
import { Container, Grid, Box } from '@mui/material';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// _data
import { _testimonials } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, Breadcrumbs } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import { Carousel, Contactinfo } from '../../../src/sections/@travel/displaymaincar';
import { TravelTourDetails } from '../../../src/sections/@travel';
import Loader from '../UsedCars/Loader';
import ChatButton from '../ChatButton';
import { useRouter } from 'next/router';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------
export default function Displaycardetails({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }
  const router = useRouter();
  const { data } = router.query;
  const item = data ? JSON.parse(data) : null;
  console.log('displaycard', item);
  if (item) {
    console.log('dard', item.images);
    return (
      <Page title="Buy/Sell Used Cars">
        <Loader />
        <ChatButton />
        <Container sx={{ marginTop: { xs: '33%', sm: '15%' } }}>
          <Grid justifyContent="center">
            <Grid item xs={10}>
              <Carousel post={item} />
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={7} mb={2}>
              <TravelTourDetails post={item} description={item?.description || ''} />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box></Box>
            </Grid>
          </Grid>
        </Container>
      </Page>
    );
  }
}
// ----------------------------------------------------------------------

Displaycardetails.getLayout = function getLayout(page) {
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
