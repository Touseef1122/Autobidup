import PropTypes from 'prop-types';

import { services, summary, service } from '../../_data/mock/forChauffeursData';

// @mui
import { Box } from '@mui/material';
// utils
import { getAllPosts } from '../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../src/hooks';
// _data
import { _testimonials } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page, ErrorScreen } from '../../src/components';
// sections
import { styled } from '@mui/material/styles';
import { LoginChauffeur } from '../../src/sections/@travel';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

// LoginChauffeur.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

export default function Loginchauffeur({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Login Chauffeur">
      <Box sx={{ overflowX: 'hidden'}}>
        <LoginChauffeur tours={services} icons={summary} services={service} />
      </Box>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

Loginchauffeur.getLayout = function getLayout(page) {
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
