import PropTypes from 'prop-types';

import * as React from 'react';

import { useRouter } from 'next/router';

import { Typography, Box, Container } from '@mui/material';
// components
import { Image } from '../../../components';
import { Icon } from '@iconify/react';


// ----------------------------------------------------------------------

BusinessStrategies.propTypes = {
  icons: PropTypes.array.isRequired,
  tours: PropTypes.array.isRequired,
};
export default function BusinessStrategies({ tours, icons }) {
  const router = useRouter();

  return (
    <Container sx={{ width: '100%', overflowX: 'hidden' }}>
          <Box
            sx={{
              textAlign: 'center',
              mt: 4,
              display: 'grid',
              gap: { xs: 8, md: 3 },
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(3, 1fr)',
              },
              // py: 5,
              pl: { md: 2 },
              pr: { md: 2 },
            }}
          >
            {icons?.map((value) => (
              <div key={value.title}>
                <Box sx={{ mb: 5,color:"black" }}>
                  {/* <Icon icon={value.icon} color="#dec588" width= '30%' height='100' mx = 'auto' /> */}
                  <Image src={value.icon.src} sx={{ width: '30%', height: '100', mx: 'auto' }} />
                  <Typography fontSize="22px" fontWeight="bold" sx={{ mt: 3, mb: 2 }}>
                    {value.title}
                  </Typography>
                  <Typography fontSize="16px">
                    {value.description}
                  </Typography>
                </Box>
              </div>
            ))}
          </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------
