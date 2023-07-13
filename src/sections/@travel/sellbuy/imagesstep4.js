import PropTypes from 'prop-types';
import * as React from 'react';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

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

// // components
import { Image } from '../../../components';
import { LoadingButton } from '@mui/lab';
// ----------------------------------------------------------------------
// Imagesstep4.propTypes = {
//   services: PropTypes.array.isRequired,
//   icons: PropTypes.array.isRequired,
//   tours: PropTypes.array.isRequired,
// };

export default function Imagesstep4({ handleInputChange,formValues }) {
  const router = useRouter();
  // const [selectedImage, setSelectedImage] = useState(null);
  // const [imageUrl, setImageUrl] = useState(null);
  // useEffect(() => {
  //   if (selectedImage) {
  //     setImageUrl(URL.createObjectURL(selectedImage));
  //   }
  // }, [selectedImage]);

 
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Container sx={{ width: '100%', padding: '20px', textAlign: 'left' }}>
        <Box
          sx={{
            ml: { md: '5%' },
            mr: { md: '5%' },
          }}
        >
          <Stack direction={{ xs: 'column', sm: 'row' }}>
            <Typography variant="h3" textAlign="left" pb="5px">
              Upload Image *
            </Typography>
            <Typography variant={{ xs: 'body3', md: 'h6' }} textAlign="left" pt="12px">
              (max limit is 50MB per image)
            </Typography>
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} mt="10px" textAlign="center">
            <LoadingButton
              sx={{ backgroundColor: 'black', '&:hover': { backgroundColor: '#CE9A00' } }}
              variant="contained"
              component="label"
            >
              Upload Images
              <input
                type="file"
                name= "images"
                accept="image/png, image/jpeg, image/jpg"        
                target={formValues.images}
                style={{ display: 'none' }}
                onChange={handleInputChange}     
              />
            </LoadingButton>
            <Typography fontSize={{ xs: '10px', sm: '16px' }} p="12px" fontWeight="bold">
              Tip: Select several photos to add them in one go
            </Typography>
          </Stack>
          <Stack mt="10px">
            <Typography variant="body3">
              Adding at least 8 pictures improves the chances for a quick sale.
            </Typography>
            <Typography variant="body3">
              Adding clear Front, Back and Interior pictures of your car increases the quality of
              your Ad and gets you noticed more.
            </Typography>
            <Typography variant="body3">
              Photos should be in <span style={{ fontWeight: 'bold' }}>"jpeg, jpg, png"</span>{' '}
              format only.
            </Typography>
          </Stack>
          {/* {imageUrl && selectedImage && (
            <Box>
              <Typography fontWeight="bold">Images selected</Typography>
              <Image
                src={imageUrl.src}
                alt={selectedImage.name}
                sx={{ height: '100%', width: '100%' }}
              />
            </Box>
          )} */}
        </Box>
      </Container>

    </Box>
  );
}

// ----------------------------------------------------------------------
