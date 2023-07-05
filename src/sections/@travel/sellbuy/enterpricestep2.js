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
const FormSchema = Yup.object().shape({
  price: Yup.string().required().min(100000, 'minimum price is 1 lac').max(1000000000,'maximum price is 100 crore'),
});

export default function Enterpricestep2({ onNext }) {
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
  const [price, setPrice] = React.useState('');

  const handleNext = () => {
    const stepData = {
      "price":price,
    };
    onNext(stepData);
    console.log("step 2",stepData)
  };
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
      <Box
        m={1}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Button mt="6" color="inherit" variant="contained" onClick={handleNext}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------
