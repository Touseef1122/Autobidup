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
  // {
  //   val: 'Petrol',
  //   title: 'Engine Type',
  //   icon: locationIcon,
  // },
  // {
  //   val: 'Imported',
  //   title: 'Assembly',
  //   icon: userIcon,
  // },
  // {
  //   val: '2017',
  //   title: 'Year',
  //   icon: userIcon,
  // },
  // {
  //   val: 'Automatic',
  //   title: 'Transmission',
  //   icon: userIcon,
  // },
  // {
  //   val: 'White',
  //   title: 'Color',
  //   icon: locationIcon,
  // },
  // {
  //   val: 'Islamabad',
  //   title: 'RegCity',
  //   icon: locationIcon,
  // },
  // {
  //   val: '2007cc',
  //   title: 'Engine Capacity',
  //   icon: locationIcon,
  // },
  // {
  //   val: '20923',
  //   title: 'Ad Ref# 20923',
  //   icon: locationIcon,
  // },
];
var dict1 = {title: " ", val: " " }
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

TravelTourDetails.propTypes = {
  post: PropTypes.array.isRequired,
};

export default function TravelTourDetails({ post }) {
  console.log(post)
  // images1 = []
  // images1.push()
  for (let i=0;i<8;i++ ){
    if ("color" in post ){
      dict1.val = post.color
      dict1.title = "color"
    }
    //  if (post.assembly){
    //   dict1.val = post.assembly
    //   dict1.title = "assembly"
    // }
    //  if (post.transmission){
    //   dict1.val = post.transmission
    //   dict1.title = "transmission"
    // }
    //  if (post.model){
    //   dict1.val = post.model
    //   dict1.title = "model"
    // }
    //  if (post.engine_capacity){
    //   dict1.val = post.engine_capacity
    //   dict1.title = "engine_capacity"
    // }
    //  if (post.engine_type){
    //   dict1.val = post.engine_type
    //   dict1.title = "engine_type"
    // }
    //  if (post.mileage){
    //   dict1.val = post.mileage
    //   dict1.title = "mileage"
    // }
    //  if (post.bodytype){
    //   dict1.val = post.bodytype
    //   dict1.title = "bodytype"
    // }
    images1.push(dict1)
    // console.log(dict1)
    dict1 = {title: " ", val: " " }
  }

  return (
    <Stack spacing={2} mb={6} mt={6}>
      <Typography variant="h4">
        Overview
      </Typography>
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
        <Comments />
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
