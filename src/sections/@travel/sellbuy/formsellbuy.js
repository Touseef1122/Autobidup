import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';

import {
  Button,
  Typography,
  Box,
  Container,
  Stepper,
  Step,
  StepButton,
  Modal,
} from '@mui/material';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
// import Serviceclassdata from '../../../_data/mock/serviceclassdata.js';

import Step1 from '../sellbuy/carinformationstep1';
import Step2 from '../sellbuy/enterpricestep2';
import Step3 from '../sellbuy/featuresstep3';
import Step4 from '../sellbuy/imagesstep4';
import Step5 from '../sellbuy/finishstep5';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  textAlign: 'center',
  p: 4,
};
const steps = [
  'Car Information',
  'Enter Price',
  'Features & Specifications',
  'Upload Images',
  'Finish',
];


export default function Formsellbuy() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    router.push('/');
  };
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [formValues1, setFormValues1] = useState({
    reg_city: '',
    city: '',
    color: '',
    mileage: '',
    year: '',
    maker: '',
    model: '',
    variant: '',
    bodytype: '',
  });
  const [formValues2, setFormValues2] = useState({
    price: '',
  });
  const [formValues3, setFormValues3] = useState({
    enginetype: '',
    engineCapacity: '',
    transmission: '',
    assembly: '',
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
    Armrests: false,
  });

  const [formValues4, setFormValues4] = useState({
    images: '',
  });

  const [formValues5, setFormValues5] = useState({
    name: '',
    phoneNumber: '',
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
    console.log(formValues4);
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
    //submit api call
    console.log(formValues5);
    console.log('submitteeedddd');
    console.log(formData);
    try {
      console.log('form is submiting');
      const response = await fetch('https://autobidup.pythonanywhere.com/cars/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        xhrFields: {
          withCredentials: true,
        },
      });

      if (response.ok) {
        // API call successful
        const responseData = await response.json();
        // Handle the response data as needed
        // localStorage.setItem('firstname', responseData.firstName);
        // localStorage.setItem('username', responseData.username);

        // // Store JWT token in document cookie
        // document.cookie = `jwt=${responseData.jwt}; path=/`;
        console.log('response data', responseData);
        console.log('form submitted succesfully');
        setOpen(true)
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            YOUR FORM IS SUBMITTED
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, color: 'green' }}>
            SUCCESSFULLY{' '}
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
}

// ----------------------------------------------------------------------
