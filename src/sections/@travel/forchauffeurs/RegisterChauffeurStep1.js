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
  Button,
  Link,
  Typography,
  List,
  Box,
  ListItem,
  TextField,
  Container,
  Stepper,
  Step,
  StepLabel,
  MenuItem,
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
RegisterChauffeurStep1.propTypes = {
  services: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
  tours: PropTypes.array.isRequired,
};
const FormSchema = Yup.object().shape({
  services: Yup.array().required().min(1, 'Services field must have at least 1 items'),
  email: Yup.string().required('Email is required').email('That is not an email'),
  compnany: Yup.string().required('Compnany is required'),
  website: Yup.string().required('Website is required'),
});

export default function RegisterChauffeurStep1({ tours, icons, services }) {
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
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      compnany: '',
      website: '',
      budget: [2000, 10000],
      message: '',
    },
  });
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
  };
  const [show, setShow] = useState(false);
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Container sx={{ width: '100%', padding: '20px', textAlign: 'left' }}>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <Box
            sx={{
              ml: { md: '35%' },
              mr: { md: '35%' },
            }}
          >
            <Typography variant="h3" textAlign="left" pb="5px">
              Register
            </Typography>
            <Typography fontSize="13px" color="#181a1f;">
              Enter your details to create an account.
            </Typography>

            <Controller
              name="Request"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select Country"
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

            <Controller
              name="Request"
              sx={{ width: '100%' }}
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select City"
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
            <Typography textAlign="right">
              <Link color="black" fontSize="13px" onClick={() => router.push('/travel/loginChauffeur')}>
                Already have an account?
              </Link>
            </Typography>
          </Box>
        {/* </form> */}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
