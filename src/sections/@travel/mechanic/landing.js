import PropTypes from 'prop-types';
import * as React from 'react';
import userIcon from '@iconify/icons-carbon/user';
import { useRouter } from 'next/router';
import { TextIconLabel, Iconify, Image } from '../../../components';
import { Icon } from '@iconify/react';
import landing from '../../../Assets/Images/landing.jpg';

import {
  Grid,
  TableBody,
  TableCell,
  TableContainer,
  TextField,
  Button,
  Stack,
  Container,
  Box,
  Typography,
} from '@mui/material';
import { Overview } from '../tours';
import { LoadingButton } from '@mui/lab';

//--------------------------------------------------------------

// Landing.propTypes = {
//   item: PropTypes.array.isRequired,
// };

export default function Landing() {
  const router = useRouter();

  return (
    <>
      <Image
        alt="hero"
        src={landing.src}
        marginTop={{xs:"10%",sm:"0"}}
      />
      <Grid container spacing={2} justifyContent="center" mt={3} mb={6}>
        <Grid item xs={12} sm={6} md={4} display="flex" alignItems="center" >
          <Box ml={{xs:2,sm:4}} mr={{xs:2,sm:4}} sx={{ p: 3, boxShadow: '0 1px 10px #64666B', borderRadius: '8px', m: 1, textAlign:"center", width:"100%", height:"100%" }}>
            {/* <Image alt={value.title} src={value.image.src} sx={{ width: '100%', height: 'auto' }} /> */}
            <Typography variant="h4" pb={2}>Mechanic</Typography>
            <Typography variant="body1" pb={4}>Request a mechnaic by filling out the form.</Typography>
            <LoadingButton
              onClick={() => router.push('/travel/buysellcar/displaycardetails')}
              sx={{ border:"1px solid #FFBE00 ",color:"#FFBE00", '&:hover': { backgroundColor: '#FFBE00', color:"white" } }}
            >
              Request
            </LoadingButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} display="flex" alignItems="center">
          <Box ml={{xs:2,sm:4}} mr={{xs:2,sm:4}} sx={{ p: 3, boxShadow: '0 1px 10px #64666B', borderRadius: '8px', m: 1,textAlign:"center",width:"100%",height:"100%"  }}>
            {/* <Image alt={value.title} src={value.image.src} sx={{ width: '100%', height: 'auto' }} /> */}
            <Typography variant="h4" pb={2}>Expert</Typography>
            <Typography variant="body1" pb={4}>Contact with an expert for getting any car information.</Typography>
            <LoadingButton
              onClick={() => router.push('/travel/buysellcar/displaycardetails')}
              sx={{ border:"1px solid #FFBE00 ",color:"#FFBE00", '&:hover': { backgroundColor: '#FFBE00', color:"white" } }}
            >
              Contact
            </LoadingButton>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

// ----------------------------------------------------------------------
