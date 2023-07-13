import PropTypes from 'prop-types';
// import Loader from './Premium/Loader';
// import { services, summary, service } from '../../_data/mock/forChauffeursData';
import { useState, useEffect } from 'react';
// icons
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
import Loader from '../UsedCars/Loader.js';
import ChatButton from '../ChatButton';

// @mui
import { Container, Grid, Box, Stack, Button } from '@mui/material';
// utils
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, Image, Breadcrumbs, Iconify } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import Expertcall from '../../../src/sections/@travel/mechanic/expertcall';
import Call from '../../../src/sections/@travel/mechanic/callno';
import { TravelTourDetails } from '../../../src/sections/@travel';
import img1 from '../../../src/Assets/Images/expert1.jpg';
import img2 from '../../../src/Assets/Images/expert2.jpg';
import img3 from '../../../src/Assets/Images/expert3.jpg';
import landing from '../../../src/Assets/Images/expertCard.jpg';
import Pageimage from '../../../src/sections/@travel/landing/pageimage';


import Carfilterbar from '../../../src/sections/@travel/filters/carfilterbar';
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------
var items = [
  {
    image: img1,
    heading: 'Lisa Zen',
    city: 'Lahore',
    years: '2',
    path: '/travel/mechanic/profile'
  },
  {
    image: img2,
    heading: 'Lisa Zen',
    city: 'Lahore',
    years: '2',
    path: '/travel/mechanic/profile'
  }
];
export default function Callexpert({ posts }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://autobidup.pythonanywhere.com/mechanic/show_experts');
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

  
  return (
    <Page title="Call Expert | AutoBidUp">
      <Loader/>
      <ChatButton />
      <Box sx={{ overflowX: 'hidden' }}>
       <Pageimage images={usedimage}/>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Call/>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Expertcall item={data} />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
}
const usedimage=[
  {
    image: landing
  }
]

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

Callexpert.getLayout = function getLayout(page) {
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
