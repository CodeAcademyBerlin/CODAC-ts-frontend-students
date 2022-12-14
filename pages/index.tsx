"use client"
// ** React Imports
import { ReactNode, useRef, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import { styled, useTheme, keyframes } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box'
import BlankLayout from '../layouts/BlankLayout'
import { BrandText } from '../components/common/BrandStyle'
import BerlinSkyline from '../components/landing-page/BerlinSkyline'
import { Fade, Slide } from '@mui/material'
import Footer from '../layouts/Footer'
import { TronGridWrapper, TronGrid } from '../components/landing-page/TronGridPlane'
import ParticlesComp from '../components/common/Particles/Particles'


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
border-color : ${({ theme }) => theme.palette.primary.main};
border-style: solid;
background-color: lightgray;
border-radius: 7px;
cursor: pointer;
`

const Home = () => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  const [start, setStart] = useState(false);

  return (
    <Box className='content-center' >
      <TronGridWrapper>
        <TronGrid />
        {smUp && <BerlinSkyline />}
      </TronGridWrapper>
      <ParticlesComp type='snow' />
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <BrandText sx={{ fontSize: smUp && "10rem" || "5rem" }} variant='overline'>
          {"CODAC"}
        </BrandText>
        <Typography color={"white"} variant='h6' sx={{ mb: 3, fontSize: '1.5rem !important' }}>
          The Code Academy Berlin Community
        </Typography>

        {!start ? <LinkStyled onClick={() => setStart(true)} passHref href='/dashboard'>
          <BrandText sx={{ padding: 5 }} variant='h3'>
            Start
          </BrandText>
        </LinkStyled> :
          <BrandText sx={{ padding: 5, backgroundColor: "lightgray" }} variant='h3'>Loading</BrandText>
        }
      </Box>
      <Footer />
    </Box>
  )
}

Home.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Home
