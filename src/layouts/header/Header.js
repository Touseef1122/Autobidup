import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Button, AppBar, Divider, Container, Typography } from '@mui/material';
// hooks
import { useOffSetTop, useResponsive } from '../../hooks';
// routes
import Routes from '../../routes';
// config
import { HEADER_DESKTOP_HEIGHT } from '../../config';
// components
import { Logo, Label } from '../../components';
//
import Searchbar from '../Searchbar';
import LanguagePopover from '../LanguagePopover';
import { NavMobile, NavDesktop, navConfig } from '../nav';
import { ToolbarStyle, ToolbarShadowStyle } from './HeaderToolbarStyle';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

Header.propTypes = {
  transparent: PropTypes.bool,
};

export default function Header({ transparent }) {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const isScrolling = useOffSetTop(HEADER_DESKTOP_HEIGHT);
  const router = useRouter();
  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle disableGutters transparent={transparent} scrolling={isScrolling}>
        <Container sx={{ px: 0 }}>
          {/* <Container
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Stack spacing={4} direction="row">
              <Box sx={{ lineHeight: 0, position: 'relative' }}>
                <Logo onDark={transparent && !isScrolling} />

                <Link
                  href="https://royal_fleet/src/assets/images/logo.svg"
                  target="_blank"
                  rel="noopener"
                >
                  <Label
                    color="info"
                    sx={{
                      ml: 0.5,
                      px: 0.5,
                      top: -14,
                      left: 64,
                      height: 20,
                      fontSize: 11,
                      cursor: 'pointer',
                      position: 'absolute',
                    }}
                  >
                    v1.4
                  </Label>
                </Link>
              </Box>
            </Stack>
          </Container> */}

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

                {/* <Link href="https://royal_fleet/src/assets/images/logo.svg" target="_blank" rel="noopener">
              <Label
                color="info"
                sx={{
                  ml: 0.5,
                  px: 0.5,
                  top: -14,
                  left: 64,
                  height: 20,
                  fontSize: 11,
                  cursor: 'pointer',
                  position: 'absolute',
                }}
              >
                v1.4
              </Label>
            </Link> */}
              </Box>
            </Stack>
            <Stack spacing={4} direction="row">
              {isDesktop && (
                <>
                  <NavDesktop
                    isScrolling={isScrolling}
                    isTransparent={transparent}
                    navConfig={navConfig}
                  />
                </>
              )}

              {/* <Box sx={{ flexGrow: 1 }} /> */}

              {/* <Searchbar
              sx={{
                ...(isScrolling && { color: 'text.primary' }),
              }}
            /> */}

              {/* <LanguagePopover
                sx={{
                  ...(isScrolling && { color: 'text.primary' }),
                }}
              /> */}

              {/* <Divider orientation="vertical" sx={{ height: 24 }} /> */}

              {/* {isDesktop && ( */}
              {/* <Stack direction="row" spacing={1} > */}
              {/* <NextLink href={Routes.registerIllustration} prefetch={false} passHref>
                  <Button
                    color="inherit"
                    variant="outlined"
                    sx={{
                      ...(transparent && {
                        color: 'common.white',
                      }),
                      ...(isScrolling && isLight && { color: 'text.primary' }),
                    }}
                  >
                    Join Us
                  </Button>
                </NextLink> */}

              <Button variant="contained" onClick={() => router.push('/travel/buysellcar/form')} target="_blank" rel="noopener">
                  Post an Add
              </Button>
              {/* </Stack> */}

              {/* )} */}
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