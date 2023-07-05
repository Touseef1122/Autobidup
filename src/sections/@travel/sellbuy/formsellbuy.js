import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';


import { Button, Typography, Box, Container, Stepper, Step, StepButton } from '@mui/material';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
// import Serviceclassdata from '../../../_data/mock/serviceclassdata.js';

import Step1 from '../sellbuy/carinformationstep1';
import Step2 from '../sellbuy/enterpricestep2';
import Step3 from '../sellbuy/featuresstep3';
import Step4 from '../sellbuy/imagesstep4';
import Step5 from '../sellbuy/finishstep5';


const steps = [
  'Car Information',
  'Enter Price',
  'Features & Specifications',
  'Upload Images',
  'Finish',
];

 
const FormSchema2 = Yup.object().shape({
  price: Yup.string().required().min(100000, 'minimum price is 1 lac').max(1000000000,'maximum price is 100 crore'),
});

export default function Formsellbuy() {

    const [activeStep, setActiveStep] = useState(0);
    const [formValues1, setFormValues1] = useState({
      reg_city: '',
      city: '',
      color: '',
      mileage:'',
      year: '',
      maker: '',
      model: '',
      variant: '',
      bodytype: '',
    });
    const [formValues2, setFormValues2] = useState({
      price: ''
    });
    const [formValues3, setFormValues3] = useState({
      enginetype: '',
      engineCapacity: '',
      transmission: '',
      assembly: ''
    });
    const [formValues3p1, setFormValues3p1] = useState({
      
        Airbags: false,
        Airconditioner: false,
        Alloywheels: false,
        Antilockbreakingsystem: false,
        Coolbox: false,
        Cupholders: false,
        Foldingrearseat: false,
        Immobilizer: false,
        Powerdoorlocks: false,
        Powersteering: false,
        Powerwindows: false,
        Powermirrors: false,
        Rearwiper: false,
        Tractioncontrol: false,
        Rearseatent: false,
        Climatecontrol: false,
        Rearacvents: false,
        Frontspeaker: false,
        Rearspeaker: false,
        Armrests: false
    
    });
 
    const [formValues5, setFormValues5] = useState({
      name: '',
      phoneNumber: '',
      description:''
    });
    
  
    const handleNext = () => {

      setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
    
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleInputChange1 = e => {
    const { name, value } = e.target;
    setFormValues1(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleInputChange2 = e => {
    const { name, value } = e.target;
    setFormValues2(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleInputChange3 = e => {
    const { name, value } = e.target;
    setFormValues3(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleInputChange3p1 = e => {
    const  value = e.target.checked;
    const  name = e.target.name;
    
    setFormValues3p1(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleInputChange4 = e => {
    const { name, value } = e.target;
    setFormValues4(prevValues => ({
      ...prevValues,
      [name]: value.files[0],
    }));
  };
  const handleInputChange5 = e => {
    const { name, value } = e.target;
    setFormValues5(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleNextButton = e => {
    e.preventDefault();
    // Do something with the form values
    console.log(formValues1);
    console.log(formValues2);
    console.log(formValues3);
    console.log(formValues3p1);
    // console.log();
    handleNext();
  };
  
  const handleSubmit = ()=> {
    //submit api call
    console.log(formValues5);
    console.log('submitteeedddd');
 

  };

  
  const getStepContent = stepIndex => {
    switch (stepIndex) {
      case 0:
        return <Step1 formValues={formValues1} handleInputChange={handleInputChange1} />;
      case 1:
        return <Step2 formValues={formValues2} handleInputChange={handleInputChange2} />;
      case 2:
        return <Step3 formValues={formValues3} formValues3p1={formValues3p1} handleInputChange={handleInputChange3} handleInputChange3p1={handleInputChange3p1} />;
      case 3:
        return <Step4  handleInputChange={handleInputChange4} />;
        case 4:
        return <Step5 formValues={formValues5} handleInputChange={handleInputChange5} />;
      default:
        return null;
    }
  };



  


 
 

return (
    <Container sx={{ padding: '5%' }}>
      <Box
        sx={{
          width: '100%',
          p: { sm: 4 },
          pt: { xs: 2 },
          pb: { xs: 2 },
          borderRadius: '20px',
          background: 'rgba(254,254,254,0.93)',
        }}
      >
        <Typography variant="h2" textAlign="center" mb={4}>
          Sell Used Car Form
        </Typography>
        <form >
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          sx={{
            display: {
              xs: 'none',
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
              
            >
              <StepButton color="yellow">{label}</StepButton>
            </Step>
          ))}
        </Stepper>

        <div>
        {activeStep === steps.length ? (
          <div>
            <p>All steps completed!</p>
            <Button variant="contained" color="primary" onClick={() => setActiveStep(0)}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={activeStep === steps.length - 1 ? handleSubmit: handleNextButton}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
        </form>

      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------
