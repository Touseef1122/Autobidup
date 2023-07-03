import PropTypes from 'prop-types';
import * as React from 'react';
import location from '@iconify/icons-carbon/location';
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
import { Sellerinfo } from '.';

//--------------------------------------------------------------
// const comments = [
//   {
//     name: 'Ali Khan',
//     text: 'Does AC works?',
//     icon: userIcon,
//   },
//   {
//     name: 'Saim Asim',
//     text: 'Nice',
//     icon: userIcon,
//   },
// ];
Contactinfo.propTypes = {
  post: PropTypes.array.isRequired,
  make: PropTypes.array,
  variant: PropTypes.array,
  price: PropTypes.array,
  year: PropTypes.array,
};
export default function Contactinfo({post,make,variant,price,year}) {
  return (
    <Box>
      <Typography variant="h3">{`${make} ${variant} ${year}`}</Typography>
      <Typography variant="h4" color="#CE9A00">
        PKR {price}
      </Typography>

      <Stack direction="row" spacing={1} display="flex" alignItems="center">
        <Icon icon={location} width="1.5vw" vAlign="middle" color="#CE9A00" />
        <Typography fontWeight="bold">Lahore</Typography>
      </Stack>
      <Sellerinfo  post={post}/>

      {/* <Container
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
          <Stack spacing={1} display="flex" alignItems="left">
            <OverviewItem
              key={content.name}
              icon={<Iconify icon={content.icon} />}
              name={content.name}
              text={content.text}
            />
            <Divider />
          </Stack>
        ))}
      </Container> */}
    </Box>
  );
}

// ----------------------------------------------------------------------
// OverviewItem.propTypes = {
//   icon: PropTypes.any,
//   name: PropTypes.string,
//   text: PropTypes.string,
// };

// function OverviewItem({ icon, name, text = '-' }) {
//   return (
//     <TextIconLabel
//       spacing={2}
//       alignItems="center"
//       icon={icon}
//       color="#CE9A00"
//       vAlign="middle"
//       value={
//         <Stack>
//           <Typography variant="h6" color="black" pt={1}>
//             {name}
//           </Typography>
//           <Typography sx={{ color: 'text.secondary' }}>{text}</Typography>
//         </Stack>
//       }
//       sx={{ '& svg': { width: 24, height: 30 } }}
//     />
//   );
// }
