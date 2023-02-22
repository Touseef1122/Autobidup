// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Stack, Divider, Typography } from '@mui/material';
// routes
import Routes from '../../src/routes';
// components
import { Page } from '../../src/components';
import { Logo } from '../../src/components';
import { AuthWithSocial, AuthCarousel, RegisterForm } from '../../src/sections/auth';
import { Scrollbar } from '../../src/components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    overflow: 'hidden',
    height: '100vh',
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
<<<<<<< HEAD:pages/auth/register-cover.js
  [theme.breakpoints.up('md')]: {
    maxWidth: 580,
  },
}));
const ScrollStyle = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(5, 2.5),
  [theme.breakpoints.up('md')]: {
    maxWidth: 580,
    padding: theme.spacing(8, 8),
=======
  [theme.breakpoints.up('sm')]: {
    maxWidth: '50%',
    padding: theme.spacing(2, 4),
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '50%',
    padding: theme.spacing(3, 15),
  },
}));
const ScrollStyle = styled('div')(({ theme }) => ({
 
  [theme.breakpoints.down('md')]: {
    maxWidth: "100%",
    padding: theme.spacing(2),
>>>>>>> 0b52d0e16742f93eac3f05f71836238495eb15ac:pages/auth/registercover.js
  },
}));

// ----------------------------------------------------------------------

export default function RegisterCoverPage() {
  return (
    <Page title="Register Cover">
      <RootStyle>
        <ContentStyle>
          <Scrollbar>
<<<<<<< HEAD:pages/auth/register-cover.js
            <ScrollStyle>
              <Logo sx={{ display: { xs: 'block', md: 'inline-block' } }} />

              <Stack
                sx={{
                  pb: 5,
                  pt: 5,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                <Typography variant="h3" paragraph>
                  Get Started
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Already have an account?
                  <NextLink href={Routes.loginCover} passHref>
                    <Link variant="subtitle2" color="#FFBE00">
                      {''} Login
                    </Link>
                  </NextLink>
                </Typography>
              </Stack>

              {/* <AuthWithSocial />

          <Divider sx={{ py: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.disabled' }}>
              OR
            </Typography>
          </Divider> */}

              <RegisterForm />
            </ScrollStyle>
=======
          <ScrollStyle>
          <Stack
            sx={{
              textAlign: { xs: 'center' },
            }}
          >
            <Typography variant="h3" paragraph>
              Sign Up
            </Typography>
          </Stack>
          <RegisterForm />
          <Typography variant="body2" mt={1} sx={{ color: 'text.secondary' }}>
            Already have an account?
            <NextLink href={Routes.loginCover} passHref>
              <Link variant="subtitle2" color="#CE9A00">
                {''} Login
              </Link>
            </NextLink>
          </Typography>

          <Divider sx={{ py: 1 }}>
            <Typography variant="body2" sx={{ color: 'text.disabled' }}>
              OR
            </Typography>
          </Divider>
          <AuthWithSocial />

          </ScrollStyle>
>>>>>>> 0b52d0e16742f93eac3f05f71836238495eb15ac:pages/auth/registercover.js
          </Scrollbar>
        </ContentStyle>

        <AuthCarousel title={``} />
      </RootStyle>
    </Page>
  );
}
