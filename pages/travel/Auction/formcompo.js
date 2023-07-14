import PropTypes from 'prop-types';
import * as React from 'react';
import userIcon from '@iconify/icons-carbon/user';
import { useRouter } from 'next/router';
import { Grid, Box, Typography, Container } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Apply from '../../../src/assets/Images/apply.jpg';
import Applying from '../../../src/assets/Images/applying.jpg';

export default function Landing({bidId}) {
  const router = useRouter();

  return (
    <>
      <Grid container spacing={2} justifyContent="center" mt={3}>
        <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
          <Box textAlign="center">
            <Typography variant="h2">Auction</Typography>
            <Typography variant="h4">Join the Excitement: Bid on Cars</Typography>
            <Box pl="10%" pr="10%">
              <Typography>
                Enter your details below to join the excitement and bid on classic/vintage cars.
                Don't miss out on the chance to bid on cars – fill out the form below to get
                started. Ready to participate in the bidding action? Simply complete the form below
                and start bidding on cars. Take part in our auction and bid on some of the finest
                vehicals in country. Complete the entry form below to join the excitement.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} display="flex" alignItems="center">
          <Box
            ml={{ xs: 2, sm: 4 }}
            mr={{ xs: 2, sm: 4 }}
            sx={{
              p: 3,
              boxShadow: '0 1px 10px #64666B',
              borderRadius: '8px',
              m: 1,
              textAlign: 'center',
              width: '100%',
              height: '100%',
              backgroundImage: `url(${Applying.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'left',
            }}
          >
            <Typography variant="h3" pb={2}>
              Verification Form
            </Typography>
            <Typography variant="h4" pb={6}>
              Verification form for vehicle verification.
            </Typography>
            <LoadingButton
               onClick={() => router.push({
                pathname: '/travel/Auction/formmini',
              })}
              sx={{
                border: '1px solid #FFBE00 ',
                color: '#FFBE00',
                '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
              }}
            >
              Apply
            </LoadingButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} display="flex" alignItems="center">
          <Box
            ml={{ xs: 2, sm: 4 }}
            mr={{ xs: 2, sm: 4 }}
            sx={{
              p: 3,
              backgroundColor: 'white',
              boxShadow: '0 1px 10px #64666B',
              borderRadius: '8px',
              m: 1,
              textAlign: 'center',
              width: '100%',
              height: '100%',
              backgroundImage: `url(${Apply.src})`,
              backgroundSize: '70%',
              backgroundPosition: 'left',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Typography variant="h3" pb={2}>
              Post for Auction
            </Typography>
            <Typography variant="h4" pb={6}>
              Posting form a vehicle for auction.
            </Typography>
            <LoadingButton
              onClick={() => {
                router.push({
                  pathname: '/travel/Auction/formmain/',
                  query: { id: bidId }
                });
              }}
              sx={{
                border: '1px solid #FFBE00 ',
                color: '#FFBE00',
                '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
              }}
            >
              Apply
            </LoadingButton>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

// ----------------------------------------------------------------------
