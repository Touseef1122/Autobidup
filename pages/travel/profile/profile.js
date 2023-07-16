import * as React from 'react';
import { useState, useEffect } from 'react';

//data
import { services, services2, image } from '../../../_data/mock/landing';
// @mui
import { styled, useTheme } from '@mui/material/styles';

import Loader from '../UsedCars/Loader';
import ChatButton from '../ChatButton';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// _data
import { _testimonials } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, ContactMap } from '../../../src/components';
import { Button, Modal, Typography, Stack, Box, TextField } from '@mui/material';

// ----------------------------------------------------------------------
const style2 = {
  position: "absolute",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1000px',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 2,
  height: '640px',
};
export default function Profile() {
  let [customerDetails, setCustomerDetails] = useState({
    first_name: '',
    last_name: '',
    contact: '',
    username: '',
    state: '',
  });
  // let [adsDetails, setAdDetails] = useState({
  //   cname: '',
  //   cid: '',
  //   bodytype: '',
  //   reg_city: '',
  //   city: '',
  //   color: '',
  //   mileage: '',
  //   year: '',
  //   make: '',
  //   model: '',
  //   created_at: '',
  //   variant: '',
  //   engine_type: '',
  //   engine_capacity: '',
  //   transmission: '',
  //   assembly: '',
  //   description: '',
  //   seller_name: '',
  //   seller_phone: '',
  //   price: '',
  //   images: [],
  //   airbags: '',
  //   airconditioner: '',
  //   alloywheels: '',
  //   antilockbreakingsystem: '',
  //   coolbox: '',
  //   cupholders: '',
  //   foldingrearseat: '',
  //   immobilizer: '',
  //   powerdoorlocks: '',
  //   powersteering: '',
  //   powerwindows: '',
  //   powermirrors: '',
  //   rearwiper: '',
  //   tractioncontrol: '',
  //   rearseatent: '',
  //   climatecontrol: '',
  //   rearacvents: '',
  //   frontspeaker: '',
  //   rearspeaker: '',
  //   armrests: '',
  // });
  let [adDetails, setAdDetails] = useState([]);
  let [orderDetails, setOrderDetails] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // let customerDetails = []
  // let menuicn = document.className('.menuicn');
  // let nav = document.className('.navcontainer');
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [selectedAd, setSelectedAd] = useState([]);

  const handleTitleClick = () => {
    // nav.classList.toggle('navclose');
    setIsDescriptionVisible(!isDescriptionVisible);
  };
  const [currentOption, setCurrentOption] = useState('profile');

  useEffect(() => {
    if (currentOption === 'profile') {
      async function fetchData() {
        try {
          console.log('details fetching');
          const response = await fetch(
            'https://autobidup.pythonanywhere.com/user/customer-details',
            {
              method: 'GET',
              mode: 'cors',
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          if (response.ok) {
            // API call successful
            let responseData = await response.json();
            console.log('response data', responseData);
            if (responseData) {
              setCustomerDetails(responseData);
            }
            console.log('customer details arrived succesfully');
            console.log(customerDetails);
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
    } else if (currentOption === 'myads') {
      console.log('entered ads');

      async function fetchData1() {
        try {
          console.log('details fetching');
          const response = await fetch(
            `https://autobidup.pythonanywhere.com/cars/get_posts/?search=${customerDetails.username}`,
            {
              method: 'GET',
              mode: 'cors',
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          if (response.ok) {
            // API call successful
            let responseData = await response.json();
            setAdDetails((prevOrderDetails) => [...prevOrderDetails, ...responseData]);
            console.log('response data', responseData);
            console.log(adDetails);
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
      fetchData1();
    } else if (currentOption === 'myorders') {
      async function fetchData() {
        try {
          console.log('details fetching');
          const response = await fetch(
            `https://autobidup.pythonanywhere.com/store/get_orders/?search=${customerDetails.username}`,
            {
              method: 'GET',
              mode: 'cors',
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          if (response.ok) {
            // API call successful
            let responseData = await response.json();
            // setOrderDetails(responseData);
            setOrderDetails((prevOrderDetails) => [...prevOrderDetails, ...responseData]);
            console.log('response data', responseData);
            console.log(orderDetails);
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
    }
  }, [currentOption]);

  const handleEdit = (value) => {
    setSelectedAd(value);
    handleOpen();
  };
  const handleDelete = (value) => {
    async function fetchData() {
      try {
        console.log('details fetching');
        const response = await fetch(
          'https://autobidup.pythonanywhere.com/cars/remove',
          {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id : value
            }),
          }
        );

        if (response.ok) {
          // API call successful
          let responseData = await response.json();
          console.log('response data', responseData);
          if (responseData) {
            setCustomerDetails(responseData);
          }
          console.log('customer details arrived succesfully');
          console.log(customerDetails);
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
  };
  return (
    <Page title="Personal Profile" mt="50px">
      <div className="">
        <div className="main-container">
          {isDescriptionVisible && (
            <div className="navcontainer">
              <nav className="nav">
                <div className="nav-upper-options">
                  <div className=" ">
                    <img
                      src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
                      className="dpicn"
                      alt="dp"
                    ></img>
                  </div>
                  <div className="nav-option option1" onClick={() => setCurrentOption('profile')}>
                    <img
                      src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                      className="nav-img"
                      alt="dashboard"
                    ></img>
                    <h3>Profile</h3>
                  </div>

                  <div className="option2 nav-option" onClick={() => setCurrentOption('myads')}>
                    <img
                      src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                      className="nav-img"
                      alt="articles"
                    ></img>
                    <h3>My Ads</h3>
                  </div>

                  <div className="nav-option option3" onClick={() => setCurrentOption('myorders')}>
                    <img
                      src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                      className="nav-img"
                      alt="report"
                    ></img>
                    <h3>My Orders</h3>
                  </div>

                  <div className="nav-option option4">
                    <img
                      src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
                      className="nav-img"
                      alt="settings"
                    ></img>
                    <h3> Settings</h3>
                  </div>

                  <div className="nav-option logout">
                    <img
                      src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                      className="nav-img"
                      alt="logout"
                    ></img>
                    <h3>Logout</h3>
                  </div>
                </div>
              </nav>
            </div>
          )}

          <div className="report-container">
            <div className="logosec">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
                className="icn menuicn"
                id="menuicn"
                alt="menu-icon"
                onClick={handleTitleClick}
              ></img>
            </div>

            {currentOption === 'profile' && (
              <div>
                <div className="report-header">
                  <h1 className="recent-Articles">Profile</h1>
                </div>
                <div className="report-body">
                  <div className="profile-container">
                    <Stack direction="row" spacing={10}>
                      <Stack className="profileData">
                        <label className="profileLabel" htmlFor="name">
                          First Name:
                        </label>
                        <input
                          disabled
                          className="profileInput"
                          type="text"
                          id="name"
                          name="name"
                          value={customerDetails.first_name}
                          onChange={(e) =>
                            setCustomerDetails((prevData) => ({
                              ...prevData,
                              first_name: e.target.value,
                            }))
                          }
                        ></input>
                      </Stack>
                      <Stack className="profileData">
                        <label className="profileLabel" htmlFor="lname">
                          Last Name:
                        </label>
                        <input
                          disabled
                          className="profileInput"
                          type="text"
                          id="lname"
                          name="lname"
                          value={customerDetails.last_name}
                          onChange={(e) =>
                            setCustomerDetails((prevData) => ({
                              ...prevData,
                              last: e.target.value,
                            }))
                          }
                        ></input>
                      </Stack>
                    </Stack>
                    <Stack direction="row" spacing={10} mt={3}>
                      <Stack className="profileData">
                        <label className="profileLabel" htmlFor="phone">
                          Phone:
                        </label>
                        <input
                          disabled
                          className="profileInput"
                          type="text"
                          id="phone"
                          name="phone"
                          value={customerDetails.contact}
                          onChange={(e) =>
                            setCustomerDetails((prevData) => ({
                              ...prevData,
                              contact: e.target.value,
                            }))
                          }
                        ></input>
                      </Stack>
                      <Stack className="profileData">
                        <label className="profileLabel" htmlFor="state">
                          State:
                        </label>
                        <input
                          disabled
                          className="profileInput"
                          type="text"
                          id="state"
                          name="state"
                          value={customerDetails.state}
                          onChange={(e) =>
                            setCustomerDetails((prevData) => ({
                              ...prevData,
                              state: e.target.value,
                            }))
                          }
                        ></input>
                      </Stack>
                    </Stack>
                    <Stack className="profileData" mt={3}>
                      <label className="profileLabel" htmlFor="email">
                        Email:
                      </label>
                      <input
                        disabled
                        className="profileInput"
                        type="email"
                        id="email"
                        name="email"
                        value={customerDetails.username}
                        onChange={(e) =>
                          setCustomerDetails((prevData) => ({
                            ...prevData,
                            username: e.target.value,
                          }))
                        }
                      ></input>
                    </Stack>
                    <Button
                      sx={{
                        mt: 3,
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                        width: '20%',
                      }}
                      // onClick={() => handleCall(value.e_id)}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {currentOption === 'myads' && (
              <div>
                <div className="report-header">
                  <h1 className="recent-Articles">My Ads</h1>
                </div>
                <div className="myads-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {adDetails.map((value) => (
                        <tr key={value.created_at}>
                          <td>{value.created_at}</td>
                          <td>{value.make}</td>
                          <td>{value.model}</td>
                          <td>{value.year}</td>
                          <td>
                            <Button
                              sx={{
                                backgroundColor: 'black',
                                color: 'white',
                                '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                                width: '20%',
                              }}
                              onClick={() => handleEdit(value)}
                            >
                              Edit
                            </Button>
                          </td>
                          <td>
                            <Button
                              sx={{
                                backgroundColor: 'black',
                                color: 'white',
                                '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                                width: '20%',
                              }}
                              onClick={() => handleDelete(value)}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {currentOption === 'myorders' && (
              <div>
                <div className="report-header">
                  <h1 className="recent-Articles">My Orders</h1>
                </div>
                <div className="myorder-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Oid</th>
                        <th>Price</th>
                        <th>Product IDs</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderDetails.map((order) => (
                        <tr key={order.oid}>
                          <td>{order.oid}</td>
                          <td>{order.price}</td>
                          <td>{order.product_ids}</td>
                          <td>{order.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box sx={style2}>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                  AD Edit 
                </Typography>
                <div>
                  <div className="report-header">
                    <h1 className="recent-Articles">AD Details</h1>
                  </div>
                  <div className="report-body">
                    <div className="settings-container">
                      <Stack direction="row" spacing={10}>
                        <Stack className="profileData">
                          <label className="profileLabel" htmlFor="name">
                            Car Name:
                          </label>
                          <input
                            disabled
                            className="profileInput"
                            type="text"
                            id="name"
                            name="name"
                            value={selectedAd.cname}
                            onChange={(e) =>
                              setCustomerDetails((prevData) => ({
                                ...prevData,
                                first_name: e.target.value,
                              }))
                            }
                          ></input>
                        </Stack>
                        <Stack className="profileData">
                          <label className="profileLabel" htmlFor="lname">
                            Last Name:
                          </label>
                          <input
                            disabled
                            className="profileInput"
                            type="text"
                            id="lname"
                            name="lname"
                            value={customerDetails.last_name}
                            onChange={(e) =>
                              setCustomerDetails((prevData) => ({
                                ...prevData,
                                last: e.target.value,
                              }))
                            }
                          ></input>
                        </Stack>
                      </Stack>
                      <Stack direction="row" spacing={10} mt={3}>
                        <Stack className="profileData">
                          <label className="profileLabel" htmlFor="phone">
                            Phone:
                          </label>
                          <input
                            disabled
                            className="profileInput"
                            type="text"
                            id="phone"
                            name="phone"
                            value={customerDetails.contact}
                            onChange={(e) =>
                              setCustomerDetails((prevData) => ({
                                ...prevData,
                                contact: e.target.value,
                              }))
                            }
                          ></input>
                        </Stack>
                        <Stack className="profileData">
                          <label className="profileLabel" htmlFor="state">
                            State:
                          </label>
                          <input
                            disabled
                            className="profileInput"
                            type="text"
                            id="state"
                            name="state"
                            value={customerDetails.state}
                            onChange={(e) =>
                              setCustomerDetails((prevData) => ({
                                ...prevData,
                                state: e.target.value,
                              }))
                            }
                          ></input>
                        </Stack>
                      </Stack>
                      <Stack className="profileData" mt={3}>
                        <label className="profileLabel" htmlFor="email">
                          Email:
                        </label>
                        <input
                          disabled
                          className="profileInput"
                          type="email"
                          id="email"
                          name="email"
                          value={customerDetails.username}
                          onChange={(e) =>
                            setCustomerDetails((prevData) => ({
                              ...prevData,
                              username: e.target.value,
                            }))
                          }
                        ></input>
                      </Stack>
                      <Button
                        sx={{
                          mt: 3,
                          backgroundColor: 'black',
                          color: 'white',
                          '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                          width: '20%',
                        }}
                        // onClick={() => handleCall(value.e_id)}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
               
                <Button
                  sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                    width: '100%',
                    mt: 3,
                  }}
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Box>
            </Modal>
            {/* {currentOption === 'settings' && (
             
            )} */}

            {/* {currentOption === 'logout' && (
              <div className="logout-container"></div>
            )} */}
          </div>
        </div>
      </div>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }
        :root {
          --background-color1: #fafaff;
          --background-color2: #ffffff;
          --background-color3: #ededed;
          --background-color4: #cad7fda4;
          --primary-color: #4b49ac;
          --secondary-color: #0c007d;
          --Border-color: #3f0097;
          --one-use-color: #3f0097;
          --two-use-color: #5500cb;
        }
        .profileLabel {
          font-size: 20px;
          font-weight: bold;
        }
        .profileInput {
          font-size: 20px;
        }
        .body {
          background-color: #f0e9e9;
          max-width: 100%;
          overflow-x: hidden;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }

        th,
        td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        th {
          background-color: #f2f2f2;
        }
        .menuicn {
          cursor: pointer;
        }
        .icn {
          height: 30px;
        }
        .logosec {
          margin: 10px;
          gap: 60px;
          display: flex;
          align-items: left;
          justify-content: left;
        }
        .message {
          gap: 40px;
          position: relative;
          cursor: pointer;
        }
        .circle {
          height: 7px;
          width: 7px;
          position: absolute;
          background-color: #fa7bb4;
          border-radius: 50%;
          left: 19px;
          top: 8px;
        }
        .dp {
          height: 40px;
          width: 40px;
          background-color: #626262;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .main-container {
          display: flex;
          width: 100vw;
          position: relative;
          top: 70px;
          z-index: 1;
          padding-top: 20px;
          padding-bottom: 20px;
          background-color: #f0e9e9;
          max-width: 100%;
          overflow-x: hidden;
        }
        .dpicn {
          height: 42px;
        }

        .main {
          height: calc(100vh - 70px);
          width: 100%;
          overflow-y: scroll;
          overflow-x: hidden;
          padding: 40px 30px 30px 30px;
        }

        .main::-webkit-scrollbar-thumb {
          background-image: linear-gradient(to bottom, rgb(0, 0, 85), rgb(0, 0, 50));
        }
        .main::-webkit-scrollbar {
          width: 5px;
        }
        .main::-webkit-scrollbar-track {
          background-color: #9e9e9eb2;
        }

        .box-container {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          flex-wrap: wrap;
          gap: 50px;
        }
        h1 {
          top: 20%;
          color: blue;
          font-size: 24px;
        }
        p {
          color: red;
          font-size: 18px;
        }
        .main-container {
          display: flex;
          width: 100vw;
          position: relative;
          top: 70px;
          z-index: 1;
        }
        .nav {
          min-height: 91vh;
          width: 250px;
          background-color: white;
          position: absolute;
          top: 0px;
          left: 00;
          box-shadow: 1px 1px 10px rgba(198, 189, 248, 0.825);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          padding: 30px 0 20px 10px;
        }
        .navcontainer {
          height: calc(100vh - 70px);
          width: 250px;
          position: relative;
          overflow-y: scroll;
          overflow-x: hidden;
          transition: all 0.5s ease-in-out;
        }
        .navcontainer::-webkit-scrollbar {
          display: none;
        }
        .navclose {
          width: 80px;
        }
        .nav-option {
          width: 250px;
          height: 60px;
          display: flex;
          align-items: center;
          padding: 0 30px 0 20px;
          gap: 20px;
          transition: all 0.1s ease-in-out;
        }
        .nav-option:hover {
          border-left: 5px solid black;
          background-color: #ffbe00;
          cursor: pointer;
        }
        .nav-img {
          height: 30px;
        }

        .nav-upper-options {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }
        .option1 {
          border-left: 5px solid black;
          background-color: #ffbe00;
          color: black;
          cursor: pointer;
        }
        .option1:hover {
          border-left: 5px solid #010058afblack;
          background-color: #ffbe00;
        }
        .box {
          height: 130px;
          width: 230px;
          border-radius: 20px;
          box-shadow: 3px 3px 10px rgba(0, 30, 87, 0.751);
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          cursor: pointer;
          transition: transform 0.3s ease-in-out;
        }
        .box:hover {
          transform: scale(1.08);
        }

        .box:nth-child(1) {
          background-color: var(--one-use-color);
        }
        .box:nth-child(2) {
          background-color: var(--two-use-color);
        }
        .box:nth-child(3) {
          background-color: var(--one-use-color);
        }
        .box:nth-child(4) {
          background-color: var(--two-use-color);
        }

        .box img {
          height: 50px;
        }
        .box .text {
          color: white;
        }
        .topic {
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 1px;
        }

        .topic-heading {
          font-size: 30px;
          letter-spacing: 3px;
        }

        .report-container {
          min-height: 500px;
          max-width: 900px;
          margin: 0px auto 0px auto;
          background-color: #ffffff;
          border-radius: 30px;
          box-shadow: 3px 3px 10px rgb(188, 188, 188);
          padding: 0px 20px 20px 20px;
        }
        .report-header {
          height: 100px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 20px 10px 20px;
          border-bottom: 2px solid rgba(0, 20, 151, 0.59);
        }

        .recent-Articles {
          font-size: 30px;
          font-weight: 600;
          color: black;
        }

        .view {
          height: 35px;
          width: 90px;
          border-radius: 8px;
          background-color: #5500cb;
          color: white;
          font-size: 15px;
          border: none;
          cursor: pointer;
        }

        .report-body {
          max-width: 900px;
          overflow-x: auto;
          padding: 20px;
        }
        .items {
          width: 900px;
          margin-top: 15px;
        }
        .report-topic-heading {
          max-width: 900px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
        }
        .item1 {
          max-width: 860px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
        }
        .t-op {
          font-size: 18px;
          letter-spacing: 0px;
        }

        .t-op-nextlvl {
          font-size: 14px;
          letter-spacing: 0px;
          font-weight: 600;
        }

        .label-tag {
          width: 100px;
          text-align: center;
          background-color: rgb(0, 177, 0);
          color: white;
          border-radius: 4px;
        }
        @media screen and (max-width: 950px) {
          .nav-img {
            height: 25px;
          }
          .nav-option {
            gap: 30px;
          }
          .nav-option h3 {
            font-size: 15px;
          }
          .report-topic-heading,
          .item1,
          .items {
            width: 800px;
          }
        }

        @media screen and (max-width: 850px) {
          .nav-img {
            height: 30px;
          }
          .nav-option {
            gap: 30px;
          }
          .nav-option h3 {
            font-size: 20px;
          }
          .report-topic-heading,
          .item1,
          .items {
            width: 700px;
          }
          .navcontainer {
            width: 100vw;
            position: absolute;
            transition: all 0.6s ease-in-out;
            top: 0;
            left: -100vw;
          }
          .nav {
            width: 100%;
            position: absolute;
          }
          .navclose {
            left: 00px;
          }
          .searchbar {
            display: none;
          }
          .main {
            padding: 40px 30px 30px 30px;
          }
          .searchbar2 {
            width: 100%;
            display: flex;
            margin: 0 0 40px 0;
            justify-content: center;
          }
          .searchbar2 input {
            width: 250px;
            height: 42px;
            border-radius: 50px 0 0 50px;
            background-color: var(--background-color3);
            padding: 0 20px;
            font-size: 15px;
            border: 2px solid var(--secondary-color);
          }
        }

        @media screen and (max-width: 490px) {
          .message {
            display: none;
          }
          .logosec {
            width: 100%;
            justify-content: space-between;
          }
          .logo {
            font-size: 20px;
          }
          .menuicn {
            height: 25px;
          }
          .nav-img {
            height: 25px;
          }
          .nav-option {
            gap: 25px;
          }
          .nav-option h3 {
            font-size: 12px;
          }
          .nav-upper-options {
            gap: 15px;
          }
          .recent-Articles {
            font-size: 20px;
          }
          .report-topic-heading,
          .item1,
          .items {
            width: 550px;
          }
        }

        @media screen and (max-width: 400px) {
          .recent-Articles {
            font-size: 17px;
          }
          .view {
            width: 60px;
            font-size: 10px;
            height: 27px;
          }
          .report-header {
            height: 60px;
            padding: 10px 10px 5px 10px;
          }
          .searchbtn img {
            height: 20px;
          }
        }

        @media screen and (max-width: 320px) {
          .recent-Articles {
            font-size: 12px;
          }
          .view {
            width: 50px;
            font-size: 8px;
            height: 27px;
          }
          .report-header {
            height: 60px;
            padding: 10px 5px 5px 5px;
          }
          .t-op {
            font-size: 12px;
          }
          .t-op-nextlvl {
            font-size: 10px;
          }
          .report-topic-heading,
          .item1,
          .items {
            width: 300px;
          }
          .report-body {
            padding: 10px;
          }
          .label-tag {
            width: 70px;
          }
          .searchbtn {
            width: 40px;
          }
          .searchbar2 input {
            width: 180px;
          }
        }
      `}</style>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

Profile.getLayout = function getLayout(page) {
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
