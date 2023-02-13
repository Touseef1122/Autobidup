import PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

import { Typography, Divider, Box, Stack, Link, Container, Grid, MenuItem } from '@mui/material';
// import Stack from 'mui/material';
// utils
// components
// ----------------------------------------------------------------------

export default function Details({ comp }) {
  const router = useRouter();

  return (
    <Container sx={{ m: 2 }}>
      <Typography fontSize="1.5rem" id="first-section">
        Contact Details
      </Typography>
      <Divider dark />

      <Typography
        sx={{ textDecoration: 'underline', cursor: 'pointer', float: 'right' }}
        onClick={() => router.push('/travel/editProfile')}
        color="black"
      >
        Edit
      </Typography>

        <Stack direction="row" spacing={2}>
          <Typography fontSize="1rem" fontWeight="bold" textAlign="center" pb={1}>
            Title
          </Typography>
          <Typography fontSize="1rem" textAlign="left" color="#181a1f;">
            Ms.
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography fontSize="1rem" fontWeight="bold" textAlign="center" pb={1}>
            Name
          </Typography>
          <Typography fontSize="1rem" textAlign="left" color="#181a1f;">
            Z
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography fontSize="1rem" fontWeight="bold" textAlign="center" pb={1}>
            Email
          </Typography>
          <Typography fontSize="1rem" textAlign="left" color="#181a1f;">
            Z
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography fontSize="1rem" fontWeight="bold" textAlign="center" pb={1}>
            Mobile
          </Typography>
          <Typography fontSize="1rem" textAlign="left" color="#181a1f;">
            123
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography fontSize="1rem" fontWeight="bold" textAlign="center" pb={1}>
            Company
          </Typography>
          <Typography fontSize="1rem" textAlign="left" color="#181a1f;">
            Ms.
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography fontSize="1rem" fontWeight="bold" textAlign="center" pb={1}>
            Address
          </Typography>
          <Typography fontSize="1rem" textAlign="left" color="#181a1f;">
            Ms.
          </Typography>
        </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
