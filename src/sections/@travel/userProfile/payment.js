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
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);
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
    <Container sx={{ width: '100%',m:2, overflowX: 'hidden' }} >
          <Typography fontSize="1.5rem" id="third-section">Payment</Typography>
          <Divider dark />

          <Stack >
            {hide && (
              <LoadingButton
                onClick={() => setShow(!show) && setHide(!hide)}
                size="large"
                type="submit"
                variant="contained"
                sx={
                  {
                    mt:6,mb:6,width:{sm:"50%"}
                  }
                }
              >
                Add a new Card
              </LoadingButton>
            )}

            {show && (
              <>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="CardNumber"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Card Number"
                        placeholder="4255 1111 1111 1111"
                        error={Boolean(error)}
                        helperText={error?.message}
                      />
                    )}
                  />

                  <Stack marginTop="15px">
                    {' '}
                    <Controller
                      name="Request"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="Cardholder Name"
                          placeholder="Jhon"
                          error={Boolean(error)}
                          helperText={error?.message}
                        />
                      )}
                    />
                  </Stack>

                  <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={{ xs: 2.5, md: 2 }}
                    sx={{ width: 1, mt: '15px' }}
                  >
                    <Controller
                      name="CVV/CVC"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="CVV/CVC"
                          placeholder="***"
                          error={Boolean(error)}
                          helperText={error?.message}
                        />
                      )}
                    />

                    <Controller
                      name="Date"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="Exp Date"
                          placeholder="dd/yy/mm"
                          error={Boolean(error)}
                          helperText={error?.message}
                        />
                      )}
                    />
                  </Stack>
                  <Stack>
                    <LoadingButton
                      sx={{ mt:3, width:'50%' }}
                      size="large"
                      type="submit"
                      variant="contained"
                      loading={isSubmitting}
                    >
                      Save new credit card
                    </LoadingButton>
                  </Stack>
                </form>
              </>
            )}
          </Stack>
   
    </Container>
  );
}

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
