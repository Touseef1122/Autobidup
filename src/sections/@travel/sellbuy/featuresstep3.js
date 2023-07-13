import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

import {
  FormControlLabel,
  Checkbox,
  Typography,
  Stack,
  Box,
  TextField,
  Container,
  Button,
} from '@mui/material';
// ----------------------------------------------------------------------
const check = [
  {
    value: '1',
    label: 'Airbags',
  },
  {
    value: '2',
    label: 'Airconditioner',
  },
  {
    value: '3',
    label: 'Alloywheels',
  },
  {
    value: '4',
    label: 'Antilockbreakingsystem',
  },
  {
    value: '5',
    label: 'Coolbox',
  },
  {
    value: '6',
    label: 'Cupholders',
  },
  {
    value: '7',
    label: 'Foldingrearseat',
  },
  {
    value: '8',
    label: 'Immobilizer',
  },
  {
    value: '9',
    label: 'Powerdoorlocks',
  },
  {
    value: '10',
    label: 'Powersteering',
  },
  {
    value: '11',
    label: 'Powerwindows',
  },
  {
    value: '12',
    label: 'Powermirrors',
  },
  {
    value: '13',
    label: 'Rearwiper',
  },
  {
    value: '14',
    label: 'Tractioncontrol',
  },
  {
    value: '15',
    label: 'Rearseatent',
  },
  {
    value: '16',
    label: 'Climatecontrol',
  },
  {
    value: '17',
    label: 'Rearacvents',
  },
  {
    value: '18',
    label: 'Frontspeaker',
  },
  {
    value: '19',
    label: 'Rearspeaker',
  },
  {
    value: '20',
    label: 'Armrests',
  },
];

export default function Featuresstep3({ formValues, formValues3p1, handleInputChange, handleInputChange3p1 }) {
  
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
            Features and Specifications
          </Typography>
          <Box
            sx={{
              mr: { md: '25%' },
            }}
          >
            <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
              <TextField
                fullWidth
                placeholder="Enter Engine Type"
                name="engine_type"
                label="Engine Type"
                value={formValues.enginetype}
                onChange={handleInputChange}
                sx={{ width: { xs: '100%', sm: '50%' } }}
              />
              <TextField
                fullWidth
                placeholder="Enter Engine Capacity"
                label="Engine Capacity"
                name="engine_capacity"
                value={formValues.engineCapacity}
                onChange={handleInputChange}
                sx={{ width: { xs: '100%', sm: '50%' } }}
              />
            </Stack>
            <Stack spacing={2} mt="12px" direction={{ xs: 'column', sm: 'row' }}>
              <TextField
                fullWidth
                placeholder="Enter Transmission"
                label="Transmission"
                name="transmission"
                value={formValues.transmission}
                onChange={handleInputChange}
                // value={stepData.step1Data?.transmission || ''}
                sx={{ width: { xs: '100%', sm: '50%' } }}
              />
              <TextField
                fullWidth
                placeholder="Enter Assembly"
                label="Assembly"
                name="assembly"
                value={formValues.assembly}
                onChange={handleInputChange}
                sx={{ width: { xs: '100%', sm: '50%' } }}
              />
            </Stack>
          </Box>
          <Typography variant="h5" mb="6" fontWeight="bold">
            Features
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gap: { xs: 1, md: 1 },
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(5, 1fr)',
              },
              justifyContent: 'space-evenly',
            }}
          >
            {check.map((option) => (
              <span key={option.value}>
                <Checkbox                 
                  name={option.label.toLowerCase()}
                  checked={formValues3p1[option.label.toLowerCase()]}
                  onChange={handleInputChange3p1}
                />
                {option.label}
              </span>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
