import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';


import {
  Radio,
  RadioGroup,
  Typography,
  Button,
  Box,
  FormControl,
  Container,
  FormLabel,
  TextField,
} from '@mui/material';

// ----------------------------------------------------------------------

// Enterpricestep2.propTypes = {
//   services: PropTypes.array.isRequired,
//   icons: PropTypes.array.isRequired,
//   tours: PropTypes.array.isRequired,
// };

export default function Enterpricestep2({ formValues, handleInputChange}) {
  const router = useRouter();
 

 
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
              <TextField
                fullWidth
                placeholder="Enter Price"
                name='price'
                value={formValues.price}
                onChange={handleInputChange}
                sx={{ width: {xs:"100%",sm:'50%'} }}
              />
           <Typography fontSize="13px" color="#181a1f;" fontWeight="bold">
              Please enter realistic price to get more genuine responses.
            </Typography>
        </Box>

        {/* </form> */}
      </Container>
      <Box
        m={1}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
      
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------
