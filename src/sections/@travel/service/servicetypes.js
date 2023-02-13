import PropTypes from 'prop-types';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Container';
import Serviceclassdata from '../../../../_data/mock/serviceclassdata';
import { Icon } from '@iconify/react';
import { Image } from '../../../components';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';

function servicetypes() {
  const router = useRouter();

  return (
    <Box>
      {Serviceclassdata.map((item) => (
        <Box key={item.id} sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
          <Grid item xs={12} sm={12}>
            <Typography
              variant="h4"
              sx={{
                mt: 5,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              color={'darkgrey'}
              fontSize="0.875rem"
              sx={{
                fontSize: {
                  xs: '10px',
                  sm: '12px',
                  md: '14px',
                  lg: '16px',
                  xl: '18px',
                },
              }}
            >
              {item.title2}
            </Typography>
            <Box display="flex" mt="4" mb="4" alignItems={'center'}>
              <Box
                display="flex"
                alignItems={'center'}
                gap={1}
                sx={{ display: 'flex', mr: 5, mt: 2, mb: 2 }}
              >
                <Icon icon="pepicons-pop:persons" />
                <h5 color="darkgrey" s>
                  {item.persons}
                </h5>
              </Box>
              <Box
                display="flex"
                alignItems={'center'}
                gap={1}
                sx={{ display: 'flex', mr: 5, mt: 2, mb: 2 }}
              >
                <Icon icon="ph:bag-fill" />
                <h5 sx={{ ml: 1, mr: 2 }}>{item.luggage}</h5>
              </Box>
            </Box>
            <hr></hr>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid xs={12}>
              <Box>
                <Typography
                  sx={{
                    mt: 2,
                    color: '#64666b',
                    display: 'flex',
                    fontSize: '16px',
                    fontWeight: '300',
                    lineHeight: '24px',
                    mb: '16px',
                  }}
                >
                  <Box mr="4px" color="black">
                    <h3>
                      <Icon icon="ic:twotone-access-time-filled" />
                    </h3>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: '12px',
                        sm: '14px',
                        md: '16px',
                        lg: '18px',
                        xl: '20px',
                      },
                    }}
                  >
                    {item.time}
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    color: '#64666b',
                    display: 'flex',
                    fontSize: '16px',
                    fontWeight: '300',
                    lineHeight: '24px',
                    mb: '16px',
                  }}
                >
                  <Box mr="4px" color="black">
                    <h3>
                      <Icon icon="fa-solid:award" />
                    </h3>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: '12px',
                        sm: '14px',
                        md: '16px',
                        lg: '18px',
                        xl: '20px',
                      },
                    }}
                  >
                    {item.meet}{' '}
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    color: '#64666b',
                    display: 'flex',
                    fontSize: '16px',
                    fontWeight: '300',
                    lineHeight: '24px',
                    mb: '16px',
                  }}
                >
                  <Box mr="4px" color="black">
                    <h3>
                      <Icon icon="radix-icons:cross-circled" />
                    </h3>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: '12px',
                        sm: '14px',
                        md: '16px',
                        lg: '18px',
                        xl: '20px',
                      },
                    }}
                  >
                    {item.cancel}{' '}
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    color: '#64666b',
                    display: 'flex',
                    fontSize: '16px',
                    fontWeight: '300',
                    lineHeight: '24px',
                    mb: '16px',
                  }}
                >
                  <Box mr="4px" color="black">
                    <h3>
                      <Icon icon="fa6-solid:glass-water-droplet" />
                    </h3>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: '12px',
                        sm: '14px',
                        md: '16px',
                        lg: '18px',
                        xl: '20px',
                      },
                    }}
                  >
                    {item.water}{' '}
                  </Typography>
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid
              item
              xs={12}
              width="25"
              sx={{
                display: {
                  xs: 'flex',
                  sm: 'flex',
                  md: 'flex',
                  lg: 'flex',
                  xl: 'flex',
                },
                width: {
                  xs: '100%',
                },
                mt: {
                  xs: 6,
                  sm: 7,
                  md: 8,
                  lg: 9,
                  xl: 10,
                },
              }}
            >
              <Box>
                <Image src={item.image.src} />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                display: 'flex',
                width: '80%',
                backgroundColor: 'lightgray',
                mt: 3,
                py: 3,
                borderRadius: 3,
                // padding: '35px',
                alignItems: 'center',
                flexDirection: { xs: 'column', md: 'row' },
              }}
            >
              <Box ml="3" justifyContent="center" display="inline">
                <Grid sx={{}}>
                  <Grid item xs={12} >
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: {
                          xs: '14px',
                          sm: '18px',
                          md: '20px',
                          lg: '22px',
                          xl: '24px',
                        },
                      }}
                    >
                      {' '}
                      {item.rate}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: '10px',
                          sm: '12px',
                          md: '14px',
                          lg: '16px',
                          xl: '18px',
                        },
                      }}
                    >
                      {item.cmt}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      size="small"
                      type="submit"
                      sx={{
                        mr: 3,
                      }}
                    >
                      Select
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
}

export default servicetypes;
