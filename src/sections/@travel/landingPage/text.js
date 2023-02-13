import * as React from 'react';
import PropTypes from 'prop-types';

import { Typography, Box,Container, Divider } from '@mui/material';
// ----------------------------------------------------------------------
Text.propTypes = {
  tour: PropTypes.array.isRequired,
};
export default function Text({tour}) {
  return (
    <Box sx={{ marginTop:{xs:"18%",sm:"16%",md:"120px"},mb:2,width: '100%', overflowX: 'hidden' }}>
      <Divider/>
      <Container fluid sx={{mt:2,backgroundColor: 'white' }}>
      {tour?.map((value) => (
        <Typography key={value.title} variant="h3" color="black">{value.title}</Typography>
      ))}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
