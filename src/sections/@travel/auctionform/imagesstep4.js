import PropTypes from 'prop-types';
import * as React from 'react';
import { useState, useEffect } from 'react';
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
  Button,
} from '@mui/material';
// utils
// @utils
// import agency from '../../../assets/images/agencyBg.jpg';
// // components
import { Image } from '../../../components';
// import { TravelLandingfull } from '../landing';
import { LoadingButton } from '@mui/lab';
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
Imagesstep4.propTypes = {
  services: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
  tours: PropTypes.array.isRequired,
};

export default function Imagesstep4({ tours, icons, services }) {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

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
          <Stack direction={{xs:"column",sm:"row"}}>
            <Typography variant="h3" textAlign="left" pb="5px">
              Upload Image *
            </Typography>
            <Typography variant={{xs:"body3",md:"h6"}} textAlign="left" pt="12px">
              (max limit is 50MB per image)
            </Typography>
          </Stack>
          <Stack direction={{xs:"column",sm:"row"}} mt="10px" textAlign="center">
            <LoadingButton sx={{backgroundColor:"black", '&:hover': { backgroundColor: '#CE9A00' }}} variant="contained" component="label" >
              Upload Images
              <input
                accept="image/"
                multiple
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => setSelectedImage(e.target.files[0])}
              />
            </LoadingButton>
            <Typography fontSize={{xs:"10px",sm:"16px"}} p="12px" fontWeight="bold">
              Tip: Select several photos to add them in one go
            </Typography>
          </Stack>
          <Stack mt="10px">
            <Typography variant="body3">
              Adding at least 36 pictures for 360° view model.
            </Typography>
            <Typography variant="body3">
              Adding clear Front, Back and Interior pictures of your car increases the quality of
              your car and gets you noticed more.
            </Typography>
            <Typography variant="body3">Photos should be in <span style={{fontWeight:"bold"}}>"jpeg, jpg, png"</span> format only.</Typography>
          </Stack>
          {imageUrl && selectedImage && (
            <Box>
              <Typography fontWeight="bold">Images selected</Typography>
              <Image
                src={imageUrl.src}
                alt={selectedImage.name}
                sx={{ height: '100%', width: '100%' }}
              />
            </Box>
          )}


        </Box>
        {/* </form> */}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
