import PropTypes from 'prop-types';
import { useEffect } from 'react';

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

let images1 = [];
const data = [
  {
    description:
      'Lightweight allow rims . Complete original file is availble . Driven on petrol throughout . All token taxes are paid for life . Paint touchups in a few places. Brand new tires installed. Non accidental. Original Book is available. Will be sold to nearest offer.. Alloy Rims. Complete original file is availble . Driven on petrol throughout . Lifetime token tax paid. Few paint touchups on the body . Fitted with new tires. Price is slightly negotiable. Original Book is available. Token tax is up to date.',
  },
];
let includes = [];
let knownKeys = [
  'color',
  'model',
  'assembly',
  'transmission',
  'bodytype',
  'mileage',
  'engine_capacity',
  'engine_type',
];
let known = [
  'airbags',
  'airconditioner',
  'alloywheels',
  'antilockbreakingsystem',
  'coolbox',
  'cupholders',
  'foldingrearseat',
  'immobilizer',
  'powerdoorlocks',
  'powersteering',
  'powerwindows',
  'powermirrors',
  'rearwiper',
  'tractioncontrol',
  'rearseatent',
  'climatecontrol',
  'rearacvents',
  'frontspeaker',
  'rearspeaker',
  'armrests',
];
TravelTourDetails.propTypes = {
  post: PropTypes.array.isRequired,
  description: PropTypes.array,
};

export default function TravelTourDetails({ post, description }) {
  console.log(post);

  if (post) {

    const processKnownKeys = () => {
      const images1 = [];
      for (let i = 0; i < knownKeys.length; i++) {
        let key = knownKeys[i];
        if (post.hasOwnProperty(key)) {
          let dict = {
            val: post[key],
            title: key,
          };
          images1.push(dict);
        }
      }
      return images1;
    };
  
    const processIncludes = () => {
      const includes = [];
      for (let i = 0; i < known.length; i++) {
        let key = known[i];
        if (post.hasOwnProperty(key) && post[key] === true) {
          let dict = {
            val: post[key],
            label: key,
          };
          includes.push(dict);
        }
      }
      return includes;
    };
  
    const images1 = processKnownKeys();
    const includes = processIncludes();
  
    console.log(images1);
    console.log(includes);

    return (
      <Stack spacing={2} mb={6} mt={6}>
        <Typography variant="h4">Overview</Typography>
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
                  icon={<Iconify icon="ic:round-star" />}
                  label={value.title}
                  text={value.val}
                />
              ))}
            </Box>
          </section>

          <section>
            <Typography variant="h4" paragraph mt={6}>
              Description
            </Typography>

            <Typography mt={1}>{description}</Typography>
          </section>

          <section>
            <Stack>
              <Typography variant="h4" mt={6}>
                Car Features
              </Typography>
              <Box
                sx={{
                  boxShadow: '0 1px 10px #64666b',
                  borderRadius: '8px',
                  mt: 2,
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
          <Comments />
        </Box>
      </Stack>
    );
  }
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
  );
}
