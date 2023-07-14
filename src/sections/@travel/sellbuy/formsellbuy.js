import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import {
  Button,
  Typography,
  Box,
  Container,
  Stepper,
  Step,
  StepButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
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
    images: '',
  });
  const [formValues5, setFormValues5] = useState({
    seller_name: '',
    seller_phone: '',
    description: '',
  });
  const validateForm = (i) => {
    let isValid = true;
    const newErrors = {};
    if (i == 0) {
      // Validate each field
      if (!formValues1.reg_city) {
        newErrors.reg_city = 'Registration City is required';
        isValid = false;
      }

      if (!formValues1.city) {
        newErrors.city = 'City is required';
        isValid = false;
      }

      if (!formValues1.color) {
        newErrors.color = 'Color is required';
        isValid = false;
      }

      if (!formValues1.mileage) {
        newErrors.mileage = 'Mileage is required';
        isValid = false;
      }

      if (!formValues1.year) {
        newErrors.year = 'Year is required';
        isValid = false;
      }

      if (!formValues1.make) {
        newErrors.make = 'Make is required';
        isValid = false;
      }

      if (!formValues1.model) {
        newErrors.model = 'Model is required';
        isValid = false;
      }

      if (!formValues1.variant) {
        newErrors.variant = 'Variant is required';
        isValid = false;
      }

      if (!formValues1.bodytype) {
        newErrors.bodytype = 'Body Type is required';
        isValid = false;
      }
    } else if (i == 1) {
      if (!formValues2.price) {
        newErrors.price = 'Price is required';
        isValid = false;
      }
    } else if (i == 2) {
      if (!formValues3.engine_type) {
        newErrors.engine_type = 'Engine Type is required';
        isValid = false;
      }
      if (!formValues3.engine_capacity) {
        newErrors.engine_capacity = 'Engine Capacity is required';
        isValid = false;
      }
      if (!formValues3.transmission) {
        newErrors.transmission = 'Transmission is required';
        isValid = false;
      }
      if (!formValues3.assembly) {
        newErrors.assembly = 'Assembly is required';
        isValid = false;
      }
    } else if (i == 3) {
      if (!formValues4.images) {
        newErrors.images = 'Images is required';
        isValid = false;
      }
    } 
    else if (i == 4) {
      if (!formValues5.description) {
        newErrors.description = 'Description is required';
        isValid = false;
      }
      if (!formValues5.seller_name) {
        newErrors.seller_name = 'Seller Name is required';
        isValid = false;
      }
      if (!formValues5.seller_phone) {
        newErrors.seller_phone = 'Seller Phone is required';
        isValid = false;
      }
    }
    setErrors(newErrors);
    return isValid;
  };
  const handleNext = (actStep) => {
    const isValid1 = validateForm(actStep);
    const isValid2 = validateForm(actStep);
    const isValid3 = validateForm(actStep);
    const isValid4 = validateForm(actStep);
    // const isValid5 = validateForm(actStep);
    if (isValid1 && actStep == 0) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (isValid2 && actStep == 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (isValid3 && actStep == 2) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (isValid4 && actStep == 3) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } 
   
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
    // console.log(e);
    console.log(formValues2);
    // console.log(formValues3);
    // console.log(formValues3p1);
    // console.log();
    handleNext(activeStep);
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
    if (validateForm(4)){
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
    }
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Step1 formValues={formValues1} handleInputChange={handleInputChange1} errors={errors} />
        );
      case 1:
        return (
          <Step2 formValues={formValues2} handleInputChange={handleInputChange2} errors={errors} />
        );
      case 2:
        return (
          <Step3
            formValues={formValues3}
            formValues3p1={formValues3p1}
            handleInputChange={handleInputChange3}
            handleInputChange3p1={handleInputChange3p1}
            errors={errors}
          />
        );
      case 3:
        return (
          <Step4 formValues={formValues4} handleInputChange={handleInputChange4} errors={errors} />
        );
      case 4:
        return (
          <Step5 formValues={formValues5} handleInputChange={handleInputChange5} errors={errors} />
        );
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ textalign: 'center' }}
      >
        <DialogTitle id="alert-dialog-title" variant="h2" color="#CE9A00">
          {' '}
          <Icon icon="il:heart" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText variant="h3" id="alert-dialog-description" color="black">
            Thank You!
          </DialogContentText>
          <DialogContentText variant="h5" id="alert-dialog-description" color="black" mt={2}>
            Your Post has been submitted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            textAlign="center"
            onClick={handleClose}
            sx={{
              backgroundColor: '#212B36',
              color: 'white',
              '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

// ----------------------------------------------------------------------
