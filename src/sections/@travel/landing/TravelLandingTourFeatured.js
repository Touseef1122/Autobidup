import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Stack, Button, Typography, Box } from '@mui/material';
// routes
import Routes from '../../../routes';
//
import TravelTourItem from '../tours/TravelTourItem';

// ----------------------------------------------------------------------



//-----------------------------------------------------------------------
// const RootStyle = styled('div')(({ theme }) => ({
//   padding: theme.spacing(10, 0),
//   backgroundColor: theme.palette.background.neutral,
//   [theme.breakpoints.up('md')]: {
//     padding: theme.spacing(5, 0),
//   },
// }));

// ----------------------------------------------------------------------

TravelLandingTourFeatured.propTypes = {
  tours: PropTypes.array.isRequired,
};

export default function TravelLandingTourFeatured({ tours }) {
  return (
    <Container sx={{marginBottom: "40px"}}>
        <Stack spacing={3} sx={{ textAlign: 'center' }}>
          <Typography variant="h3" >Intercity routes</Typography>
          <Typography variant= "h5" sx={{ color: 'black' ,
          display: 'flex',
            alignItems: 'center',
             justifyContent: 'flex-start'}}>
            {`Top cities`}
          </Typography>
        </Stack>

        <Box
          sx={{
            mt: 4,
            display: 'grid',
            gap: { xs: 4, md: 3 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {tours?.map((tour) => (
            <TravelTourItem key={tour.id.src} tour={tour} />
          ))}
        </Box>

        {/* <Box sx={{ textAlign: 'center' }}>
          <NextLink href={Routes.travel.tours} passHref>
            <Button size="large" variant="contained">
              View All Tours
            </Button>
          </NextLink>
        </Box> */}
      </Container>




  );
}



