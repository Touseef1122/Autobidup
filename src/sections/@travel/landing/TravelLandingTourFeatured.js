import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Container, Stack, Button, Typography, Box } from '@mui/material';
// routes
import Routes from '../../../routes';
//
import TravelTourItem from '../tours/TravelTourItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import { CarouselArrows, CarouselDots, Image } from '../../../components';

// ----------------------------------------------------------------------

//-----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

TravelLandingTourFeatured.propTypes = {
  tours: PropTypes.array.isRequired,
};

export default function TravelLandingTourFeatured({ tours }) {

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


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
    <Container sx={{ marginBottom: '40px' }}>
      <Stack spacing={3} sx={{ textAlign: 'center' }}>
        <Typography variant="h3">Intercity routes</Typography>
        <Typography
          variant="h5"
          sx={{
            color: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          {`Top cities`}
        </Typography>
      </Stack>
      {/* <CarouselArrows
            onNext={handleNext}
            onPrevious={handlePrevious}
            sx={{
                '& .arrow': {
                    mt: -5,                  
                    '&.left': { left: 20 },
                    '&.right': { right: 20 },
                },
                
            }}
          > */}
            {/* <Slider ref={carouselRef} {...carouselSettings}> */}
        <Box
          sx={{
            mt: 4,
            display: 'grid',
            gap: { xs: 4, md: 3 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          

          {tours?.map((tour) => (
            <TravelTourItem key={tour.id.src} tour={tour} />
          ))}
          
        </Box>
        {/* </Slider> */}
    {/* </CarouselArrows> */}
     
      {/* <Box sx={{ textAlign: 'center' }}>
          <NextLink href={Routes.travel.tours} passHref>
            <Button size="large" variant="contained">
              View All Tours
            </Button>
          </NextLink>
        </Box> */}
    </Container>
    
    </div>
  );
}
