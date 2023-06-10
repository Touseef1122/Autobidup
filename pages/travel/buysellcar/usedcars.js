import PropTypes from 'prop-types';
// @mui
import { Box, Container } from '@mui/material';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// _data
// import { _testimonials, _jobsByCategories, _jobsByCompanies } from '../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, Image } from '../../../src/components';

// sections
import { styled } from '@mui/material/styles';
import { TravelLandingHero, TravelLandingIntroduce } from '../../../src/sections/@travel';

import Pageimage from '../../../src/sections/@travel/landing/pageimage';
import TravelLandingIntroduceOurServices from '../../../src/sections/@travel/landing/TravelLandingIntroduceOurServices';
import TravelLandingfull from '../../../src/sections/@travel/landing/TravelLandingfull';
import TravelLandingCars from '../../../src/sections/@travel/landing/TravelLandingCars';
import Galviston from '../../../src/assets/images/bentley8.jpg';
import Houston from '../../../src/assets/images/BMW3Series.jpg';
import Dallas from '../../../src/assets/images/FordMustang.jpg';
import Austin from '../../../src/assets/images/FordMinivan.jpg';
import HBI from '../../../src/assets/images/HatchBackIcon.png';
import SEI from '../../../src/assets/images/SedanIcon.png';
import SUVI from '../../../src/assets/images/SUVIcon.png';
import COI from '../../../src/assets/images/CrossOverIcon.png';
import MVI from '../../../src/assets/images/MiniVanIcon.png';
import used from '../../../src/assets/images/landing.jpg';
import Loader from '../UsedCars/Loader';
import ChatButton from '../ChatButton';
import LatestPosts2 from '../../../src/sections/@travel/landing/LatestPosts2';
import { useRouter } from 'next/router';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));
// ----------------------------------------------------------------------
Usedcars.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function Usedcars({ posts }) {
  return (
    <Page title="Used Cars | AutoBidUp">
      <Loader />
      <ChatButton />
      <Pageimage images={usedimage} />
      {/* <TravelLandingIntroduceOurServices /> */}

      <TravelLandingIntroduce categories={vehicalType}/>
      <TravelLandingfull />

      <LatestPosts2 posts={bestcities} />
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
  },
];
const vehicalType = [
  {
    id: 1,
    name: 'HatchBack',
    img: HBI,
    path: '/travel/UsedCars/HatchBack',
    button: 'Shop Now',
  },
  {
    id: 2,
    name: 'Sedan',
    img: SEI,
    path: '/travel/UsedCars/Sedan',
    button: 'Shop Now',
  },
  {
    id: 3,
    name: 'SUV',
    img: SUVI,
    path: '/travel/UsedCars/SUV',
    button: 'Shop Now',
  },
  {
    id: 4,
    name: 'CrossOver',
    img: COI,
    path: '/travel/UsedCars/Crossover',
    button: 'Shop Now',
  },
  {
    id: 5,
    name: 'MiniVan',
    img: MVI,
    path: '/travel/UsedCars/Minivan',
    button: 'Shop Now',
  },
];
const usedimage = [
  {
    image: used,
  },
];

// ----------------------------------------------------------------------

Usedcars.getLayout = function getLayout(page) {
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
