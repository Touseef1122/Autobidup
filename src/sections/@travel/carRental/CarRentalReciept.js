import PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import cssStyles from '../../../../src/utils/cssStyles';
import Image from 'next/image';
import { Icon } from '@iconify/react';

import { useRouter } from 'next/router';
// @mui

import { Stack, Typography, TextField, Box, MenuItem, Link } from '@mui/material';
// utils
// @utils
import agency from '../../../assets/images/agencyBg.jpg';
// components
import { Iconify, TextMaxLine } from '../../../components';
import { TravelLandingfull } from '../landing';
import { LoadingButton } from '@mui/lab';
// ----------------------------------------------------------------------

const styles = {
  paper: {
    backgroundImage: `url(${agency})`,
  },
};

CarRentalReciept.propTypes = {
  tour: PropTypes.array.isRequired,
};
export default function CarRentalReciept({ tour }) {
  const router = useRouter();
  const {
    control,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onTouched',
  });
  return (
    <Box sx={{ marginTop: '10%',marginBottom:"10%" }}>
      <div style={{zIndex:-1,position:"fixed",width:"100vw",height:"100vh"}}><Image src={agency.src} objectFit="cover" layout="fill" /></div>
      {tour.map((value) => (
        <div key={value.title}>
          <Typography fontSize="30px" color="white" textAlign="center" pt={6}>
            {value.head}
          </Typography>
          <Typography fontSize="30px" color="white" textAlign="center" pt={5}>
            {value.title}
          </Typography>

          <Box
            sx={{
              
              borderRadius:"10px",
              overflowX: 'hidden',
              backgroundColor: 'white',
              m: {xs:3, md: 6 },
              p: { xs: 4, md: 6 },
              
            }}
          >
            <Typography fontSize="15px">
              {value.desc}
              <Link color="rgb(237, 85, 5)">{value.des2}</Link>
              {value.des3}
              <Link color="rgb(237, 85, 5)">{value.login}</Link>
              {value.desc2}
            </Typography>
            <Typography fontSize="15px">
              <b>{value.note}</b>
              {value.type}
              <Link color="rgb(237, 85, 5)"> {value.chat}</Link>
              <Iconify icon={value.icon} color="orange"></Iconify>
            </Typography>

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} mt={2}>
              <Controller
                name="Request"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField id="outlined-select-currency" select fullWidth label="Country">
                    {/* {currencie.map((option) => ( */}
                    <MenuItem>1</MenuItem>
                    {/* ))} */}
                  </TextField>
                )}
              />
              <Controller
                name="LastName"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Last Name"
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                )}
              />
              <Controller
                name="Confirmation"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Confirmation/Rental Agreement Number"
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                )}
              />
            </Stack>
            <Box textAlign="center">
              <LoadingButton
                size="large"
                type="submit"
                variant="contained"
                fontSize="18px"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => router.push('')}
              >
                {value.button}
              </LoadingButton>
              <Typography fontSize="15px">
                <b>{value.note2}</b>
                {value.type2}
                <Link color="rgb(237, 85, 5)">{value.type3}</Link>
                {value.type4}
              </Typography>
            </Box>
          </Box>
        </div>
      ))}
    </Box>
  );
}

// ----------------------------------------------------------------------
