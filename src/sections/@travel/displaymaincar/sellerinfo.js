import PropTypes from 'prop-types';
import * as React from 'react';
import userIcon from '@iconify/icons-carbon/user';
import { TextIconLabel, Iconify } from '../../../components';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

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
// const comments = [];
// let knownKeys = ['seller_name', 'seller_phone'];
Contactinfo.propTypes = {
  post: PropTypes.array.isRequired,
  name: PropTypes.array,
  phone: PropTypes.array,
};
export default function Contactinfo({ post, name, phone, car }) {
  if (post) {
   
    const [comments, setComments] = useState([]);

    useEffect(() => {
      if(post){
        let dict = {
          title: 'Seller Information',
          name: name,
          icon: userIcon,
          text: phone,
        };
        setComments([dict]);
      }
      else if (car){
        let dict = {
          title: 'Seller Information',
          name: name,
          icon: userIcon,
          text: phone_no,
        };
        setComments([dict]);
      }
    }, []);

    console.log(comments);
   
    return (
      <Box sx={{ p: 3, boxShadow: '0 1px 10px #64666b', borderRadius: '8px', mt: 2 }}>
        {/* <Typography variant="h4" fontWeight="bold">Seller Information</Typography> */}
        <Overview overview={comments} />

        {/* <Divider/> */}
        <Stack
          direction="row"
          spacing={5}
          mt={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="#CE9A00"
        >
          <Box
            sx={{
              p: 1,
              boxShadow: '0 1px 10px #64666b',
              borderRadius: '3px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Icon icon="material-symbols:add-call" width="30" />
          </Box>
          <Box
            sx={{
              p: 1,
              boxShadow: '0 1px 10px #64666b',
              borderRadius: '3px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Icon icon="mdi:envelope" width="30" />
          </Box>
          <Box
            sx={{
              p: 1,
              boxShadow: '0 1px 10px #64666b',
              borderRadius: '3px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Icon icon="ri:facebook-fill" width="30" />
          </Box>
        </Stack>
      </Box>
    );
  }
}

// ----------------------------------------------------------------------
