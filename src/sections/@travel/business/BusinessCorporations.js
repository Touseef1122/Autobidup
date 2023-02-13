import PropTypes from 'prop-types';
import * as React from 'react';
// @mui

import { Typography, List, Box, ListItem, Container, Grid } from '@mui/material';
// utils
// components
import { Image, TextMaxLine } from '../../../components';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

BusinessCorporations.propTypes = {
  images: PropTypes.array.isRequired,
};
export default function BusinessCorporations({ images }) {
  //   const theme = useTheme();

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Box>
        <Container>
          {images?.map((value) => (
            <Grid
              container
              row={{ xs: 1 }}
              columnSpacing={{ xs: 1, sm: 2 }}
              spacing={1}
              sx={{
                justifyContent: 'space-between',
                width: '100%',
                height: '100%',
                margin: '28px 0',
              }}
            >
              {value.direction === 'left' && (
                <Grid item xs={12} md={6} sx={{ width: '50%', position: 'relative' }}>
                  <Box key={value.title}>
                    <Image src={value.image.src} width="100%" height="60%" layout="responsive" />
                  </Box>
                </Grid>
              )}

              <Grid item xs={12} md={6} sx={{ width: '50%' }}>
                <Box sx={{px: { md: 4 } }}>
                  <Typography fontSize="25px"> {value.title} </Typography>
                  <Typography sx={{ fontSize: '16px' }} asLink persistent>
                    {' '}
                    {value.description}{' '}
                  </Typography>

                  {value.para === 'true' && (
                    <Box>
                      <Typography sx={{ fontSize: '14px',mt:1 }} asLink persistent>
                        {' '}
                        {value.description2}{' '}
                      </Typography>
                      <TextMaxLine variant="h6" sx={{mt:1}}> {value.title2} </TextMaxLine>
                      <Typography sx={{ fontSize: '14px' }} asLink persistent>
                        {' '}
                        {value.description3}{' '}
                      </Typography>
                    </Box>
                  )}

                  {value.exist === 'true' && (
                    <Box>
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
                        <ListItem disablePadding>{value.list4}</ListItem>
                        <ListItem disablePadding>{value.list5}</ListItem>
                        <ListItem disablePadding>{value.list6}</ListItem>
                      </List>
                      <LoadingButton
                        // fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        sx={{ mr: 3 }}
                        onClick={() => router.push('#')}
                      >
                        {value.link}
                      </LoadingButton>
                    </Box>
                  )}
                  {value.exist === 'false' && (
                    <Box>
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
                        <ListItem disablePadding>{value.list4}</ListItem>
                      </List>
                    </Box>
                  )}
                </Box>
              </Grid>
              {value.direction === 'right' && (
                <Grid item xs={12} md={6} sx={{ width: '50%', position: 'relative' }}>
                  <Box key={value.title}>
                    <Image src={value.image.src} width="100%" height="60%" layout="responsive" />
                  </Box>
                </Grid>
              )}
            </Grid>
          ))}
        </Container>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------
