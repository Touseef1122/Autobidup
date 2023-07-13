import PropTypes from 'prop-types';
import * as React from 'react';
import { useState,useEffect } from 'react';
import userIcon from '@iconify/icons-carbon/user';
import { useRouter } from 'next/router';
import { TextIconLabel, Iconify, Image } from '../../../components';
import { Icon } from '@iconify/react';

import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Divider,
  Modal,
  Button,
  Box,
  Typography,
} from '@mui/material';
import { Overview } from '../tours';

//--------------------------------------------------------------
// Expertcall.propTypes = {
//   item: PropTypes.array.isRequired,
// };
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  borderRadius: '10px',
  p: 6,
};

let Value = '';
let callsValue = '';
export default function Call({calls}) {
  console.log(calls)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedValue, setSelectedValue] = useState('1'); // Default selected value

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect( () => {
    async function fetchData() {
      try {
        console.log('details fetching');
        const response = await fetch('https://autobidup.pythonanywhere.com/user/customer-details', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (response.ok) {
          // API call successful
          let responseData = await response.json();
          Value = responseData['call_credit'];

          console.log('response data', responseData['call_credit']);
          console.log('customer details arrived succesfully');
        } else {
          // API call failed
          const errorData = await response.json();
          // Handle the error data as needed
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log("value",Value)

  const handleSubmit = async () => {
    // Access the selected value in the handleSubmit function
    console.log('done', selectedValue);
    try {
      console.log('form is submiting');
      const response = await fetch('https://autobidup.pythonanywhere.com/mechanic/buy_calls', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credit: selectedValue }),
      });

      if (response.ok) {
        // API call successful
        const responseData = await response.json();

        console.log('response data', responseData['call credit ']);
        console.log('calls bought succesfully');

        setOpen(true);
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
    handleClose();
    // Perform any necessary actions with the selected value
  };

  if (calls != 0){
    callsValue = calls
  }
  else{
    callsValue = Value
  }
  return (
    <Box
      sx={{
        pl: { sm: 2 },
        pr: { sm: 2 },
      }}
    >
      <Box sx={{ p: 3, boxShadow: '0 1px 10px #64666B', borderRadius: '8px', m: 6 }}>
        <Typography variant="h4">Your Available Calls:</Typography>
        <Typography variant="h6">{callsValue}</Typography>
        <Button
          sx={{
            border: '1px solid #FFBE00',
            color: '#FFBE00',
            '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
            width: '100%',
            mt: 4,
          }}
          onClick={handleOpen}
        >
          Buy Calls
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h3" component="h2">
              Purchase a Call
            </Typography>

            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={selectedValue}
                onChange={handleRadioChange}
                color="#FFBE00"
              >
                <FormControlLabel value="1" control={<Radio />} label="1 Call" />
                <FormControlLabel value="3" control={<Radio />} label="3 Calls" />
                <FormControlLabel value="5" control={<Radio />} label="5 Calls" />
              </RadioGroup>
            </FormControl>
            <Button
              sx={{
                backgroundColor: 'black',
                color: 'white',
                '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                width: '100%',
                mt: 4,
              }}
              onClick={handleSubmit}
            >
              Buy
            </Button>
            <Button
              sx={{
                backgroundColor: 'black',
                color: 'white',
                '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                width: '100%',
                mt: 1,
              }}
              onClick={handleClose}
            >
              Close
            </Button>
          </Box>
        </Modal>
      </Box>
      {/* ))} */}
    </Box>
  );
}

// ----------------------------------------------------------------------
