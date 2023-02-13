import PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { Iconify } from '../../../components';
import viewIcon from '@iconify/icons-carbon/view';
import viewOff from '@iconify/icons-carbon/view-off';

// icons
// import Image from 'next/image';
// @mui

import {
  TextField,
  Link,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Container,
  Stack,
} from '@mui/material';
// utils
// @utils
import { LoadingButton } from '@mui/lab';
// components
// ----------------------------------------------------------------------

LoginChauffeur.propTypes = {
  services: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
  tours: PropTypes.array.isRequired,
};
const FormSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('That is not an email'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password should be of minimum 6 characters length'),
});
export default function LoginChauffeur() {
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
      email: '',
      password: '',
    },
  });
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Container
        sx={{ width: '100%', padding: { xs: '10px', sm: '15%' }, paddingTop: { xs: '20vh' } }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack sx={{ ml: { md: '25%' }, mr: { md: '25%' } }}>
            <Typography variant="h3" textAlign="left" pb="5px">
              Login
            </Typography>
            <Typography variant="body1" color="#181a1f;" sx={{ mb: 2 }}>
              Enter your details to create an account.
            </Typography>
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  sx={{ mb: 1 }}
                  {...field}
                  fullWidth
                  label="Email address"
                  error={Boolean(error)}
                  helperText={error?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Password"
                  error={Boolean(error)}
                  helperText={error?.message}
                  type={showPassword ? 'text' : 'password'}
                  sx={{ mb: 1 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword} edge="end">
                          <Iconify icon={showPassword ? viewIcon : viewOff} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            <LoadingButton
              size="large"
              type="submit"
              variant="contained"
              onClick={() => router.push('')}
            >
              Log in
            </LoadingButton>
            <Stack direction="row" sx={{ justifyContent: 'space-between', py: 1 }}>
              <Typography fontSize="14px">
                <Link color="black">Forgot your password?</Link>
              </Typography>
              <Typography fontSize="14px" textAlign="right">
                <Link color="black">Not yet Registered?</Link>
              </Typography>
            </Stack>
          </Stack>
        </form>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
