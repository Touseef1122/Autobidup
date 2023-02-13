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
import MenuItem from '@mui/material/MenuItem';

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
const currencie = [
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
  email: Yup.string().required('Email is required').email('That is not an email'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password should be of minimum 6 characters length'),
});

export default function createAccount() {
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
    <div>
      <Box  sx={{ ml: {md:'30%'}, mr: {md:'30%'}, mt: {md:'5%'}, mb: {md:'5%'} ,
          overflowX: {
            xs: 'hidden',
            sm: 'hidden',
          },}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <Typography display="flex" variant="h3" textAlign="center">
              Create your account
            </Typography>
            <Typography
              display="flex"
              sx={{ fontSize: '.875rem', lineHeight: '1.333', fontWeight: '300', color: 'gray' }}
            >
              Enter your details to get started.
            </Typography>
          </Stack>
          <Stack spacing={2.5} alignItems="flex-end">
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 2.5, md: 2 }}
              sx={{ width: 1 }}
            >
              <Stack width="100%">
                <Controller
                  name="Request"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField id="outlined-select-currency" select label="Title">
                      {currencie.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Stack>
            </Stack>
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
                />
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
          </Stack>
          <Stack>
            <FormGroup
              mt="5px"
              display="flex"
              sx={{ fontSize: '.875rem', lineHeight: '1.333', fontWeight: '300', color: 'gray' }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="I have read and agree to the Privacy Policy and the Cookie Policy."
              />
            </FormGroup>
            <Typography
              mt="5px"
              mb="5px"
              justifyContent="center"
              textAlign="center"
              sx={{ fontSize: '.875rem', lineHeight: '1.333', fontWeight: '300', color: 'gray' }}
            >
              Our Terms & Conditions apply.
            </Typography>
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
              Continue
            </LoadingButton>
          </Stack>
        </form>
      </Box>
    </div>
  );
}
