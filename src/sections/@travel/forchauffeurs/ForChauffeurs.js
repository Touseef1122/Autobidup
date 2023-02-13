import PropTypes from 'prop-types';
import * as React from 'react';

import { useRouter } from 'next/router';
import {summary} from '../../../../_data/mock/forChauffeursData';

// @mui

import { Link, Typography, List, Box, ListItem, Grid, Container } from '@mui/material';
// utils
// @utils
import agency from '../../../assets/images/agencyBg.jpg';
// components
import { Image, TextMaxLine } from '../../../components';
import { TravelLandingfull } from '../landing';
import { LoadingButton } from '@mui/lab';
import { BusinessStrategies } from '../business';
// ----------------------------------------------------------------------

ForChauffeurs.propTypes = {
  services: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
  tours: PropTypes.array.isRequired,
};

export default function ForChauffeurs({ tours, icons, services }) {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          alt="hero"
          src={agency.src}
          sx={{
            height: '70vh',
            bgcolor: 'transparent',
            textAlign: 'center',
          }}
        />
        <LoadingButton
          size="large"
          type="submit"
          variant="contained"
          sx={{ position: 'absolute', bottom: '30vh' }}
          onClick={() => router.push('/travel/registerChauffeur')}
        >
          Apply Now
        </LoadingButton>
      </Box>
      <Container>
        <Box sx={{ pl: { md: 8 }, pr: { md: 8 } , pt:6}}>
          <Typography fontSize="50px" fontWeight="bold" textAlign="center" pb="25px">
            Grow your business with Blacklane
          </Typography>
          <Typography fontSize="15px" textAlign="left" color="#181a1f;">
            Blacklane’s app and web portal connect licensed and insured chauffeur partners with a
            global client base of top-quality business travelers. You can fill the gaps in your
            schedule and we could even become your main volume-fulfillment stream. Our competitive
            pricing is regularly benchmarked to local market rates, and our comprehensive
            <Link
              onClick={() => router.push('')}
              sx={{ color: 'black', textDecoration: 'underline', fontWeight: 'bold' }}
            >
              {' '}
              health and safety standards{' '}
            </Link>
            keep your chauffeurs safe and let guests travel with confidence.
          </Typography>
          
          <BusinessStrategies icons={summary}/>

          {tours.map((value) => (
            <Grid
              container
              row={{ xs: 1 }}
              columnSpacing={{ xs: 1, sm: 2 }}
              spacing={1}
              sx={{
                justifyContent: 'space-between',
                width: '100%',
                height: '100%',
                margin: '48px 0',
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
                <Box sx={{  px: { md: 5 } }}>
                  <TextMaxLine fontSize="30px"> {value.title} </TextMaxLine>
                  <Typography sx={{ fontSize: '13px' }} asLink persistent>
                    {' '}
                    {value.point}{' '}
                  </Typography>
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
                    {value.exist === 'true' && <ListItem disablePadding>{value.list4}</ListItem>}
                  </List>
                  <Typography sx={{ fontSize: '13px' }} asLink persistent>
                    {' '}
                    {value.description}{' '}
                  </Typography>
                  <LoadingButton
                    size="large"
                    type="submit"
                    fontSize="20px"
                    variant="contained"
                    sx={{ mt:3,mr: 3 }}
                    onClick={() => router.push(value.path)}
                  >
                    {value.link}
                  </LoadingButton>
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
        </Box>
      </Container>
      <TravelLandingfull />
      <Container>
        {services.map((value) => (
          <Grid
            container
            row={{ xs: 1 }}
            columnSpacing={{ xs: 1, sm: 2 }}
            spacing={1}
            sx={{
              justifyContent: 'space-between',
              width: '100%',
              height: '100%',
              margin: '48px 0',
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
              <Box sx={{ py: 2, px: { md: 5 } }}>
                <TextMaxLine fontSize="30px"> {value.title} </TextMaxLine>
                <Typography sx={{ fontSize: '13px' }} asLink persistent>
                  {' '}
                  {value.paragraph}{' '}
                </Typography>
                <LoadingButton
                  size="large"
                  type="submit"
                  variant="contained"
                  fontSize="20px"
                  sx={{ mt:2,mr: 3 }}
                  onClick={() => router.push(value.path)}
                >
                  {value.link}
                </LoadingButton>
              </Box>
            </Grid>
          </Grid>
        ))}
        <Box sx={{ pl: { md: 8 }, pr: { md: 8 }, textAlign: 'center' }}>
          <Typography variant="h2" color="black">
            “They treat us as a family and not just as partners and we share an excellent
            personalized relationship with the company. The company listens to us and always
            supports us and helps us.”
          </Typography>
          <Typography fontSize="20px" color="black" p="25px">
            Tarik E., Blacklane chauffeur, Chicago
          </Typography>
          <LoadingButton
            size="large"
            type="submit"
            variant="contained"
            sx={{ mb: 3 }}
            onClick={() => router.push('/travel/registerChauffeur')}
          >
            Apply Now
          </LoadingButton>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
