import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
// icons
// import Image from 'next/image';
// @mui

import {
  Stack,
  MenuItem,
  Typography,
  FormControlLabel,
  Box,
  FormControl,
  Container,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
// utils
// @utils
// import agency from '../../../assets/images/agencyBg.jpg';
// // components
// import { Image, TextMaxLine } from '../../../components';
// import { TravelLandingfull } from '../landing';
// import { LoadingButton } from '@mui/lab';
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
Enterpricestep2.propTypes = {
  services: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
  tours: PropTypes.array.isRequired,
};
const FormSchema = Yup.object().shape({
  price: Yup.array()
    .required()
    .min(100000, 'minimum price is 8 lac')
    .max(1000000000, 'maximum price is 100 crore'),
});

export default function Enterpricestep2({ tours, icons, services }) {
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
      price: '',
    },
  });
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Container sx={{ width: '100%', padding: '20px', textAlign: 'left' }}>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <Box
          sx={{
            ml: { md: '5%' },
            mr: { md: '35%' },
          }}
        >
          <Typography variant="h3" textAlign="left" pb="15px">
            Car Details
          </Typography>
          <Stack spacing={2} mt={2} direction={{ xs: 'column' }}>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <TextField
                    {...field}
                    fullWidth
                    label="Chassis Number *"
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                </div>
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <TextField
                    {...field}
                    fullWidth
                    label="Engine Number *"
                    error={Boolean(error)}
                    helperText={error?.message}
                    sx={{ width: '100%' }}
                  />
                </div>
              )}
            />
          </Stack>
          <Stack spacing={2} mt={3} direction={{ xs: 'column', sm: 'row' }}>
            <Controller
              name="Request"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <TextField
                    {...field}
                    fullWidth
                    label="Year*"
                    error={Boolean(error)}
                    helperText={error?.message}
                    sx={{ width: '100%' }}
                  />
                </div>
              )}
            />

            <Controller
              name="Request"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <TextField
                    {...field}
                    fullWidth
                    label="Milage"
                    error={Boolean(error)}
                    helperText={error?.message}
                    sx={{ width: '100%' }}
                  />
                </div>
              )}
            />

            <Controller
              name="Request"
              sx={{ width: '100%' }}
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Maker"
                  sx={{ width: { xs: '100%' } }}
                  size="small"
                ></TextField>
              )}
            />
          </Stack>
          <Stack spacing={2} mt="12px" direction={{ xs: 'column', sm: 'row' }}>
            <Controller
              name="Request"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Model"
                  sx={{ width: { xs: '100%' } }}
                  size="small"
                ></TextField>
              )}
            />

            <Controller
              name="Request"
              sx={{ width: '100%' }}
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Variant"
                  sx={{ width: { xs: '100%' } }}
                  size="small"
                ></TextField>
              )}
            />
          </Stack>

          <FormControl sx={{ mt: 4 }}>
            <Typography fontSize="16px" fontWeight="bold">
              Has the car been modified?
            </Typography>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="stock"
              name="radio-buttons-group"
            >
              <FormControlLabel value="stock" control={<Radio />} label="Completely stock " />
              <FormControlLabel value="modified" control={<Radio />} label="Modified" />
            </RadioGroup>
            <Typography fontSize="16px" fontWeight="bold">
              Does your car fall under vintage or modified?
            </Typography>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="yes"
              name="radio-buttons-group"
            >
              <FormControlLabel value="modified" control={<Radio />} label="Modified " />
              <FormControlLabel value="vintage" control={<Radio />} label="Vintage" />
            </RadioGroup>

            <Typography fontSize="16px" fontWeight="bold">
              Is this car for sale elsewhere?
            </Typography>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="yes"
              name="radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes " />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Box>
        {/* </form> */}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
