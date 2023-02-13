import PropTypes from 'prop-types';
import * as React from 'react';

import { useRouter } from 'next/router';

import { Stack, Typography, List, Box, ListItem, Container } from '@mui/material';
// utils

// components
import { Image, TextMaxLine } from '../../../components';

// ----------------------------------------------------------------------

BusinessTravelAgencies.propTypes = {
  //   images: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
  tours: PropTypes.array.isRequired,
};
export default function BusinessTravelAgencies({ tours, icons }) {
  //   const theme = useTheme();
  const router = useRouter();

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Box>
        <Container>
          <Box
            sx={{
              display: 'grid',
              gap: { xs: 1, md: 1 },
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                md: 'repeat(4, 1fr)',
              },
            }}
          >
            {tours.map((value) => (
              <div key={value.title}>
                <Image
                  src={value.image.src}
                  sx={{
                    width: '100%',
                    height: 200,
                    mx: 'auto',
                    borderRadius: '10px',
                    objectFit: 'cover',
                  }}
                />
                <Stack color="black" spacing={0.5} sx={{ p: 2.5, textAlign: 'left' }}>
                  <TextMaxLine fontSize="24px" fontWeight="bold"> {value.title} </TextMaxLine>
                  <Typography sx={{ fontSize: '13px' }} asLink persistent>
                    {' '}
                    {value.description}{' '}
                  </Typography>
                  {value.exist === 'true' && (
                    <List
                      sx={{
                        listStyleType: 'disc',
                        pl: 2,
                        fontSize: '13px',
                        '& .MuiListItem-root': {
                          display: 'list-item',
                        },
                      }}
                    >
                      <ListItem disablePadding>{value.list1}</ListItem>
                      <ListItem disablePadding>{value.list2}</ListItem>
                      <ListItem disablePadding>{value.list3}</ListItem>
                    </List>
                  )}
                  <Typography sx={{ fontSize: '13px' }} asLink persistent>
                    {' '}
                    {value.text}{' '}
                  </Typography>
                  <TextMaxLine
                    fontSize="14px"
                    fontWeight="bold"
                    asLink
                    persistent
                    sx={{ textDecoration: 'underline !important' }}
                    onClick={() => router.push(value.path)}
                  >
                    {value.link}{' '}
                  </TextMaxLine>
                </Stack>
              </div>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------
