import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
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

Expertcall.propTypes = {
  item: PropTypes.array.isRequired,
};
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  // border: '2px solid #000',
  borderRadius: '10px',
  p: 6,
};

export default function Expertcall({ item }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        // textAlign: 'center',
        // py: 5,
        pl: { sm: 2 },
        pr: { sm: 2 },
      }}
    >
      {/* {item.map((value) => ( */}
      <Box sx={{ p: 3, boxShadow: '0 1px 10px #64666B', borderRadius: '8px', m: 6 }}>
        <Typography variant="h4">Your Available Calls:</Typography>
        <Typography variant="h6">0</Typography>
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
                defaultValue="female"
                name="radio-buttons-group"
                color="#FFBE00"
              >
                <FormControlLabel
                  value="one"
                  control={
                    <Radio
                      sx={{
                        '&.Mui-checked': {
                          color: '#FFBE00',
                        },
                      }}
                    />
                  }
                  label="1 Call"
                />
                <FormControlLabel
                  value="three"
                  control={
                    <Radio
                      sx={{
                        '&.Mui-checked': {
                          color: '#FFBE00',
                        },
                      }}
                    />
                  }
                  label="3 Call"
                />
                <FormControlLabel
                  value="five"
                  control={
                    <Radio
                      sx={{
                        '&.Mui-checked': {
                          color: '#FFBE00',
                        },
                      }}
                    />
                  }
                  label="5 Call"
                />
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
            >
              {' '}
              Buy{' '}
            </Button>
          </Box>
        </Modal>
      </Box>
      {/* ))} */}
    </Box>
  );
}

// ----------------------------------------------------------------------
