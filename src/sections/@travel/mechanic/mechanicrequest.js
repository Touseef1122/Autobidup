import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/router';

import { Button, Modal, Typography, Stack, Box, TextField, Container } from '@mui/material';

import mechanic from '../../../assets/images/mechanicform.jpg';

const styling = {
  backgroundImage: `url(${mechanic.src})`,
  width: '100%',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};
// ----------------------------------------------------------------------
const FormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .min(11, 'Phone number is at least 11 numbers minumum'),
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '800px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  height: '600px',
};

let map = '';
export default function Mechanicrequest() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  console.log('mechanic');
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  map = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435521.9537239478!2d74.00473096991998!3d31.482517977862887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1689331760317!5m2!1sen!2sus`;

  const handleConfirmLocation = async () => {
    // Handle confirm location logic
    console.log('Location right now', location);

    try {
      console.log('checking location');
      const response = await fetch('https://autobidup.pythonanywhere.com/mechanic/location', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address: location }),
      });

      if (response.ok) {
        // API call successful
        const responseData = await response.json();
        setLatitude(responseData.latitude);
        setLongitude(responseData.longitude);
        console.log(responseData.latitude);
      } else {
        // API call failed
        const errorData = await response.json();
        // Handle the error data as needed
      }
    } catch (error) {
      // Error occurred during the API call
      console.error(error);
      // Handle the error
    }
  };

  if (longitude && latitude) {
    map = `https://www.google.com/maps?q=${latitude},${longitude}&hl=es&z%3D14&amp&output=embed`;
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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
      phone: '',
    },
  });
  const onSubmit = async (data) => {
    console.log('data', data);
    data.location = location
    console.log('location', data.location);
    console.log('working');
    try {
      console.log('checking login');
      const response = await fetch('https://autobidup.pythonanywhere.com/mechanic/allot_mechanic', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // API call successful
        const responseData = await response.json();
        console.log(responseData);

      } else {
        // API call failed
        const errorData = await response.json();
        // Handle the error data as needed
      }
    } catch (error) {
      // Error occurred during the API call
      console.error(error);
      // Handle the error
    }
  };
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }} style={styling}>
      <Container
        sx={{
          width: '100%',
          padding: '20px',
          textAlign: 'left',
        }}
      >
        <Box
          sx={{
            p: { xs: '5%', sm: '7%' },
            pb: { xs: '20%', sm: '7%' },
            borderRadius: '20px',
            background: 'rgba(254,254,254,0.93)',
          }}
        >
          <Typography variant="h3" textAlign="center" pb="5px">
            Request A Mechanic Form
          </Typography>
          <Typography variant="h6" textAlign="left" mb={6}>
            Fill out the form to request a mechanic
          </Typography>
          <Typography variant="h5" mb="6" fontWeight="bold">
            Name
          </Typography>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                label="Name *"
                error={Boolean(error)}
                helperText={error?.message}
                sx={{ width: { xs: '100%' } }}
              />
            )}
          />
          <Typography variant="h5" mb="6" fontWeight="bold">
            Phone Number
          </Typography>
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Phone *"
                error={Boolean(error)}
                helperText={error?.message}
                sx={{ width: { xs: '100%' }, mb: 2 }}
              />
            )}
          />

          <Modal
            open={isModalOpen}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                sx={{ textAlign: 'center' }}
                id="modal-modal-title"
                variant="h3"
                component="h2"
              >
                Select Your Location
              </Typography>
              <Box style={{ width: '760px', height: '450px', border: 0 }}>
                <iframe
                  style={{ width: '100%', height: '100%', border: 0 }}
                  src={map}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
              <Stack direction="row" spacing={3} mt={3}>
                <TextField
                  label="Location"
                  variant="outlined"
                  value={location}
                  onChange={handleLocationChange}
                />
                <Button variant="contained" onClick={handleConfirmLocation}>
                  Confirm
                </Button>
              </Stack>
            </Box>
          </Modal>
          <Typography variant="h5" mb="6" fontWeight="bold">
            Location
          </Typography>
          <Stack spacing={2} mt={1} direction={{ xs: 'column', sm: 'row' }}>
            <Button variant="outlined" onClick={handleModalOpen}>
              Select Location
            </Button>

            <TextField
              disabled
              fullWidth
              placeholder={location}
              name="location"
              value={location}
              // error={Boolean(error)}
              // helperText={error?.location}
              sx={{ width: { xs: '100%' }, mb: 3 }}
            />
          </Stack>

          <Typography variant="h5" mb="6" fontWeight="bold">
            Description
          </Typography>
          <TextField
            id="filled-multiline-static"
            sx={{ width: '100%', mt: 2 }}
            multiline
            rows={4}
            placeholder="Describe your problem..."
            variant="filled"
          />
          <LoadingButton
            sx={{
              mt: 1,
              float: 'right',
              width: '20%',
              backgroundColor: 'black',
              color: 'white',
              '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
            }}
            size="large"
            variant="contained"
            loading={isSubmitting}
            type='submit'
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </LoadingButton>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
