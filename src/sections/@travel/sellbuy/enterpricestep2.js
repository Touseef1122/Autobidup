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
  Radio,
  RadioGroup,
  Typography,
  FormControlLabel,
  Box,
  FormControl,
  Container,
  FormLabel,
  TextField,
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
Enterpricestep2.propTypes = {
  services: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
  tours: PropTypes.array.isRequired,
};
const FormSchema = Yup.object().shape({
  price: Yup.array().required().min(100000, 'minimum price is 8 lac').max(1000000000,'maximum price is 100 crore'),
});

export default function Enterpricestep2({ tours, icons, services }) {
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
      price: ''
    },
  });
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
  };
  //   const [value, setValue] = React.useState('female');

  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //   };
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
          <Typography variant="h3" textAlign="left" pb="15px">
            Expected Selling Price
          </Typography>
          <Typography variant="h5" textAlign="left">
            Price
          </Typography>
          <Controller
            name="price"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                placeholder="Enter Price"
                error={Boolean(error)}
                helperText={error?.message}
                sx={{ width: {xs:"100%",sm:'50%'} }}
              />
            )}
          />
           <Typography fontSize="13px" color="#181a1f;" fontWeight="bold">
              Please enter realistic price to get more genuine responses.
            </Typography>
        </Box>
        {/* </form> */}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
