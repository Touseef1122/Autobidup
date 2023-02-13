// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Stack, Divider, Typography } from '@mui/material';
// routes
import Routes from '../../src/routes';
// components
import { Page, Logo } from '../../src/components';
// sections
import { AuthWithSocial, AuthCarousel, LoginForm } from '../../src/sections/auth';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    overflow: 'hidden',
    height: '100vh',
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(5, 2.5),
  [theme.breakpoints.up('md')]: {
    maxWidth: 580,
    padding: theme.spacing(8, 8),
  },
}));

// ----------------------------------------------------------------------

export default function LoginCoverPage() {
  return (
    <Page title="Login Cover">
      <RootStyle>
        <ContentStyle>
          <Logo sx={{ display: { xs: 'block', md: 'inline-block' } }} />

          <Stack
            sx={{
              pb: 5,
              pt: 5,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h3" paragraph>
              Sign in
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Don’t have an account?
              <NextLink href={Routes.registerCover} passHref>
                <Link variant="subtitle2" color="#c49a52">
                  {''} Get started
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

          <LoginForm />
        </ContentStyle>

        <AuthCarousel title="Hi, Welcome Back" />
      </RootStyle>
    </Page>
  );
}
