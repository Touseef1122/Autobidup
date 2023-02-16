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
  FormControlLabel,
  Checkbox,
  Typography,
  Stack,
  Box,
  TextField,
  Container,
  MenuItem,
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
Finishstep5.propTypes = {
  services: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
  tours: PropTypes.array.isRequired,
};
const FormSchema = Yup.object().shape({
  phone: Yup.array()
    .required()
    .min(11, 'Phone number should of 11 digits')
    .max(11, 'Phone number should of 11 digits'),
  name: Yup.string().required('Name is required'),
});

export default function Finishstep5({ tours, icons, services }) {
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
      name: '',
      phoneNumber: '',
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
            mr: { md: '5%' },
          }}
        >
          <Typography variant="h3" textAlign="left" pb="5px">
            Vehicle Description
          </Typography>

          <Box>
            <Typography fontSize="14px" fontWeight="bold">
              Description
            </Typography>
            <TextField
              id="filled-multiline-static"
              sx={{ width: '100%' }}
              multiline
              rows={4}
              placeholder="Describe your car..."
              variant="filled"
            />
            <Typography variant="body3" textAlign="right" fontWeight="bold">
              Word limit is 1000
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 6,
              mr: { md: '25%' },
            }}
          >
            <Typography variant="h5" mb="6" fontWeight="bold">
              Contact Information
            </Typography>
            <Stack spacing={2} mt="4" direction={{ xs: 'column' }}>
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div>
                    <Typography fontSize="14px" fontWeight="bold">
                      Seller Name *
                    </Typography>

                    <TextField
                      {...field}
                      fullWidth
                      placeholder="Enter Seller Name"
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
          </Box>
        </Box>
        {/* </form> */}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
