import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import React from 'react';
import { useTheme } from '@mui/material/styles';

import { Iconify } from '../../../components';
import SvgIcon from '@mui/material/SvgIcon';
// @mui
import {
  Stack,
  Switch,
  Collapse,
  TextField,
  Typography,
  FormControlLabel,
  InputAdornment,
  OutlinedInput,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';

// ----------------------------------------------------------------------
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const time = [
  '3 hours',
  '4 hours',
  '5 hours',
  '6 hours',
  '7 hours',
  '8 hours',
  '9 hours',
  '10 hours',
  '11 hours',
  '12 hours',
];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
    select: {
      '&:after': {
        borderColor: 'black',
      },
    },
  };
}

TravelCheckOutForm.propTypes = {
  control: PropTypes.object,
  onChangeSameBilling: PropTypes.func,
  sameBilling: PropTypes.bool,
};

export default function TravelCheckOutForm({ control, sameBilling, onChangeSameBilling }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  return (
    <Stack>
      <section>
        <Stack spacing={2} width={'100%'}>
          <Field control={control} name="billingAddress.fullAddress2" label="To Address" />

          <FormControl sx={{ m: 1, width: '100%', mt: 3 }}>
            <InputLabel id="select-outlined-label">Duration</InputLabel>
            <Select
              multiple
              // displayEmpty
              value={personName}
              label="Duration"
              sx={{ textAlign: 'left', backgroundColor: 'rgba(145, 158, 171, 0.08)' }}
              onChange={handleChange}
              // input={<OutlinedInput label="Duration" />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return '2 hours';
                }

                return selected.join(', ');
              }}
              MenuProps={MenuProps}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem sx={{ textAlign: 'left !important' }} value="">
                2 hours
              </MenuItem>
              {time.map((name) => (
                <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </section>
    </Stack>
  );
}

// ----------------------------------------------------------------------

Field.propTypes = {
  control: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
};

function Field({ control, name, label, ...other }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          error={Boolean(error)}
          helperText={error?.message}
        />
      )}
      {...other}
    />
  );
}
