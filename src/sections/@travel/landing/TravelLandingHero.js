import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useRef, useEffect, useState } from 'react';
import * as React from 'react';
// icons
import starIcon from '@iconify/icons-carbon/star';
import timeIcon from '@iconify/icons-carbon/time';
import currencyIcon from '@iconify/icons-carbon/currency';
import locationIcon from '@iconify/icons-carbon/location';
// @mui
import { alpha, useTheme } from '@mui/material/styles';

import { Stack, Typography, Button, Avatar, Box, Tabs, Tab, Container } from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';
// @utils
import landing from '../../../assets/images/landingImg.jpg';
import { fCurrency } from '../../../utils/formatNumber';
import CheckoutForm from '../../../../pages/travel/checkout1/index';
import CheckoutForm2 from '../../../../pages/travel/checkout2/index';
// components
import {
  Image,
  Iconify,
  BgOverlay,
  TextMaxLine,
  CarouselDots,
  TextIconLabel,
} from '../../../components';

// ----------------------------------------------------------------------

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TravelLandingHero({ tours }) {
  const theme = useTheme();
  const [selected, setSelected] = useState(1);
  const [carouselContent, setCarouselContent] = useState();
  const [carouselThumbnail, setCarouselThumbnail] = useState();
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);

  useEffect(() => {
    setCarouselContent(carouselRef1.current || undefined);
    setCarouselThumbnail(carouselRef2.current || undefined);
  }, [selected]);

  const carouselContentSettings = {
    initialSlide: selected,
    dots: true,
    speed: 1440,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current, next) => setSelected(next),
    ...CarouselDots({
      sx: {
        display: { md: 'none' },
        left: 0,
        right: 0,
        zIndex: 9,
        bottom: 64,
        position: 'absolute',
      },
    }),
  };

  const carouselThumbnailSettings = {
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    vertical: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
    swipeToSlide: true,
    focusOnSelect: true,
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current, next) => setSelected(next),
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <ContentItem />

        {/* <Stack
        spacing={2}
        justifyContent="center"
        sx={{
          top: 0,
          height: 1,
          maxWidth: 220,
          position: 'absolute',
          display: { xs: 'none', md: 'flex' },
          right: { xs: 20, lg: '6%', xl: '10%' },
        }}
      >
        {!!tours.length && (
          <Slider {...carouselThumbnailSettings} asNavFor={carouselContent} ref={carouselRef2}>
            {tours.map((tour, index) => (
              <ThumbnailItem key={tour.id} tour={tour} isSelected={selected === index} />
            ))}
          </Slider>
        )}
      </Stack> */}
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

ContentItem.propTypes = {
  tour: PropTypes.shape({
    duration: PropTypes.string,
    heroImg: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.number,
    ratings: PropTypes.number,
    slug: PropTypes.string,
  }),
};

function ContentItem({ tour }) {
  const theme = useTheme();
  // const { slug, location, heroImg, ratings, price, duration } = tour;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        textAlign: 'center',
        position: 'relative',
        color: 'common.white',
        justifyContent: 'flex-end',
      }}
    >
      {/* Content */}
      <Stack
        // marginRight="10%"
        sx={{
          zIndex: 9,
          py: 0,
          position: { md: 'absolute' },
          width: '100%'
        }}
      >
        {/* <Typography variant="overline" sx={{ color: 'secondary.main', mb: 5 }}>
          {location}
        </Typography> */}

        {/* <Typography variant="h1" sx={{ maxWidth: 480 }}>
          {slug}
        </Typography> */}

        {/* <Stack
          alignItems="center"
          spacing={{ xs: 2.5, md: 5 }}
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            my: 5,
            '& svg': {
              mr: 1,
              width: 24,
              height: 24,
              color: 'primary.main',
            },
          }}
        >
          {/* <TextIconLabel
            icon={<Iconify icon={timeIcon} />}
            value={duration}
            sx={{ typography: 'subtitle2' }}
          />

          <TextIconLabel
            icon={<Iconify icon={starIcon} />}
            value={`${ratings} reviews`}
            sx={{ typography: 'subtitle2' }}
          />

          <TextIconLabel
            icon={<Iconify icon={currencyIcon} />}
            value={`Starting at ${fCurrency(price)}`}
            sx={{ typography: 'subtitle2' }}
          />
        </Stack> */}

        {/* <Button variant="contained" size="large">
          Book Now
        </Button> */}
        <Container>
          <Box
            sx={{
              textAlign: 'left',
              width: { xs: '100%', sm: '440px' },
              marginLeft: {sm:'auto'},
              marginTop: { xs: '30%', sm: '-50px' },
              height: 'auto',
              backgroundColor: 'white',
              borderRadius: '4px',
              boxShadow: 12,
              // padding: '0px',
              overflow: 'hidden',
              boxShadow: '0 12px 28px #64666b',
            }}
          >
            <Box sx={{}}>
              {/* <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                TabIndicatorProps={{ sx: { backgroundColor: 'transparent' } }}
                sx={{
                  '& button': {
                    backgroundColor: '#f0f2f7',
                    width: '50%',
                    marginRight: '0 !important',
                  },
                  '& button:focus': {
                    backgroundColor: 'white',
                    width: '50%',
                    marginRight: '0 !important',
                  },
                  '& .Mui-selected': {
                    backgroundColor: 'white !important',
                  },
                }}
              >
                <Tab label="One Way" {...a11yProps(0)} />
                <Tab label="By the hour" {...a11yProps(1)} />
              </Tabs> */}
            </Box>
            {/* <TabPanel value={value} index={0} sx={{}}>
              <CheckoutForm />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <CheckoutForm2 />
            </TabPanel> */}
          </Box>
        </Container>
      </Stack>

      {/* Background */}
      <Box
        sx={{
          width: 1,
          height: 1,
          position: {
            xs: 'absolute',
            md: 'relative',
          },
        }}
      >
        {/* <BgOverlay
          startColor={alpha(theme.palette.grey[900], 0.48)}
          endColor={alpha(theme.palette.grey[900], 0.48)}
        />
        <BgOverlay /> */}
        <Image
          alt="hero"
          src={landing.src}
          sx={{
            height: { xs: 1 },
            bgcolor: 'transparent',
          }}
        />
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

// ThumbnailItem.propTypes = {
//   tour: PropTypes.shape({
//     heroImg: PropTypes.string,
//     location: PropTypes.string,
//     continent: PropTypes.string,
//   }),
//   isSelected: PropTypes.bool,
// };

// function ThumbnailItem({ tour, isSelected }) {
//   const theme = useTheme();
//   const { continent, heroImg, location } = tour;

//   return (
//     <Stack
//       direction="row"
//       alignItems="center"
//       spacing={2.5}
//       sx={{
//         px: 2,
//         py: 1.5,
//         cursor: 'pointer',
//         color: 'common.white',
//         ...(isSelected && {
//           borderRadius: 2,
//           ...cssStyles().bgBlur({
//             blur: 8,
//             opacity: 0.08,
//             color: theme.palette.common.white,
//           }),
//         }),
//       }}
//     >
//       <Avatar src={heroImg} sx={{ width: 48, height: 48 }} />
//       <Stack spacing={0.5}>
//         <TextMaxLine variant="h6" line={1}>
//           {location}
//         </TextMaxLine>
//         <TextIconLabel
//           icon={
//             <Iconify
//               icon={locationIcon}
//               sx={{ width: 20, height: 20, mr: 1, color: 'primary.main' }}
//             />
//           }
//           value={
//             <TextMaxLine variant="caption" line={1} sx={{ opacity: 0.48 }}>
//               {continent}
//             </TextMaxLine>
//           }
//         />
//       </Stack>
//      </Stack>
//   );
// }
