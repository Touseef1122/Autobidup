import PropTypes from 'prop-types';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useState } from 'react';
// icons
import eventsIcon from '@iconify/icons-carbon/events';
import calendarIcon from '@iconify/icons-carbon/calendar';
// @mui
import { LoadingButton } from '@mui/lab';
import { Card, Grid, Stack, Divider, Typography, Avatar, TextField } from '@mui/material';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import { Image, RatingLabel, Iconify, TextMaxLine } from '../../../components';
//
import { TravelTourFilterGuests, TravelTourFilterTime } from '../filters';

// ----------------------------------------------------------------------

const resetInputStyles = {
  '& .MuiFilledInput-root': {
    padding: 0,
  },
  '& .MuiFilledInput-input': {
    height: '26px !important',
  },
  '& .MuiInputAdornment-root': {
    display: 'none',
  },
};

// ----------------------------------------------------------------------

TravelCheckOutSummary.propTypes = {
  departureDay: PropTypes.instanceOf(Date),
  guests: PropTypes.object,
  isSubmitting: PropTypes.bool,
  setDepartureDay: PropTypes.func,
  setGuests: PropTypes.func,
  tour: PropTypes.shape({
    coverImg: PropTypes.string,
    price: PropTypes.number,
    ratings: PropTypes.number,
    reviews: PropTypes.number,
    slug: PropTypes.string,
    tourGuide: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
    }),
  }),
};

export default function TravelCheckOutSummary({
  tour,
  guests,
  setGuests,
  departureDay,
  setDepartureDay,
  isSubmitting,
}) {
  const { coverImg, slug, ratings, reviews, price, tourGuide } = tour;
  const [value, setValue] = useState('2018-01-01T00:00:00.000Z');
  return (
    <div>
      <Stack
        // direction={{ xs: 'column', sm: 'row' }}
        // divider={
        //   <Divider
        //     orientation="vertical"
        //     flexItem
        //     sx={{ borderStyle: 'dashed', display: { xs: 'none', sm: 'block' } }}
        //   />
        // }
        
        sx={{
          p: 0.5,
          color: 'text.disabled',
          marginTop:"10px",
          background:"#f0f2f7",
          borderRadius:"4px"
        }}
      >
        {/* <Stack direction="row" spacing={1.5} sx={{ width: 1 }}>
            <Iconify icon={eventsIcon} sx={{ width: 24, height: 24, flexShrink: 0 }} />
            <Stack spacing={0.5}>
              <Typography variant="caption">Departure day</Typography>
              <TravelTourFilterGuests
                guests={guests}
                setGuests={setGuests}
                sx={{ ...resetInputStyles }}
              />
            </Stack>
          </Stack>  */}

        <Stack direction="column" sx={{marginLeft:"7px", alignItems: 'left' }}>
          <Typography variant="caption" sx={{ fontSize:"10px" }}>
              Date
          </Typography>
          <Stack direction="row" sx={{}}>
            <Iconify icon={calendarIcon} sx={{fontSize:"22px",color:"#919EAB",margin:"0 10px 0 0"}} />
            <TravelTourFilterTime
              departureDay={departureDay}
              setDepartureDay={setDepartureDay}
              sx={{ ...resetInputStyles }}
              />
          </Stack>            
        </Stack>
      </Stack>
      
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
        <TimePicker
                label="Time"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} fullWidth sx={{marginTop: '10px',background:"#f0f2f7",borderRadius:"4px"}}/>}
              />
        {/* </LocalizationProvider> */}

      {/* 
      <LoadingButton
        type="submit"
        size="large"
        variant="contained"
        loading={isSubmitting}
        sx={{
          // marginTop: '10px',
          width: '100%',
          background: 'linear-gradient(330.24deg,#ff6c00 11.99%,#e52c43 88.79%)',
          borderRadius: '4px',
        }}
      >
        Search
      </LoadingButton> */}
    </div>
  );
}
