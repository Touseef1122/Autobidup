import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';

import userIcon from '@iconify/icons-carbon/user';
import { useRouter } from 'next/router';
import { TextIconLabel, Iconify, Image } from '../../../components';
import { Icon } from '@iconify/react';

import {
  Grid,
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
import { Overview } from '../tours';

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

Caritemlist.propTypes = {
  // item: PropTypes.array.isRequired,
  value: PropTypes.array,
  search: PropTypes.array,
  filterprice: PropTypes.array,
  filteryear: PropTypes.array,
};

export default function Caritemlist(props) {
  const router = useRouter();
  console.log("value",props.value)
  console.log("search",props.search)
  console.log("price",props.filterprice)
  console.log("year",props.filteryear)

  const [data, setData] = useState([]);
  
  useEffect(() => {
    console.log('useeee')
    const fetchData = async () => {
      try {
        const response = '';
        if (props.filterprice != '' && props.filteryear == '' && props.search === ''){
          console.log('entered price')
          var priceValue = props.filterprice[0].label
          const [startValue, endValue] = priceValue.split(' to ');
          response = await fetch(`https://autobidup.pythonanywhere.com/cars/search/?price__gte=${startValue}&price__lte=${endValue}`);
        }   
        else  if (props.filteryear != '' && props.filterprice === '' && props.search === ''){
          console.log('entered year')
          var priceValue = props.filteryear[0].label
          const [startValue, endValue] = priceValue.split(' to ');
          response = await fetch(`https://autobidup.pythonanywhere.com/cars/search/?year__gte=${startValue}&year__lte=${endValue}`);
        }      
        else  if (props.search !== '' && props.filterprice == '' && props.filteryear == ''){
          console.log('entered search')
          response = await fetch(`https://autobidup.pythonanywhere.com/cars/search/?search=${props.search}`);
        }
        else  if (props.search !== '' && props.filterprice == '' && props.filteryear != ''){
          console.log('entered search and year')
          var priceValue = props.filteryear[0].label
          const [startValue, endValue] = priceValue.split(' to ');
          response = await fetch(`https://autobidup.pythonanywhere.com/cars/search/?search=${props.search}&year__gte=${startValue}&year__lte=${endValue}`);
        }
        else  if (props.search !== '' && props.filterprice != '' && props.filteryear == ''){
          console.log('entered search and price')
          var priceValue = props.filterprice[0].label
          const [startValue, endValue] = priceValue.split(' to ');
          response = await fetch(`https://autobidup.pythonanywhere.com/cars/search/?search=${props.search}&price__gte=${startValue}&price__lte=${endValue}`);
        }
        else  if (props.search == '' && props.filterprice != '' && props.filteryear != ''){
          console.log('entered price and year')
          var priceValue = props.filterprice[0].label
          const [startValue, endValue] = priceValue.split(' to ');
          var yearValue = props.filteryear[0].label
          const [start, end] = yearValue.split(' to ');
          response = await fetch(`https://autobidup.pythonanywhere.com/cars/search/?price__gte=${startValue}&price__lte=${endValue}&year__gte=${start}&year__lte=${end}`);
        }
        else  if (props.search != '' && props.filterprice != '' && props.filteryear != ''){
          console.log('entered search and price and year')
          console.log(props.search)
          var priceValue = props.filterprice[0].label
          const [startValue, endValue] = priceValue.split(' to ');
          var yearValue = props.filteryear[0].label
          const [start, end] = yearValue.split(' to ');
          response = await fetch(`https://autobidup.pythonanywhere.com/cars/search/?search=${props.search}&price__gte=${startValue}&price__lte=${endValue}&year__gte=${start}&year__lte=${end}`);
        }
        else{
          setData([])
        console.log("all worked")
        response = await fetch(`https://autobidup.pythonanywhere.com/cars/search/?search=${props.value}`);
        }
        const jsonData = await response.json();

        const filteredData = jsonData.filter((item) => item.bodytype === props.value);
        setData(filteredData);
        console.log(filteredData)  
        // setData(jsonData);
        console.log("created");
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[props.search, props.value, props.filterprice]);

  return (
    <Box
      mt={2}
     
      sx={{
        // textAlign: 'center',
        display: 'grid',
        gap: { xs: 8, md: 3 },
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        },
        // py: 5,
        pl: { sm: 2 },
        pr: { sm: 2 },
      }}
    >
      {data?.map((value) => (
        <div key={value.cid}>
        <Box   sx={{ p: 3, boxShadow: '0 1px 10px #64666B', borderRadius: '8px', mb: 1 }}  onClick={() =>
          router.push({
            pathname: '/travel/buysellcar/displaycardetails',
            query: { data: JSON.stringify(value) },
          })
        }>
          
          <Image alt={value.title} src={value.images[0]?.image_url} sx={{ width: '100%', height: '200px' }} />
          <Typography variant="h4">{`${value.make} ${value.model}`}</Typography>
          <Typography variant="h6">{value.year}</Typography>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body3" sx={{ display: { xs: 'none', sm: 'block' } }}>
              {value.city}
            </Typography>
            <Typography variant="body3" sx={{ display: { xs: 'none', sm: 'block' } }}>
              {value.distance}
            </Typography>
            <Typography variant="body3" sx={{ display: { xs: 'none', sm: 'block' } }}>
              {value.fuel}
            </Typography>
           </Stack>
          <Typography variant="h4" color="#CE9A00">
            {' '}
            PKR {value.price}
          </Typography>
    
        </Box>
        </div>
      ))}
    </Box>
  );
}

// ----------------------------------------------------------------------
