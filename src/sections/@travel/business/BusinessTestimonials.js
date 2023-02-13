import PropTypes from 'prop-types';
import * as React from 'react';
import { useRouter } from 'next/router';

import { Typography, Box, Container } from '@mui/material';
// ----------------------------------------------------------------------

BusinessTestimonials.propTypes = {
  text: PropTypes.array.isRequired,
};
export default function BusinessTestimonials({ text }) {
  const router = useRouter();
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        {text?.map((value) => (
          <Box key={value.title} sx={{ px: { sm: 6 },color:"black" }}>
            <Typography fontSize="50px" fontWeight="bold" textAlign="center" pb="25px">
              {value.title}
            </Typography>
            <Typography variant="body1" textAlign="left" color="black">
              {value.desc}
            </Typography>
            <Typography variant="body1" mt={3} textAlign="left" color="black">
              {value.point}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------
