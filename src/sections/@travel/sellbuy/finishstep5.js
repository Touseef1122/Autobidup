import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

import {
  Button,
  Checkbox,
  Typography,
  Stack,
  Box,
  TextField,
  Container,
  MenuItem,
} from '@mui/material';
import { blogTitle } from '_data/mock/text';
const FormSchema = Yup.object().shape({
  phone: Yup.array()
    .required()
    .min(11, 'Phone number should of 11 digits')
    .max(11, 'Phone number should of 11 digits'),
  name: Yup.string().required('Name is required'),
});

export default function Finishstep5({ formValues, handleInputChange }) {
  const router = useRouter();

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Container sx={{ width: '100%', padding: '20px', textAlign: 'left' }}>
        <Box
          sx={{
            ml: { md: '5%' },
            mr: { md: '5%' },
          }}
        >
          <Typography variant="h3" textAlign="left" pb="5px">
            Vehicle Description
          </Typography>

          <Box>
            <Typography fontSize="14px" fontWeight="bold">
              Description
            </Typography>
            <TextField
              id="filled-multiline-static"
              sx={{ width: '100%' }}
              multiline
              rows={4}
              placeholder="Describe your car..."
              variant="filled"
              name="description"
              value={formValues.description}
              onChange={handleInputChange}
            />
            <Typography variant="body3" textAlign="right" fontWeight="bold">
              Word limit is 1000
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 6,
              mr: { md: '25%' },
            }}
          >
            <Typography variant="h5" mb="6" fontWeight="bold">
              Contact Information
            </Typography>
            <Stack spacing={2} mt="4" direction={{ xs: 'column' }}>
              <div>
                <Typography fontSize="14px" fontWeight="bold">
                  Seller Name *
                </Typography>

                <TextField
                  fullWidth
                  placeholder="Enter Seller Name"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
              </div>
              <div>
                <Typography fontSize="14px" fontWeight="bold">
                  Phone Number *
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Enter Phone Number"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={handleInputChange}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
                <Typography variant="body3" fontWeight="bold">
                  Enter genuine number of 11 digits
                </Typography>
              </div>
            </Stack>
          </Box>
        </Box>
      </Container>
      <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end">
        <Button mt="6" color="inherit" variant="contained" onClick={handleNext}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------
