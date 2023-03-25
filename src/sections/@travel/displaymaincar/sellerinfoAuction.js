import PropTypes from 'prop-types';
import * as React from 'react';
import userIcon from '@iconify/icons-carbon/user';
import { TextIconLabel, Iconify, Scrollbar } from '../../../components';
import { Icon } from '@iconify/react';

import {
  Table,
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
import { OverviewAuction } from '../../../../src/sections/@travel/tours';

//--------------------------------------------------------------
const comments = [
  {
    name: 'Asad Khan',
    text: '26 lack',
    icon: userIcon,
  },
  {
    name: 'Amir Khan',
    text: '25 lack',
    icon: userIcon,
  },
  {
    name: 'Adil Khan',
    text: '25 lack',
    icon: userIcon,
  },
  {
    name: 'Ayub Khan',
    text: '24 lack',
    icon: userIcon,
  },
  {
    name: 'Asad Khan',
    text: '26 lack',
    icon: userIcon,
  },
  {
    name: 'Amir Khan',
    text: '25 lack',
    icon: userIcon,
  },
  {
    name: 'Adil Khan',
    text: '25 lack',
    icon: userIcon,
  },
  {
    name: 'Ayub Khan',
    text: '24 lack',
    icon: userIcon,
  },
  {
    name: 'Asad Khan',
    text: '26 lack',
    icon: userIcon,
  },
  {
    name: 'Amir Khan',
    text: '25 lack',
    icon: userIcon,
  },
  {
    name: 'Adil Khan',
    text: '25 lack',
    icon: userIcon,
  },
  {
    name: 'Ayub Khan',
    text: '24 lack',
    icon: userIcon,
  },
];

export default function Contactinfo() {
  return (
    <Box
      sx={{
        p: 3,
        boxShadow: '0 1px 10px #64666b',
        borderRadius: '8px',
        mt: 2,
        // height: '300px',
        overflowY: 'scroll',
        height:'350px',
      }}
    >
      {/* <Typography variant="h4" fontWeight="bold">Seller Information</Typography> */}
      <OverviewAuction overviewAuction={comments} />

      <Divider />
      {/* <Stack direction="row" spacing={5} mt={2} display="flex" alignItems="center" justifyContent="center" color="#CE9A00"> */}
      {/* <Box sx={{ p:1 , boxShadow: '0 1px 10px #64666b', borderRadius: '3px', display:"flex", alignItems:"center"}}>
            <Icon icon="material-symbols:add-call" width="30"/>
         </Box>
         <Typography> : 03030000000 </Typography> */}
      {/* <Box sx={{p:1 , boxShadow: '0 1px 10px #64666b', borderRadius: '3px', display:"flex", alignItems:"center"}}>
            <Icon icon="mdi:envelope" width="30"/>
         </Box>
         <Box sx={{p:1 , boxShadow: '0 1px 10px #64666b', borderRadius: '3px', display:"flex", alignItems:"center"}}>
            <Icon icon="ri:facebook-fill" width="30"/>
         </Box> */}
      {/* </Stack> */}
    </Box>
  );
}

// ----------------------------------------------------------------------
