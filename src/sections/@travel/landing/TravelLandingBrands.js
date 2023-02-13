import { styled, alpha } from '@mui/material/styles';
import { Image } from '../../../components';
import { Stack, Grid, Container, Box, Typography } from '@mui/material';
// utils
import cssStyles from '../../../../src/utils/cssStyles';

import brand2 from '../../../assets/images/brand2.png';
import brand3 from '../../../assets/images/brand3.png';
import brand4 from '../../../assets/images/brand4.png';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

// ----------------------------------------------------------------------

export default function TravelLandingBrands() {
  return (
    <RootStyle>
      <Container>
        <Stack
          overflowX="hidden"
          alignItems="center"
          sx={{
            color: 'black',
            textAlign: 'center',
            display: 'grid',
            gap: { md: '5rem' },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'max-content 1fr',
            },
          }}
        >
          <Typography variant="h5" sx={{ mb: { sm: 6 } }}>
            AWARD-WINNING CHAUFFEUR SERVICE
          </Typography>

          <Stack direction="row" spacing={3}>
            <Box>
              <Image
                alt="hero"
                src={brand2.src}
                sx={{
                  width: '100%',
                  bgcolor: 'transparent',
                }}
              />
            </Box>
            <Box>
              <Image
                alt="hero"
                src={brand3.src}
                sx={{
                  width: '100%',
                  bgcolor: 'transparent',
                }}
              />
            </Box>
            <Box>
              <Image
                alt="hero"
                src={brand4.src}
                sx={{
                  width: '100%',
                  bgcolor: 'transparent',
                }}
              />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}
