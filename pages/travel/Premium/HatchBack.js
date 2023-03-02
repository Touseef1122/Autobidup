import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import Slider from 'react-slick';
import { useRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import {  useTheme } from '@mui/material/styles';
import {  Link, Avatar, Container, Typography } from '@mui/material';
// routes
import Routes from '../../../src/routes';
// utils
import { fDate } from '../../../src/utils/formatTime';
// components
import { varHover, varTranHover } from '../../../src/components/animate';
import { Image, BgOverlay, CarouselArrows, CarouselDots, TextMaxLine } from '../../../src/components';
import { price } from '_data/mock/number';
import { useState } from 'react';

import { corp2, services2, image2, title } from '../../../_data/mock/landing';

// @mui
import { Box } from '@mui/material';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// _data
import { _testimonials } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen ,Stack} from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';

import {
  BusinessCorporations,
  BusinessOverview,
  TravelLandingCars,
  Text,
} from '../../../src/sections/@travel';
import Main from '../../../src/sections/@travel/landingPage/main';

import ChatButton from '../ChatButton';
import Loader from './Loader';

HatchBack.propTypes = {
  post: PropTypes.shape({
    // frontmatter: PropTypes.shape({
    //   author: PropTypes.shape({
    //     name: PropTypes.string,
    //     picture: PropTypes.string,
    //   }),
    //   coverImg: PropTypes.string,
    //   createdAt: PropTypes.string,
    //   duration: PropTypes.string,
    //   title: PropTypes.string,
    // }),
    // slug: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.string,
    dis: PropTypes.string,
  }),
};
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

export default function HatchBack() {
    <Page>
    </Page>
}


// ----------------------------------------------------------------------

HatchBack.getLayout = function getLayout(page) {
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
