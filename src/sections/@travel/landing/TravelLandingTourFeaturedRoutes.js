import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Stack, Button, Typography, Box } from '@mui/material';
// routes
import Routes from '../../../routes';
//-----------------------------------------------------------------------

import TravelTourItemRoutes from '../tours/TravelTourItemRoutes';
import TravelTourItemButton from '../tours/TravelTourItemButton';

// ----------------------------------------------------------------------

//-----------------------------------------------------------------------
// const RootStyle = styled('div')(({ theme }) => ({
//   padding: theme.spacing(10, 0),
//   backgroundColor: theme.palette.background.neutral,
//   [theme.breakpoints.up('md')]: {
//     padding: theme.spacing(15, 0),
//   },
// }));

// ----------------------------------------------------------------------

TravelLandingTourFeaturedRoutes.propTypes = {
  tours: PropTypes.array.isRequired,
};

export default function TravelLandingTourFeaturedRoutes({ tours }) {
  return (
    <Container >
      <Stack spacing={3} sx={{ textAlign: 'center'}}>
        <Typography
          variant="h5"
          text-decoration= "none"

          sx={{
            color: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          {`Top routes`}
        </Typography>
      </Stack>

      <Box
        sx={{
          mt: 3,
          display: 'grid',
          gap: { xs: 4, md: 3 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {tours.map((tour) => (
          <TravelTourItemRoutes key={tour.id} tour={tour} />
        ))}
        
      </Box>
      <TravelTourItemButton travelButtons={buttons}/>
    </Container>
  );
}

const buttons=[
  {
    question:"Don't see the route you are looking for?",
    paragraph:"Enter your ideal destinations to see the price",
    button:"Book an intercity ride"
  }
]

