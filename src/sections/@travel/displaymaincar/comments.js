import PropTypes from 'prop-types';
import * as React from 'react';
import userIcon from '@iconify/icons-carbon/user';
import { TextIconLabel, Iconify } from '../../../components';
import { Icon } from '@iconify/react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TextField,
  Divider,
  Stack,
  Container,
  Box,
  Typography,
} from '@mui/material';

//--------------------------------------------------------------
const comments = [
  {
    name: 'Ali Khan',
    text: 'Does AC works?',
    icon: userIcon,
  },
  {
    name: 'Saim Asim',
    text: 'Nice',
    icon: userIcon,
  },
];

export default function Comments() {
  return (
    <Box mt="5%">
      <Typography variant="h4">Comments</Typography>

      <Container
        sx={{
          boxShadow: '0 1px 10px #64666b',
          borderRadius: '8px',
          width: 'auto',
          justifyContent: 'center',
          mt: 1,
          p: 3,
        }}
      >
        {comments?.map((content) => (
          <Stack spacing={2}>
            <OverviewItem
              key={content.name}
              icon={<Iconify icon={content.icon} />}
              name={content.name}
              text={content.text}
            />
            <Divider />
          </Stack>
        ))}
      </Container>

      <Stack direction="row" spacing={2}>
      <Icon icon="mdi:user-circle" sx={{color:"#CE9A00"}}/>
      <TextField
        id="filled-multiline-static"
        sx={{ width: '100%' }}

        multiline
        rows={2}
        placeholder="Describe your car..."
        variant="filled"
      />
      </Stack>
    </Box>
  );
}

// ----------------------------------------------------------------------
OverviewItem.propTypes = {
  icon: PropTypes.any,
  name: PropTypes.string,
  text: PropTypes.string,
};

function OverviewItem({ icon, name, text = '-' }) {
  return (
    <TextIconLabel
      spacing={2}
      alignItems="center"
      icon={icon}
      color="#CE9A00"
      value={
        <Stack>
          <Typography variant="h6" color="black">
            {name}
          </Typography>
          <Typography sx={{ color: 'text.secondary', pb: 2 }}>{text}</Typography>
        </Stack>
      }
      sx={{ '& svg': { width: 24, height: 30 } }}
    />
  );
}
