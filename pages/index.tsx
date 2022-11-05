"use client"
// ** React Imports
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import FooterIllustrations from '../componentsDemo/pages/misc/FooterIllustrations'
import BlankLayout from '../@core/layouts/BlankLayout'
import { BrandText } from '../components/BrandStyle'
import { TronGrid, TronGridWrapper } from '../components/TronGridPlane'



// ** Styled Components


const LinkStyled = styled(Link)(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
}))


const Home = () => {
  return (
    <Box className='content-center'>
      <TronGridWrapper>
        <TronGrid />
      </TronGridWrapper>


      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <BrandText>
          CODAC
        </BrandText>
        <Typography color={"white"} variant='h6' sx={{ mb: 3, fontSize: '1.5rem !important' }}>
          Code Academy Berlin Community
        </Typography>
        <LinkStyled passHref href='/dashboard'>
          <Button component='div' variant='contained' sx={{ px: 5.5 }}>
            Start
          </Button>
        </LinkStyled>
      </Box>
    </Box>
  )
}

Home.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Home
