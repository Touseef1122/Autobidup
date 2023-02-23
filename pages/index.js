import PropTypes from 'prop-types';
// @mui
import { Box, Container } from '@mui/material';
// utils
import { getAllPosts } from '../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../src/hooks';
// _data
import { _testimonials,_jobsByCategories,  _jobsByCompanies,} from '../_data/mock';

// layouts
import Layout from '../src/layouts';
import NewsletterCareer from '../src/sections/newsletter/NewsletterCareer';
// components
import { Page, ErrorScreen } from '../src/components';
// sections
import { NewsletterTravel } from '../src/sections/newsletter';
import { TestimonialsTravel } from '../src/sections/testimonials';
import { BlogTravelLandingLatestPosts } from '../src/sections/blog';
import { DownloadAppCareer } from '../src/sections/download-app';
import { styled } from '@mui/material/styles';
import {
  TravelLandingHero,
  TravelLandingCompanies,
  TravelLandingSummary,
  TravelTourBarFilters,
  TravelLandingIntroduce,
  TravelLandingToursByCity,
  TravelLandingTourFeatured,
  TravelLandingFavoriteDestinations,
  Text,
} from '../src/sections/@travel';


import TravelLandingTourFeaturedRoutes from '../src/sections/@travel/landing/TravelLandingTourFeaturedRoutes';
import TravelLandingIntroduceOurServices from '../src/sections/@travel/landing/TravelLandingIntroduceOurServices';
import TravelLandingfull from '../src/sections/@travel/landing/TravelLandingfull';
import TravelLandingCars from '../src/sections/@travel/landing/TravelLandingCars';
import Galviston from '../src/assets/images/bentley8.jpg';
import Houston from '../src/assets/images/BMW3Series.jpg';
import Dallas from '../src/assets/images/FordMustang.jpg';
import Austin from '../src/assets/images/FordMinivan.jpg';
import Loader from './travel/Premium/Loader'
import ChatButton from './travel/ChatButton'
import { BlogMarketingLatestPosts,BlogMarketingLatestPosts2 } from '../src/sections/blog';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------
const text=[
  {title:"Your global chauffeur service"}
]

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
      <Loader /> 
      <Box sx={{ position: 'relative' }}>
      {/* <Text tour={text}/> */}
        <TravelLandingHero tours={tours.slice(0, 5)} />
        <ChatButton/>  

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
      <TravelLandingIntroduce categories={_jobsByCategories} />

      <RootStyle>
        {/* <TravelLandingTourFeatured tours={bestcities.slice(0,4)}/> */}
        <BlogMarketingLatestPosts posts={bestcities} />
        <TravelLandingfull />

        <BlogMarketingLatestPosts2 posts={bestcities} />
        {/* <TravelLandingTourFeaturedRoutes tours={bestroutes} /> */}
      </RootStyle>
      <TravelLandingCars />
      {/* <TravelLandingToursByCity tours={tours.slice(0, 8)} /> */}

      {/* <BlogTravelLandingLatestPosts posts={posts.slice(0, 4)} /> */}

      {/* <TestimonialsTravel testimonials={_testimonials} /> */}

      {/* <NewsletterTravel /> */}
      <RootStyle>
        {/* <DownloadAppCareer /> */}
        <TravelLandingCompanies companies={_jobsByCompanies} />
      </RootStyle>
    </Page>
  );
}

//-------------------------------------------------------------------------------
const bestcities = [
  {
    id: 1,
    name: 'Honda City',
    dis: '2019',
    price: 'Rs 3,000,000',
    img: Houston,
  },
  {
    id: 2,
    name: 'Crola Atlas',
    dis: '2020',
    price: 'Rs 3,000,000',
    img: Dallas,
  },
  {
    id: 3,
    name: 'Mehran',
    dis: '2016',  
      price: 'Rs 3,000,000',

    img: Austin,
  },
  {
    id: 4,
    price: 'Rs 3,000,000',
    name: 'Jeep',
    dis: '2018',
    img: Galviston,
  },
  {
    id: 5,
    price: 'Rs 3,000,000',
    name: 'Honda City',
    dis: '2019',
    img: Houston,
  },
  {
    id: 6,
    price: 'Rs 3,000,000',
    name: 'Crola Atlas',
    dis: '2020',
    img: Dallas,
  },
  {
    id: 7,
    name: 'Mehran',
    price: 'Rs 3,000,000',
    dis: '2016',
    img: Austin,
  },
  {
    id: 8,
    name: 'Jeep',
    price: 'Rs 3,000,000',
    dis: '2018',
    img: Galviston,
  },
  {
    id: 9,
    name: 'Honda City',
    dis: '2019',
    price: 'Rs 3,000,000',
    img: Houston,
  },
  {
    id: 10,
    name: 'Crola Atlas',
    price: 'Rs 3,000,000',
    dis: '2020',
    img: Dallas,
  },
  {
    id: 11,
    price: 'Rs 3,000,000',
    name: 'Mehran',
    dis: '2016',
    img: Austin,
  },
  {
    id: 12,
    name: 'Jeep',
    price: 'Rs 3,000,000',
    dis: '2018',
    img: Galviston,
  }
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

