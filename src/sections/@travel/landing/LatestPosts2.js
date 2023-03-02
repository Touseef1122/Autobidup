import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import Slider from 'react-slick';
import { useRef } from 'react';
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
const items = [
  {
    image: img1,
    heading: 'Honda',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
  },
];

export default function BlogMarketingLatestPosts({ posts }) {
  const theme = useTheme();
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
    <RootStyle>
      <Container >
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
          }}
        >
          Managed By AutoBidUp
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
              {posts.map((post) => (
                <Box
                  key={post.slug}
                  sx={{
                    px: 2,
                    py: { xs: 8, md: 10 },
                  }}
                >
                  <CarsCard item={items} />
                </Box>
              ))}
            </Slider>
          </CarouselArrows>
        </Box>
      </Container>
    </RootStyle>
  );
}


