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
// @mui
import { Typography, Stack, Box, Divider } from '@mui/material';
// utils
import { fDate } from '../../../utils/formatTime';
// utils
import { TextIconLabel, Iconify } from '../../../components';

// ----------------------------------------------------------------------

const images1 = [
  {
    val: 'Petrol',
    title: 'Engine Type',
    icon: locationIcon,
  },
  {
    val: 'Imported',
    title: 'Assembly',
    icon: userIcon,
  },
  {
    val: '2017',
    title: 'Year',
    icon: userIcon,
  },
  {
    val: 'Automatic',
    title: 'Transmission',
    icon: userIcon,
  },
  {
    val: 'White',
    title: 'Color',
    icon: locationIcon,
  },
  {
    val: 'Islamabad',
    title: 'RegCity',
    icon: locationIcon,
  },
  {
    val: '2007cc',
    title: 'Engine Capacity',
    icon: locationIcon,
  },
  {
    val: '20923',
    title: 'Ad Ref# 20923',
    icon: locationIcon,
  },
];
const data = [
  {
    description:
      'Lightweight allow rims . Complete original file is availble . Driven on petrol throughout . All token taxes are paid for life . Paint touchups in a few places. Brand new tires installed. Non accidental. Original Book is available. Will be sold to nearest offer.. Alloy Rims. Complete original file is availble . Driven on petrol throughout . Lifetime token tax paid. Few paint touchups on the body . Fitted with new tires. Price is slightly negotiable. Original Book is available. Token tax is up to date.',
  },
];
const includes = [
  // {
  //   label:'ABS'
  // },
  {
    label: 'AM/FM radio',
  },
  {
    label: 'Air Conditioning',
  },
  {
    label: 'Alloy rims',
  },
];

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

export default function TravelTourDetails({ tour , inFo}) {


  return (
    <Stack spacing={2} mb={6}   >
      <Typography variant="h4">
        Overview
      </Typography>
      {/* -- Tour Overview -- */}
      <Box sx={{}}>
        <section>
          <Box
            sx={{
              boxShadow: '0 1px 10px #64666b',
              borderRadius: '8px',  
              p: 3,
              pl: 6,
              display: 'grid',
              rowGap: 2,
              columnGap: 1,
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              },
            }}
          >
            {images1.map((value) => (
              <OverviewItem
                icon={<Iconify icon={value.icon} />}
                label={value.title}
                text={value.val}
              />
            ))}
          </Box>
        </section>

        {/* -- Tour Description -- */}
        <section>
          <Typography variant="h4" paragraph mt={6}>
            Description
          </Typography>
          {data.map((value) => (
            <Typography mt={1}>{value.description}</Typography>
          ))}
        </section>

        <section>
          <Stack>
            <Typography variant="h4">Car Features</Typography>
            <Box
              sx={{
                boxShadow: '0 1px 10px #64666b',
                borderRadius: '8px',
                mt:1,
                p: 3,
                pl: 6,
                display: 'grid',
                rowGap: 2,
                columnGap: 3,
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                },
              }}
            >
              {includes.map((option) => (
                <TextIconLabel
                  key={option.label}
                  icon={
                    <Iconify
                      icon={checkmarkIcon}
                      sx={{
                        mr: 2,
                        width: 20,
                        height: 20,
                        ...(!option.enabled && { color: '#CE9A00' }),
                      }}
                    />
                  }
                  value={option.label}
                />
              ))}
            </Box>
          </Stack>
        </section>
        {/* <Comments /> */}
      </Box>
    </Stack>
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
    <div>
      <TextIconLabel
      spacing={1.5}
      alignItems="flex-start"
      icon={icon}
      value={
        <Stack>
          <Typography variant="h6">{label}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{text}</Typography>
        </Stack>
      }
      sx={{ '& svg': { width: 24, height: 24 } }}
    />
    </div>
    
  );
}
