//react
import React, { useState } from 'react';
import NextLink from 'next/link';

//form
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// icons
import viewIcon from '@iconify/icons-carbon/view';
import viewOff from '@iconify/icons-carbon/view-off';
import { Authwithsocial, Authcarousel } from '../../../src/sections/auth';

// next
// import NextLink from 'next/link';
import { useRouter } from 'next/router';

// @mui
import { LoadingButton } from '@mui/lab';
import {
  Stack,
  Link,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Typography,
  Divider,
  Grid
} from '@mui/material';
// routes
import Routes from '../../../src/routes';
// components
import { Iconify } from '../../../src/components';

// ----------------------------------------------------------------------

const FormSchema = Yup.object().shape({
  username: Yup.string().required('Email is required').email('That is not an email'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password should be of minimum 6 characters length'),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  console.log('blaggggggggggggggggggggggg');
  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    console.log(' working');
    try {
      console.log('checking login');
      const response = await fetch('https://autobidup.pythonanywhere.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        xhrFields: {
          withCredentials: true,
        },
      });

      if (response.ok) {
        // API call successful
        const responseData = await response.json();
        // Handle the response data as needed
        localStorage.setItem('firstname', responseData.firstName);

        // Store JWT token in document cookie
        document.cookie = `jwt=${responseData.jwt}; path=/`;
        console.log(responseData);
        router.push('/');
      } else {
        // API call failed
        const errorData = await response.json();
        // Handle the error data as needed
      }
    } catch (error) {
      // Error occurred during the API call
      console.error(error);
      // Handle the error
    }
  };

  return (
    //  <form >
    <div>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} p={6}>
          <Stack
            sx={{
              pt: { xs: 2, md: 5 },
              textAlign: { xs: 'center' },
            }}
          >
            <Typography variant="h3" paragraph>
              Login
            </Typography>
          </Stack>
          <Stack spacing={2.5} alignItems="flex-end">
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  type="text"
                  {...field}
                  fullWidth
                  label="Email address"
                  // error={Boolean(error)}
                  // helperText={error?.message}
                />
              )}
            />
            {/* {errors.email && <p>{errors.email.message}</p>} */}

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
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
                  // error={Boolean(error)}
                  // helperText={error?.message}
                />
              )}
            />
            {/* {errors.password && <p>{errors.password.message}</p>} */}

            {/* <NextLink href={Routes.resetPassword} passHref>
          <Link variant="body3" underline="always" color="text.secondary">
            Forgot password?
          </Link>
           </NextLink> */}

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              sx={{ backgroundColor: 'black', '&:hover': { backgroundColor: '#FFBE00' } }}
              onClick={handleSubmit(onSubmit)}
            >
              Login
            </LoadingButton>
          </Stack>
          <Typography variant="body2" pt={2} sx={{ color: 'text.secondary' }}>
            Don’t have an account?
            <NextLink href="/auth/registercover" passHref>
              <Link variant="subtitle2" color="#CE9A00">
                SignUp
              </Link>
            </NextLink>
          </Typography>
          <Divider sx={{ py: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.disabled' }}>
              OR
            </Typography>
          </Divider>
          <Authwithsocial />

        </Grid>
        <Grid item xs={12} sm={6}>
          <Authcarousel title="Hi, Welcome Back" />
           {/* hello */}
        </Grid>
      </Grid>
    </div>
    // </form>
  );
}