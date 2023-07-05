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
// Featuresstep3.propTypes = {
//   services: PropTypes.array.isRequired,
//   icons: PropTypes.array.isRequired,
//   tours: PropTypes.array.isRequired,
// };
const FormSchema = Yup.object().shape({
  services: Yup.array().required().min(1, 'Services field must have at least 1 items'),
});

export default function Featuresstep3({ onNext }) {
  const router = useRouter();
  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      enginetype: '',
      engineCapacity: '',
      transmission: '',
      assembly: '',
    },
  });
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
  };
  const [enginetype, setEngineType] = React.useState('');
  const [enginecapacity, setEngineCapacity] = React.useState('');
  const [transmission, setTransmission] = React.useState('');
  const [assembly, setAssembly] = React.useState('');
  const stepData = {}
  const handleNext = () => {
    stepData = {
      "engine_type": enginetype,
      "engine_capacity": enginecapacity,
      "transmission": transmission,
      "assembly": assembly,
    };
    onNext(stepData);
    console.log('step 3', stepData);
  };
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Container sx={{ width: '100%', padding: '20px', textAlign: 'left' }}>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
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
              <Controller
                name="engine_type"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder="Enter Engine Type"
                    label="Engine Type"
                    error={Boolean(error)}
                    helperText={error?.message}
                    value={enginetype}
                    onChange={(e) => setEngineType(e.target.value)}
                    // value={stepData.step1Data?.engine_type || ''}
                    sx={{ width: { xs: '100%', sm: '50%' } }}
                  />
                )}
              />

              <Controller
                name="engine_capacity"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder="Enter Engine Capacity"
                    error={Boolean(error)}
                    label="Engine Capacity"
                    helperText={error?.message}
                    value={enginecapacity}
                    onChange={(e) => setEngineCapacity(e.target.value)}
                    // value={stepData.step1Data?.engine_capacity || ''}
                    sx={{ width: { xs: '100%', sm: '50%' } }}
                  />
                )}
              />
            </Stack>
            <Stack spacing={2} mt="12px" direction={{ xs: 'column', sm: 'row' }}>
              <Controller
                name="transmission"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder="Enter Transmission"
                    error={Boolean(error)}
                    label="Transmission"
                    helperText={error?.message}
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value)}
                    // value={stepData.step1Data?.transmission || ''}
                    sx={{ width: { xs: '100%', sm: '50%' } }}
                  />
                )}
              />

              <Controller
                name="assembly"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder="Enter Assembly"
                    label="Assembly"
                    error={Boolean(error)}
                    helperText={error?.message}
                    value={assembly}
                    onChange={(e) => setAssembly(e.target.value)}
                    // value={stepData.step1Data?.assembly || ''}
                    sx={{ width: { xs: '100%', sm: '50%' } }}
                  />
                )}
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
              <FormControlLabel
                sx={{}}
                control={
                  <Checkbox
                    name={option.label}
                    checked={stepData[option.label] || false}
                    onChange={(e) =>
                      setStepData((prevData) => ({
                        ...prevData,
                        [option.label]: e.target.checked,
                      }))
                    }
                  />
                }
                label={option.label}
              />
            ))}
          </Box>
        </Box>

        {/* </form> */}
      </Container>
      <Box
        m={1}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Button mt="6" color="inherit" variant="contained" onClick={handleNext}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------
