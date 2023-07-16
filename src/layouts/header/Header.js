import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Button, AppBar, Divider, Container, Typography, Avatar } from '@mui/material';
// hooks
import { useOffSetTop, useResponsive } from '../../hooks';
// routes
import Routes from '../../routes';
// config
import { HEADER_DESKTOP_HEIGHT } from '../../config';
import React, { useState } from 'react'; // Import useState from React
// components
import { Logo, Label } from '../../components';
//
import { NavMobile, NavDesktop, navConfig } from '../nav';
import { ToolbarStyle, ToolbarShadowStyle } from './HeaderToolbarStyle';
import { useRouter } from 'next/router';
// import React, { useState } from 'react';

// ----------------------------------------------------------------------

Header.propTypes = {
  transparent: PropTypes.bool,
};

export default function Header({ transparent }) {
  let value = '';
  const theme = useTheme();
  const isDesktop = useResponsive('up', 'md');
  const isLight = theme.palette.mode === 'light';
  const isScrolling = useOffSetTop(HEADER_DESKTOP_HEIGHT);
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assuming the user is logged in

  const handleLogin = () => {
    router.push('/auth/logincover');
  };
  const handleProfileClick = () => {
    router.push('/travel/profile/profile');
  };
  const handleLogout = () => {
    fetch('https://autobidup.pythonanywhere.com/user/logout', {
      method: 'POST',
      credentials: 'include',
    })
      .then((response) => {
        if (response.ok) {
          setIsLoggedIn(false);
          router.push('/');

          // Perform any additional logout logic if needed
        } else {
          // Handle error if logout fails
        }
      })
      .catch((error) => {
        // Handle error if fetch fails
      });
  };
  if (typeof window !== 'undefined') {
    value = localStorage.getItem('firstname') || '';
  }
  const [username, setUsername] = useState('John Doe'); // Replace 'John Doe' with the actual username
  const renderUserSection = () => {
    if (isLoggedIn) {
      return (
        <>
          <Button variant="contained" onClick={handleLogout} target="_blank" rel="noopener">
            Logout
          </Button>
          <Avatar
            onClick={handleProfileClick}
            sx={{ bgcolor: 'primary.main', marginRight: '8px' }}
          ></Avatar>{' '}
          {/* User icon */}
          <Typography variant="body1">{value}</Typography>
        </>
      );
    } else {
      return (
        <Button variant="contained" onClick={handleLogin} target="_blank" rel="noopener">
          Login
        </Button>
      );
    }
  };

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent', color: 'Black' }}>
      <ToolbarStyle disableGutters transparent={transparent} scrolling={isScrolling}>
        <Container sx={{ px: 0 }}>
          <Container
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Stack spacing={4} direction="row">
              <Box sx={{ lineHeight: 0 }}>
                <Logo onDark={transparent && !isScrolling} />
              </Box>
            </Stack>
            <Stack spacing={4} direction="row" sx={{ display: 'flex', alignItems: 'center' }}>
              {isDesktop && (
                <>
                  <NavDesktop
                    isScrolling={isScrolling}
                    isTransparent={transparent}
                    navConfig={navConfig}
                  />
                </>
              )}
              <Button
                variant="contained"
                onClick={() => router.push('/travel/buysellcar/form')}
                target="_blank"
                rel="noopener"
              >
                Post an Add
              </Button>
              {/* {isLoggedIn ? (
                <Button variant="contained" onClick={handleLogout} target="_blank" rel="noopener">
                  Logout
                </Button>

              ) : (
                <Button variant="contained" onClick={handleLogin} target="_blank" rel="noopener">
                  Login
                </Button>
              )} */}
              {renderUserSection()}{' '}
              {/* Call the renderUserSection function to display the user section */}
            </Stack>
            {!isDesktop && (
              <NavMobile
                navConfig={navConfig}
                sx={{
                  ml: 1,
                  ...(isScrolling && { color: 'text.primary' }),
                }}
              />
            )}
          </Container>
        </Container>
      </ToolbarStyle>

      {isScrolling && <ToolbarShadowStyle />}
    </AppBar>
  );
}
