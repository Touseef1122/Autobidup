import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import locationIcon from '@iconify/icons-carbon/location';

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
} from '@mui/material';

// ----------------------------------------------------------------------

TravelCheckOutShippingForm.propTypes = {
  control: PropTypes.object,
  onChangeSameBilling: PropTypes.func,
  sameBilling: PropTypes.bool,
};

export default function TravelCheckOutShippingForm({ control, sameBilling, onChangeSameBilling }) {
  return (
    <Stack>
      <section>
        {/* <Typography variant="overline" sx={{ color: 'text.secondary', mb: 3, display: 'block' }}>
          Billing Address
        </Typography> */}

        <Stack spacing={1.5} width={'100%'}>
          <Stack sx={{ background: '#f0f2f7', borderRadius: '4px' }}>
            <Field
              control={control}
              name="billingAddress.fullAddress"
              label="From Address"
              icon={<Iconify icon={locationIcon} sx={{ fontSize:"22px",marginTop:"15px",color:"#919EAB", marginRight: "10px" }} />}
            />
          </Stack>

          <Stack sx={{ background: '#f0f2f7', borderRadius: '4px' }}>
            <Field
              control={control}
              name="billingAddress.fullAddress2"
              label="To Address"
              icon={<Iconify icon={locationIcon} sx={{fontSize:"22px",marginTop:"15px",color:"#919EAB", marginRight: "10px" }} />}
            />
          </Stack>
          {/* <Stack spacing={{ xs: 2.5, md: 2 }} direction={{ xs: 'column', md: 'row' }}>
            <Field control={control} name="billingAddress.firstName" label="First Name" />
            <Field control={control} name="billingAddress.lastName" label="Last Name" />
          </Stack> */}
        </Stack>
      </section>

      <section>
        {/* <Stack
          spacing={3}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          <Typography variant="overline" sx={{ color: 'text.secondary' }}>
            Shipping Address
          </Typography>
          <FormControlLabel
            control={<Switch checked={sameBilling} onChange={onChangeSameBilling} />}
            label="Same as Billing Address"
            labelPlacement="start"
          />
        </Stack> */}

        {/* <Collapse
          in={!sameBilling}
          sx={{
            ...(!sameBilling && { mt: 3 }),
          }}
        >
          <Stack spacing={2.5}>
            <Stack spacing={{ xs: 2.5, md: 2 }} direction={{ xs: 'column', md: 'row' }}>
              <Field control={control} name="shippingAddress.firstName" label="First Name" />
              <Field control={control} name="shippingAddress.lastName" label="Last Name" />
            </Stack>
            <Field control={control} name="shippingAddress.fullAddress" label="Full Address" />
            <Field control={control} name="shippingAddress.fullAddress2" label="Full Address2" />
          </Stack>
        </Collapse> */}
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

function Field({ control, name, label, icon, ...other }) {
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
        />
      )}
      {...other}
    />
  );
}
