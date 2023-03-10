import PropTypes from 'prop-types';

import city from '../../../src/assets/images/cityToCityImage1.jpg';
import city2 from '../../../src/assets/images/cityToCityImage2.png';
import city3 from '../../../src/assets/images/cityToCityImage3.jpg';
// @mui
import { Box, Container } from '@mui/material';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// _data
import { _testimonials } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
import NewsletterCareer from '../../../src/sections/newsletter/NewsletterCareer';
// components
import { Page, ErrorScreen } from '../../../src/components';
// sections
import { NewsletterTravel } from '../../../src/sections/newsletter';
import { TestimonialsTravel } from '../../../src/sections/testimonials';
import { BlogTravelLandingLatestPosts } from '../../../src/sections/blog';
import { DownloadAppCareer } from '../../../src/sections/download-app';
import { styled } from '@mui/material/styles';
import Loader from './Loader';

import {
  TravelLandingHero,
  TravelLandingSummary,
  TravelTourBarFilters,
  TravelLandingIntroduce,
  TravelLandingToursByCity,
  TravelLandingTourFeatured,
  TravelLandingFavoriteDestinations,
  TravelCityToCity,
  Text,
} from '../../../src/sections/@travel';
import ChatButton from '../ChatButton';

import TravelLandingTourFeaturedRoutes from '../../../src/sections/@travel/landing/TravelLandingTourFeaturedRoutes';
import TravelLandingIntroduceOurServices from '../../../src/sections/@travel/landing/TravelLandingIntroduceOurServices';
import TravelLandingfull from '../../../src/sections/@travel/landing/TravelLandingfull';
import TravelLandingCars from '../../../src/sections/@travel/landing/TravelLandingCars';
// import { TravelCityToCity } from '../../src/sections/@travel';

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
    <Page title="Landing - Travel" sx={{ overflowX: 'hidden' }}>
      <Loader />
      <ChatButton />
      <Box sx={{ position: 'relative' }}>
        <Text tour={text} />
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
        <TravelLandingIntroduceOurServices />
        <TravelLandingIntroduce />
      </RootStyle>
      {/* <TravelLandingIntroduce /> */}
      <TravelLandingfull />
      <TravelCityToCity tours={images} />
      {/* <TravelLandingCars/> */}
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
const text = [{ title: 'Airport Transfer Service Worldwide' }];
const bestcities = [
  {
    id: 1,
    name: 'London',
    dis: '20 routes to/from this city',
    img: 'https://zone-assets-api.vercel.app/assets/images/travel/travel_1.jpg',
  },
  {
    id: 2,
    name: 'New York',
    dis: '8 routes to/from this city',
    img: 'https://zone-assets-api.vercel.app/assets/images/travel/travel_2.jpg',
  },
  {
    id: 3,
    name: 'Berlin',
    dis: '6 routes to/from this city',
    img: 'https://zone-assets-api.vercel.app/assets/images/travel/travel_3.jpg',
  },
  {
    id: 4,
    name: 'Los Angeles',
    dis: '6 routes to/from this city',
    img: 'https://zone-assets-api.vercel.app/assets/images/travel/travel_3.jpg',
  },
];

const images = [
  {
    id: 1,
    image: city,
    heading: 'Maximize your Time',
    direction: 'left',
    paragraph: `With AutoBidup’s intercity rides, the ease of long-distance travel is more comfortable
    than ever. You’ll save time by skipping the airports and train stations, and can
    instead use the travel time how you’d like — private phone calls, last-minute
    presentation prep, or even catching up on sleep. Our chauffeurs are bound by
    discretion and give you the space and privacy you need to deliver your best.`,
  },
  {
    id: 2,
    image: city2,
    heading: 'Stress-free solution',
    direction: 'right',
    paragraph: `Booking our intercity rides as an alternative to flights, trains, or car rentals means 
    avoiding the crowds and staying safe on your long-distance journey. Instead of enduring long lines and 
    multiple interactions before you even hit the road, you just enjoy the comfort of a private transfer in 
    a top-of-the-line vehicle.`,
  },
  {
    id: 3,
    image: city3,
    heading: 'Cost certainty and flexibility',
    direction: 'left',
    paragraph: `Rates are guaranteed in advance, and our fixed pricing between your pickup and dropoff cities 
    means no hidden costs. Plans change? Change or cancel your ride for free up until 24 hours before pickup.
     Anticipate a stop or two along the way? AutoBidup chauffeurs have you covered. For small groups, our 
     Business Van or SUV service class means additional workspace without sacrificing comfort or style.`,
  },
];

// ----------------------------------------------------------------------

TravelLandingPage.getLayout = function getLayout(page) {
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
