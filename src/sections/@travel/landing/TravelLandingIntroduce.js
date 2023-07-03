import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

import { Image, Iconify, PlayerWithButton } from '../../../components';
import { useRouter } from 'next/router';
// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Typography, Stack, Container, Box, Paper, Button } from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';

// components
import { TextMaxLine } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  ...cssStyles(theme).bgGradient({
    direction: 'top',
    startColor: alpha(theme.palette.grey[500], 0),
    endColor: alpha(theme.palette.grey[500], 0.12),
  }),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

// ----------------------------------------------------------------------

CareerLandingHotCategories.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default function CareerLandingHotCategories({ categories }) {

  return (
    <RootStyle>
      <Container>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          Vehicle Categories
        </Typography>

        <Box
          sx={{
            my: { xs: 8, md: 10 },
            display: 'grid',
            gap: 4,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(5, 1fr)',
            },
          }}
        >
          {categories?.map((category) => (
            <CategoryItem
              key={category.id}
              category={category}
              // onClick={() => router.push(category.path)}
            />
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

CategoryItem.propTypes = {
  category: PropTypes.shape({
    icon: PropTypes.any,
    name: PropTypes.string,
    totalJobs: PropTypes.number,
  }),
};

function CategoryItem({ category }) {
  const router = useRouter();

  return (
    <Paper
      variant="outlined"
      sx={{
        pt: '100%',
        borderRadius: 2,
        cursor: 'pointer',
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'transparent',
        transition: (theme) => theme.transitions.create('all'),
        '&:hover': {
          bgcolor: 'background.paper',
          boxShadow: (theme) => theme.customShadows.z24,
          '& .icon': {
            bgcolor: 'primary.main',
            transition: (theme) => theme.transitions.create('all'),
            '& > span': {
              color: 'common.white',
            },
          },
        },
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 1,
          height: 1,
          top: 0,
          position: 'absolute',
        }}
      >
        <Box
          className="icon"
          sx={{
            mb: 2.5,
            width: 72,
            height: 72,
            mx: 'auto',
            display: 'flex',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image src={category.img.src} sx={{ width: 58, height: 48, filter: 'grayscale(100%)' }} />
        </Box>

        {/* <TextMaxLine variant="h6" line={1}>
          {category.name}
        </TextMaxLine> */}
        <Button color="inherit" variant="contained" onClick={() => router.push(category.path)}>
        {category.name}
        </Button>
        {/* <Typography variant="body2" sx={{ color: 'text.disabled', mt: 0.5 }}>
          {category.totalJobs} jobs
        </Typography> */}
      </Stack>
    </Paper>
  );
}
