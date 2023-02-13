import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Image } from '../../../components';
import logo from '../../../assets/images/logo-ssl.svg';

import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// next
import NextLink from 'next/link';
// @mui
import { LoadingButton } from '@mui/lab';
import { Stack, Link, TextField, IconButton, InputAdornment } from '@mui/material';
// routes
// import Routes from '../../routes';
// components
import { Icon } from '@iconify/react';
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
const Age = [
  { value: '1', label: '25+' },
  { value: '2', label: '24' },
  { value: '3', label: '23' },
  { value: '4', label: '22' },
];
const Country = [
  { value: '1', label: 'U.A.E' },
  { value: '2', label: 'Japan' },
  { value: '3', label: 'Pakistan' },
  { value: '4', label: 'U.S.A' },
];
const Member = [
  { value: '1', label: 'AARP' },
  { value: '2', label: 'None' },
];

const FormSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('That is not an email'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password should be of minimum 6 characters length'),
});

export default function ReserveCar() {
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
  const [value, setValue] = React.useState(null);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <div>
      <Box
        sx={{ ml: {md:'30%'}, mr: {md:'30%'}, mt: {md:'5%'}, mb: {md:'5%'} ,
          overflowX: {
            xs: 'hidden',
            sm: 'hidden',
          },}}
      >
        <form onSubmit={handleSubmit(onSubmit)} >
          <Stack>
            <Typography variant="h3">Reserve A Car</Typography>
            <Controller
              name="Pickup"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Pick-up Location"
                  placeholder="Enter your pickup Location"
                  error={Boolean(error)}
                  helperText={error?.message}
                />
              )}
            />

            <Stack marginTop="15px" marginBottom="15px" direction="row">
              <Stack width="48%" mr="20px">
                <DatePicker
                  label="Basic example"
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
              <Stack width="48%">
                <TimePicker label="Time" renderInput={(params) => <TextField {...params} />} />
              </Stack>
            </Stack>

            <Controller
              name="dropoff"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Drop-off Location"
                  placeholder="Enter your Drop-off Location"
                  error={Boolean(error)}
                  helperText={error?.message}
                />
              )}
            />

            <Stack marginTop="15px" direction="row">
              <Stack width="48%" mr="20px">
                <DatePicker
                  label="Basic example"
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
              <Stack width="48%">
                <TimePicker label="Time" renderInput={(params) => <TextField {...params} />} />
              </Stack>
            </Stack>
            <Stack mt="15px" direction="row">
              <Stack width="48%" mr="20px">
                <Controller
                  name="Age"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Age"
                      // width='50%'
                    >
                      {Age.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Stack>
              <Stack width="48%">
                <Controller
                  name="Age"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="I Live In:"
                      // width='50%'
                    >
                      {Country.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Stack>
            </Stack>
            <Stack>
              <Accordion>
                <AccordionSummary
                  //   dropdown={}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    Add Customer ID* <Icon icon="gridicons:dropdown" />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Enter your Fastbreak, rapidRez or online ID</Typography>

                  <Stack mt="15px" direction="row">
                    <Stack width="48%" mr="20px">
                      <Controller
                        name="CustomerID"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Customer ID"
                            error={Boolean(error)}
                            helperText={error?.message}
                          />
                        )}
                      />
                    </Stack>
                    <Stack width="48%">
                      <Controller
                        name="LastName"
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
                    </Stack>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  //   dropdown={}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    Offer Codes* <Icon icon="gridicons:dropdown" />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Enter an Offer Code</Typography>

                  <Stack mt="15px" direction="row">
                    <Stack width="48%" mr="20px">
                      <Controller
                        name="BCD"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="BCD Code"
                            error={Boolean(error)}
                            helperText={error?.message}
                          />
                        )}
                      />
                    </Stack>
                    <Stack width="48%">
                      <Controller
                        name="Coupon"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Coupon Code"
                            error={Boolean(error)}
                            helperText={error?.message}
                          />
                        )}
                      />
                    </Stack>
                  </Stack>
                  <Stack width="100%" mt="15px">
                    <Controller
                      name="Member"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          id="outlined-select-currency"
                          select
                          label="Member Rates"
                          // width='50%'
                        >
                          {Member.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      )}
                    />
                  </Stack>
                </AccordionDetails>
              </Accordion>
            </Stack>
            <Stack display="center">
              <LoadingButton
                sx={{ margin: '25px' }}
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Select My Car
              </LoadingButton>
            </Stack>
          </Stack>
        </form>
      </Box>
    </div>
  );
}
