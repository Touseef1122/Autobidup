import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

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
const FormSchema = Yup.object().shape({
  website: Yup.string().required('Website is required'),
});

export default function Carinformationstep1({ onNext }) {
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
      reg_city: '',
      city: '',
      color: '',
      mileage: '',
      year: '',
      maker: '',
      model: '',
      variant: '',
      bodytype: '',
    },
  });

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setStepData((prevData) => ({
  //     ...prevData,
  //     step1Data: {
  //       ...prevData.step1Data,
  //       [name]: value,
  //     },
  //   }));
  // };

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    // alert(JSON.stringify(data, null, 2));
    reset();
  };

  const [reg_city, setRegCity] = React.useState('');
  const [city, setCity] = React.useState('');
  const [color, setColor] = React.useState('');
  const [mileage, setMileage] = React.useState('');
  const [year, setYear] = React.useState('');
  const [maker, setMaker] = React.useState('');
  const [model, setModel] = React.useState('');
  const [variant, setVariant] = React.useState('');
  const [bodytype, setBodyType] = React.useState('');

  const handleNext = () => {
    const stepData = {
      reg_city: reg_city,
      city: city,
      color: color,
      mileage: mileage,
      year: year,
      maker: maker,
      model: model,
      variant: variant,
      bodytype: bodytype,
    };
    onNext(stepData);
    console.log('step 1', stepData);
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
          <Typography variant="h3" textAlign="left" pb="5px">
            Enter Car Information
          </Typography>
          <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
            <Controller
              name="reg_city"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  type="text"
                  {...field}
                  fullWidth
                  placeholder="Enter Registration City"
                  error={Boolean(error)}
                  label="Registration City"
                  helperText={error?.message}
                  value={reg_city}
                  onChange={(e) => setRegCity(e.target.value)}
                  // value={stepData.step1Data?.reg_city || ''}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
              )}
            />

            <Controller
              name="city"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  type="text"
                  {...field}
                  fullWidth
                  placeholder="Enter City"
                  error={Boolean(error)}
                  label="City"
                  helperText={error?.message}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  // value={stepData.step1Data?.city || ''}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
              )}
            />
          </Stack>
          <Stack spacing={2} mt="12px" direction={{ xs: 'column', sm: 'row' }}>
            <Controller
              name="color"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  type="text"
                  {...field}
                  fullWidth
                  placeholder="Enter Color"
                  error={Boolean(error)}
                  label="Color"
                  helperText={error?.message}
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  // value={stepData.step1Data?.color || ''}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
              )}
            />

            <Controller
              name="mileage"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  type="text"
                  {...field}
                  fullWidth
                  placeholder="Enter Mileage"
                  error={Boolean(error)}
                  label="Mileage"
                  helperText={error?.message}
                  value={mileage}
                  onChange={(e) => setMileage(e.target.value)}
                  // value={stepData.step1Data?.mileage || ''}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
              )}
            />
          </Stack>
          <Typography variant="h5" mb="6" fontWeight="bold">
            Car Info *
          </Typography>
          <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
            <Controller
              name="year"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  type="text"
                  {...field}
                  fullWidth
                  placeholder="Enter Year"
                  error={Boolean(error)}
                  helperText={error?.message}
                  label="Year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  // value={stepData.step1Data?.year || ''}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
              )}
            />
            <Controller
              name="maker"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  type="text"
                  {...field}
                  fullWidth
                  placeholder="Enter Maker"
                  error={Boolean(error)}
                  helperText={error?.message}
                  label="Maker"
                  value={maker}
                  onChange={(e) => setMaker(e.target.value)}
                  // value={stepData.step1Data?.maker || ''}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
              )}
            />
          </Stack>
          <Stack spacing={2} mt="12px" direction={{ xs: 'column', sm: 'row' }}>
            <Controller
              name="model"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  type="text"
                  {...field}
                  fullWidth
                  placeholder="Enter Model"
                  error={Boolean(error)}
                  label="Model"
                  helperText={error?.message}
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  // value={stepData.step1Data?.model || ''}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
              )}
            />

            <Controller
              name="variant"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  type="text"
                  {...field}
                  fullWidth
                  placeholder="Enter Variant"
                  error={Boolean(error)}
                  helperText={error?.message}
                  label="Variant"
                  value={variant}
                  onChange={(e) => setVariant(e.target.value)}
                  // value={stepData.step1Data?.variant || ''}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
              )}
            />
          </Stack>
          <Stack>
            <Controller
              name="bodytype"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  type="text"
                  {...field}
                  fullWidth
                  placeholder="Enter Body Type"
                  error={Boolean(error)}
                  helperText={error?.message}
                  label="Body Type"
                  value={bodytype}
                  onChange={(e) => setBodyType(e.target.value)}
                  // value={stepData.step1Data?.bodytype || ''}
                  sx={{ width: { xs: '100%', sm: '50%' }, mt: '12px' }}
                />
              )}
            />
          </Stack>
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
