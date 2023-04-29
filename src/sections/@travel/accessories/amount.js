import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { Item, Order } from '../accessories';
import img1 from '../../../Assets/Images/FordMinivan.jpg';
import { Icon } from '@iconify/react';

import {
  FormControlLabel,
  FormControl,
  Typography,
  Box,
  Radio,
  Container,
  Grid,
  Stack,
  Divider,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
// ----------------------------------------------------------------------

const items = [
  {
    image: img1,
    heading: 'Honda',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
  },
  {
    image: img1,
    heading: 'Honda',
    city: 'Lahore',
    year: '2022',
    distance: '2000km',
    fuel: 'Petrol',
    cc: '1200cc',
    type: 'Manual',
    price: '20 lac',
  },
];

export default function Shippinginfo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Container sx={{ width: '100%', textAlign: 'left' }}>
        <Typography variant="h3" mb={3} mt={6}>
          Payment
        </Typography>
        <Grid spacing={2} container justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Select Payment Method</Typography>
            <FormControl>
              {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
              <FormControlLabel value="cash" control={<Radio checked />} label="Cash on Delivery" />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Cart</Typography>
            <Item item={items} />
            <Typography variant="h4">Order Summary</Typography>
            <Stack direction="row" style={{ justifyContent: 'space-between' }}>
              <Typography variant="h6">Subtotal</Typography>
              <Typography variant="h4" color="#CE9A00">
                PKR 100
              </Typography>
            </Stack>
            <Stack direction="row" style={{ justifyContent: 'space-between' }}>
              <Typography variant="h6">Shipping</Typography>
              <Typography variant="h4" color="#CE9A00">
                PKR 100
              </Typography>
            </Stack>
            <Divider />
            <Stack mb={4} direction="row" style={{ justifyContent: 'space-between' }}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h4" color="#CE9A00">
                PKR 100
              </Typography>
            </Stack>
            <Button
              sx={{
                width: '100%',
                float: 'right',
                backgroundColor: '#212B36',
                color: 'white',
                mb: 4,
                '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
              }}
              onClick={handleClickOpen}
            >
              Place Order
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              sx={{ textAlign: 'center' }}
            >
              <DialogTitle id="alert-dialog-title" variant="h2" color="#CE9A00">
                {' '}
                <Icon icon="il:heart" />
              </DialogTitle>
              <DialogContent>
                <DialogContentText variant="h3" id="alert-dialog-description" color="black">
                  Thank You!
                </DialogContentText>
                <DialogContentText variant="h5" id="alert-dialog-description" color="black" mt={2}>
                  Your Order has been placed.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  textAlign="center"
                  onClick={handleClose}
                  sx={{
                    backgroundColor: '#212B36',
                    color: 'white',
                    '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                  }}
                >
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
