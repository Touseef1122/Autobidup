import PropTypes from 'prop-types';
import * as React from 'react';
import { Button, Grid, Box, Container, Stepper, Step, StepButton } from '@mui/material';
import Slider from 'react-slick';
import { useRef } from 'react';
// import { CarouselDots, CarouselArrows } from '../../../src/components';
import { CarouselArrows, CarouselDots, Image } from '../../../components';
import { styled, useTheme } from '@mui/material/styles';
import image1 from '../../../Assets/Images/FordMinivan.jpg';
import image2 from '../../../Assets/Images/FordMustang.jpg';
import image3 from '../../../Assets/Images/ForTransit.jpg';
import image4 from '../../../Assets/Images/JeepWrangler.jpg';
import { display } from '@mui/system';

//--------------------------------------------------------------

const images = [
  {
    image: image1,
    title: 'Ford Minivan',
  },
  {
    image: image2,
    title: 'Ford Mustang',
  },
  {
    image: image3,
    title: 'Ford Transit',
  },
  {
    image: image4,
    title: 'Jeep Wrangler',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

export default function Carousel() {
  const carouselRef = useRef(null);
  const theme = useTheme();

  const carouselSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
        sx: {
        //   mt: { xs: 8, md: 10 },
        color:"#CE9A00"
        },
    }),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Container sx={{ position: 'relative' }}>
      <Box
        container
        justifyContent="center"
        sx={{
          boxShadow: '0 12px 28px #64666b',
          borderRadius: '8px',
          marginTop: '20%',
          width:"100%",
          height:"50vh",
        }}
      >
          <CarouselArrows
            onNext={handleNext}
            onPrevious={handlePrevious}
            sx={{
                '& .arrow': {
                    mt: -5,                  
                    '&.left': { left: 20 },
                    '&.right': { right: 20 },
                },
                
            }}
          >
            <Slider ref={carouselRef} {...carouselSettings}>
              {images.map((img) => (
                <Box key={img} mt={2}>
                  <Image alt={img.title} src={img.image.src} sx={{ width:"100%"}}/>
                </Box>
              ))}
            </Slider>
          </CarouselArrows>
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------
