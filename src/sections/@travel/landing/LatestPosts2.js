import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import Slider from 'react-slick';
import { useRef } from 'react';
import { useRouter } from 'next/router';
// next
import NextLink from 'next/link';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Link, Stack, Avatar, Container, Typography } from '@mui/material';
// routes
import Routes from '../../../routes';
// utils
import { fDate } from '../../../utils/formatTime';
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

BlogMarketingLatestPosts.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default function BlogMarketingLatestPosts({ posts }) {
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
        settings: { slidesToShow: 2 },
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

  return (
    // <RootStyle>
    <Container>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
        }}
      >
        Feature Cars{' '}
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
            {posts.map((value) => (
              <Box
                sx={{
                  px: 2,
                  py: { xs: 8, md: 10 },
                }}
              >
                {/* <CarsCard item={items} /> */}
                <Box>
                  {/* {items.map((value) => ( */}
                    <Box
                      onClick={() => router.push('/travel/buysellcar/displaycardetails')}
                      sx={{ p: 3, boxShadow: '0 1px 10px #64666B', borderRadius: '8px', mb: 1 }}
                    >
                      {/* <Grid container spacing={4} justifyContent="center" >
          <Grid item xs={12} sm={4} display="flex" alignItems="center"> */}
                      <Image
                        alt={value.title}
                        src={value.image.src}
                        sx={{ width: '100%', height: 'auto' }}
                      />
                      {/* </Grid>
          <Grid item xs={12} sm={8}> */}
                      <Typography variant="h4">{value.heading}</Typography>
                      <Typography variant="h6">{value.city}</Typography>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body3" sx={{ display: { xs: 'none', sm: 'block' } }}>
                          {value.year}
                        </Typography>
                        <Typography variant="body3" sx={{ display: { xs: 'none', sm: 'block' } }}>
                          {value.distance}
                        </Typography>
                        <Typography variant="body3" sx={{ display: { xs: 'none', sm: 'block' } }}>
                          {value.fuel}
                        </Typography>
                        <Typography variant="body3" sx={{ display: { xs: 'none', sm: 'block' } }}>
                          {value.cc}
                        </Typography>
                        <Typography variant="body3" sx={{ display: { xs: 'none', sm: 'block' } }}>
                          {value.type}{' '}
                        </Typography>
                      </Stack>
                      <Typography variant="h4" color="#CE9A00">
                        {' '}
                        PKR {value.price}
                      </Typography>
                      {/* </Grid>
        </Grid> */}
                    </Box>
                  {/* ))} */}
                </Box>
              </Box>
            ))}
          </Slider>
        </CarouselArrows>
      </Box>
    </Container>
    // </RootStyle>
  );
}
