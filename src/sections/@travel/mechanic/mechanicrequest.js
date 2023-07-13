import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';

import {
  Button,
  Modal,
  Typography,
  Stack,
  Box,
  TextField,
  Container,
  MenuItem,
} from '@mui/material';

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
  name: Yup.array().required('Name is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .min(11, 'Phone number is at least 11 numbers minumum'),
  address: Yup.string().required('Address is required'),
  location: Yup.string().required('Location is required'),
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

export default function Mechanicrequest() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleConfirmLocation = () => {
    // Handle confirm location logic
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
      services: [],
      name: '',
      phone: '',
      address: '',
    },
  });
  const onSubmit = async (data) => {
    console.log(data.location);
    // await new Promise((resolve) => setTimeout(resolve, 500));
    // alert(JSON.stringify(data, null, 2));
    // reset();
    console.log(' working');
    try {
      console.log('checking login');
      const response = await fetch('https://autobidup.pythonanywhere.com/user/login', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        // xhrFields: {
        //   withCredentials: true,
        // },
      });

      if (response.ok) {
        // API call successful
        const responseData = await response.json();
        // Handle the response data as needed
        localStorage.setItem('firstname', responseData.firstName);
        localStorage.setItem('username', responseData.username);

        // Store JWT token in document cookie
        // document.cookie = `jwt=${responseData.jwt}; path=/`;
        console.log('response data', responseData);
        router.push('/');
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
  const [show, setShow] = useState(false);
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }} style={styling}>
      <Container
        sx={{
          width: '100%',
          padding: '20px',
          textAlign: 'left',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <Stack spacing={2} mb={2} direction={{ xs: 'column', sm: 'row' }}>
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
            </Stack>
            <Controller
              name="address "
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Address *"
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
                    style={{ width: '100%', height: '100%' }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.99380853778!2d74.3343893!3d31.482940349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1686749711341!5m2!1sen!2s"
                  ></iframe>
                </Box>
                <TextField label="Location" variant="outlined" sx={{ mt: 2 }} />
                <Button variant="contained" onClick={handleConfirmLocation} sx={{ mt: 2 }}>
                  Confirm
                </Button>
              </Box>
            </Modal>
            <Stack spacing={2} mt={1} direction={{ xs: 'column', sm: 'row' }}>
              <Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <Button variant="outlined" onClick={handleModalOpen}>
                    Select Location
                  </Button>
                )}
              />

            </Stack>

            <Typography variant="h6" textAlign="left" mt={5}>
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
                // mb: 4,
                float: 'right',
                width: '20%',
                // border: '1px solid #FFBE00 ',
                backgroundColor: 'black',
                color: 'white',
                '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
              }}
            >
              Submit
            </LoadingButton>
          </Box>
        </form>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
