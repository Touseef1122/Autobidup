import PropTypes from 'prop-types';
import * as React from 'react';
import userIcon from '@iconify/icons-carbon/user';
// import { useRouter } from 'next/router';
import { TextIconLabel, Iconify, Image } from '../../../components';
import { Icon } from '@iconify/react';
import image from '../../../Assets/Images/expert2.jpg';
import {
  Grid,
  List,
  ListSubheader,
  ListItem,
  TextField,
  Button,
  Stack,
  Container,
  Box,
  Typography,
} from '@mui/material';
import Comments from '../displaymaincar/comments';

//--------------------------------------------------------------

// Expertcall.propTypes = {
//   item: PropTypes.array.isRequired,
// };

export default function Expertprofile() {
  const router = useRouter();
  const { data } = router.query;
  const item = data ? JSON.parse(data) : null;
  console.log("items reached", item)

  return (
    <Box
      sx={{
        pl: { sm: 2 },
        pr: { sm: 2 },
      }}
    >
      {/* {item.map((value) => ( */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4} display="block" alignItems="center">
          <Image src={image.src} sx={{ width: '100%', height: 'auto', borderRadius: '30px' }} />

          <Typography variant="h3" mt={3}>Description</Typography>
          <Box sx={{p:3,boxShadow: '0 1px 10px #64666B', borderRadius: '8px', m: 2 }}>
            <Typography variant="body1">
             {item.description}
            </Typography>
          </Box>
          <Typography variant="h3">Skills</Typography>
          <Box sx={{ p: 4, boxShadow: '0 1px 10px #64666B', borderRadius: '8px', m: 2 }}>
            <List
              sx={{
                listStyleType: 'disc',
                '& .MuiListItem-root': {
                  display: 'list-item',
                },
              }}
            >
              <ListItem>{item.skills}</ListItem>
              <ListItem>Your search </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box sx={{ p: 3, boxShadow: '0 1px 10px #64666B', borderRadius: '8px', m: 2 }}>
            <Typography variant="h3">{item.name}</Typography>
            <Typography variant="h4" mt={1}>
              Car Expert
            </Typography>
            <Stack spacing={2} mt={3} direction="row">
              <Typography variant="h5">Phone Number: </Typography>
              <Typography variant="h6" color="#CE9A00">
                {item.phone_no}
              </Typography>
            </Stack>
            <Stack spacing={2} mt={3} direction="row">
              <Typography variant="h5">Experience: </Typography>
              <Typography variant="h6" color="#CE9A00">
                + 2 years
              </Typography>
            </Stack>
          </Box>
          <Comments/>
        </Grid>
      </Grid>
      {/* ))}  */}
    </Box>
  );
}

// ----------------------------------------------------------------------
