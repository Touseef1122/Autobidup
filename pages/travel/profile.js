import * as React from 'react';

import { services, services2, image } from '../../_data/mock/landing';

// @mui
import { Container, Grid,Box } from '@mui/material';
// utils
import { getAllPosts } from '../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../src/hooks';
// _data
import { _testimonials } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page, ErrorScreen, ContactMap } from '../../src/components';
// sections
import { styled } from '@mui/material/styles';
import {
  Details,
  Password,
  Payment,
  Notification,
  Main,
} from '../../src/sections/@travel/userProfile/';

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
    <Page title="Personal Profile" paddingBottom="50px">
      <div>
        <Container>
          <Box sx={{ width: '100%', mt: 15 }}>
            {/* <Container sx={{ width: '100%', position: 'relative', marginTop: '20vh',overflowX:"hidden" }}> */}
            <Grid
              container
              row={{ xs: 1 }}
              columnSpacing={{ xs: 1, sm: 2 }}
              sx={{
                justifyContent: 'space-between',
                width: '100%',
                height: '100%',
              }}
            >
              <Grid xs={12} md={3}>
                <Main />
              </Grid>
              <Grid xs={12} md={9}>
                <Details />
                <Password />
                <Payment />
                <Notification />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
      {/* </Container> */}
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

Profile.getLayout = function getLayout(page) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
