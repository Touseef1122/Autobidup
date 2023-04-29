import PropTypes from 'prop-types';
import * as React from 'react';

import { Button, Typography, Box, Container, Stepper, Step, StepButton } from '@mui/material';

// import Serviceclassdata from '../../../_data/mock/serviceclassdata.js';

import Step1 from '../auctionform/usernformationstep1';
import Step2 from '../auctionform/cardetailsstep2';
import Step3 from '../sellbuy/featuresstep3';
import Step4 from '../sellbuy/imagesstep4';
import Step5 from '../sellbuy/finishstep5';

//--------------------------------------------------------------
const steps = [
  'Consignor Information',
  'Car Details',
  //   'Features & Specifications',
  //   'Upload Images',
  //   'Finish',
];

export default function Miniform() {
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

  //   const handleStep = (step: number) => () => {
  //     setActiveStep(step);
  //   };

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
    <Container sx={{ padding: '5%' }}>
      <Box
        sx={{
          width: '100%',
          mt: 5,
          p: { sm: 4 },
          pt: { xs: 2 },
          pb: { xs: 2 },
          borderRadius: '20px',
          background: 'rgba(254,254,254,0.93)',
        }}
      >
        <Typography variant="h2" textAlign="center" mb={4}>
          Consignor Form
        </Typography>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          sx={{
            display: {
              xs: 'flex',
              sm: 'flex',
              md: 'flex',
            },
            color: '#CE9A00',
          }}
        >
          {steps.map((label, index) => (
            <Step
              key={label}
              sx={{
                '& .MuiStepLabel-root .Mui-completed': {
                  color: '#CE9A00', // circle color (COMPLETED)
                },
                '& .MuiStepLabel-root .Mui-active': {
                  color: '#CE9A00', // circle color (ACTIVE)
                },
                '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                  fill: 'white', // circle's number (ACTIVE)
                },
              }}
              completed={completed[index]}
            >
              <StepButton color="yellow">{label}</StepButton>
            </Step>
          ))}
        </Stepper>
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
                  <Step1 />
                </Typography>
              )}
              {activeStep === 1 && (
                <Typography sx={{ mt: 2, mb: 1 }}>
                  <Step2 />
                </Typography>
              )}
              {/* {activeStep === 2 && (
                <Typography sx={{ mt: 2, mb: 1 }}>
                  <Step3 />
                </Typography>
              )}
              {activeStep === 3 && (
                <Typography sx={{ mt: 2, mb: 1 }}>
                  <Step4 />
                </Typography>
              )}
              {activeStep === 4 && (
                <Typography sx={{ mt: 2, mb: 1 }}>
                  <Step5 />
                </Typography>
              )} */}
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
  );
}

// ----------------------------------------------------------------------
