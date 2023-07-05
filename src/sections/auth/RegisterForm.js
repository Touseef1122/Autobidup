import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
// icons
import viewIcon from '@iconify/icons-carbon/view';
import viewOff from '@iconify/icons-carbon/view-off';
import { useRouter } from 'next/router';
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
  first_name: Yup.string()
    .required('Full name is required')
    .min(6, 'Mininum 6 characters')
    .max(15, 'Maximum 15 characters'),
  username: Yup.string().required('Email is required').email('That is not an email'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password should be of minimum 6 characters length'),
  confirmpassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], "Password's not match"),
  contact: Yup.string()
    .required('Mobile number is required')
    .min(11, 'Mininum 11 characters')
    .max(15, 'Maximum 15 characters'),
});

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  console.log('blaggggggggggggggggggggggg');
  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      contact: '',
      username: '',
      password: '',

    },
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    console.log(' working', data);
    try {
      console.log('checking Signup');
      const response = await fetch('http://autobidup.pythonanywhere.com/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        xhrFields: {
          withCredentials: true,
        },
      });

      if (response.ok) {
        // API call successful
        const responseData = await response.json();
        // Handle the response data as needed
        localStorage.setItem('firstname', responseData.first_name);

        // Store JWT token in document cookie
        document.cookie = `jwt=${responseData.jwt}; path=/`;
        console.log(responseData);
        router.push('/');
      } else {
        // API call failed
        const errorData = await response.json();
        // Handle the error data as needed
      }
    } catch (error) {
      // Error occurred during the API call
      console.error(error);
      // Handle the error
    }
  };

  return (
    // <form>
    <div>
      <Stack spacing={1}>
        <Stack direction="row" spacing={2}>
          <Controller
            name="first_name"
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
            name="last_name"
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
          name="contact"
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
          name="username"
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
          onClick={handleSubmit(onSubmit)}
        >
          Sign up
        </LoadingButton>
      </Stack>
      </div>
    // </form>
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
