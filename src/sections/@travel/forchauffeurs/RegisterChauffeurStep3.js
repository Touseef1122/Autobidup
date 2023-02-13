import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import ExpandMoreIcon from '@iconify/icons-carbon/expand-categories';
// icons
// import Image from 'next/image';
// @mui

import {
  Typography,
  Box,
  Container,
  Stack,
  TextField,
  Link,
  MenuItem,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from '@mui/material';
// utils
// @utils
import agency from '../../../assets/images/agencyBg.jpg';
// components
import { Image, TextMaxLine } from '../../../components';
import { TravelLandingfull } from '../landing';
import { LoadingButton } from '@mui/lab';
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

const FormSchema = Yup.object().shape({
  FirstName: Yup.string().required('First name is required'),
  email: Yup.string().required('Email is required').email('That is not an email'),
});

export default function RegisterChauffeurStep2({ tours, icons, services }) {
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
      email: '',
      FirstName:'',
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            sx={{
              ml: { md: '30%' },
              mr: { md: '30%' },
            }}
          >
            <Typography variant="h3" textAlign="left" pb="5px">
              Register
            </Typography>
            <Typography variant="body1" color="#181a1f;">
              Enter your details to create an account.
            </Typography>
            <Controller
              name="FirstName"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="First Name"
                  error={Boolean(error)}
                  helperText={error?.message}
                  sx={{ mb: 1 }}
                />
              )}
            />
            <Controller
              name="lastname"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Last Name"
                  error={Boolean(error)}
                  helperText={error?.message}
                  sx={{ mb: 1 }}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Email address"
                  error={Boolean(error)}
                  helperText={error?.message}
                  sx={{ mb: 1 }}
                />
              )}
            />
            <Stack direction={{xs:"column",sm:"row"}} spacing={1} mb={1}>
              <Controller
                name="Request"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Country code "
                    sx={{ width: {xs:"100%",sm:'60%'}}}
                  >
                    {currencie.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
             <Controller
                name="Phonenumber"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Phone Number"
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                )}
              />
            </Stack>
            <Controller
              name="Request"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Where did you hear about us?"
                  sx={{ width: '100%', mb: 2 }}
                >
                  {currencie.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
            <Typography textAlign="right" >
              <Link color="black" onClick={() => router.push('/travel/loginChauffeur')}>Already have an account?</Link>
            </Typography>
          </Stack>
        </form>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
