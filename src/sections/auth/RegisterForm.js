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
  Modal,
  Box,
} from '@mui/material';
// components
import { Iconify } from '../../components';

// ----------------------------------------------------------------------
let Data = [];
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
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function RegisterForm() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
    Data = data;
    console.log(' working', data);
    const updatedPost = {
      ...data,
      state: 'Punjab',
      city: 'lahore',
    };
    console.log('updated', updatedPost);
    try {
      console.log('checking Signup');
      const response = await fetch('http://autobidup.pythonanywhere.com/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost),

        // xhrFields: {
        //   withCredentials: true,
        // },
      });

      if (response.ok) {
        // API call successful
        const responseData = await response.json();
        // Handle the response data as needed
        // localStorage.setItem('firstname', responseData.first_name);

        // // Store JWT token in document cookie
        // document.cookie = `jwt=${responseData.jwt}; path=/`;
        // console.log(responseData);
        // router.push('/');
        handleOpen();
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

  const handleModalSubmit = async () => {
    // const username = document.getElementById('username').value; // Replace with the actual username value from the modal
    const otp = document.getElementById('otp').value; // Get the OTP value from the input field in the modal
    console.log(Data.username, otp);
    try {
      console.log('form is submiting');
      const response = await fetch('https://autobidup.pythonanywhere.com/user/otp-verify', {
        method: 'POST',
        // mode: 'cors',
        // credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: Data.username, otp: otp }),
      });
      if (response.ok) {
        // API call successful
        const responseData = await response.json();
        console.log('response data', responseData);
        console.log('call done succesfully');
        router.push('/auth/logincover/')
      } else {
        // API call failed
        const errorData = await response.json();
        // Handle the error data as needed
      }
    } catch (error) {
      // Error occurred during the API call
      console.error(error);
    }
  };
  const handleModalContentClick = (event) => {
    event.stopPropagation();
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
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} onClick={handleModalContentClick}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter Your OTP
          </Typography>
          <TextField
            id="otp"
            label="OTP"
            variant="outlined"
            inputProps={{
              maxLength: 4,
              placeholder: '####',
            }}
          />
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            sx={{
              marginTop: '5px !important',
            }}
            onClick={handleModalSubmit}
          >
            Enter
          </LoadingButton>
        </Box>
      </Modal>
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
