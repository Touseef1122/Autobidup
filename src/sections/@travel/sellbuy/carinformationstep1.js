import PropTypes from 'prop-types';
import * as React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import {
  Button,
  Link,
  Typography,
  Stack,
  Box,
  TextField,
  Container,
  MenuItem,
} from '@mui/material';

// ----------------------------------------------------------------------

// Carinformationstep1.propTypes = {

// };
const FormSchema1 = Yup.object().shape({
  website: Yup.string().required('Website is required'),
});

export default function Carinformationstep1({ formValues, handleInputChange }) {
  const router = useRouter();
  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema1),
    defaultValues: {
      reg_city: '',
      city: '',
      color: '',
      mileage: '',
      year: '',
      make: '',
      model: '',
      variant: '',
      bodytype: '',
    },
  });

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Container sx={{ width: '100%', padding: '20px', textAlign: 'left' }}>
        <Box
          sx={{
            ml: { md: '5%' },
            mr: { md: '35%' },
          }}
        >
          <Typography variant="h3" textAlign="left" pb="5px">
            Enter Car Information
          </Typography>
          <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
                <TextField
                  type="text"
                  fullWidth
                  placeholder="Enter Registration City"
                  name='reg_city'
                  label="Registration City"
                  value={formValues.reg_city}
                  onChange={handleInputChange}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
                <TextField
                  type="text"
                  fullWidth
                  placeholder="Enter City"
                  label="City"
                  name='city'
                  value={formValues.city}
                  onChange={handleInputChange}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
          </Stack>
          <Stack spacing={2} mt="12px" direction={{ xs: 'column', sm: 'row' }}>
                <TextField
                  type="text"
                  fullWidth
                  placeholder="Enter Color"
                  label="Color"
                  name="color"
                  value={formValues.color}
                  onChange={handleInputChange}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
                <TextField
                  type="text"
                  fullWidth
                  placeholder="Enter Mileage"
                  label="Mileage"
                  name='mileage'
                  value={formValues.mileage}
                  onChange={handleInputChange}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
          </Stack>
          <Typography variant="h5" mb="6" fontWeight="bold">
            Car Info *
          </Typography>
          <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
                <TextField
                  type="text"
                  fullWidth
                  placeholder="Enter Year"
                  label="Year"
                  name='year'
                  value={formValues.year}
                  onChange={handleInputChange}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
            <TextField
                  type="text"
                  fullWidth
                  placeholder="Enter Make"
                  label="Make"
                  name='make'
                  value={formValues.make}
                  onChange={handleInputChange}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
          </Stack>
          <Stack spacing={2} mt="12px" direction={{ xs: 'column', sm: 'row' }}>
                <TextField
                  type="text"
                  fullWidth
                  placeholder="Enter Model"
                  label="Model"
                  name='model'
                  value={formValues.model}
                  onChange={handleInputChange}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
                <TextField
                  type="text"
                  fullWidth
                  placeholder="Enter Variant"
                  label="Variant"
                  name='variant'
                  value={formValues.variant}
                  onChange={handleInputChange}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
          </Stack>
          <Stack>
             <TextField
                  type="text"
                  fullWidth
                  placeholder="Enter Body Type"
                  label="Body Type"
                  name='bodytype'
                  value={formValues.bodytype}
                  onChange={handleInputChange}
                  sx={{ width: { xs: '100%', sm: '50%' }, mt: '12px' }}
                />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
