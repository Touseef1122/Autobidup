// import { useRef, useState } from 'react';
import React, { useRef, useEffect, useState } from 'react';

// icons
import playIcon from '@iconify/icons-carbon/play';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Stack, Box, Card } from '@mui/material';
// hooks
import { useBoundingClientRect, useResponsive } from '../../../hooks';
// _data
import _mock from '../../../../_data/mock';
import { useRouter } from 'next/router';

// components
import { SvgIconStyle, Image, TextIconLabel, Iconify, PlayerWithButton } from '../../../components';

// ----------------------------------------------------------------------
import SUMMARY from './Images';
// import SUMMARY from '../../../../_data/mock/data';
import { addScaleCorrector } from 'framer-motion';
import { summary } from '_data/mock/forChauffeursData';
// import data from '../accessories/'

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------
// TravelLandingCars.propTypes = {
//   link: PropTypes.array,
// };
export default function TravelLandingCars() {
  const isDesktop = useResponsive('up', 'md');
  const router = useRouter();
 
  // console.log(props.link)
  const containerRef = useRef(null);
  const container = useBoundingClientRect(containerRef);

  const [openVideo, setOpenVideo] = useState(false);

  const handleOpenVideo = () => {
    setOpenVideo(true);
  };

  const handleCloseVideo = () => {
    setOpenVideo(false);
  };

  const offsetLeft = container && container.left + 20;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://autobidup.pythonanywhere.com/store/all_products/');
        const jsonData = await response.json();
        setData(jsonData);
        console.log("created")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <RootStyle>
        <Typography variant="h3" textAlign="center" alignItems="center">
          AutoBidUp Accessories Store
        </Typography>

        <Container sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              display: 'grid',
              gap: { xs: 2, md: 0 },
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              },
            }}
          >
            {data.map((item) => (
              <div key={item.pid}>
                {/* if (item.ptype == 1) */}
                <Box 
                // onClick={() => router.push()}
                sx={{
                  transition: 'all 0.3s',
                  cursor:"pointer",
                  mt: 8,
                  '&: hover': {
                    // pt: '40px',
                    transform: 'scale(0.92)',
                    transaction: '.3s',
                    color: '#FFBE00',
                  },
                  
                }}>
                  <Image
                    src={item.images.src}
                    sx={{
                      width: '100%',
                      //  height: '58%',
                    }}
                  />
                  <Box>
                    <Typography sx={{ mb: -1 }}>{item.pname}</Typography>
                    <Typography>{item.price}</Typography>
                  </Box>
                </Box>
              </div>
            ))}
          </Box>
        </Container>
      </RootStyle>
      <PlayerWithButton open={openVideo} onClose={handleCloseVideo} videoPath={_mock.video} />
    </>
  );
}
