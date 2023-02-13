import PropTypes from 'prop-types';

import * as React from 'react';

import { useRouter } from 'next/router';

import { Typography, Box, Grid } from '@mui/material';

import { Image } from '../../../components';
//-------------------------------------------------------------------

BusinessOverview.propTypes = {
  image: PropTypes.array.isRequired,
};
export default function BusinessOverview({ image }) {
  const router = useRouter();
  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
        }}
      >
        {image.map((value) => (
          <div key={value.bg}>
            <Image
              alt="hero"
              src={value.bg.src}
              sx={{
                // height: { md: '90vh' },
                bgcolor: 'transparent',
              }}
            />
            {value.para === 'true' && (
              <>
                <Typography                  
                  width={{xs:"80%",md:"30%"}}
                  color="white"
                  sx={{
                    ml: 4,
                    position: 'absolute',
                    top: {xs:"10%",sm:'15%'},
                    fontWeight:"bold",
                    fontSize:{xs:"16px",sm:"25px"},
                    textAlign:{xs:"left"}
                  }}
                >
                  {value.imageTitle1}
                </Typography>
                <Typography
                  width={{md:"30%"}}
                  color="white"
                  sx={{
                    ml: 4,
                    position: 'absolute',
                    top: '51%',
                    fontWeight:"bold",
                    fontSize:{xs:"16px",sm:"30px"},
                    textAlign:{xs:"left"}
                  }}
                >
                  {value.imageTitle2}
                </Typography>
              </>
            )}
            <Typography fontSize="40px" fontWeight="bold" textAlign="center" alignItems="center" color="black" p="25px">
              {value.title}
            </Typography>
          </div>
        ))}
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------
