// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack, FilledInput, InputAdornment, Button , Image} from '@mui/material';
import img from '../../../../src/assets/images/checkout-img.jpg'
// import { SvgIconStyle } from '../../components';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.neutral,
}));

// ----------------------------------------------------------------------

export default function NewsletterMarketing() {
  return (
    <RootStyle>
        <Container sx={{
    backgroundImage: "url(" + `${require("../../../../src/assets/images/checkout-img.jpg")}` + ")",
    width: "100%",
    // height:[HEIGHT OF THE IMAGE],
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }}>
        <Stack
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
          ml="30%" mr="30%" mt="5%" mb="5%"
          direction={{ xs: 'column', md: 'row' }}
        >
        
            
            <div>
              <Typography variant="h3" gutterBottom>
                Your have sucessfully registerd Royal fleet Chauffeur.
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Thankyou for your business and your trust. 
              </Typography>
            </div>
          </Stack>

        
      </Container>
    </RootStyle>
  );
}
