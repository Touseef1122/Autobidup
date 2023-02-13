import PropTypes from 'prop-types';

import airport1 from '../../src/assets/images/airport1.jpg';
import airport2 from '../../src/assets/images/airport2.jpg';
import airport3 from '../../src/assets/images/airport3.jpg';
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
  TravelCityToCity,
} from '../../src/sections/@travel';

import TravelLandingTourFeaturedRoutes from '../../src/sections/@travel/landing/TravelLandingTourFeaturedRoutes';
import TravelLandingIntroduceOurServices from '../../src/sections/@travel/landing/TravelLandingIntroduceOurServices';
import TravelLandingfull from '../../src/sections/@travel/landing/TravelLandingfull';
import TravelLandingCars from '../../src/sections/@travel/landing/TravelLandingCars';
// import { TravelCityToCity } from '../../src/sections/@travel';
import Hourly from '../../src/sections/@travel/Hourlyhiring/hourlyhiringIntroduction'

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

hourlyhiring.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function hourlyhiring({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Landing - Travel">
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
      <RootStyle>
        {/* <TravelLandingIntroduceOurServices /> */}
        {/* <TravelLandingTourFeatured tours={bestcities} /> */}
        {/* <TravelLandingTourFeaturedRoutes tours={bestroutes} /> */}
      </RootStyle>
      {/* <TravelLandingIntroduce /> */}
      <Hourly/>
      <TravelCityToCity tours={images}/>
      <TravelLandingfull />
      {/* <TravelLandingCars/> */}
      {/* <TravelLandingToursByCity tours={tours.slice(0, 8)} /> */}

      {/* <BlogTravelLandingLatestPosts posts={posts.slice(0, 4)} /> */}

      {/* <TestimonialsTravel testimonials={_testimonials} /> */}

      {/* <NewsletterTravel /> */}
      {/* <RootStyle> */}
        <DownloadAppCareer />
      {/* </RootStyle> */}
    </Page>
  );
}


const images = [
    {
      id: 1,
      image: airport1,
      heading: 'Flexibility with an hourly service',
      direction: 'right',
      paragraph: `For some added flexibility during the course of your stay, Blacklane is on hand with a reliable hourly chauffeur service. Whether you're in Sao Paulo, San Francisco or Sydney, you can expect the same high levels of professionalism and excellence on every occasion. You can book a Blacklane by-the-hour service for a duration of your choosing, even if your precise destinations are yet to be decided.`,
    },
    {
      id: 2,
      image: airport2,
      heading: 'By-the-hour hire for any occasion',
      direction: 'left',
      paragraph: `Having an experienced Blacklane chauffeur on hand for a period of time gives you the freedom to create more fluid plans in advance of your trip. Whether for business or pleasure, a Blacklane hourly hire means you can change your destination on a whim, staying one step ahead of any obstacles or issues on the horizon.`,
    },
    
  ];

  const SUMMARY = [
    {
      title: 'Book via app or web',
      description:
        'No need to call or email for a quote. Enter your ride details, see the fixed price, and book. It’s really that simple. The outline of a car from the front.',
      icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_popularity.svg',
    },
    {
      title: 'Your safe passage',
      description: 'Travel confidently knowing your safety is our #1 priority. Rigorous health and cleaning standards round out a best-in-class service. The outline of a clock, with an arrow moving clockwise to represent time passing.',
      icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_secure_payment.svg',
    },
    {
      title: 'Set your own schedule',
      description:
        'Schedule your pickup whenever you want, and leave departure boards and timetables in the rear-view mirror.',
      icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_reputation.svg',
    },
  ];
  
  



// ----------------------------------------------------------------------

hourlyhiring.getLayout = function getLayout(page) {
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
