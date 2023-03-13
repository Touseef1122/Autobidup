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
  Divider,
  Stack,
  Container,
  Box,
  Typography,
} from '@mui/material';
import { Overview } from '../../../../pages/travel/tours';

//--------------------------------------------------------------
const comments = [
  {
    name: 'Ali Khan',
    text: 'Does AC works?',
    icon: userIcon,
  },
  {
    name: 'Saim Asim',
    text: 'Nice',
    icon: userIcon,
  },
];

Caritemlist.propTypes = {
  item: PropTypes.array.isRequired,
};

export default function Caritemlist({ item }) {
  const router = useRouter();

  return (
    <Box   onClick={() => router.push('/travel/buysellcar/BiddingDetails')}
     sx={{
      // textAlign: 'center',
      display: 'grid',
      gap: { xs: 8, md: 3 },
      gridTemplateColumns: {
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
      },
      // py: 5,
      pl: { sm: 2 },
      pr: { sm: 2 },
    }}>
    {item.map((value) => (
      <Box sx={{ p: 3, boxShadow: '0 1px 10px #64666B', borderRadius: '8px',mb:1 }}>
        {/* <Grid container spacing={4} justifyContent="center" >
          <Grid item xs={12} sm={4} display="flex" alignItems="center"> */}
            <Image alt={value.title} src={value.image.src} sx={{ width: '100%', height: 'auto' }} />
          {/* </Grid>
          <Grid item xs={12} sm={8}> */}
            <Typography variant="h4">{value.heading}</Typography>
            <Typography variant="h6">{value.city}</Typography>
            <Stack direction="row" justifyContent='space-between'>
              <Typography variant="body3" sx={{ display: { xs: 'none', sm: 'block' } }}>{value.year}</Typography>
              <Typography variant="body3" sx={{ display: { xs: 'none', sm: 'block' } }}>{value.distance}</Typography>
              <Typography variant="body3" sx={{ display: { xs: 'none', sm: 'block' } }}>{value.fuel}</Typography>
              <Typography variant="body3" sx={{ display: { xs: 'none', sm: 'block' } }}>{value.cc}</Typography>
              <Typography variant="body3" sx={{ display: { xs: 'none', sm: 'block' } }}>{value.type} </Typography>
            </Stack>
            <Typography variant="h4" color="#CE9A00"> PKR {value.price}</Typography>
          {/* </Grid>
        </Grid> */}
      </Box>
    ))}
  </Box>
  );
}

// ----------------------------------------------------------------------
