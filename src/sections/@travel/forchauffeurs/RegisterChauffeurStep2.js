import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import Expand from '@iconify/icons-carbon/arrow-down';
// icons
// import Image from 'next/image';
// @mui

import {
  Typography,
  Box,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  MenuList,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Link,
  Checkbox,
} from '@mui/material';
// utils
// @utils
import agency from '../../../assets/images/agencyBg.jpg';
// components
import { Image, TextMaxLine, Iconify } from '../../../components';
import { TravelLandingfull } from '../landing';
import { LoadingButton } from '@mui/lab';
// ----------------------------------------------------------------------
const accordian1 = [
  'Mercedes V-Class (Colour: Black)',
  'Mercedes V-Class (Colour: Black)',
  'Mercedes V-Class (Colour: Black)',
];

export default function RegisterChauffeurStep2({ tours, icons, services }) {
  const router = useRouter();
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChange2 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Container sx={{ width: '100%', padding: '20px', textAlign: 'left' }}>
        <Box
          sx={
            {
              // ml: { md: '30%' },
              // mr: { md: '30%' },
            }
          }
        >
          <Typography variant="h3" textAlign="left" pb="5px">
            Register
          </Typography>
          <Typography variant="body1" color="#181a1f;">
            Enter your details to create an account.
          </Typography>
          <Typography variant="body1" color="#181a1f;" pt="10px" pb="8px">
            The following are required to register with Blacklane in Adelaide:
          </Typography>

          <Typography variant="h5" color="#c49a52;" pt="10px" pb="8px">
            At least one of the following vehicles:
          </Typography>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange2('panel1')}>
            <AccordionSummary
              expandIcon={
                <Iconify
                  icon={Expand}
                  sx={{ fontSize: '22px', color: '#919EAB', margin: '0 10px 0 0' }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={
                {
                  // borderLeft: '5px solid rgb(255, 76, 0)',
                  // backgroundColor: 'rgba(21, 137, 238, 0.1)',
                }
              }
            >
              <Typography variant="h6">Maximum 3 year(s) old (from 2020)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {accordian1.map((value) => (
                  //
                  // <Checkbox>{value}</Checkbox>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={value}
                          onChange={handleChange}
                          name="chocolate"
                        />
                      }
                      label="Chocolate"
                    />
                  </FormGroup>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange2('panel2')}>
            <AccordionSummary
              expandIcon={
                <Iconify
                  icon={Expand}
                  sx={{ fontSize: '22px', color: '#919EAB', margin: '0 10px 0 0' }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h6">Maximum 4 year(s) old (from 2019)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {accordian1.map((value) => (
                  // <MenuList>{value}</MenuList>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={value}
                          onChange={handleChange}
                          name="chocolate"
                        />
                      }
                      label="Chocolate"
                    />
                  </FormGroup>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Typography variant="h5" color="#c49a52" pt="10px" pb="8px">
            All of the following documents:
          </Typography>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange2('panel3')}>
            <AccordionSummary
              expandIcon={
                <Iconify
                  icon={Expand}
                  sx={{ fontSize: '22px', color: '#919EAB', margin: '0 10px 0 0' }}
                />
              }
              aria-controls="panel3a-content"
              id="panel3a-header"
              sx={
                {
                  // borderLeft: '5px solid rgb(255, 76, 0)',
                  // backgroundColor: 'rgba(21, 137, 238, 0.1)',
                }
              }
            >
              <Typography variant="h6">Driver</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {accordian1.map((value) => (
                  // <MenuList>{value}</MenuList>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={value}
                          onChange={handleChange}
                          name="chocolate"
                        />
                      }
                      label="Chocolate"
                    />
                  </FormGroup>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel4'} onChange={handleChange2('panel4')}>
            <AccordionSummary
              expandIcon={
                <Iconify
                  icon={Expand}
                  sx={{ fontSize: '22px', color: '#919EAB', margin: '0 10px 0 0' }}
                />
              }
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography variant="h6">Company</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {accordian1.map((value) => (
                  // <MenuList>{value}</MenuList>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={value}
                          onChange={handleChange}
                          name="chocolate"
                        />
                      }
                      label="Chocolate"
                    />
                  </FormGroup>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel5'} onChange={handleChange2('panel5')}>
            <AccordionSummary
              expandIcon={
                <Iconify
                  icon={Expand}
                  sx={{ fontSize: '22px', color: '#919EAB', margin: '0 10px 0 0' }}
                />
              }
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography variant="h6">Vehicle</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {accordian1.map((value) => (
                  // <MenuList>{value}</MenuList>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={value}
                          onChange={handleChange}
                          name="chocolate"
                        />
                      }
                      label="Chocolate"
                    />
                  </FormGroup>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Typography variant="h5" color="#c49a52" pt="10px" pb="8px">
            Language Requirements:
          </Typography>
          <MenuList>Chauffeurs have basic English skills</MenuList>

          <Typography variant="h5" color="#c49a52" pt="10px" pb="8px">
            Do you understand and meet the above requirements?
          </Typography>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <Typography textAlign="right">
            <Link color="black" onClick={() => router.push('/travel/loginChauffeur')}>
              Already have an account?
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
