import * as React from 'react';

import { Typography, Box } from '@mui/material';
import agency from '../../../assets/images/Igsbg.jpg';
// import Stack from 'mui/material';
// utils
// components
import { Image } from '../../../components';
// ----------------------------------------------------------------------

export default function Imagebg() {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <Image
          alt="hero"
          src={agency.src}
          sx={{
            height: '80vh',
            bgcolor: 'transparent',
          }}
        />
        <Typography
          variant="h1"
          color="white"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%);',
          }}
        >
          Royal Fleet | The Global Traveller
        </Typography>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------
