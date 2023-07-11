import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';

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
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://autobidup.pythonanywhere.com/cars/all_cars/');
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
        console.log(data)
        console.log("created")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(data)
  var list = data
  return (
    <Page title="Used Cars | AutoBidUp">
      <Loader />
      <Pageimage images={usedimage} />
      <ChatButton />
      {/* <TravelLandingIntroduceOurServices /> */}

      <TravelLandingIntroduce categories={vehicalType}/>
      <TravelLandingfull />

      <LatestPosts2 data={data} />
    </Page>
  );
}

//-------------------------------------------------------------------------------
const bestcities = [
  {
    id: 1,
    image: MVI,
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
    id: 2,
    image: MVI,
    heading: 'Civic',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '5 lac',
  },
  {
    id: 3,
    image: MVI,
    heading: 'Mehran',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
  },
  {
    id: 4,
    image: MVI,
    heading: 'Mehran',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
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
