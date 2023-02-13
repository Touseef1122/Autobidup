import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
// next
import { useRouter } from 'next/router';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Stack, Divider, Container, Typography, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import { useRequest } from '../../../src/hooks';
// routes
import Routes from '../../../src/routes';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config';
// _data
import { _tours } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen } from '../../../src/components';
//
import {
  TravelCheckOutForm,
  TravelCheckOutPaymentForm,
  TravelCheckOutShippingForm,
  TravelCheckOutSummary,
} from '../../../src/sections/@travel';
import SvgIcon from 'src/theme/overrides/SvgIcon';

// ----------------------------------------------------------------------

// const LabelStepStyle = styled((props) => (
//  <Box
//       sx={{
//         // mr: 1.5,
//         // width: 28,
//         // height: 28,
//         display: 'flex',
//         typography: 'h5',
//         borderRadius: '',
//         alignItems: 'center',
//         bgcolor: '#f0f2f7;',
//         justifyContent: 'center',
//         color: 'black',
//       }}
//     >
//       {props.step}
//     </Box>

// ))({});

// ----------------------------------------------------------------------

const FormSchema = Yup.object().shape({
  billingAddress: Yup.object().shape({
    fullAddress: Yup.string().required('Full address is required'),
    fullAddress2: Yup.string().required('Full address is required'),
  }),
});

export default function TravelCheckoutPage() {
  const router = useRouter();

  const [sameBilling, setSameBilling] = useState(false);
  const [departureDay, setDepartureDay] = useState(new Date());

  const handleChangeSameBilling = (event) => {
    setSameBilling(event.target.checked);
  };

  const { data: tour, error } = useRequest(`/api/travel/tours/${_tours[0].id}`);

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      billingAddress: {
        fullAddress: 'Address, airport, hotel,...',
        fullAddress2: 'Address, airport, hotel,...',
      },
    },
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
    router.replace(Routes.travel.checkoutComplete);
  };

  if (error) {
    return <ErrorScreen />;
  }

  if (!tour) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={5}>
        <section>
          <TravelCheckOutForm
            control={control}
            sameBilling={sameBilling}
            onChangeSameBilling={handleChangeSameBilling}
          />
          <TravelCheckOutSummary
            tour={tour}
            departureDay={departureDay}
            setDepartureDay={setDepartureDay}
            isSubmitting={isSubmitting}
          />
          <Stack
            sx={{
              textAlign: 'center',
              color: '#64666b',
              fontSize: '14px',
              letterSpacing: '0.15px',
              marginBottom: '24px',
            }}
          >
            <p></p>
          </Stack>
          <LoadingButton
            type="submit"
            size="large"
            variant="contained"
            loading={isSubmitting}
            sx={{
              marginTop: '10px',
              width: '100%',
              borderRadius: '4px',
            }}
          >
            Search
          </LoadingButton>
        </section>
      </Stack>
    </form>
  );
}

// ----------------------------------------------------------------------

TravelCheckoutPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
