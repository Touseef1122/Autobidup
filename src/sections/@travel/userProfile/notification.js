import PropTypes from 'prop-types';
import * as React from 'react';

import {
  Typography,
  Container,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { margin } from '@mui/system';

// ----------------------------------------------------------------------

export default function Notification() {
  return (
    <Container sx={{ m: 2 }}>
      <Typography fontSize="1.5rem" id="fourth-section">Notification</Typography>
      <Divider dark />     
      <Typography fontSize="1rem">
        Stay informed about all Blacklane news and announcements! You can activate and deactivate
        notifications below.
      </Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox checked />} label="Newsletter" />
      </FormGroup>
    </Container>
  );
}

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
