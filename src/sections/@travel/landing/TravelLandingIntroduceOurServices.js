import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

// icons
import playIcon from '@iconify/icons-carbon/play';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Stack, Box, Card } from '@mui/material';
// hooks
import { useBoundingClientRect, useResponsive } from '../../../hooks';
// _data
// import SUMMARY from '../../../../_data/mock/imagesos'; 
// import Imagesos from '../../../../_data/mock/imagesos';


// components
import {
  SvgIconStyle,
  Image,
  TextIconLabel,
  Iconify,
  PlayerWithButton,
  TextMaxLine,
} from '../../../components';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------



const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------
TravelLandingIntroduceOurServices.propTypes = {
  data: PropTypes.array.isRequired,
};
export default function TravelLandingIntroduceOurServices({data}) {
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
        <Typography variant="h3" textAlign="center" alignItems="center" pb="25px">
          Our Services
        </Typography>

        <Container sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                md: 'repeat(4, 1fr)',
              },
            }}
          >
            {data?.map((value) => (
              <div key={value.title}>
                <Image
                  src={value.image.src}
                  sx={{
                    width: '100%',
                    height: 250,
                    mx: 'auto',
                    borderRadius: '10px',
                    objectFit: 'cover',
                  }}
                />
                <Stack >
                  <TextMaxLine variant="h6" asLink persistent>
                    {' '}
                    {value.title}
                  </TextMaxLine>
                  <Typography sx={{ fontSize: '0.875rem' }} asLink persistent>
                    {' '}
                    {value.description}{' '}
                  </Typography>
                  <TextMaxLine variant="h6" asLink persistent onClick={() => router.push(value.path)}>
                    {value.link}{' '}
                  </TextMaxLine>
                </Stack>
              </div>
            ))}
          </Box>
        </Container>
      </RootStyle>
      {/* <PlayerWithButton open={openVideo} onClose={handleCloseVideo} videoPath={_mock.video} /> */}
    </>
  );
}
