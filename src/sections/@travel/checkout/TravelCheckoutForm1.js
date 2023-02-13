import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import TimeIcon from '@iconify/icons-carbon/time';
import locationIcon from '@iconify/icons-carbon/location';

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
  '13 hours',
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

          <Stack sx={{ background: '#f0f2f7', borderRadius: '4px' }}>
            <Field
              control={control}
              name="billingAddress.fullAddress"
              label="From Address"
              icon={<Iconify icon={locationIcon} sx={{ fontSize:"22px",marginTop:"15px",color:"#919EAB", marginRight: "10px" }} />}
            />
          </Stack>
          <TField
           icon={<Iconify icon={TimeIcon} sx={{ fontSize:"22px",marginTop:"15px",color:"#919EAB", marginRight: "10px" }} />} 
          />        
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

function Field({ control, name,icon, label, ...other }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          InputProps={{
            startAdornment: icon,
          }}
          label={label}
          error={Boolean(error)}
          helperText={error?.message}
          sx={{backgroundColor: "#f0f2f7"}}
        />
      )}
      {...other}
    />
  );
}
function TField({icon}) {
    return (
          <TextField
          sx={{backgroundColor:"#f0f2f7"}}
          id="select"
          label="Duration"
          value="10"
          select
            InputProps={{
              startAdornment: icon,
            }}    
          >
          <MenuItem value="10">2 hours</MenuItem>
          {time.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
          </TextField>
    );
  }
