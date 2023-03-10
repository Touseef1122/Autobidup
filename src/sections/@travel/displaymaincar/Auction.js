import PropTypes from 'prop-types';
import * as React from 'react';
import { Button, Grid, Box, Container, Stepper, Step, StepButton } from '@mui/material';
import Slider from 'react-slick';
import { useRef } from 'react';
// import { CarouselDots, CarouselArrows } from '../../../src/components';
import { CarouselArrows, CarouselDots, Image } from '../../../components';
import { styled, useTheme } from '@mui/material/styles';
import image1 from '../../../assets/Images/FordMinivan.jpg';
import image2 from '../../../assets/Images/FordMinivan.jpg';
import image3 from '../../../assets/Images/FordMinivan.jpg';
import image4 from '../../../assets/Images/FordMinivan.jpg';
import image5 from '../../../assets/Images/FordMinivan.jpg';
import image6 from '../../../assets/Images/FordMinivan.jpg';
// import image2 from '../../../src/Assets/Images/FordMinivan.jpg';
// import image3 from '../../../src/Assets/Images/FordMinivan.jpg';
// import image4 from '../../../src/Assets/Images/FordMinivan.jpg';
import { display } from '@mui/system';
import Contactinfo from './contactinfo';

//--------------------------------------------------------------

const images = [
  {
    image: image1,
    title: 'Ford Minivan',
  },
  {
    image: image2,
    title: 'Ford Minivan',
  },
  {
    image: image3,
    title: 'Ford Minivan',
  },
  {
    image: image4,
    title: 'Ford Minivan',
  },{
    image: image5,
    title: 'Ford Minivan',
  },{
    image: image6,
    title: 'Ford Minivan',
  },
  // {
  //   image: image7,
  //   title: 'Ford Minivan',
  // },{
  //   image: image8,
  //   title: 'Ford Minivan',
  // },{
  //   image: image9,
  //   title: 'Ford Minivan',
  // },{
  //   image: image10,
  //   title: 'Ford Minivan',
  // },{
  //   image: image11,
  //   title: 'Ford Minivan',
  // },{
  //   image: image12,
  //   title: 'Ford Minivan',
  // },{
  //   image: image13,
  //   title: 'Ford Minivan',
  // },{
  //   image: image14,
  //   title: 'Ford Minivan',
  // },{
  //   image: image15,
  //   title: 'Ford Minivan',
  // },{
  //   image: image16,
  //   title: 'Ford Minivan',
  // },{
  //   image: image17,
  //   title: 'Ford Minivan',
  // },{
  //   image: image18,
  //   title: 'Ford Minivan',
  // },{
  //   image: image19,
  //   title: 'Ford Minivan',
  // },{
  //   image: image20,
  //   title: 'Ford Minivan',
  // },{
  //   image: image21,
  //   title: 'Ford Minivan',
  // },{
  //   image: image22,
  //   title: 'Ford Minivan',
  // },{
  //   image: image23,
  //   title: 'Ford Minivan',
  // },{
  //   image: image24,
  //   title: 'Ford Minivan',
  // },{
  //   image: image25,
  //   title: 'Ford Minivan',
  // },{
  //   image: image26,
  //   title: 'Ford Minivan',
  // },{
  //   image: image27,
  //   title: 'Ford Minivan',
  // },{
  //   image: image28,
  //   title: 'Ford Minivan',
  // },{
  //   image: image29,
  //   title: 'Ford Minivan',
  // },{
  //   image: image30,
  //   title: 'Ford Minivan',
  // },{
  //   image: image31,
  //   title: 'Ford Minivan',
  // },{
  //   image: image32,
  //   title: 'Ford Minivan',
  // },{
  //   image: image33,
  //   title: 'Ford Minivan',
  // },{
  //   image: image34,
  //   title: 'Ford Minivan',
  // },{
  //   image: image135,
  //   title: 'Ford Minivan',
  // },{
  //   image: image36,
  //   title: 'Ford Minivan',
  // },
];

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
