import PropTypes from 'prop-types';
// import Loader from './UsedCars/Loader';
// import { services, summary, service } from '../../_data/mock/forChauffeursData';

// @mui
import { Container, Grid, Box } from '@mui/material';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// _data
import { _testimonials } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, Breadcrumbs } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import { Carousel, Contactinfo } from '../../../src/sections/@travel/displaymaincar';
import { TravelTourDetails } from '../../../src/sections/@travel';
import Car360View from '../../../src/sections/@travel/displaymaincar/Auction';
import image1 from '../../../src/assets/Images/FordMinivan.jpg';
import image2 from '../../../src/assets/Images/FordMinivan.jpg';
import image3 from '../../../src/assets/Images/FordMinivan.jpg';
import image4 from '../../../src/assets/Images/FordMinivan.jpg';
import image5 from '../../../src/assets/Images/FordMinivan.jpg';
import image6 from '../../../src/assets/Images/FordMinivan.jpg';


//--------------------------------------------------------------

const images = [
  {
    image: image1,
    title: 'Ford Minivan',
  },
  {
    image: image2,
    title: 'Ford Minivan',
  },
  {
    image: image3,
    title: 'Ford Minivan',
  },
  {
    image: image4,
    title: 'Ford Minivan',
  },{
    image: image5,
    title: 'Ford Minivan',
  },{
    image: image6,
    title: 'Ford Minivan',
  },
];
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

// Registerchauffeur.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

export default function Displaycardetails({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Auction">
      <div style={{ width: '500px', height: '300px' }}>
      <Car360View images={images} />
    </div>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

Displaycardetails.getLayout = function getLayout(page) {
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
