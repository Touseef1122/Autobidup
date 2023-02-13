import * as React from 'react';
// import Link from '@material-ui/Link';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRef } from 'react';

import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';

const boxSX = {
  '&:hover': {
    color: 'white',
    backgroundColor: '#ff4c00',
  },
};

export default function Main() {
  return (
    <Box sx={{m: 2}}>
      <nav aria-label="secondary mailbox folders">
        <List sx={{ background: '#f6f6f6',textDecoration:"underline",fontSize:"20px"}}>
          <ListItem sx={{ backgroundColor: '#ff4c00', color: 'white'}}>
            {/* <Link href="#first-section"> */}
              <ListItemButton component="a" href="#first-section">
                <ListItemText primary="Contact Details" />
              </ListItemButton>
            {/* </Link> */}
          </ListItem>
          <ListItem sx={boxSX}>
            {/* <Link href="#second-section"> */}
              <ListItemButton component="a" href="#second-section">
                <ListItemText primary="Change Password" />
              </ListItemButton>
            {/* </Link> */}
          </ListItem>

          <ListItem sx={boxSX}>
            {/* <Link href="#third-section"> */}
              <ListItemButton component="a" href="#third-section">
                <ListItemText primary="Payment" />
              </ListItemButton>
            {/* </Link> */}
          </ListItem>
          <ListItem sx={boxSX}>
            {/* <Link href="#fourth-section"> */}
              <ListItemButton component="a" href='#fourth-section'>
                <ListItemText primary="Notifications" />
              </ListItemButton>
            {/* </Link> */}
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
