import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';

import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';

// icons
// import Image from 'next/image';
// @mui

import {
  Button,
  Link,
  FormControlLabel,
  Checkbox,
  Typography,
  Stack,
  Box,
  TextField,
  Container,
  MenuItem,
} from '@mui/material';
// utils
// @utils
import mechanic from '../../../assets/images/mechanicBg.jpg';
// // components
// import { Image, TextMaxLine } from '../../../components';
// import { TravelLandingfull } from '../landing';
// import { LoadingButton } from '@mui/lab';
const styling={
  backgroundImage: `url(${mechanic.src})`,
  width: '100%',
  height: '100%',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}
// ----------------------------------------------------------------------
const currencie = [
  {
    value: '1',
    label: 'Please Select',
  },
  {
    value: '2',
    label: 'Mr',
  },
  {
    value: '3',
    label: 'Ms',
  },
  {
    value: '4',
    label: 'Mx',
  },
];
const check = [
  {
    value: '1',
    label: 'Air bags',
  },
  {
    value: '2',
    label: 'Cup holder',
  },
  {
    value: '3',
    label: 'Air conditioner',
  },
  {
    value: '4',
    label: 'Folding rear seat',
  },
  {
    value: '5',
    label: 'Braking system',
  },
  {
    value: '6',
    label: 'Alloy wheels',
  },
  {
    value: '7',
    label: 'Immobilizer',
  },
  {
    value: '8',
    label: 'Coolbox',
  },
  {
    value: '9',
    label: 'Power door locks',
  },
];


Mechanicrequest.propTypes = {
  services: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
  tours: PropTypes.array.isRequired,
};
const FormSchema = Yup.object().shape({
  name: Yup.array().required('Name is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .min(11, 'Phone number is at least 11 numbers minumum'),
  address: Yup.string().required('Address is required'),
  location: Yup.string().required('Location is required'),
});

export default function Mechanicrequest({ tours, icons, services }) {
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
      services: [],
      name: '',
      phone: '',
      address: '',
    },
  });
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
  };
  const [show, setShow] = useState(false);
  return (
      <Box sx={{ width: '100%', overflowX: 'hidden' }} style={styling}>
        <Container
          sx={{
            width: '100%',
            padding: '20px',
            textAlign: 'left',
            
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                // ml: { md: '1%' },
                // mr: { md: '45%' },
                p:{xs:"5%",sm:'7%'},
                pb: {xs: '20%',sm:"7%"},
                borderRadius: '20px',
                background: 'rgba(254,254,254,0.93)', 
              }}
            >
              <Typography variant="h3" textAlign="center" pb="5px">
                Request A Mechanic Form
              </Typography>
              <Typography variant="h6" textAlign="left" mb={6}>
                Fill out the form to request a mechanic
              </Typography>
              <Stack spacing={2} mb={2} direction={{ xs: 'column', sm: 'row' }}>
                <Controller
                  name="name"                 
                  control={control}   
                  
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      fullWidth
                      variant="filled"
                      label="Name *"
                      error={Boolean(error)}
                      helperText={error?.message}
                      sx={{ width: { xs: '100%' }}}
                    />
                    
                  )}
                />
                <Controller
                  name="phone"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Phone *"
                      error={Boolean(error)}
                      helperText={error?.message}
                      sx={{ width: { xs: '100%' }, mb: 2 }}
                    />
                  )}
                />
              </Stack>
              <Controller
                name="address "
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Address *"
                    error={Boolean(error)}
                    helperText={error?.message}
                    sx={{ width: { xs: '100%' }, mb: 2 }}
                  />
                )}
              />
              <Stack spacing={2} mt={1} direction={{ xs: 'column', sm: 'row' }}>
                <Controller
                  name="location"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Location *"
                      sx={{ width: '100%' }}
                    >
                      {currencie.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />

              
              </Stack>
              
              <Typography variant="h6" textAlign="left" mt={5}>
                Description
              </Typography>
              <TextField
                id="filled-multiline-static"
                sx={{ width: '100%', mt: 2 }}
                multiline
                rows={4}
                placeholder="Describe your problem..."
                variant="filled"
              />
              <LoadingButton
                sx={{
                  mt: 1,
                  // mb: 4,
                  float: 'right',
                  width: '20%',
                  // border: '1px solid #FFBE00 ',
                  backgroundColor: 'black',
                  color: 'white',
                  '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                }}
              >
                Submit
              </LoadingButton>
            </Box>
          </form>
        </Container>
      </Box>
  );
}

// ----------------------------------------------------------------------
