import PropTypes from 'prop-types';
import * as React from 'react';
import userIcon from '@iconify/icons-carbon/user';
import { TextIconLabel, Iconify } from '../../../components';
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
import { Overview } from '../tours';

//--------------------------------------------------------------
const comments = [
  {
    title:"Seller Information",
    name: 'Ali Khan',
    text: 'Member Since Sep 11, 2022',
    icon: userIcon,
  }
];

export default function Contactinfo() {
  return (
    <Box sx={{ p: 3, boxShadow: '0 1px 10px #64666b', borderRadius: '8px',mt:2 }}>
      {/* <Typography variant="h4" fontWeight="bold">Seller Information</Typography> */}
      <Overview overview={comments}/>

      {/* <Divider/> */}
      <Stack direction="row" spacing={5} mt={2} display="flex" alignItems="center" justifyContent="center" color="#CE9A00">
         <Box sx={{ p:1 , boxShadow: '0 1px 10px #64666b', borderRadius: '3px', display:"flex", alignItems:"center"}}>
            <Icon icon="material-symbols:add-call" width="30"/>
         </Box>
         <Box sx={{p:1 , boxShadow: '0 1px 10px #64666b', borderRadius: '3px', display:"flex", alignItems:"center"}}>
            <Icon icon="mdi:envelope" width="30"/>
         </Box>
         <Box sx={{p:1 , boxShadow: '0 1px 10px #64666b', borderRadius: '3px', display:"flex", alignItems:"center"}}>
            <Icon icon="ri:facebook-fill" width="30"/>
         </Box>
      </Stack>
    </Box>
  );
}

// ----------------------------------------------------------------------

