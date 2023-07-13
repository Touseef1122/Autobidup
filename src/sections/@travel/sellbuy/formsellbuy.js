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
  price: Yup.string()
    .required()
    .min(100000, 'minimum price is 1 lac')
    .max(1000000000, 'maximum price is 100 crore'),
});

export default function Formsellbuy() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
 console.log('hello');
 
  const [formValues1, setFormValues1] = useState({
    reg_city: '',
    city: '',
    color: '',
    mileage: '',
    year: '',
    make: '',
    model: '',
    variant: '',
    bodytype: '',
  });
  const [formValues2, setFormValues2] = useState({
    price: '',
  });
  const [formValues3, setFormValues3] = useState({
    engine_type: '',
    engine_capacity: '',
    transmission: '',
    assembly: '',
  });
  const [formValues3p1, setFormValues3p1] = useState({
    airbags: false,
    airconditioner: false,
    alloywheels: false,
    antilockbreakingsystem: false,
    coolbox: false,
    cupholders: false,
    foldingrearseat: false,
    immobilizer: false,
    powerdoorlocks: false,
    powersteering: false,
    powerwindows: false,
    powermirrors: false,
    rearwiper: false,
    tractioncontrol: false,
    rearseatent: false,
    climatecontrol: false,
    rearacvents: false,
    frontspeaker: false,
    rearspeaker: false,
    armrests: false,
  });
  const [formValues4, setFormValues4] = useState({
    images : '',
  });

  const [formValues5, setFormValues5] = useState({
    seller_name: '',
    seller_phone: '',
    description: '',
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setFormValues1((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setFormValues2((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleInputChange3 = (e) => {
    const { name, value } = e.target;
    setFormValues3((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleInputChange3p1 = (e) => {
    const value = e.target.checked;
    const name = e.target.name;

    setFormValues3p1((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleInputChange4 = (e) => {
    var reader = new FileReader();
    var file = e.target.files[0];
    console.log(e);
    reader.onload = () => {
      // console.log(reader.result);
      setFormValues4((prevValues) => ({
        ...prevValues,
        images: reader.result,
      }));
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const handleInputChange5 = (e) => {
    const { name, value } = e.target;
    setFormValues5((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const formattedDate = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${currentDay
    .toString()
    .padStart(2, '0')}`;
  console.log(formattedDate);

  const handleNextButton = (e) => {
    e.preventDefault();
    // Do something with the form values
    console.log(formValues1);
    console.log(formValues2);
    console.log(formValues3);
    console.log(formValues3p1);
    // console.log();
    handleNext();
  };

  useEffect(() => {
    setFormData({
      ...formValues1,
      ...formValues2,
      ...formValues3,
      ...formValues3p1,
      ...formValues4,
      ...formValues5,
      created_at: formattedDate,
    });
  }, [formValues1, formValues2, formValues3, formValues3p1, formValues4, formValues5]);

  const handleSubmit = async () => {
   console.log(formValues5);
    console.log('submitteeedddd now');
    console.log(formData);
    try {
      console.log('form is submiting');
      const response = await fetch('https://autobidup.pythonanywhere.com/cars/create/', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        // xhrFields: {
        //   withCredentials: true,
        // },
      });

      if (response.ok) {
        // API call successful
        const responseData = await response.json();

        console.log('response data', responseData);
        console.log('form submitted succesfully');
        setOpen(true);
        //
      } else {
        // API call failed
        const errorData = await response.json();
        // Handle the error data as needed
      }
    } catch (error) {
      // Error occurred during the API call
      console.error(error);
    }
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <Step1 formValues={formValues1} handleInputChange={handleInputChange1} />;
      case 1:
        return <Step2 formValues={formValues2} handleInputChange={handleInputChange2} />;
      case 2:
        return (
          <Step3
            formValues={formValues3}
            formValues3p1={formValues3p1}
            handleInputChange={handleInputChange3}
            handleInputChange3p1={handleInputChange3p1}
          />
        );
      case 3:
        return <Step4 formValues={formValues4} handleInputChange={handleInputChange4} />;
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
        <form>
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
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={activeStep === steps.length - 1 ? handleSubmit : handleNextButton}
                  >
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
