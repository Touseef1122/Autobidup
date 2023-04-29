import PropTypes from 'prop-types';
import * as React from 'react';
import location from '@iconify/icons-carbon/location';
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
import { SellerinfoAuction, Sellerinfo } from './';

//--------------------------------------------------------------

export default function Contactinfo() {
  return (
    <Box >
      <Box>
        <Typography variant="h3">Honda N Wgn G 2013</Typography>
        <Typography variant="h4" color="#CE9A00">
          PKR 2.10 Crores
        </Typography>

        <Stack direction="row" spacing={1} display="flex" alignItems="center">
          <Icon icon={location} width="1.5vw" vAlign="middle" color="#CE9A00" />
          <Typography fontWeight="bold">Lahore</Typography>
        </Stack>
      </Box>
      <Sellerinfo />
      
      <SellerinfoAuction />

    </Box>
  );
}

// ----------------------------------------------------------------------