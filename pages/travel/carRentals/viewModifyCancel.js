import PropTypes from 'prop-types';
import Loader from '../Premium/Loader'
import { summary1 } from '../../../_data/mock/carRental';

// @mui
import { Box, Container } from '@mui/material';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// _data
import { _testimonials } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import { CarRentalReciept } from '../../../src/sections/@travel';
import ChatButton from '../ChatButton'


const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

// ViewModifyCancel.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

export default function ViewModifyCancel({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="View modify cancel">
      <Loader/>
      <ChatButton/>
      <Box sx={{ position: 'relative' }}>
        <CarRentalReciept tour={summary1} />
      </Box>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

ViewModifyCancel.getLayout = function getLayout(page) {
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
