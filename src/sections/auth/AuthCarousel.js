import PropTypes from 'prop-types';
import Slider from 'react-slick';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
// components
import { Image, BgOverlay, CarouselDots } from '../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    width: 1,
    flexGrow: 1,
    display: 'block',
    position: 'relative',
  },
}));

// ----------------------------------------------------------------------

AuthCarousel.propTypes = {
  title: PropTypes.string,
};

export default function AuthCarousel({ title }) {
  const theme = useTheme();

  const carouselSettings = {
    autoplaySpeed: 5000,
    fade: true,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      rounded: true,
      sx: {
        left: 0,
        right: 0,
        zIndex: 9,
        bottom: 80,
        mx: 'auto',
        position: 'absolute',
      },
    }),
  };

  return (
    <RootStyle>
      <BgOverlay />

      {/* <Typography
        variant="h2"
        sx={{
          p: 10,
          bottom: 80,
          zIndex: 10,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        {title}
      </Typography> */}

      <Slider {...carouselSettings}>
        {imgArray.map((img) => (
          <Box 
          // key={img}
          >
            <Image
              // alt={img}
              src={`${img}`}
              sx={{ width: 1, height: '100vh' }}
            />
          </Box>
        ))}
      </Slider>
    </RootStyle>
  );
}

const imgArray = ["https://i.pinimg.com/originals/e4/a9/a8/e4a9a8d36f2931f075681cb551458aaa.jpg", "https://c4.wallpaperflare.com/wallpaper/29/1013/318/black-car-car-mercedes-benz-mercedes-wallpaper-preview.jpg"];
