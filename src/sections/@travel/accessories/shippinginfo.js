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
  Button,
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

const FormSchema = Yup.object().shape({
  phone: Yup.array()
    .required()
    .min(11, 'Phone number should of 11 digits')
    .max(11, 'Phone number should of 11 digits'),
  name: Yup.string().required('Name is required'),
});

export default function Shippinginfo() {
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
    <Box sx={{ width: '100%', overflowX: 'hidden', padding: { xs: '2%', md: '4%' } }}>
      <Container
        sx={{
          width: '100%',
          textAlign: 'left',
          p: { xs: 1, md: 4 },
          pl: { sm: 4 },
          pr: { sm: 4 },
          borderRadius: '20px',
          background: 'rgba(254,254,254,0.93)',
        }}
      >
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <Box
          sx={{
            ml: { md: '5%' },
            mr: { md: '5%' },
            mb: '10px',
          }}
        >
          <Stack spacing={3} mt={3} mb={3} direction={{ xs: 'column', sm: 'row' }}>
            <div>
              <Typography variant="h4" fontWeight="bold">
                First Name *
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter first name"
                sx={{ width: { xs: '100%', sm: '50vh', md: '43vh', lg: '30vw' } }}
              />
            </div>
            <div>
              <Typography variant="h4" fontWeight="bold">
                Last Name
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter last name"
                sx={{ width: { xs: '100%', sm: '50vh', md: '43vh', lg: '30vw' } }}
              />
            </div>
          </Stack>

          <Stack spacing={3} mt={3} mb={3} direction={{ xs: 'column', sm: 'row' }}>
            <div>
              <Typography variant="h4" fontWeight="bold">
                Address *
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter address"
                sx={{ width: { xs: '100%', sm: '50vh', md: '43vh', lg: '30vw' } }}
              />
            </div>
            <div>
              <Typography variant="h4" fontWeight="bold">
                City
              </Typography>
              <TextField
                fullWidth
                disabled
                value="Lahore"
                sx={{ width: { xs: '100%', sm: '50vh', md: '43vh', lg: '30vw' } }}
              />
            </div>
          </Stack>

          <Stack spacing={3} mt={3} mb={3} direction={{ xs: 'column', sm: 'row' }}>
            <div>
              <Typography variant="h4" fontWeight="bold">
                ZipCode
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter zip code"
                sx={{ width: { xs: '100%', sm: '50vh', md: '43vh', lg: '30vw' } }}
              />
            </div>
            <div>
              <Typography variant="h4" fontWeight="bold">
                Phone Number *
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter phone number"
                sx={{ width: { xs: '100%', sm: '50vh', md: '43vh', lg: '30vw' } }}
              />
            </div>
          </Stack>

          <Typography variant="h4" fontWeight="bold">
            Email
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter email"
            sx={{ width: { xs: '100%', sm: '50vh', md: '43vh', lg: '30vw' } }}
          />
          <br />
          <Box sx={{display:"flex", alignItems:"center",justifyContent:"end"}}>
            <Button
              sx={{
                size:"15px",
                mt: 3,
                backgroundColor: '#212B36',
                color: 'white',
                '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
              }}
              onClick={() => router.push('/travel/carRentals/payment')}
            >
              Proceed to Payment
            </Button>
          </Box>
        </Box>
        {/* </form> */}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
