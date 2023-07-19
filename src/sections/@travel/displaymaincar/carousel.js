import PropTypes from 'prop-types';
import * as React from 'react';
import { Grid, Box } from '@mui/material';
import Slider from 'react-slick';
import { useRef } from 'react';
import { CarouselArrows, CarouselDots, Image } from '../../../components';
import { styled, useTheme } from '@mui/material/styles';
import Contactinfo from './contactinfo';

//--------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));
Carousel.propTypes = {
  post: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
};
export default function Carousel({ post }) {
  // console.log('post', post);

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
  if (post) {
    console.log('image', post?.images);
    return (
      <Grid container spacing={6}>
        <Grid item xs={12} sm={7}>
          <Box
            position="relative"
            justifyContent="center"
            sx={{
              boxShadow: '0 12px 28px #64666b',
              borderRadius: '8px',
              // marginTop: '20%',
              width: '100%',
              // height: '50vh',
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
                {post?.images.map((image) => (
                  <Box mt={2}>
                    <Image
                      key={image.image_url}
                      // alt={img.title}
                      src={image?.image_url}
                      sx={{ width: '100%', height: '400px', p: 4 }}
                    />
                  </Box>
                ))}
              </Slider>
            </CarouselArrows>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Contactinfo
            post={post}
            make={post?.make || ''}
            variant={post?.model || ''}
            price={post?.price || ''}
            year={post?.year || ''}
          />
        </Grid>
      </Grid>
    );
  }
}

// ----------------------------------------------------------------------
