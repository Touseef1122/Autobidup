import * as React from 'react';
import {
  Button,
  Grid,
  Box,
  Typography,
  ButtonGroup,
  Stack,
} from '@mui/material';
import Slider from 'react-slick';
import { useRef } from 'react';
import { Icon } from '@iconify/react';
import { CarouselArrows, CarouselDots, Image } from '../../../components';
import { styled, useTheme } from '@mui/material/styles';
import image1 from '../../../Assets/Images/FordMinivan.jpg';
import image2 from '../../../Assets/Images/FordMustang.jpg';
import image3 from '../../../Assets/Images/ForTransit.jpg';
import image4 from '../../../Assets/Images/JeepWrangler.jpg';
import { useState } from 'react';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const [counter, setCounter] = useState(1);
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
        mt: 6,
        color: '#CE9A00',
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
    <Grid container spacing={6}>
      <Grid item xs={12} sm={7}>
        <Box
          position="relative"
          justifyContent="center"
          sx={{
            boxShadow: '0 12px 28px #64666b',
            borderRadius: '8px',
            width: '100%',
          }}
        >
          <CarouselArrows
            onNext={handleNext}
            onPrevious={handlePrevious}
            sx={{
              '& .arrow': {
                mt: -5,
              },
            }}
          >
            <Slider ref={carouselRef} {...carouselSettings}>
              {images.map((img) => (
                <Box key={img} mt={2}>
                  <Image
                    alt={img.title}
                    src={img.image.src}
                    sx={{ width: '100%', height: '100%' }}
                  />
                </Box>
              ))}
            </Slider>
          </CarouselArrows>
        </Box>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Box>
          <Typography variant="h3">Honda N Wgn G 2013</Typography>
          <Typography variant="h4" color="#CE9A00">
            PKR 210
          </Typography>

          <Stack direction="row" spacing={1} display="flex" alignItems="center">
            {/* <Icon icon={location} width="1.5vw" vAlign="middle" color="#CE9A00" /> */}
            <Typography fontWeight="bold">Quantitty </Typography>

            <ButtonGroup
              size="small"
              variant="contained"
              aria-label="outlined primary button group"
            >
              {
                <Button
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #FFBE00',
                    color: '#FFBE00',
                    '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                  }}
                  disabled={counter <= 0}
                  onClick={() => {
                    setCounter(counter - 1);
                  }}
                >
                  -
                </Button>
              }
              {<Button disabled>{counter}</Button>}
              <Button
                sx={{
                  backgroundColor: 'white',
                  border: '1px solid #FFBE00',
                  color: '#FFBE00',
                  '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                }}
                onClick={() => {
                  setCounter(counter + 1);
                }}
              >
                +
              </Button>
            </ButtonGroup>
            <Button
              sx={{
                float: 'right',
                backgroundColor: '#212B36',
                color: 'white',
                mt: 3,
                '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
              }}
              onClick={() => router.push({})}
            >
              Order
            </Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
