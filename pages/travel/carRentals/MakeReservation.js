import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Loader from '../Premium/Loader'
// @mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, Image } from '../../../src/components';
import ReserveCar from '../../../src/sections/@travel/Reserve/ReserveCar';
import Service from '../../../src/sections/@travel/service/servicetypes';
import CheckOut from '../../../src/sections/@travel/Reserve/Checkout';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

const CustomStepper = styled(Stepper)(({ theme }) => ({
  // display: 'none',
}));

//--------------------------------------------------------------

export default function MakerReservation() {
  const steps = ['Reserve your car now', 'Options', 'CheckOut', 'Payment', 'Checkout'];

  const matches = useMediaQuery('(min-width:600px)');
  console.log(matches);
  //
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Page title="Services" paddingBottom="50px">
      <Loader/>
      <div>
        <Container>
          <Box sx={{ width: '100%', mt: 15 }}>
            <CustomStepper
              nonLinear
              activeStep={activeStep}
              sx={{
                display: {
                  xs: 'none',
                  sm: 'flex',
                  md: 'flex',
                },
                 }}
            >
              {steps.map((label, index) => (
                <Step key={label} completed={completed[index]}>
                  <StepButton color="inherit">{label}</StepButton>
                </Step>
              ))}
            </CustomStepper>
            {/* )} */}
            <div>
              {allStepsCompleted() ? (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {activeStep === 0 && (
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      <ReserveCar />
                    </Typography>
                  )}
                  {activeStep === 1 && (
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      <Service />
                    </Typography>
                  )}
                  {activeStep === 2 && (
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      <CheckOut />
                    </Typography>
                  )}
                  {activeStep === 3 && <Typography sx={{ mt: 2, mb: 1 }}>Payment</Typography>}
                  {activeStep === 4 && <Typography sx={{ mt: 2, mb: 1 }}>Message</Typography>}
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleNext} sx={{ mr: 1 }}>
                      Next
                    </Button>
                    {activeStep !== steps.length &&
                      (completed[activeStep] ? (
                        <Typography variant="caption" sx={{ display: 'inline-block' }}>
                          Step {activeStep + 1} already completed
                        </Typography>
                      ) : (
                        <Button onClick={handleComplete}>
                          {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                        </Button>
                      ))}
                  </Box>
                </React.Fragment>
              )}
            </div>
          </Box>
        </Container>
      </div>
    </Page>
  );
}

// ----------------------------------------------------------------------

MakerReservation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
