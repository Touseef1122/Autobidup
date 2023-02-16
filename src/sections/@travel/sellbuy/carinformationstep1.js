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
Carinformationstep1.propTypes = {
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

export default function Carinformationstep1({ tours, icons, services }) {
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
            mr: { md: '35%' },
          }}
        >
          <Typography variant="h3" textAlign="left" pb="5px">
            Enter Car Information
          </Typography>
          <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
            <Controller
              name="Request"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Registeration City *"
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

            <Controller
              name="Request"
              sx={{ width: '100%' }}
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  id="outlined-select-currency"
                  select
                  label="City *"
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
          <Stack spacing={2} mt="12px" direction={{ xs: 'column', sm: 'row' }}>
            <Controller
              name="Request"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Exterior Color *"
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

            <Controller
              name="Request"
              sx={{ width: '100%' }}
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Mileage(KM) *"
                  sx={{ width: '100%'  }}
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
          <Typography variant="h5" mb="6" fontWeight="bold" >Car Info *</Typography>

          <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
            <Controller
              name="Request"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Year"
                  sx={{width:{xs:"100%",md:"20%"} }}
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
                  label="Maker"
                  sx={{width:{xs:"100%",md:"20%"}}}
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
                  label="Model"
                  sx={{width:{xs:"100%",md:"20%"} }}
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
                  label="Variant"
                  sx={{width:{xs:"100%",md:"20%"}}}
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
        {/* </form> */}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
