import PropTypes from 'prop-types';
// icons
import Image from 'next/image';
// @mui
import { Typography,Box, Container, Grid } from '@mui/material';

// ----------------------------------------------------------------------
TravelCityToCity.propTypes = {
  tours: PropTypes.array.isRequired,
};
export default function TravelCityToCity({ tours }) {
  return (
    <Container sx={{ width: '100%' }}>
      {tours.map((img) => (
        <Grid
          container
          row={{ xs: 1 }}
          columnSpacing={{ xs: 1, sm: 2 }}
          spacing={1}
          sx={{
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            margin: '48px 0',
          }}
        >
          {img.direction === 'left' && (
            <Grid item xs={12} md={6} sx={{ width: '50%', position: 'relative' }}>
              <Box key={img.id}>
                <Image src={img.image} width="100%" height="60%" layout="responsive" />
              </Box>
            </Grid>
          )}

          <Grid item xs={12} md={6} sx={{ width: '50%' }}>
            <Box sx={{px: { md: 5 } }}>
              <Typography fontSize="24px" fontWeight="bold" sx={{ fontWeight: '400' }}>
                {img.heading}
              </Typography>
              <Typography color="black" sx={{ fontSize: '14px', mt: 2 }}>
                {img.paragraph}
              </Typography>
            </Box>
          </Grid>

          {img.direction === 'right' && (
            <Grid item xs={12} md={6} sx={{ width: '50%', position: 'relative' }}>
              <Box key={img.id}>
                <Image src={img.image} width="100%" height="60%" layout="responsive" />
              </Box>
            </Grid>
          )}
        </Grid>
      ))}
    </Container>
  );
}

// ----------------------------------------------------------------------
