// // icons
// import documentIcon from '@iconify/icons-carbon/document';
// // @mui
// import { styled } from '@mui/material/styles';
// import { Grid, Container, Typography, Button ,Box, Stack} from '@mui/material';
// // utils
// import cssStyles from '../../../utils/cssStyles';
// // components
//  import { Image } from '../../../components';
//  import bgc from '../../../assets/images/A06.jpg'
 
// // // ----------------------------------------------------------------------

// // const myStyle={
// //     backgroundImage:`url(${process.env.PUBLIC_URL+ "/image.png"})`
// //             height:'100vh',
// //             marginTop:'-70px',
// //             fontSize:'50px',
// //             backgroundSize: 'cover',
// //             backgroundRepeat: 'no-repeat',
// //             };

// // ----------------------------------------------------------------------

// export default function TravelLandingfull() {
//   return (
           
//     //   <Box >
    //   <Container>
    //     <Stack spacing={3} alignItems="center" sx={{ color: 'white', textAlign: 'center' }}>
    //       <Typography variant="h2">I'M MORE THAN A CHAUFFEUR</Typography>
    //       <Typography>
    //         I'M YOUR SAFE SPACE ON WHEELS
    //       </Typography>
    //       <h3>Royal Fleet Chauffeur</h3>
    //     </Stack>
        
    //   </Container>
//     //   <Image  alt="recruitment" src={bgc.src}
//     //    sx={{
//     //         bgcolor: 'transparent',
//     //       }} />  
      
//     //   </Box>      
//     <div >
//     <Image
//       alt="travel"
//       src="../../../assets/images/A06.jpg"
//       layout="fill"
//       objectFit="cover"
//       quality={100}
//     />
// </div>



//   );
// }

// @mui
import { styled, alpha } from '@mui/material/styles';
import { Stack, Button, Container, Typography, FilledInput, InputAdornment } from '@mui/material';
// utils
import cssStyles from '../../../../src/utils/cssStyles';
import Sb from '../../../../src/assets/Images/SBcars.jpg'
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  ...cssStyles(theme).bgImage({
    url: 'https://images.ctfassets.net/ov8o7v78mnye/1x09e4YgjuR6cSOTGG5Dj6/e2cf23e701a23b0f3218c2a85f821e5a/06__1_.jpg',
    // startColor: `${alpha(theme.palette.grey[1.88], 0.88)}`,
    // endColor: `${alpha(theme.palette.grey[0.88], 0.88)}`,
  }),
}));

// ----------------------------------------------------------------------

export default function TravelLandingfull() {
  return (
    <RootStyle>
      <Container>
        <Stack spacing={3} alignItems="center" sx={{ color: 'white', textAlign: 'center' }}>
          <Typography variant="h2">AutoBidUp</Typography>
          <Typography variant="h3">
            The Smarter Way To Sell And Buy Cars.
          </Typography>
          {/* <Typography variant="h4">Royal Fleet Chauffeur</Typography> */}
        </Stack>
        
      </Container>
    </RootStyle>
  );
}
      

