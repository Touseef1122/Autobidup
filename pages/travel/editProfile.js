import * as React from 'react';
// @mui
import { Box } from '@mui/material';
// utils
import { getAllPosts } from '../../src/utils/get-mardown/travel/posts';
// hooks
// _data
import { _testimonials } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page, } from '../../src/components';
// sections
import { styled } from '@mui/material/styles';
import Edit from '../../src/sections/@travel/userProfile/edit';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function EditProfile() {
  return (
    <Page title="Edit Profile" paddingBottom="50px">
      <Box sx={{ width: '100%', mt: 15 }}>
        <Edit />
      </Box>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

EditProfile.getLayout = function getLayout(page) {
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
