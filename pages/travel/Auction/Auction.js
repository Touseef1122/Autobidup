import React, { useRef, useEffect, useState } from 'react';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// _data
// import { services, summary, service } from '../../_data/mock/forChauffeursData';
import { _testimonials } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, Breadcrumbs, Iconify } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import { TravelLandingHero } from '../../../src/sections/@travel';
import { useRouter } from 'next/router';

import Formcompo from './formcompo';
import AuctionCards from './Auctioncards';
import Loader from '../UsedCars/Loader';
import ChatButton from '../ChatButton';
//images

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------
export default function Displaycarlist({ posts }) {
  const router = useRouter();
  const { bidId } = router.query;
  const item = bidId;
  const [bid_Id, setBid_Id] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log('details fetching');
        const response = await fetch(
          'https://autobidup.pythonanywhere.com/bidding/record_details_username',
          {
            method: 'GET',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.ok) {
          // API call successful
          let responseData = await response.json();
          const automaticGeneratedBidId = responseData.automatic_generated_bid_id;
          setBid_Id(automaticGeneratedBidId);

          console.log('response data', responseData);
          console.log('Automatic Generated Bid ID:', automaticGeneratedBidId);
          console.log('customer details arrived succesfully');
        } else {
          // API call failed
          const errorData = await response.json();
          // Handle the error data as needed
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       console.log('details fetching');
  //       const response = await fetch(
  //         `https://autobidup.pythonanywhere.com/bidding/record_details_username?bidId=${encodeURIComponent(
  //           bidId
  //         )}`,
  //         {
  //           method: 'GET',
  //           credentials: 'include',
  //           headers: {
  //             'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
  //           },
  //         }
  //       );

  //       if (response.ok) {
  //         // API call successful
  //         let responseData = await response.json();
  //         const automaticGeneratedBidId = responseData.automatic_generated_bid_id;
  //         setBid_Id(automaticGeneratedBidId);

  //         console.log('response data', responseData);
  //         console.log('Automatic Generated Bid ID:', automaticGeneratedBidId);
  //         console.log('customer details arrived succesfully');
  //       } else {
  //         // API call failed
  //         const errorData = await response.json();
  //         // Handle the error data as needed
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  const Id = bid_Id;

  console.log('Bid ID:', bid_Id);

  return (
    <Page title="Auction | AutoBidUp">
      <RootStyle>
        <Loader />
        <ChatButton />
        <TravelLandingHero />
        <Formcompo bidId={item} bid_Id={Id} />
        <AuctionCards />
      </RootStyle>
    </Page>
  );
}

//-------------------------------------------------------------------------------
// const bestcities = [
//   {
//     id: 1,
//     name: 'Honda City',
//     dis: '2019',
//     price: 'Rs 3,000,000',
//     img: Houston,
//   },
//   {
//     id: 2,
//     name: 'Crola Atlas',
//     dis: '2020',
//     price: 'Rs 3,000,000',
//     img: Dallas,
//   },
//   {
//     id: 3,
//     name: 'Mehran',
//     dis: '2016',
//     price: 'Rs 3,000,000',

//     img: Austin,
//   },
//   {
//     id: 4,
//     price: 'Rs 3,000,000',
//     name: 'Jeep',
//     dis: '2018',
//     img: Galviston,
//   },
//   {
//     id: 5,
//     price: 'Rs 3,000,000',
//     name: 'Honda City',
//     dis: '2019',
//     img: Houston,
//   },
//   {
//     id: 6,
//     price: 'Rs 3,000,000',
//     name: 'Crola Atlas',
//     dis: '2020',
//     img: Dallas,
//   },
//   {
//     id: 7,
//     name: 'Mehran',
//     price: 'Rs 3,000,000',
//     dis: '2016',
//     img: Austin,
//   },
//   {
//     id: 8,
//     name: 'Jeep',
//     price: 'Rs 3,000,000',
//     dis: '2018',
//     img: Galviston,
//   },
//   {
//     id: 9,
//     name: 'Honda City',
//     dis: '2019',
//     price: 'Rs 3,000,000',
//     img: Houston,
//   },
//   {
//     id: 10,
//     name: 'Crola Atlas',
//     price: 'Rs 3,000,000',
//     dis: '2020',
//     img: Dallas,
//   },
//   {
//     id: 11,
//     price: 'Rs 3,000,000',
//     name: 'Mehran',
//     dis: '2016',
//     img: Austin,
//   },
//   {
//     id: 12,
//     name: 'Jeep',
//     price: 'Rs 3,000,000',
//     dis: '2018',
//     img: Galviston,
//   },
// ];
// ----------------------------------------------------------------------

Displaycarlist.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
