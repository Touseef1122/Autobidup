import PropTypes from 'prop-types';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Autocomplete, Checkbox, TextField, Chip } from '@mui/material';
// _data
import _mock from '../../../../_data/mock';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  '& .MuiAutocomplete-root': {
    '& .MuiFilledInput-root': {
      minHeight: 56,
      padding: '12px',
    },
  },
}));

// ----------------------------------------------------------------------
const price=[
    {
        label:"100000 to 3000000"        
    },
    {
        label:"3100000 to 6000000"
    },
    {
        label:"6100000 to 9000000"
    },
    {
        label:"9100000 to 20000000"
    },
    {
        label:"30000000 to 60000000"
    },
    {
        label:"70000000 to 100000000"
    },
    
]



Carfilterprice.propTypes = {
  filterprice: PropTypes.array,
  onchangeprice: PropTypes.func,
};

export default function Carfilterprice({ filterprice, onchangeprice}) {
  return (
    <RootStyle>
      <Autocomplete
        multiple
        limitTags={1}
        disableCloseOnSelect
        options={price}
        getOptionLabel={(option) => option.label}
        value={filterprice}
        onChange={(event, value) => onchangeprice(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            placeholder="Choose Price"
            InputProps={{
              ...params.InputProps,
              autoComplete: 'search',
            }}
          />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              {...getTagProps({ index })}
              key={option.label}
              label={option.label}
              size="small"
              sx={{
                bgcolor: 'text.primary',
                color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                '& .MuiChip-deleteIcon': {
                  opacity: 0.48,
                  color: 'currentColor',
                  '&:hover': {
                    opacity: 0.72,
                    color: 'currentColor',
                  },
                },
              }}
            />
          ))
        }
        renderOption={(props, option, { inputValue, selected }) => {
          const matches = match(option.label, inputValue);
          const parts = parse(option.label, matches);
          return (
            <Box component="li" sx={{ my: 1, p: '0 !important' }} {...props}>
              <Checkbox size="small" checked={selected} />

              {parts.map((part, index) => (
                <Box
                  key={index}
                  component="span"
                  sx={{
                    ...(part.highlight && {
                      fontWeight: 'fontWeightBold',
                    }),
                  }}
                >
                  {part.text}
                </Box>
              ))}
            </Box>
          );
        }}
      />
    </RootStyle>
  );
}
