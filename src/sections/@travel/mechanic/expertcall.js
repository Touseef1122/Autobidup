import PropTypes from 'prop-types';
import * as React from 'react';
import userIcon from '@iconify/icons-carbon/user';
import { useRouter } from 'next/router';
import { TextIconLabel, Iconify, Image } from '../../../components';
import { Icon } from '@iconify/react';

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

//--------------------------------------------------------------

Expertcall.propTypes = {
  item: PropTypes.array.isRequired,
};

export default function Expertcall({ item }) {
  const router = useRouter();

  return (
    <Box
     sx={{
      // textAlign: 'center',
      display: 'grid',
      gap: { xs: 8, md: 3 },
      gridTemplateColumns: {
        xs: 'repeat(1, 1fr)',
      },
      // py: 5,
      pl: { sm: 2 },
      pr: { sm: 2 },
    }}>
    {item.map((value) => (
      <Box sx={{ p: 3, boxShadow: '0 1px 10px #64666B', borderRadius: '8px',m:2 }}>
        <Grid container spacing={4} justifyContent="center" >
          <Grid item xs={12} sm={4} display="flex" alignItems="center">
            <Image alt={value.title} src={value.image.src} sx={{ width:'100%',height: '200px',objectFit: "cover",borderRadius:"10%" }} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h3">{value.heading}</Typography>
            <Typography variant="h4" mt={1}>{value.city}</Typography>
            <Stack spacing={2} mt={1} direction="row">
            <Typography variant="h5" >Experience:  </Typography>
            <Typography variant="h6"  color="#CE9A00"> + {value.years} years</Typography>
            </Stack>
            <Stack direction="row" spacing={2} justifyContent='end'>
              <Button sx={{border:"1px solid #FFBE00", color:"#FFBE00",'&:hover': { backgroundColor: '#FFBE00', color:"white" },width:"20%"}} onClick={() => router.push({})}>View Profile</Button>
              <Button sx={{backgroundColor:"black", color:"white",'&:hover': { backgroundColor: '#FFBE00', color:"white" },width:"20%"}}>Call</Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    ))}
  </Box>
  );
}

// ----------------------------------------------------------------------
