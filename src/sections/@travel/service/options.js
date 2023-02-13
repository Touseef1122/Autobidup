import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import {
  Stack,
  TextField,
  Typography,
  ToggleButton,
  FormHelperText,
  Slider as MUISlider,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
// utils
import { fCurrency } from '../../../utils/formatNumber';
import Container from 'src/theme/overrides/Container';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
// import TextField from '@mui/material/TextField';

const currencie = [
  {
    value: '1',
    label: 'Please Select',
  },
  {
    value: '2',
    label: 'Mr',
  },
  {
    value: '3',
    label: 'Ms',
  },
  {
    value: '4',
    label: 'Mx',
  },
];
// ----------------------------------------------------------------------

const SERVICES = ['Email marketing', 'SEO', ' Social Marketing', 'Research'];

const FormSchema = Yup.object().shape({
  services: Yup.array().required().min(1, 'Services field must have at least 1 items'),
  email: Yup.string().required('Email is required').email('That is not an email'),
  compnany: Yup.string().required('Compnany is required'),
  website: Yup.string().required('Website is required'),
});

// ----------------------------------------------------------------------

export default function MarketingContactForm() {
  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      services: [],
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      compnany: '',
      website: '',
      budget: [2000, 10000],
      message: '',
    },
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
  };
  const [show, setShow] = useState(false);
  

  return (
    <div>
      <Box sx={{ ml: {md:'30%'}, mr: {md:'30%'}, mt: {md:'5%'}, mb: {md:'5%'} ,
          overflowX: {
            xs: 'hidden',
            sm: 'hidden',
          },}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2.5} alignItems="flex-start">
            <Controller
              name="services"
              control={control}
              render={({ field, fieldState: { error } }) => {
                // Using with lodash https://lodash.com/docs/4.17.15#xor
                // const onSelected = (service) => xor(field.value, [service]);
                // const onSelected = (service) =>
                //   field.value.includes(service)
                //     ? field.value.filter((value) => value !== service)
                //     : [...field.value, service];
                // return (
                //   <div>
                //     <Stack direction="row" flexWrap="wrap">
                //       {SERVICES.map((service) => (
                //         <ToggleButton
                //           {...field}
                //           key={service}
                //           color="standard"
                //           selected={field.value.includes(service)}
                //           onChange={() => field.onChange(onSelected(service))}
                //           sx={{
                //             py: 0.5,
                //             px: 2,
                //             m: 0.5,
                //             typography: 'body2',
                //             '&.Mui-selected': {
                //               bgcolor: 'text.primary',
                //               color: (theme) =>
                //                 theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                //               '&:hover': {
                //                 bgcolor: 'text.primary',
                //               },
                //             },
                //           }}
                //         >
                //           {service}
                //         </ToggleButton>
                //       ))}
                //     </Stack>
                //     {error && (
                //       <FormHelperText error sx={{ px: 2, textTransform: 'capitalize' }}>
                //         {error?.message}
                //       </FormHelperText>
                //     )}
                //   </div>
                // );
              }}
            />
            <Stack textAlign="center">
              <Typography display="flex" variant="h3" textAlign="center">
                Airport dropoff details
              </Typography>
              <Typography
                display="flex"
                sx={{ fontSize: '.875rem', lineHeight: '1.333', fontWeight: '300', color: 'gray' }}
              >
                Enter your flight number to ensure your chauffeur brings you to the correct terminal
                and gate.
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 2.5, md: 2 }}
              sx={{ width: 1 }}
            >
              <Controller
                name="FlightNumber"
                control={control}
                label="Flight Number"
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Flight Number"
                    placeholder="e.g.LH 202, U24567, BA2490"
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                )}
              />
              {/* <Controller
            name="firstName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="First Name"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Last Name"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          /> */}
            </Stack>
            <Stack display="flex" width="100%">
              <Typography display="center" variant="h3">
                Additional info
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 2.5, md: 2 }}
              sx={{ width: 1 }}
            >
              <Controller
                name="PickupSignin"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Pickup sign"
                    placeholder="Jhon Doe"
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                )}
              />
              <Controller
                name="Reference"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Reference code or cost center"
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                )}
              />
            </Stack>
            <Controller
              name="Request"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Notes for the chauffeur"
                  placeholder="Any special Request (child car seats....)?"
                  error={Boolean(error)}
                  helperText={error?.message}
                />
              )}
            />
            <Typography
              sx={{ fontSize: '.875rem', lineHeight: '1.333', fontWeight: '300', color: 'gray' }}
            >
              Add special requests or relevant info, e.g. number of bags, itinerary for an hourly
              booking, etc. Please do not include confidential information.
            </Typography>
            <FormGroup>
              <FormControlLabel
                onClick={() => setShow(!show)}
                control={<Checkbox  />}
                label="Do you want to book sone else?"
              />
            </FormGroup>

            {show && (
              <>
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={{ xs: 2.5, md: 2 }}
                  sx={{ width: 1 }}
                >
                  <Stack width="100%">
                    {' '}
                    <Controller
                      name="Request"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          id="outlined-select-currency"
                          select
                          label="Please Select"
                          // width='50%'
                        >
                          {currencie.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      )}
                    />
                  </Stack>
                  {/* <Controller
            name="website"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Website"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          /> */}
                </Stack>
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={{ xs: 2.5, md: 2 }}
                  sx={{ width: 1 }}
                >
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="First Name"
                        error={Boolean(error)}
                        helperText={error?.message}
                      />
                    )}
                  />

                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Last Name"
                        error={Boolean(error)}
                        helperText={error?.message}
                      />
                    )}
                  />
                </Stack>
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={{ xs: 2.5, md: 2 }}
                  sx={{ width: 1 }}
                >
                  <Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Email"
                        error={Boolean(error)}
                        helperText={error?.message}
                      />
                    )}
                  />

                  <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Phone number"
                        error={Boolean(error)}
                        helperText={error?.message}
                      />
                    )}
                  />
                </Stack>
              </>
            )}

            {/* <Stack spacing={5} sx={{ py: 2, width: 1 }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Your Budget
          </Typography>

          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <MUISlider
                {...field}
                valueLabelDisplay="on"
                max={20000}
                step={1000}
                valueLabelFormat={(value) => fCurrency(value)}
              />
            )}
          />
        </Stack> */}
            {/* <Controller
          name="message"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              multiline
              rows={4}
              label="Message"
              error={Boolean(error)}
              helperText={error?.message}
              sx={{ pb: 2.5 }}
            />
          )}
        /> */}
            <Stack display="inline">
              <LoadingButton
                size="large"
                type="submit"
                padding="15px"
                variant="outlined"
                loading={isSubmitting}
                
              >
                Skip
              </LoadingButton>
              <LoadingButton
                sx={{ margin: '25px' }}
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Continue
              </LoadingButton>
            </Stack>
          </Stack>
        </form>
      </Box>
    </div>
  );
}
