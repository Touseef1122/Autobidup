import PropTypes from 'prop-types';
import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Image } from '../../../components';

import { useRouter } from 'next/router';
// @mui

import { Container, Typography, Box } from '@mui/material';
// utils
// @utils
// components
import { LoadingButton } from '@mui/lab';
// ----------------------------------------------------------------------
Rental.propTypes = {
  tour: PropTypes.array.isRequired,
};
export default function Rental({ tour }) {
  const router = useRouter();

  return (
    <Container sx={{ width: '100% ', marginTop: {xs:"16%",md:'12%'}, marginBottom: '10%' }}>
      <Box
        sx={{
          display: 'grid',
          textAlign: 'center',
          justifyContent: 'space-between',
          gap: { xs: 1, md: 6 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          },
          mt:6,
          mb:6
        }}
      >
        {tour.map((value) => (
          <Box sx={{ marginBottom: { xs: '20px' },
          marginTop: { xs: '20px' },}}>
            <Box
              key={tour.title}
              p={4}
              sx={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: '4px',
                boxShadow: '0px 5px 10px #64666b',
              }}
            >
              <Typography sx={{ fontSize: '30px', mt: 2, mb: 2 }} asLink persistent>
                {' '}
                {value.title}{' '}
              </Typography>
              <Image
                src={value.image.src}
                sx={{
                  width: '100%',

                  objectFit: 'cover',
                }}
              />
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                sx={{ fontSize:"18px", mr: { md: 6 }, mt: 6 }}
                onClick={() => router.push('/travel/carRentals/MakeReservation')}
              >
                Rent a {value.button}
              </LoadingButton>{' '}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------
