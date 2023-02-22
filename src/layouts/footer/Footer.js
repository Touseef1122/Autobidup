import PropTypes from 'prop-types';
import { useState } from 'react';
// icons
import chevronDown from '@iconify/icons-carbon/chevron-down';
import chevronRight from '@iconify/icons-carbon/chevron-right';
import Youtube from '@iconify/icons-carbon/logo-youtube';
import Facebook from '@iconify/icons-carbon/logo-facebook';
import Twitter from '@iconify/icons-carbon/logo-twitter';
import Insta from '@iconify/icons-carbon/logo-instagram';
import Linkedin from '@iconify/icons-carbon/logo-linkedin';
import { Icon } from '@iconify/react';

// @mui
import { styled } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import {
  Box,
  Grid,
  Link,
  Stack,
  Button,
  Divider,
  Collapse,
  Container,
  Typography,
  FilledInput,
  InputAdornment,
} from '@mui/material';
// hooks
import { useResponsive } from '../../hooks';
// components
import { Logo, Iconify, SocialsButton, AppStoreButton } from '../../components';
//
import { PageLinks } from '../nav/NavConfig';

// ----------------------------------------------------------------------

const LinkStyle = styled((props) => <Link target="_blank" rel="noopener" {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body3,
    marginTop: theme.spacing(1),
    color: '#000000',
    '&:hover': {
      color: 'white',
    },
  })
);

const boxSX = {
  color: '#000000',
  '&:hover': {
    color: 'white',
  },
};

// ----------------------------------------------------------------------

export default function Footer() {
  const isDesktop = useResponsive('up', 'md');

  const lists = PageLinks.filter((list) => list.subheader !== 'Coming Soon');

  const renderLists = isDesktop
    ? lists
    : lists.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  return (
    <>
      <Box fluid sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#FFBE00' }}>
        <Container>
          <Grid justifyContent={{ md: 'space-between' }}>
            <Container>
              <Grid item xs={12} md={12}>
                <Stack
                  direction={{ xs: 'row', md: 'row' }}
                  // spacing={2.5}
                  justifyContent="space-between"
                  sx={{ textAlign: 'center' }}
                >
                  <Typography color="black" variant="h4">
                    AutoBidUp
                  </Typography>
                  <Link variant="body3" sx={{ color: 'black' }}>
                    {/* <Iconify icon={Mark} sx={{ fontSize: '22px', color: '#b0b2b7' }} /> */}
                    <Stack direction="row" justifyContent="space-between" fontSize="17px">
                      <Box>
                        <Icon icon="mdi:question-mark-circle" />
                      </Box>
                      <Typography sx={{ textDecoration: 'underline' }}>Help</Typography>
                    </Stack>
                  </Link>
                </Stack>

                <Divider />
                {/* <Stack spacing={{ xs: 3, md: 5 }}> */}
                {/* <Stack alignItems="flex-start" spacing={3}>
                <Logo />
                <Typography variant="body3" sx={{ color: 'text.secondary' }}>
                  The starting point for your next project based on easy-to-customize Material-UI ©
                  helps you build apps faster and better.
                </Typography>
              </Stack> */}

                {/* <Stack spacing={2}>
                <Typography variant="h6">Social</Typography>
                <SocialsButton />
              </Stack> */}

                {/* <Stack alignItems="flex-start">
                <Typography variant="h6">Documentation</Typography>
                <LinkStyle href="#">Documentation</LinkStyle>
                <LinkStyle href="#">Changelog</LinkStyle>
                <LinkStyle href="#">Contributing</LinkStyle>
              </Stack> */}

                {/* <Stack spacing={2}>
                <Stack spacing={1}>
                  <Typography variant="h6">Let’s stay in touch</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Ubscribe to our newsletter to receive latest articles to your inbox weekly.
                  </Typography>
                </Stack>
                <FilledInput
                  placeholder="Email address"
                  endAdornment={
                    <InputAdornment position="end">
                      <Button variant="contained" size="small" sx={{ py: '9px' }}>
                        Subscribe
                      </Button>
                    </InputAdornment>
                  }
                  sx={{
                    pr: 0.5,
                    '& .MuiFilledInput-input': { py: '14px' },
                  }}
                />
              </Stack> */}

                <Stack margin="20px 0">
                  {/* <Typography variant="h6">Apps</Typography> */}
                  {/* <AppStoreButton /> */}
                </Stack>
                {/* </Stack> */}
                {/* <Divider /> */}
                {/* </Grid>

          <Grid item xs={12} md={6}> */}
                {isDesktop ? (
                  <Stack
                    columns={3}
                    flexDirection="row"
                    justifyContent="space-between"
                    margin="30px 0"
                  >
                    {renderLists.map((list) => (
                      <ListDesktop key={list.subheader} list={list} />
                    ))}
                  </Stack>
                ) : (
                  <Stack margin="30px 0">
                    {renderLists.map((list) => (
                      <ListMobile key={list.subheader} list={list} />
                    ))}
                  </Stack>
                )}
                <Divider />

                {/* <Container> */}
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  justifyContent="space-between"
                  sx={{ py: 3, textAlign: 'center', fontSize: '16px' }}
                >
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                    <div>
                      <Typography variant="body3" sx={{ color: 'black' }}>
                        © 2022 AutoBidUp
                      </Typography>
                    </div>

                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      spacing={5}
                      justifyContent={{ sm: 'center' }}
                      color={'black'}
                    >
                      <Link variant="body3" sx={boxSX}>
                        About us
                      </Link>
                      <Link variant="body3" sx={boxSX}>
                        Privacy Policy
                      </Link>
                      <Link variant="body3" sx={boxSX}>
                        Faq's
                      </Link>
                      <Link variant="body3" sx={boxSX}>
                        Contact Us
                      </Link>
                    </Stack>
                  </Stack>

                  <Stack direction="row" spacing={3} alignSelf={{ xs: 'center', md: 'flex-end' }}>
                    <Link variant="body3" sx={{ color: 'black' }}>
                      <Iconify icon={Youtube} sx={{ fontSize: '22px', color: '#000000' }} />
                    </Link>
                    <Link variant="body3" sx={{ color: 'text.secondary' }}>
                      <Iconify icon={Facebook} sx={{ fontSize: '22px', color: '#000000' }} />
                    </Link>
                    <Link variant="body3" sx={{ color: 'text.secondary' }}>
                      <Iconify icon={Twitter} sx={{ fontSize: '22px', color: '#000000' }} />
                    </Link>
                    <Link variant="body3" sx={{ color: 'text.secondary' }}>
                      <Iconify icon={Insta} sx={{ fontSize: '22px', color: '#000000' }} />
                    </Link>
                    <Link variant="body3" sx={{ color: 'text.secondary' }}>
                      <Iconify icon={Linkedin} sx={{ fontSize: '22px', color: '#000000' }} />
                    </Link>
                  </Stack>
                </Stack>
              </Grid>
            </Container>
          </Grid>
        </Container>
      </Box>

      {/* </Container> */}
    </>
  );
}

// ----------------------------------------------------------------------

ListDesktop.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};

function ListDesktop({ list }) {
  const { subheader, items } = list;

  return (
    <Stack alignItems="flex-start">
      <Typography variant="h6" color="black">
        {subheader}
      </Typography>
      {items?.map((link) => (
        <LinkStyle key={link.title} href={link.path} color="black">
          {link.title}
        </LinkStyle>
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

ListMobile.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};

function ListMobile({ list }) {
  const { subheader, items } = list;

  const [expand, setExpand] = useState(false);

  const onExpand = () => {
    setExpand(!expand);
  };

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography
        variant="h6"
        color="black"
        marginTop="20px"
        // onClick={onExpand}
        // sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      >
        {subheader}
        {/* <Iconify
          icon={expand ? chevronDown : chevronRight}
          sx={{ width: 20, height: 20, ml: 0.5 }}
        /> */}
      </Typography>

      {/* <Collapse in={expand} sx={{ width: 1 }}> */}
      <Box
        sx={{
          display: 'grid',

          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(1, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
        md={{
          display: 'grid',

          gridTemplateColumns: {
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {items?.map((link) => (
          <LinkStyle key={link.title} href={link.path} color="orange">
            {link.title}
          </LinkStyle>
        ))}
      </Box>
      {/* </Collapse> */}
    </Stack>
  );
}
