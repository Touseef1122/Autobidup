import PropTypes from 'prop-types';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import Card from '@mui/material/Container';
import Serviceclassdata from '../../../_data/mock/serviceclassdata.js';
import { Icon } from '@iconify/react';
// import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts/getAllPosts';

import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config';
// hooks
import { useRequest } from '../../../src/hooks';
// _data
import { _tours } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, Image } from '../../../src/components';
// sections
import { DownloadAppCareer } from '../../../src/sections/download-app';
import TravelLandingfull from '../../../src/sections/@travel/landing/TravelLandingfull';
// import HailingIntroduction from '../../../src/sections/@travel/hailing/HailingIntroduction';
import {
  Safeondemand,
  //   HailingHero,
  HailingIntroduction,
} from '../../../src/sections/@travel/hailing';
import city from '../../../src/assets/images/cityToCityImage1.jpg';
import bg from '../../../src/assets/images/corporation1.jpg';
import { Text } from '../../../src/sections/@travel';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

//--------------------------------------------------------------

export default function Hailing() {
  // ----------------------------------------------------------------------

  const { data: tour, error } = useRequest(`/api/travel/tours/${_tours[0].id}`);

  if (error) {
    return <ErrorScreen />;
  }

  if (!tour) {
    return null;
  }

  return (
    <Page title="hailing" paddingBottom="50px">
      <div>
        <Box>
          <Text tour={text} />
          <Image
            alt="hero"
            src={bg.src}
            sx={{
              height: '50vh',
              bgcolor: 'transparent',
            }}
          />
        </Box>
        <HailingIntroduction />
        <TravelLandingfull />
        <Safeondemand tours={images} />
        <DownloadAppCareer />
      </div>
    </Page>
  );
}

// ----------------------------------------------------------------------

Hailing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

const text = [
  {
    title: 'Say hello to chauffeur hailing',
  },
];

const images = [
  {
    id: 1,
    image: city,
    heading: 'Safe on-demand rides within minutes',
    direction: 'left',
    paragraph: `When you need a safe way to get around the city, think Blacklane chauffeur hailing. You can book the top-quality service you know and love for immediate pickup in the cities listed below. The perfect combination of traditional car service and ride hailing, chauffeur hailing is now available in the new version of the Blacklane iOS app.`,
  },
];
