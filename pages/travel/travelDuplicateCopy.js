import PropTypes from 'prop-types';
// @mui
import { Box, Container } from '@mui/material';
// utils
import { getAllPosts } from '../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../src/hooks';
// _data
import { _testimonials } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
import NewsletterCareer from '../../src/sections/newsletter/NewsletterCareer';
// components
import { Page, ErrorScreen } from '../../src/components';
// sections
import { NewsletterTravel } from '../../src/sections/newsletter';
import { TestimonialsTravel } from '../../src/sections/testimonials';
import { BlogTravelLandingLatestPosts } from '../../src/sections/blog';
import { DownloadAppCareer } from '../../src/sections/download-app';
import { styled } from '@mui/material/styles';
import {
  TravelLandingHero,
  TravelLandingSummary,
  TravelTourBarFilters,
  TravelLandingIntroduce,
  TravelLandingToursByCity,
  TravelLandingTourFeatured,
  TravelLandingFavoriteDestinations,
} from '../../src/sections/@travel';

import TravelLandingTourFeaturedRoutes from '../../src/sections/@travel/landing/TravelLandingTourFeaturedRoutes';
import TravelLandingIntroduceOurServices from '../../src/sections/@travel/landing/TravelLandingIntroduceOurServices';
import TravelLandingfull from '../../src/sections/@travel/landing/TravelLandingfull';
import TravelLandingCars from '../../src/sections/@travel/landing/TravelLandingCars';
import Galviston from '../../src/assets/images/Galviston.jpg';
import Houston from '../../src/assets/images/Houston.jpg';
import Dallas from '../../src/assets/images/Dallas.jpg';
import Austin from '../../src/assets/images/Austin.jpg';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

TravelLandingPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function TravelLandingPage({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Home">
      <Box sx={{ position: 'relative' }}>
        <TravelLandingHero tours={tours.slice(0, 5)} />

        {/* <Container
          sx={{
            left: 0,
            right: 0,
            bottom: 0,
            mx: 'auto',
            position: { md: 'absolute' },
          }}
        >
          <TravelTourBarFilters onDark sx={{ py: { xs: 3, md: 8 } }} />
        </Container> */}
      </Box>

      {/* <TravelLandingSummary /> */}

      {/* <TravelLandingFavoriteDestinations tours={tours.slice(0, 4)} /> */}
      <TravelLandingIntroduceOurServices />
      <RootStyle>
        <TravelLandingTourFeatured tours={bestcities} />
        <TravelLandingTourFeaturedRoutes tours={bestroutes} />
      </RootStyle>
      <TravelLandingIntroduce />
      <TravelLandingfull />
      <TravelLandingCars />
      {/* <TravelLandingToursByCity tours={tours.slice(0, 8)} /> */}

      {/* <BlogTravelLandingLatestPosts posts={posts.slice(0, 4)} /> */}

      {/* <TestimonialsTravel testimonials={_testimonials} /> */}

      {/* <NewsletterTravel /> */}
      <RootStyle>
        <DownloadAppCareer />
      </RootStyle>
    </Page>
  );
}

//-------------------------------------------------------------------------------
const bestcities = [
  {
    id: 1,
    name: 'Houston',
    dis: '6 routes to/from this city',
    img: Houston,
  },
  {
    id: 2,
    name: 'Dallas',
    dis: '8 routes to/from this city',
    img: Dallas,
  },
  {
    id: 3,
    name: 'Austin',
    dis: '20 routes to/from this city',
    img: Austin,
  },
  {
    id: 4,
    name: 'Galveston',
    dis: '6 routes to/from this city',
    img: Galviston,
  },
];

//----------------------------------------------------------------------
const bestroutes = [
  {
    id: 1,
    name1: 'Houston',
    name2: 'Galveston',
    dis: '3h 30m 201 mi',
  },
  {
    id: 2,
    name1: 'Houston',
    name2: 'Dallas',
    dis: '4h 10m 270 mi',
  },
  {
    id: 3,
    name1: 'Houston',
    name2: 'Forth Worth',
    dis: '1h 30m 98 mi',
  },
  {
    id: 4,
    name1: 'Houston',
    name2: 'Austin ',
    dis: '5h 45m 582 mi',
  },
  {
    id: 5,
    name1: 'Houston',
    name2: 'San Antonio',
    dis: '1h 15m 80 mi',
  },
  {
    id: 6,
    name1: 'Houston',
    name2: 'Corpus Christi',
    dis: '3h 30m 204 mi',
  },
  {
    id: 7,
    name1: 'Houston',
    name2: 'Louisiana',
    dis: '2h 30m 236 mi',
  },
  {
    id: 8,
    name1: 'Houston',
    name2: 'New Orleans',
    dis: '2h 00m 123 mi',
  },
];

// ----------------------------------------------------------------------

TravelLandingPage.getLayout = function getLayout(page) {
  return <Layout transparentHeader>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
