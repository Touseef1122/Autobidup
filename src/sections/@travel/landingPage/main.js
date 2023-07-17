import PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { Icon } from '@iconify/react';

// import wifi from '@iconify/icons-carbon/wifi';
// import drop from '@iconify/icons-carbon/water-drop';
// import news from '@iconify/icons-carbon/ion:news';
// import wifi from '@iconify/icons-carbon/wifi';

import { yupResolver } from '@hookform/resolvers/yup';
// @mui
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import {
  TextField,
  Box,
  Stack,
  Container,
  Grid,
  MenuItem,
  Typography,
  Divider,
} from '@mui/material';
// import Stack from 'mui/material';
// utils
// components
import { Image, TextMaxLine, Iconify } from '../../../components';
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
const icon = [
  {
    icon: 'material-symbols:wifi',
    title: '4G WiFi Onboard',
  },
  {
    icon: 'material-symbols:water-drop',
    title: 'Bottled Water',
  },
  {
    icon: 'ion:newspaper',
    title: 'Display Newspaper',
  },
  {
    icon: 'material-symbols:airline-seat-recline-extra-rounded',
    title: 'Comfortable Flight',
  },
];
Main.propTypes = {
  comp: PropTypes.array.isRequired,
};

const FormSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('That is not an email'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password should be of minimum 6 characters length'),
});
export default function Main({ comp }) {
  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
  };
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Container>
        {comp.map((value) => (
          <Grid
            container
            row={{ xs: 1 }}
            columnSpacing={{ xs: 1, sm: 2 }}
            sx={{
              justifyContent: 'space-between',
              width: '100%',
              height: '100%',
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                width: { xs: '100%', md: '50%' },
                display: { xs: 'none', md: 'flex' },
                position: 'relative',
              }}
            >
              <Box key={value.title}>
                <Image src={value.image1.src} width="100%" height="60%" layout="responsive" />
                <Image
                  sx={{ mt: 6 }}
                  src={value.image2.src}
                  width="100%"
                  height="60%"
                  layout="responsive"
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6} sx={{ width: { xs: '100%', md: '50%' } }}>
              <Stack
                sx={{
                  height: '2em',
                  color: '#FFBE00',
                  fontSize: { xs: '40px', sm: '50px' },
                  justifyContent: 'space-between',
                  px: { xs:1,sm:5 },
                  textAlign: 'center',
                }}
                direction="row"
              >
                {icon.map((option) => (
                  <Box>
                    <Icon icon={option.icon} />
                    <Typography fontSize={{ xs: '11px !important', sm: '15px !important' }}>
                      {option.title}
                    </Typography>
                  </Box>
                ))}
              </Stack>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ px: { md: 5 }, pt: 6 }}>
                  <Divider />
                  <TextMaxLine fontSize="20px" textAlign="center"> {value.title} </TextMaxLine>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 2, mt: 2 }}>
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
                    <Stack width="100%">
                      <DatePicker
                        label="Travel Date"
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </Stack>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 2 }}>
                    <Controller
                      name="CompanyName"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="Company Name"
                          error={Boolean(error)}
                          helperText={error?.message}
                        />
                      )}
                    />
                    <Controller
                      name="email"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="Email Address"
                          error={Boolean(error)}
                          helperText={error?.message}
                        />
                      )}
                    />
                  </Stack>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 2 }}>
                    <Stack width="100%">
                      <TimePicker
                        label="Time"
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                    <Stack width="100%">
                      <Controller
                        name="Request"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                          <TextField id="outlined-select-currency" select label="Vehicle Choice">
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
                  <Stack sx={{ mb: 3 }}>
                    <Controller
                      name="AdditionalInfo"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="Additional Info"
                          error={Boolean(error)}
                          helperText={error?.message}
                        />
                      )}
                    />
                  </Stack>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 2 }}>
                    <Controller
                      name="PhoneNumber"
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
                      name="NumberOfPassengers"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="Number Of Passengers"
                          error={Boolean(error)}
                          helperText={error?.message}
                        />
                      )}
                    />
                  </Stack>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 2 }}>
                    <Controller
                      name="PickupAddress"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          {...field}
                          fullWidth
                          multiline
                          rows={4}
                          label="Pick up Address"
                          error={Boolean(error)}
                          helperText={error?.message}
                        />
                      )}
                    />
                    <Controller
                      name="DestinationAddress"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          {...field}
                          fullWidth
                          multiline
                          rows={4}
                          label="Destination Address"
                          error={Boolean(error)}
                          helperText={error?.message}
                        />
                      )}
                    />
                  </Stack>
                  <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    fontSize="21px"
                    variant="contained"
                    loading={isSubmitting}
                  >
                    Submit for Quotation
                  </LoadingButton>
                </Box>
              </form>
            </Grid>
          </Grid>
        ))}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
