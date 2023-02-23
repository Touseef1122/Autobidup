import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import Slider from 'react-slick';
import { useRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Link, Stack, Avatar, Container, Typography } from '@mui/material';
// routes
import Routes from '../../../routes';
// utils
import { fDate } from '../../../utils/formatTime';
// components
import { varHover, varTranHover } from '../../../components/animate';
import { Image, BgOverlay, CarouselArrows, CarouselDots, TextMaxLine } from '../../../components';
import { price } from '_data/mock/number';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  padding: theme.spacing(1, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(1, 0),
  },
}));

const DotStyle = styled('span')(({ theme }) => ({
  width: 4,
  height: 4,
  borderRadius: '50%',
  backgroundColor: 'currentColor',
  margin: theme.spacing(0, 1),
}));

// ----------------------------------------------------------------------

BlogMarketingLatestPosts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function BlogMarketingLatestPosts({ posts }) {
  const theme = useTheme();
  const carouselRef = useRef(null);

  const carouselSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots(),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <RootStyle>
      <Container >
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
          }}
        >
          Featured Used Cars for Sale
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <CarouselArrows
            onNext={handleNext}
            onPrevious={handlePrevious}
            sx={{
              '& .arrow': {
                '&.left': { left: -20 },
                '&.right': { right: -20 },
              },
            }}
          >
            <Slider ref={carouselRef} {...carouselSettings}>
              {posts.map((post) => (
                <Box
                  key={post.slug}
                  sx={{
                    px: 2,
                    py: { xs: 8, md: 10 },
                  }}
                >
                  <PostItem post={post} />
                </Box>
              ))}
            </Slider>
          </CarouselArrows>
        </Box>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

PostItem.propTypes = {
  post: PropTypes.shape({
    // frontmatter: PropTypes.shape({
    //   author: PropTypes.shape({
    //     name: PropTypes.string,
    //     picture: PropTypes.string,
    //   }),
    //   coverImg: PropTypes.string,
    //   createdAt: PropTypes.string,
    //   duration: PropTypes.string,
    //   title: PropTypes.string,
    // }),
    // slug: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.string,
    dis: PropTypes.string,
  }),
};

function PostItem({ post }) {
  // const { slug, frontmatter } = post;
  const { name, img, dis,price } = post;

  return (
    <Stack
      component={m.div}
      whileHover="hover"
      sx={{
        borderRadius: 2,
        borderColor:"black",
        borderStyle:"ridge",
        overflow: 'hidden',
        position: 'relative',
        boxShadow: (theme) => theme.customShadows.z12,
      }}
    >
      {/* <m.div variants={varHover(1.25)} transition={varTranHover()}>
        <Image src={coverImg} alt={title} ratio="3/4" />
      </m.div> */}
      <Box sx={{ height: '200px' }}>
        <Image
          src={img.src}
          sx={{
            // maxWidth: '100%',
            // height: '100%',

            '&:hover img': { transform: 'scale(1.1)' },
            transition: 'transform 0.1s ease-out',
            position: 'relative',
            height: '200px',
          }}
        />
      </Box>
      <Stack spacing={0.5} sx={{ p: 1, height: '100px' }}>
        <TextMaxLine variant="h6" asLink persistent>
          {name}
        </TextMaxLine>
        <TextMaxLine sx={{ fontSize: '0.875rem' }} asLink persistent>
          {price}
        </TextMaxLine>
        <TextMaxLine sx={{ fontSize: '0.875rem' }} asLink persistent>
          {dis}
        </TextMaxLine>
      </Stack>
      {/* <Stack
        justifyContent="space-between"
        sx={{
          p: 5,
          width: 1,
          height: 1,
          zIndex: 9,
          position: 'absolute',
          bgcolor: 'background.paper',
          transition: (theme) =>
            theme.transitions.create('background-color', {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.enteringScreen,
            }),
          '&:hover': {
            color: 'common.white',
            bgcolor: 'transparent',
            '& .timeInfo': {
              opacity: 0.72,
              color: 'inherit',
            },
          },
        }}
      >
        <Stack spacing={2}>
          <Stack
            direction="row"
            alignItems="center"
            className="timeInfo"
            sx={{
              typography: 'caption',
              color: 'text.disabled',
            }}
          >
            {fDate(createdAt)}
            <DotStyle />
            {duration}
          </Stack>

          <NextLink
            passHref
            as={Routes.marketing.post(slug)}
            href={Routes.marketing.post('[slug]')}
          >
            <Link variant="h4" color="inherit">
              {title}
            </Link>
          </NextLink>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
          <Avatar src={author.picture} sx={{ mr: 1 }} />
          {author.name}
        </Stack>
      </Stack> */}

      {/* <BgOverlay direction="top" /> */}
    </Stack>
  );
}
