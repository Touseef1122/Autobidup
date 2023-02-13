import { useRef, useState } from 'react';
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
import { addScaleCorrector } from 'framer-motion';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function TravelLandingCars() {
  const isDesktop = useResponsive('up', 'md');
  const router = useRouter();

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

  return (
    <>
      <RootStyle>
        <Typography variant="h3" textAlign="center" alignItems="center">
          Royal Fleet's Luxury
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
            {SUMMARY.map((item) => (
              <div key={item.id}>
                <Box 
                onClick={() => router.push(item.path)}
                sx={{
                  transition: 'all 0.3s',
                  cursor:"pointer",
                  mt: 8,
                  '&: hover': {
                    // pt: '40px',
                    transform: 'scale(0.92)',
                    transaction: '.3s',
                    color: '#c49a52',
                  },
                  
                }}>
                  <Image
                    src={item.image.src}
                    sx={{
                      width: '100%',
                      // height: '58%',
                    }}
                  />
                  <Box>
                    <Typography sx={{ mb: -1 }}>{item.title}</Typography>
                    {/* <Typography>{item.title2}</Typography> */}
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
