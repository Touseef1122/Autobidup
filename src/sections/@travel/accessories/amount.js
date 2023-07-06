import PropTypes from 'prop-types';

import { useRouter } from 'next/router';
import { Item } from '../accessories';
import { Icon } from '@iconify/react';
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';
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

var items = [];

export default function Shippinginfo({post,price}) {
  const [open, setOpen] = React.useState(false);
  console.log(post)
  useState(() => {
    if (typeof window !== 'undefined') {
      if (JSON.parse(localStorage.getItem('cartItems')).length != 0) {
        items = JSON.parse(localStorage.getItem('cartItems'));
        // totalPrice = items.reduce((total, item) => {
        //   return total + (parseFloat(item?.price) || 0);
        // }, 0);
        console.log(items);
      }
    }
  }, []);

  const handleClickOpen = async () => {
    try {
      console.log('form is submiting');
      const response = await fetch('https://autobidup.pythonanywhere.com/store/order/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(items),
        xhrFields: {
          withCredentials: true,
        },
      });

      if (response.ok) {
        // API call successful
        const responseData = await response.json();
        // Handle the response data as needed
        // localStorage.setItem('firstname', responseData.firstName);
        // localStorage.setItem('username', responseData.username);

        // // Store JWT token in document cookie
        // document.cookie = `jwt=${responseData.jwt}; path=/`;
        console.log('response data', responseData);
        console.log('Item bought succesfully');
        setOpen(true)
        // 
      } else {
        // API call failed
        const errorData = await response.json();
        // Handle the error data as needed
      }
    } catch (error) {
      // Error occurred during the API call
      console.error(error);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    router.push('/');
  };

  
    var finalPrice = price + 100;


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
                {price}
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
               {finalPrice}
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
