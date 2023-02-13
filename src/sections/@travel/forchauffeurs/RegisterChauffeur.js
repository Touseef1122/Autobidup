import PropTypes from 'prop-types';
import * as React from 'react';

import { useRouter } from 'next/router';
// icons
// import Image from 'next/image';
// @mui

import {
  Button,
  Link,
  Typography,
  List,
  Box,
  ListItem,
  Grid,
  Container,
  Stepper,
  Step,
  StepLabel,
  StepButton
} from '@mui/material';
// utils
// @utils
import agency from '../../../assets/images/agencyBg.jpg';
// components
import Step1 from '../forchauffeurs/RegisterChauffeurStep1'
import Step2 from '../forchauffeurs/RegisterChauffeurStep2'
import Step3 from '../forchauffeurs/RegisterChauffeurStep3'
// ----------------------------------------------------------------------

RegisterChauffeur.propTypes = {
  services: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
  tours: PropTypes.array.isRequired,
};


const steps = ['Step 1', 'Step 2', 'Step 3'];

export default function RegisterChauffeur({ tours, icons, services }) {
  const router = useRouter();

//   const steps = ['Service Class', 'Options', 'Sign In', 'Payment', 'Checkout'];
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
    <Box sx={{ width: '100%', overflowX: 'hidden'}}>

    <Container sx={{ width: '100%',padding:{xs:"10px",sm:"50px"} }}>
      <Box sx={{ width: '100%' ,mt:15}}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit">{label}</StepButton>
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
          {activeStep === 0 && <Typography sx={{ mt: 2, mb: 1 }}><Step1 /></Typography>}
          {activeStep === 1 && <Typography sx={{ mt: 2, mb: 1 }}><Step2/></Typography>}
          {activeStep === 2 && <Typography sx={{ mt: 2, mb: 1 }}><Step3/></Typography>}
        
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
                <Button  disabled={activeStep === 2} onClick={handleNext} sx={{ mr: 1 }}>
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1 ? 'Sign Up' : 'Complete Step'}
                    </Button>
                  ))}
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
  </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
