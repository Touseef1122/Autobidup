import PropTypes from 'prop-types';
import * as React from 'react';
import userIcon from '@iconify/icons-carbon/user';
import { TextIconLabel, Iconify, Scrollbar } from '../../../components';
import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

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
  ButtonGroup,
  Button,
  Typography,
} from '@mui/material';

import { OverviewAuction } from '../../../../src/sections/@travel/tours';

//--------------------------------------------------------------
const ScrollStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    maxWidth: '100%',
    padding: theme.spacing(1.5),
  },
}));
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
  const [counter, setCounter] = useState(500000);

  return (
    <Box>
      <Box
        sx={{
          p: 1,
          boxShadow: '0 1px 10px #64666b',
          borderRadius: '8px',
          mt: 2,
          // height: '150px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{width:'100%'}}>
          <ButtonGroup
            size="large"
            alingItem="center"
            variant="contained"
            aria-label="outlined primary button group"
          >
            {
              <Button
                sx={{
                  backgroundColor: 'white',
                  border: '1px solid #FFBE00',
                  color: '#FFBE00',
                  '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                }}
                disabled={counter <= 0}
                onClick={() => {
                  setCounter(counter - 10000);
                }}
              >
                -
              </Button>
            }
            {
              <Button disabled className="buttonCounter">
                {counter}
              </Button>
            }
            <Button
              sx={{
                backgroundColor: 'white',
                border: '1px solid #FFBE00',
                color: '#FFBE00',
                '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
              }}
              onClick={() => {
                setCounter(counter + 10000);
              }}
            >
              +
            </Button>
          </ButtonGroup>
        </Box>
        <Box >
          <Button
            variant="contained"
            // onClick={() => router.push('/travel/buysellcar/form')}
            target="_blank"
            rel="noopener"
          >
            Bid
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: 3,
          boxShadow: '0 1px 10px #64666b',
          borderRadius: '8px',

          mt: 2,
          // height: '300px',
          // overflowY: 'scroll',
          height: '350px',
        }}
      >
        <Scrollbar>
          <ScrollStyle>
            <Typography variant="h4">Bidders List</Typography>
            <OverviewAuction overviewAuction={comments} />

            <Divider />
          </ScrollStyle>
        </Scrollbar>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------
