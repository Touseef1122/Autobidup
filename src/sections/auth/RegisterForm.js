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
  Container,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
// components
import { Iconify } from '../../components';

// ----------------------------------------------------------------------

const FormSchema = Yup.object().shape({
  fullname: Yup.string()
    .required('Full name is required')
    .min(6, 'Mininum 3 characters')
    .max(15, 'Maximum 15 characters'),
  email: Yup.string().required('Email is required').email('That is not an email'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password should be of minimum 6 characters length'),
  confirmpassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], "Password's not match"),
  phone: Yup.string()
    .required('Mobile number is required')
    .min(11, 'Mininum 11 characters')
    .max(15, 'Maximum 15 characters'),
});

const API_ENDPOINT = 'http://autobidup.pythonanywhere.com/user/register';


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
      fullname: '',
      lastname: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      // Handle success here, e.g., show a success message or redirect the user to another page
      alert('Registration successful!');
      reset();
    } catch (error) {
      // Handle errors here, e.g., show an error message to the user
      alert('Registration failed: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={1}>
       
        <Stack direction="row" spacing={2}>
          <Controller
            name="fullname"
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
            name="lastname"
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

        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Mobile Number"
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
              label="Email"
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
          name="confirmpassword"
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
          sx={{ marginTop: '10px !important' }}
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
            marginTop: '5px !important',
          }}
          loading={isSubmitting}
        >
          Sign up
        </LoadingButton>
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
