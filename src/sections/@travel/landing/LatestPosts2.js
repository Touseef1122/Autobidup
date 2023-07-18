import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import Slider from 'react-slick';
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// next
import NextLink from 'next/link';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Link, Stack, Avatar, Container, Typography } from '@mui/material';
// components
import { varHover, varTranHover } from '../../../components/animate';
import { Image, BgOverlay, CarouselArrows, CarouselDots, TextMaxLine } from '../../../components';
import { price } from '_data/mock/number';
import CarsCard from '../../@travel/displaymaincar/caritemlist';
import img1 from '../../../../src/Assets/Images/FordMinivan.jpg';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  padding: theme.spacing(1, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(1, 0),
  },
}));

const DotStyle = styled('span')(({ theme }) => ({
  width: 4,
  height: 4,
  borderRadius: '50%',
  backgroundColor: 'currentColor',
  margin: theme.spacing(0, 1),
}));

// ----------------------------------------------------------------------
const bestcities = [

]
LatestPosts2.propTypes = {
  data: PropTypes.array.isRequired,
};
export default function LatestPosts2({data}) {
  console.log("data here", data)
  const theme = useTheme();
  const router = useRouter();

  const carouselRef = useRef(null);

  const carouselSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots(),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

 
  // bestcities.push(data)
  // console.log(bestcities)

  return (
    // <RootStyle>
    <Container>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          mt:2
        }}
      >
        Latest Used Cars{' '}
      </Typography>

      <Box sx={{ position: 'relative' }}>
        <CarouselArrows
          onNext={handleNext}
          onPrevious={handlePrevious}
          sx={{
            '& .arrow': {
              '&.left': { left: -20 },
              '&.right': { right: -20 },
            },
          }}
        >
          <Slider ref={carouselRef} {...carouselSettings}>
            {data?.map((value) => (
              <Box
                sx={{
                  px: 2,
                  py: { xs: 3, md: 4 },
                }}
              >
                <Box>
                    <Box
                      onClick={() => {
                        router.push({
                          pathname: '/travel/buysellcar/displaycardetails',
                          query: { data: JSON.stringify(value) },
                        });
                      }}
                      sx={{ p: 3, boxShadow: '0 1px 10px #64666B', borderRadius: '8px', mb: 1,cursor: 'pointer', }}
                    >
           
                      <Image
                        src={value.images[0]?.image_url}
                        sx={{ width: '100%', height: '200px' }}
                      />
                     
                      <Typography variant="h4">{`${value.make} ${value.model}`}</Typography>
                      <Typography variant="h6">{value.year}</Typography>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body3" sx={{ display: { xs: 'none', sm: 'block' } }}>
                          {value.city}
                        </Typography>
                        <Typography variant="body3" sx={{ display: { xs: 'none', sm: 'block' } }}>
                          {value.distance}
                        </Typography>
                        <Typography variant="body3" sx={{ display: { xs: 'none', sm: 'block' } }}>
                          {value.fuel}
                        </Typography>
                      
                      </Stack>
                      <Typography variant="h4" color="#CE9A00">
                        {' '}
                        PKR {value.price}
                      </Typography>
                  
                    </Box>
                </Box>
              </Box>             
            ))}
          </Slider>
        </CarouselArrows>
      </Box>
    </Container>
  );
}
