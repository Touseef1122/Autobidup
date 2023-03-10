import PropTypes from 'prop-types';
import * as React from 'react';
import { Button, Grid, Box, Container, Stepper, Step, StepButton } from '@mui/material';
import Slider from 'react-slick';
import { useRef } from 'react';
// import { CarouselDots, CarouselArrows } from '../../../src/components';
import { CarouselArrows, CarouselDots, Image } from '../../../components';
import { styled, useTheme } from '@mui/material/styles';


const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));



import { useState, useEffect } from 'react';
// import { Box, Image } from '@chakra-ui/react';

const Car360View = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % images.length);
    }, 100);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      sx={{
        boxShadow: '0 12px 28px #64666b',
        borderRadius: '8px',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <Image src={images[index].src} sx={{ width: '100%', height: '100%' }} />
    </Box>
  );
};

export default Car360View;
