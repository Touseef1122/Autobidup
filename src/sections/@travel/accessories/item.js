import PropTypes from 'prop-types';
import * as React from 'react';
import userIcon from '@iconify/icons-carbon/user';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { TextIconLabel, Iconify, Image } from '../../../components';
import { Icon } from '@iconify/react';

import {
  Grid,
  Button,
  ButtonGroup,
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
Item.propTypes = {
  item: PropTypes.array.isRequired,
};

export default function Item({ item }) {
  const router = useRouter();
  const [counter, setCounter] = useState(1);

  // const handleIncrement = () => {
  //   this.setState((state) => ({ counter: state.counter + 1 }));
  // };

  // const handleDecrement = () => {
  //   this.setState((state) => ({ counter: state.counter - 1 }));
  // };
  // const displayCounter = this.state.counter > 0;

  return (
    <Box
      mt={2}
      // sx={{
      //   pl: { sm: 2 },
      //   pr: { sm: 2 },
      // }}
    >
      {item?.map((value) => (
        <Box sx={{ p: 3, boxShadow: '0 1px 10px #64666B', borderRadius: '8px', mb: 1 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4} display="flex" alignItems="center">
              <Image
                alt={value.title}
                src={value.image.src}
                sx={{ width: '100%', height: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h4">{value.heading}</Typography>
                <Typography variant="h4" color="#CE9A00">
                  {' '}
                  PKR {value.price}
                </Typography>
              </Stack>
              <Typography variant="h6">
                Shipping PKR 100
              </Typography>
              <Stack spacing={2} mt={2} direction="row">
                <Typography variant="h6">Quantity:</Typography>

                <ButtonGroup
                  size="small"
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
                        setCounter(counter - 1);
                      }}
                    >
                      -
                    </Button>
                  }
                  {<Button disabled>{counter}</Button>}
                  <Button
                    sx={{
                      backgroundColor: 'white',
                      border: '1px solid #FFBE00',
                      color: '#FFBE00',
                      '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                    }}
                    onClick={() => {
                      setCounter(counter + 1);
                    }}
                  >
                    +
                  </Button>
                </ButtonGroup>
              </Stack>
              <Button
                  sx={{
                    float: "right",
                    backgroundColor:"#212B36",
                    color: 'white',
                    '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                  }}
                  onClick={() => router.push({})}
                >
                  Remove
                </Button>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
}

// ----------------------------------------------------------------------
