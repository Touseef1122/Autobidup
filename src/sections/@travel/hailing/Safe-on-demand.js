import PropTypes from 'prop-types';
// icons

// next
import { LoadingButton } from '@mui/lab';

import NextLink from 'next/link';
import Image from 'next/image';
// @mui
import { Typography, Stack, Card, Box, Container, Grid } from '@mui/material';
// @utils
// import { fDate } from '../../../utils/formatTime';
// import { fCurrency } from '../../../utils/formatNumber';
// components
// import { RatingLabel, TextIconLabel, Iconify } from '../../../components';

// ----------------------------------------------------------------------
Safeondemand.propTypes = {
  tours: PropTypes.array.isRequired,
};
export default function Safeondemand({tours}) {
    
  return (
    <Container sx={{ width: '100%' }}>
      {tours.map((img) =>
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
              <Box sx={{py: 2, px: {md: 5}}}>
                <Typography variant="h4" sx={{ fontWeight: '400' }}>{img.heading}</Typography>
                <Typography color="text.secondary" sx={{ fontSize: '1rem', mt: 2 }}>
                  {img.paragraph}
                </Typography>
                <LoadingButton
                sx={{ margin: '25px' }}
                size="large"
                type="submit"
                variant="contained"
              >
                Download App
              </LoadingButton>
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
      )}
      <Container>

        <Typography variant='h4'>Chauffeur hailing is available in:</Typography>
        <Typography>United Arab Emirates: Dubai</Typography>
        <Typography>United States: New York City</Typography>
      </Container>
    </Container>
    
  );
}


// ----------------------------------------------------------------------
