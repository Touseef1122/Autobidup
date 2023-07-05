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
  Button,
  Checkbox,
  Typography,
  Stack,
  Box,
  TextField,
  Container,
  MenuItem,
} from '@mui/material';
import { blogTitle } from '_data/mock/text';
// utils
// @utils
// import agency from '../../../assets/images/agencyBg.jpg';
// // components
// import { Image, TextMaxLine } from '../../../components';
// import { TravelLandingfull } from '../landing';
// import { LoadingButton } from '@mui/lab';
// ----------------------------------------------------------------------
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

export default function Finishstep5({ onNext }) {
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
  const [description, setDescription] = React.useState('');
  const [nname, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [title, setTitle] = React.useState('');

  const handleNext = () => {
    const stepData = {
      description: description,
      seller_name: nname,
      seller_phone: phone,
      title: title,
    };
    onNext(stepData);
    console.log('step 3', stepData);
  };
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
                name="seller_name"
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
                      value={nname}
                      onChange={(e) => setName(e.target.value)}
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
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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
      <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end">
        <Button mt="6" color="inherit" variant="contained" onClick={handleNext}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------
