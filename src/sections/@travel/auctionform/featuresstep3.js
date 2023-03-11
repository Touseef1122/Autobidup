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
    label: 'Anti lock braking system',
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
Featuresstep3.propTypes = {
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

export default function Featuresstep3({ tours, icons, services }) {
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
                name="Request"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Engine Type *"
                    sx={{ width: '100%' }}
                    size="small"
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
                    label="Engine Capacity *"
                    sx={{ width: '100%' }}
                    size="small"
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
            <Stack spacing={2} mt="12px" direction={{ xs: 'column', sm: 'row' }}>
              <Controller
                name="Request"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Transmission *"
                    sx={{ width: '100%' }}
                    size="small"
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
                    label="Assembly *"
                    sx={{ width: '100%' }}
                    size="small"
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
                control={<Checkbox name={option.label} sx={{}} />}
                label={option.label}
              />
            ))}
          </Box>
        </Box>
        {/* </form> */}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
