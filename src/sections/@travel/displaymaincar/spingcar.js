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
import Contactinfo from './contactinfo';

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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [images, setImages] = useState([]);

    // Load the images on component mount
    useEffect(() => {
        const fileNames = [];

        for (let i = 1; i <= 36; i++) {
            const fileName = `car-${i}.png`;
            fileNames.push(fileName);
        }

        const images = fileNames.map((imageName) =>
            require(`../Car-Images/${imageName}`)
        );

        setImages(images);
    }, []);

    // Set the interval to change the image
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 300);
        return () => clearInterval(interval);
    }, [images]);


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
        {/* <Container sx={{ position: 'relative' }}> */}
          <Box
            
            position= 'relative'
            justifyContent="center"
            sx={{
              boxShadow: '0 12px 28px #64666b',
              borderRadius: '8px',
              // marginTop: '20%',
              width: '100%',
              // height: '50vh',
              
            }}
          >
             <div className={"animate-card"}>
                <img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt={`Image ${currentImageIndex}`}
                    style={{
                        opacity: currentImageIndex === 0 ? 1 : 0,
                    }}
                />
                <img
                    key={currentImageIndex + 1}
                    src={images[(currentImageIndex + 1) % images.length]}
                    alt={`Image ${(currentImageIndex + 1) % images.length}`}
                    style={{
                        opacity: currentImageIndex === 0 ? 0 : 1,
                    }}
                />
            </div>

            
            
            
            
                      </Box>
        {/* </Container> */}
      </Grid>
      <Grid item xs={12} sm={5}>
        <Contactinfo />
      </Grid>
    </Grid>
  );
}

// ----------------------------------------------------------------------
