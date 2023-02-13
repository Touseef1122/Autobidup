import * as React from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useRouter } from 'next/router';

import {
  Typography,
  Divider,
  Stack,
  MenuItem,
  Container,
  TextField,
} from '@mui/material';

import { LoadingButton } from '@mui/lab';

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
export default function Edit() {
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

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
  };
  const router = useRouter();

  return (
    <Container sx={{ width: '100%', overflowX: 'hidden' }}>
      <Typography variant="h4">Contact Details</Typography>
      <Divider dark />

      <Stack >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="Request"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                id="outlined-select-currency"
                sx={{ mb: 2, mt: 2 }}
                select
                fullWidth
                label="Title"
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
            name="FirstName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="First Name"
                error={Boolean(error)}
                helperText={error?.message}
                sx={{ mb: 2 }}
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
                sx={{ mb: 2 }}
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
                label="Email"
                error={Boolean(error)}
                helperText={error?.message}
                sx={{ mb: 2 }}
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
                label="Phone Number"
                error={Boolean(error)}
                helperText={error?.message}
                sx={{ mb: 2 }}
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
                label="Company"
                error={Boolean(error)}
                helperText={error?.message}
                sx={{ mb: 2 }}
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
                label="Street"
                error={Boolean(error)}
                helperText={error?.message}
                sx={{ mb: 2 }}
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
                label="Post Code"
                error={Boolean(error)}
                helperText={error?.message}
                sx={{ mb: 2 }}
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
                label="City"
                error={Boolean(error)}
                helperText={error?.message}
                sx={{ mb: 2 }}
              />
            )}
          />
          <Controller
            name="Request"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                id="outlined-select-currency"
                fullWidth
                sx={{ mb: 2 }}
                select
                label="Country"
              >
                {currencie.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />

          <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
            <LoadingButton
              size="large"
              fullWidth
              type="submit"
              variant="contained"
              loading={isSubmitting}
              onClick={() => router.push('/travel/profile')}
            >
              Cancel
            </LoadingButton>
            <LoadingButton
              size="large"
              fullWidth
              type="submit"
              variant="contained"
              loading={isSubmitting}
              onClick={() => router.push('')}
            >
              Save
            </LoadingButton>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
