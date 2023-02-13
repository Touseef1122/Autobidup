import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
// icons
import viewIcon from '@iconify/icons-carbon/view';
import viewOff from '@iconify/icons-carbon/view-off';
// @mui
import { LoadingButton } from '@mui/lab';
import {
  Typography,
  Stack,
  Link,
  TextField,
  IconButton,
  InputAdornment,
  MenuItem,
  Grid,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
// components
import { Iconify } from '../../components';

// ----------------------------------------------------------------------

const FormSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full name is required')
    .min(6, 'Mininum 6 characters')
    .max(15, 'Maximum 15 characters'),
  email: Yup.string().required('Email is required').email('That is not an email'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password should be of minimum 6 characters length'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], "Password's not match"),
});

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={1.5}>
        <Controller
          name="fullName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Company name"
              error={Boolean(error)}
              helperText={error?.message}
              sx={{ padding: '0px' }}
            />
          )}
        />
        <Country
          control={control}
          name="billingAddress.fullAddress"
          label="Country"
          sx={{ backgroundColor: '#f0f2f7' }}
          id="select"
          select
        />

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Company Street Address"
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <Stack direction="row" spacing={2}>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="First name"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Last name"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
        </Stack>

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Mobile number"
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />
        <Controller
          name="fullName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Work email"
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      <Iconify icon={showPassword ? viewIcon : viewOff} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Confirm Password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      <Iconify icon={showPassword ? viewIcon : viewOff} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <FormControlLabel
          sx={{ marginTop: '30px !important' }}
          control={<Checkbox size="small" />}
          label={
            <Typography variant="caption" align="center" sx={{ color: 'text.secondary' }}>
              I agree to
              <Link color="text.primary" href="#">
                {''} Terms of Service {''}
              </Link>
              and
              <Link color="text.primary" href="#">
                {''} Privacy Policy.
              </Link>
            </Typography>
          }
          fontSize="10px"
        ></FormControlLabel>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          sx={{
            marginTop: '30px !important',
          }}
          loading={isSubmitting}
        >
          Sign up
        </LoadingButton>

        {/* <Typography variant="caption" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
          I agree to
          <Link color="text.primary" href="#">
            {''} Terms of Service {''}
          </Link>
          and
          <Link color="text.primary" href="#">
            {''} Privacy Policy.
          </Link>
        </Typography> */}
      </Stack>
    </form>
  );
}

const time = ['3 hours'];
function Country({ control, name, icon, label, ...other }) {
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
          select
        >
          {time.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      )}
      {...other}
    />
  );
}
