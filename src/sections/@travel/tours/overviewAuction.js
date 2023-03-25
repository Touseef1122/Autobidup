import PropTypes from 'prop-types';
// icons
import checkmarkIcon from '@iconify/icons-carbon/checkmark';
import locationIcon from '@iconify/icons-carbon/location';
import mobileIcon from '@iconify/icons-carbon/mobile';
import calendarIcon from '@iconify/icons-carbon/calendar';
import translateIcon from '@iconify/icons-carbon/translate';
import userIcon from '@iconify/icons-carbon/user';
import timeIcon from '@iconify/icons-carbon/time';
import Comments from '../../../sections/@travel/displaymaincar/comments';
import { Icon } from '@iconify/react';

// @mui
import { Typography, Stack, Box, Divider,Block} from '@mui/material';
import { Scrollbar } from '../../../components';

// utils
import { fDate } from '../../../utils/formatTime';
// utils
import { TextIconLabel, Iconify } from '../../../components';

// ----------------------------------------------------------------------

// TravelTourDetails.propTypes = {
//   tour: PropTypes.shape({
//     availableEnd: PropTypes.string,
//     availableStart: PropTypes.string,
//     description: PropTypes.string,
//     duration: PropTypes.string,
//     highlights: PropTypes.array,
//     includes: PropTypes.array,
//     languages: PropTypes.array,
//     location: PropTypes.string,
//     program: PropTypes.array,
//     tourGuide: PropTypes.shape({
//       name: PropTypes.string,
//       phoneNumber: PropTypes.string,
//     }),
//   }),
// };
OverviewAuction.propTypes = {
  overviewAuction: PropTypes.array.isRequired,
};
export default function OverviewAuction({ overviewAuction }) {
  // const {
  //   program,
  //   includes,
  //   location,
  //   duration,
  //   tourGuide,
  //   languages,
  //   highlights,
  //   description,
  //   availableEnd,
  //   availableStart,
  // } = tour;

  return (
    <section>
      {overviewAuction?.map((value) => (      
        <Box  sx={{
          padding: "20px",
        }}>
          <Typography variant="h4">{value.title}</Typography>
            <Stack display="flex" alignItems="left">
              <OverviewItem
                key={value.name}
                icon={<Iconify icon={value.icon} />}
                label={value.name}
                text={value.text}
              />
              <Divider/>
            </Stack>
        </Box>
      ))}
    </section>
  );
}

// ----------------------------------------------------------------------

OverviewItem.propTypes = {
  icon: PropTypes.any,
  label: PropTypes.string,
  text: PropTypes.string,
};

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <TextIconLabel
      spacing={2}
      alignItems="center"
      icon={icon}
      color="#CE9A00"
      vAlign="middle"
      value={
        <Stack>
          <Typography variant="h6">{label}</Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>{text}</Typography>
         <Typography><Icon icon="material-symbols:add-call" width="30"/>  : 03030000000 </Typography>
        </Stack>
      }
      sx={{ '& svg': { width: 24, height: 24 } }}
    />
  );
}
