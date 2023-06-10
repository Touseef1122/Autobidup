import * as React from 'react';
//data
import { services, services2, image } from '../../../_data/mock/landing';
// @mui
import { styled, useTheme } from '@mui/material/styles';

import Loader from '../UsedCars/Loader';
import ChatButton from '../ChatButton';


// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// _data
import { _testimonials } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, ContactMap } from '../../../src/components';

import Sidebar from '../../../src/sections/@travel/userProfile/side';
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function Profile() {
  return (
    <Page title="Personal Profile" paddingBottom="50px" >
      <Loader />
      <ChatButton />
      {/* <Sidebar/> */}
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

Profile.getLayout = function getLayout(page) {
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
