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
import { SvgIconStyle, Image, TextIconLabel, Iconify, PlayerWithButton } from '../../../components';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    title: 'Safety',
    description:
      'The same trusted Health & Safety Standards and trained professionals at the wheel, but with added convenience.',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_popularity.svg',
  },
  {
    title: 'Competitive rates',
    description:
      'With set distance-based rates and no surge pricing you can, for example, hail a chauffeur in New York City for as little as $18.',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_secure_payment.svg',
  },
  {
    title: 'Sustainable travel',
    description:
      'Breathe easy knowing all rides are 100% carbon neutral, as part of our global carbon offset program — the industry’s first.',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_reputation.svg',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HailingIntroduction() {
  const isDesktop = useResponsive('up', 'md');

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
        {/* <Container ref={containerRef}>
          <Stack
            spacing={3}
            sx={{
              maxWidth: 480,
              mx: { xs: 'auto', md: 'unset' },
              textAlign: { xs: 'center', md: 'unset' },
            }}
          >
            <Typography variant="h2">Explore A Different Way To Travel</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Cras ultricies mi eu turpis hendrerit fringilla. Nulla consequat massa quis enim.
            </Typography>
          </Stack>
        </Container> */}

        {/* <Box
          sx={{
            position: 'relative',
            my: { xs: 8, md: 10 },
            ml: { md: `${offsetLeft}px` },
          }}
        >
          <Card
            sx={{
              p: 5,
              m: 5,
              top: 0,
              left: 0,
              zIndex: 9,
              position: 'absolute',
              maxWidth: { sm: 360 },
              right: { xs: 0, sm: 'unset' },
              bottom: { xs: 0, sm: 'unset' },
              textAlign: { xs: 'center', sm: 'unset' },
            }}
          >
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Device
            </Typography>
            <Typography variant="h3" sx={{ mt: 2, mb: 3 }}>
              The More Important the Work
            </Typography>
            <TextIconLabel
              icon={<Iconify icon={playIcon} sx={{ width: 24, height: 24, mr: 1 }} />}
              value="Watch Video"
              onClick={handleOpenVideo}
              justifyContent={{ xs: 'center', sm: 'unset' }}
              sx={{
                cursor: 'pointer',
                color: 'primary.main',
                typography: 'subtitle1',
                '&:hover': { opacity: 0.72 },
              }}
            />
          </Card> 
           <Image
            alt="cover"
            src={_mock.image.travelLarge(3)}
            width={1600}
            height={isDesktop ? 900 : 1600}
            ratio={isDesktop ? '16/9' : '1/1'}
          />
        </Box> */}

        <Container sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              display: 'grid',
              gap: { xs: 8, md: 3 },
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)',
              },
            }}
          >
            {SUMMARY.map((value) => (
              <div key={value.title}>
                <SvgIconStyle
                  src={value.icon}
                  sx={{ width: 64, height: 64, mx: 'auto', color: 'primary.main' }}
                />
                <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
                  {value.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {value.description}
                </Typography>
              </div>
            ))}
          </Box>
        </Container>
      </RootStyle>
      <PlayerWithButton open={openVideo} onClose={handleCloseVideo} videoPath={_mock.video} />
      {/* <Container sx={{ mt: 3, mb: 5 }}>
        <Typography variant="h1" sx={{ mt: 3, mb: 2, textAlign: 'center' }}>
          “New chauffeur-hailing service seeks to challenge Uber, Lyft in city rides”
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
          The Wall Street Journal
        </Typography>
      </Container> */}
    </>
  );
}
