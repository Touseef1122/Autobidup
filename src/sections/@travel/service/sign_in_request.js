import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
// icons
import viewIcon from '@iconify/icons-carbon/view';
import viewOff from '@iconify/icons-carbon/view-off';
import { Icon } from '@iconify/react';
// next
import NextLink from 'next/link';
// @mui
import { LoadingButton } from '@mui/lab';
import { Stack, Link, TextField, IconButton, InputAdornment } from '@mui/material';
// routes
// import Routes from '../../routes';
// components
import { Iconify } from '../../../components';
import {

    Typography,
    ToggleButton,
    FormHelperText,
    Slider as MUISlider,
    Box,
    FormGroup,
    FormControlLabel,
    Checkbox,
  } from '@mui/material';

// ----------------------------------------------------------------------

const FormSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('That is not an email'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password should be of minimum 6 characters length'),
});

export default function sign_in_request() {
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

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <div >
        <Box  sx={{ ml: {md:'30%'}, mr: {md:'30%'}, mt: {md:'5%'}, mb: {md:'5%'} ,
          overflowX: {
            xs: 'hidden',
            sm: 'hidden',
          },}}>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Stack>
        <Typography display="flex" variant="h3" textAlign="center">Sign in</Typography>
        <Typography
                display="flex"
                sx={{ fontSize: '.875rem', lineHeight: '1.333', fontWeight: '300', color: 'gray' }}
              >
                Enter your email to log in or create an account
              </Typography>
    </Stack>
      <Stack spacing={2.5} alignItems="flex-end">
            
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
            />
          )}
        />

        {/* <Controller
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
        /> */}

        {/* <NextLink href={Routes.resetPassword} passHref> */}
          {/* <Link variant="body3" underline="always" color="text.secondary">
            Forgot password?
          </Link> */}
        {/* </NextLink> */}

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"         
          loading={isSubmitting}
          sx={{
            marginTop: '30px !important',
          }}
        >
          Signin
        </LoadingButton>
        
      </Stack>
      <Stack >
        <Typography
                
                sx={{ mt: '10px',mb:'10px',textAlign:'center',justifyContent:'center',fontSize: '.875rem', lineHeight: '1.333', fontWeight: '300', color: 'gray' }}
              >
                or
        </Typography>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"         
          loading={isSubmitting}
          sx={{
            // marginTop: '30px !important',
          }}
        >
         <Box mr='8px' mt='2px' ><Icon icon="ic:baseline-facebook"/></Box>Continue With Facebook
        </LoadingButton>
        </Stack>
    </form>
    </Box>
    </div>
  );
}
