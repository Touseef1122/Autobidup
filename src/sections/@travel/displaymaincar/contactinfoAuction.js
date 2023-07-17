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
  Button,
} from '@mui/material';
import { SellerinfoAuction, Sellerinfo } from './';

//--------------------------------------------------------------

export default function Contactinfo({post}) {
  const handleExitRoom = async () => {
    try {
      const response = await fetch(
        'https://autobidup.pythonanywhere.com/bidding/exit_bidding_room',
        {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify({ bids: bid_Id }),
        }
      );

      if (response.ok) {
        // API call successful
        console.log('Bidding room Exit successfully');
        router.push('/')
      } else {
        // API call failed
        console.error('Failed to Enter bidding room');
      }
    } catch (error) {
      console.error('Error during API call:', error);
    }
  };
  return (
    <Box>
      <Box>
        <Typography variant="h3">Honda N Wgn G 2013</Typography>
        <Typography variant="h4" color="#CE9A00">
          PKR 2.10 Crores
        </Typography>

        <Stack direction="row" spacing={1} display="flex" alignItems="center">
          <Icon icon={location} width="1.5vw" vAlign="middle" color="#CE9A00" />
          <Typography fontWeight="bold">Lahore</Typography>
        </Stack>
        <Button
          variant="contained"
          size="large" // Set the size to "large"
          onClick={handleExitRoom} // Call the handleExitRoom function on button click
          target="_blank"
          rel="noopener"
        >
          Exit
        </Button>
      </Box>
      <Sellerinfo />

      <SellerinfoAuction post={post}/>
    </Box>
  );
}

// ----------------------------------------------------------------------
