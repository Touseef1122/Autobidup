import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Image} from '../../../components';
import logo from '../../../assets/images/logo-ssl.svg'

// icons
import viewIcon from '@iconify/icons-carbon/view';
import viewOff from '@iconify/icons-carbon/view-off';
import { Icon } from '@iconify/react';
// next
import NextLink from 'next/link';
// @mui
import { LoadingButton } from '@mui/lab';
import { Stack, Link, TextField, IconButton, InputAdornment } from '@mui/material';
// routes
// import Routes from '../../routes';
// components
import { Iconify } from '../../../components';
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
const currencie = [
  
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
  
const FormSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('That is not an email'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password should be of minimum 6 characters length'),
});

export default function payment() {
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

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <div >
        <Box  sx={{ ml: {md:'30%'}, mr: {md:'30%'}, mt: {md:'5%'}, mb: {md:'5%'} ,
          overflowX: {
            xs: 'hidden',
            sm: 'hidden',
          },}}>
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <Stack>
      
      <Typography varient="h2">Add A New Card</Typography>
      <Controller
              name="CardNumber"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Card Number"
                  placeholder="4255 1111 1111 1111"
                  error={Boolean(error)}
                  helperText={error?.message}
                />
              )}
            />
            <Stack marginTop="15px">            <Controller
              name="Request"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Card Holder"
                  placeholder='Jhon'
                  error={Boolean(error)}
                  helperText={error?.message}
                />
              )}
            />
            </Stack>

      

      <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={{ xs: 2.5, md: 2 }}
                  sx={{ width: 1 ,mt:"15px"}}
                >
                  <Controller
                    name="CVV/CVC"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="CVV/CVC"
                        placeholder='***'
                        error={Boolean(error)}
                        helperText={error?.message}
                      />
                    )}
                  />

                  <Controller
                    name="Date"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Exp Date"
                        placeholder='dd/yy/mm'
                        error={Boolean(error)}
                        helperText={error?.message}
                      />
                    )}
                  />
                  
                </Stack>
                <Stack display="inline">
              <LoadingButton
                size="large"
                type="submit"
                padding="15px"
                variant="outlined"
                loading={isSubmitting}
                
              >
                Cancel
              </LoadingButton>
              <LoadingButton
                sx={{ margin: '25px' }}
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Continue
              </LoadingButton>
            </Stack>
                {/* <hr sx={{mt:"50px",mb:"10px"}}></hr> */}
                       <Typography mt='20px' mb='5px' justifyContent='center' textAlign="center" sx={{ fontSize: '.875rem', lineHeight: '1.333', fontWeight: '300', color: 'gray' }}>
         Please note: You will be able to review your ride on the next page before confirming your reservation. After you have placed your booking, we will temporarily reserve the funds on your card with a pre-authorization to guarantee your ride. Your card is only charged after the ride has taken place.
         </Typography>
         <hr></hr>
         <Stack hight="20%" width="20%" mt='15px' mb='15px' justifyContent='center' textAlign="center" ml="auto" mr="auto">
         <Image  src={logo.src}/>
         </Stack>
        </Stack>
        
    </form>
    </Box>
    </div>
  );
}
