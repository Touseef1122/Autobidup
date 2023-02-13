import PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useRouter } from 'next/router';
import { useState } from 'react';

import {
  Typography,
  Divider,
  Box,
  Stack,
  Link,
  Container,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
// import Stack from 'mui/material';
import viewIcon from '@iconify/icons-carbon/view';
import viewOff from '@iconify/icons-carbon/view-off';
// utils
// components
import { Iconify } from '../../../components';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------
const FormSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('That is not an email'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password should be of minimum 6 characters length'),
});
export default function Details({ comp }) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      email: 'You are sucessfully registerd it.',
    },
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
  };
  return (
    <Container sx={{ width: '100%', m:2 ,overflowX: 'hidden' }} >
      <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between' }}>
        <Typography fontSize="1.5rem" id="second-section">Change Password</Typography>
      </Stack>
      <Divider dark />
      
      <Typography mt={3} fontSize="1rem">Please set your new password below:</Typography>
      <Typography mt={3} fontSize="1rem" fontWeight="bold">Set new password:</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction={{xs:"column", sm:"row"}} spacing={3} mt={2}>
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword} edge="end">
                        <Iconify icon={showPassword ? viewIcon : viewOff} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            name="confirmpassword"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Confirm Password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword} edge="end">
                        <Iconify icon={showPassword ? viewIcon : viewOff} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            sx={
              {
                // marginTop: '30px !important',
              }
            }
          >
            Save
          </LoadingButton>
        </Stack>
      </form>
    </Container>
  );
}

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
