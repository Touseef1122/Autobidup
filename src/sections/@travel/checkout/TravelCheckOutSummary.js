import PropTypes from 'prop-types';
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

  return (
    <div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderStyle: 'dashed', display: { xs: 'none', sm: 'block' } }}
          />
        }
        sx={{
          p: 1,
          borderRadius: 1,
          color: 'text.disabled',
          bgcolor: 'rgba(145, 158, 171, 0.08)',
          marginTop: '16px',
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
          </Stack> */}

        <Stack direction="row" spacing={1.5} sx={{ width: 1, alignItems: 'center' }}>
          <Iconify icon={calendarIcon} sx={{ width: 24, height: 24, flexShrink: 0 }} />
          <Stack spacing={0}>
            <Typography variant="caption" sx={{ textAlign: 'left' }}>
              Date
            </Typography>
            <TravelTourFilterTime
              departureDay={departureDay}
              setDepartureDay={setDepartureDay}
              sx={{ ...resetInputStyles }}
            />
          </Stack>
        </Stack>
      </Stack>
      <LoadingButton
        type="submit"
        size="large"
        variant="contained"
        loading={isSubmitting}
        sx={{
          marginTop: '10px',
          width: '100%',
          background: 'linear-gradient(330.24deg,#ff6c00 11.99%,#e52c43 88.79%)',
          borderRadius: '4px',
        }}
      >
        Search
      </LoadingButton>
    </div>
  );
}
