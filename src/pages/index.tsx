'use client';
// ** React Imports
import { Fade, Slide } from '@mui/material';
import Box from '@mui/material/Box';
// ** MUI Components
import Button from '@mui/material/Button';
import { keyframes, styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
// ** Next Import
import Link from 'next/link';
import { ReactNode, useRef, useState } from 'react';

import { BrandText, BrandTextWrapper } from '../components/common/BrandStyle';
import ParticlesComp from '../components/common/Particles/Particles';
import BerlinSkyline from '../components/landing-page/BerlinSkyline';
import {
  TronGrid,
  TronGridWrapper,
} from '../components/landing-page/TronGridPlane';
import BlankLayout from '../layouts/BlankLayout';
import Footer from '../layouts/Footer';

const blink = keyframes`
    0% {
    opacity: 0%;
    }
  80%{
   opacity: 100%;
      }
  100%{
   opacity: 100%;
      }
 `;

// ** Styled Components
const LinkStyled = styled(Link)`
  font-size: 10rem;
  text-decoration: none;
  animation: ${blink} 2s linear infinite alternate-reverse;
  border-color: ${({ theme }) => theme.palette.primary.main};
  border-style: solid;
  background-color: lightgray;
  border-radius: 7px;
  cursor: pointer;
`;

const Home = () => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  const [start, setStart] = useState(false);

  return (
    <>
      <TronGridWrapper>
        <TronGrid />
        {smUp && <BerlinSkyline />}
      </TronGridWrapper>
      {/* <ParticlesComp type="snow" /> */}
      <Box
        sx={{
          mt: 50,
          p: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <BrandTextWrapper
          depth
          neon
          sx={{ fontSize: (smUp && '10rem') || '5rem' }}
          variant="h1"
        >
          {'CODAC'}
        </BrandTextWrapper>
        <Typography
          color={'white'}
          variant="h6"
          sx={{ mb: 3, fontSize: '1.5rem !important' }}
        >
          The Code Academy Berlin Community
        </Typography>

        {!start ? (
          <LinkStyled onClick={() => setStart(true)} passHref href="/dashboard">
            <BrandTextWrapper sx={{ padding: 5 }} variant="h3">
              Start
            </BrandTextWrapper>
          </LinkStyled>
        ) : (
          <BrandText
            sx={{ padding: 5, backgroundColor: 'lightgray' }}
            variant="h3"
          >
            Loading
          </BrandText>
        )}
      </Box>
      <Footer />
    </>
  );
};

Home.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default Home;

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
