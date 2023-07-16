import PropTypes from 'prop-types';

import React, { useRef, useEffect, useState } from 'react';
// icons
import playIcon from '@iconify/icons-carbon/play';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Stack, Box, Card } from '@mui/material';
// hooks
import { useBoundingClientRect, useResponsive } from '../../../hooks';
// _data
import _mock from '../../../../_data/mock';
import { useRouter } from 'next/router';

// components
import { SvgIconStyle, Image, TextIconLabel, Iconify, PlayerWithButton } from '../../../components';

// ----------------------------------------------------------------------
import SUMMARY1 from '../../../../src/sections/@travel/landing/Images1';
import { addScaleCorrector } from 'framer-motion';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0, 0),
  },
}));

// ----------------------------------------------------------------------

Caritems.propTypes = {
  value: PropTypes.array.isRequired,
  search: PropTypes.array.isRequired,
};
export default function Caritems(props) {
  console.log(props.value)
  console.log(props.search)
  // if (props.search == false){

  //   console.log(false)
  // }
  // else{
  //   console.log(true)

  // }
  const isDesktop = useResponsive('up', 'md');
  const router = useRouter();

  const containerRef = useRef(null);
  const container = useBoundingClientRect(containerRef);

  const [openVideo, setOpenVideo] = useState(false);

  const handleOpenVideo = () => {
    setOpenVideo(true);
  };

  const handleCloseVideo = () => {
    setOpenVideo(false);
  };

  const offsetLeft = container && container.left + 20;

  const [data, setData] = useState([]);
  
  useEffect(() => {
    console.log('useeee')
    const fetchData = async () => {
      try {
        const response = '';
        if (props.search != '' && props.filterprice == ''){
          console.log('true')
          response = await fetch(`https://autobidup.pythonanywhere.com/store/search/?search=${props.search}`);
        }
        else if (props.filterprice != '' && props.search == ''){
          console.log('entered price')
          var priceValue = props.filterprice[0].label
          const [startValue, endValue] = priceValue.split(' to ');
          response = await fetch(`https://autobidup.pythonanywhere.com/store/search/?price__gte=${startValue}&price__lte=${endValue}`);
        }  
        else if (props.filterprice != '' && props.search != ''){
          console.log('entered price and search')
          var priceValue = props.filterprice[0].label
          const [startValue, endValue] = priceValue.split(' to ');
          response = await fetch(`https://autobidup.pythonanywhere.com/store/search/?search=${props.search}&price__gte=${startValue}&price__lte=${endValue}`);
        }  
        else{
          setData([])
        console.log("worked")
        response = await fetch(`https://autobidup.pythonanywhere.com/store/product_type/?search=${props.value}`);
        }
        const jsonData = await response.json();
        const filteredData = jsonData.filter((item) => item.ptype === String(props.value));
        setData(filteredData);
        // console.log(jsonData)  
        // setData(jsonData);
        console.log("created");
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[props.search, props.value]);

  return (
    <>
      <RootStyle>
        {/* <Typography variant="h3" textAlign="center" alignItems="center">
          AutoBidUp Accessories Store
        </Typography> */}

        <Container sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              display: 'grid',
              gap: { xs: 2, md: 4 },
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              },
            }}
          >
            {data.map((item) => (
              <div key={item.pid}>
                <Box 
                onClick={() => router.push({
                  pathname: '/travel/buysellcar/displaystoreItems',
                  query: { data: JSON.stringify(item) }
                })}
                sx={{
                  transition: 'all 0.3s',
                  cursor:"pointer",
                  mt: 8,
                  '&: hover': {
                    // pt: '40px',
                    transform: 'scale(0.92)',
                    transaction: '.3s',
                    color: '#FFBE00',
                  },
                  
                }}>
                  <Image
                    src={item.images}
                    sx={{
                      width: '100%',
                      height: '20%',
                    }}
                  />
                  <Box>
                    <Typography sx={{ mb: -1 }}>{item.pname}</Typography>
                    <Typography>{item.price}</Typography>
                  </Box>
                </Box>
              </div>
            ))}
          </Box>
        </Container>
      </RootStyle>
      <PlayerWithButton open={openVideo} onClose={handleCloseVideo} videoPath={_mock.video} />
    </>
  );
}
