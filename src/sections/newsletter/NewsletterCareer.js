// @mui
import { styled, alpha } from '@mui/material/styles';
import { Stack, Button, Container, Typography, FilledInput, InputAdornment } from '@mui/material';
// utils
import cssStyles from '../../utils/cssStyles';
import bgc from '../../assets/images/A06.jpg';
import { style } from '@mui/system';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  // ...cssStyles(theme).bgImage({
  //   backgroundImage: 'url(${"../../assets/images/A06.jpg"})',
  // }
  // ),
}));

// ----------------------------------------------------------------------

export default function NewsletterCareer() {
  return (
    <RootStyle background-image='url("../../assets/images/A06.jpg")'>
      <Container>
        <Stack spacing={3} alignItems="center" sx={{ color: 'common.white', textAlign: 'center' }}>
          <Typography variant="h2">I'M MORE THAN A CHAUFFEUR</Typography>
          <Typography>I'M YOUR SAFE SPACE ON WHEELS</Typography>
          <h3>AutoBidup Chauffeur</h3>
          {/* <FilledInput
            placeholder="Enter your email"
            endAdornment={
              <InputAdornment position="end">
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    height: 56,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                >
                  Subscribe
                </Button>
              </InputAdornment>
            }
            sx={{
              p: 0,
              width: 1,
              maxWidth: 560,
              bgcolor: 'common.white',
              '&:hover, &.Mui-focused': {
                bgcolor: 'common.white',
              },
              '& .MuiFilledInput-input': {
                py: '18px',
                '&::placeholder': {
                  color: 'grey.500',
                },
              },
            }}
          /> */}
        </Stack>
      </Container>
    </RootStyle>
  );
}
