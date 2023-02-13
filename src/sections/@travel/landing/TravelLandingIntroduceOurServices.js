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

const summary = [
  {
    title: 'Intercity rides',
    description:
      'Your stress-free solution for traveling between cities, with chauffeurs across the globe.',
    URL: 'https://images.ctfassets.net/ov8o7v78mnye/7tbsRr8S3bPurhnVMu8c5Z/e7871ddad020b6a64f70ebf61d594bfa/03.jpg',
    link: 'Learn More',
    path:"/travel/Premium/cityToCity"
  },
  {
    title: 'Chauffeur hailing',
    description:
      'Enjoy the quality of a traditional chauffeur, with the convenience of riding within minutes of booking.',
    URL: 'https://images.ctfassets.net/ov8o7v78mnye/16QDMRylaK2VVkUQbFC727/369c1d7a9a6fa3c1d1d7ef822ee96abe/04.jpg',
    link: 'Learn More',
    path:"/travel/chauffeur-hailing/hailing"
  },
  {
    title: 'Airport transfers',
    description:
      'Breathe easy knowing all rides are 100% carbon neutral, as part of our global carbon offset program — the industry’s first.',
    URL: 'https://images.ctfassets.net/ov8o7v78mnye/1Lwkow9Ac72OdIt2Cy8w5x/7694b3483352cdc7243d033a105f3270/05b.jpg',
    link: 'Learn More',
    path:"/travel/Premium/airportTransfer"
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function TravelLandingIntroduceOurServices() {
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
                md: 'repeat(3, 1fr)',
              },
            }}
          >
            {summary.map((value) => (
              <div key={value.title}>
                <Image
                  src={value.URL}
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
      <PlayerWithButton open={openVideo} onClose={handleCloseVideo} videoPath={_mock.video} />
    </>
  );
}
