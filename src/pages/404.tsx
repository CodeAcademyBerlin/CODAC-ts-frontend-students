// ** React Imports
import Box, { BoxProps } from '@mui/material/Box';
// ** MUI Components
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
// ** Next Import
import Link from 'next/link';
import { ReactNode } from 'react';

import image from '../../public/assets/logo.png';
import BlankLayout from '../layouts/BlankLayout';

// ** Styled Components
const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw',
  },
}));

const StyledLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
});

const Error404 = () => {
  return (
    <Box className="content-center">
      <Box
        sx={{
          p: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <BoxWrapper>
          <Typography variant="h1">404</Typography>

          <Image width={60} height={60} alt="error-illustration" src={image} />
          <Typography
            variant="h5"
            sx={{ mb: 1, fontSize: '1.5rem !important' }}
          >
            Page Not Found
          </Typography>
          <Typography variant="body2">
            We couldn&prime;t find the page you are looking for.
          </Typography>
        </BoxWrapper>

        <StyledLink passHref href="/dashboard">
          <Button component="div" variant="contained" sx={{ px: 5.5 }}>
            Back to Home
          </Button>
        </StyledLink>
      </Box>
    </Box>
  );
};

Error404.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default Error404;
