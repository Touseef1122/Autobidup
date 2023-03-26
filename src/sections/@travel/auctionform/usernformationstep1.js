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
  Typography,
  Stack,
  Box,
  TextField,
  Container,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
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
Userinformationstep1.propTypes = {
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

export default function Userinformationstep1({ tours, icons, services }) {
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
            Enter Your Information
          </Typography>
          <Stack spacing={2} mt={4}  direction={{ xs: 'column' }}>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <Typography fontSize="14px" fontWeight="bold">
                    Full Name *
                  </Typography>

                  <TextField
                    {...field}
                    fullWidth
                    placeholder="Enter Your Name"
                    error={Boolean(error)}
                    helperText={error?.message}
                    sx={{ width: { xs: '100%', sm: '50%' } }}
                  />
                </div>
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <Typography fontSize="14px" fontWeight="bold">
                    Phone Number *
                  </Typography>
                  <TextField
                    {...field}
                    fullWidth
                    placeholder="Enter Phone Number"
                    error={Boolean(error)}
                    helperText={error?.message}
                    sx={{ width: { xs: '100%', sm: '50%' } }}
                  />
                  <Typography variant="body3" fontWeight="bold">
                    Enter genuine number of 11 digits
                  </Typography>
                </div>
              )}
            />
          </Stack>
          <FormControl sx={{mt:4}}>
            <Typography fontSize="16px" fontWeight="bold">
              Consignor 
            </Typography>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="dealer"
              name="radio-buttons-group"
            >
              <FormControlLabel value="dealer" control={<Radio />} label="Dealer " />
              <FormControlLabel value="private party" control={<Radio />} label="Private Party" />
            </RadioGroup>
          </FormControl>
        </Box>
        {/* </form> */}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
