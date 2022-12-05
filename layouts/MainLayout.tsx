import { ReactNode, useState } from 'react'
import { styled } from '@mui/material/styles'
import LeftNavBar from './leftNav/LeftNavBar'
import Head from 'next/head';
import Footer from './Footer';
import Header from './appBar/Header';
import { BrandText } from '../components/common/BrandStyle';
import UserDropdown from './auth/UserDropdown';
import { useAuth } from '../hooks/useAuth';
import AppBarContent from './appBar/AppBarContent';


const MainLayout = ({ children, loading }: { children: ReactNode, loading: boolean }) => {

  const { user } = useAuth()
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  const Container = styled('div')`
    position: absolute;
    min-height: 100vh;
    top: 0;
    right: 0;
    width: 100%;

    @media only screen and (min-width: 600px) {
      width: calc(100% - 240px);
      margin-left: 240px;
    }
  `

  return (
    <>
      <LeftNavBar handleDrawerToggle={handleDrawerToggle} open={open} />
      <Container>
        <Header handleDrawerToggle={handleDrawerToggle} />
        <section style={{ padding: '1em', marginBottom: '2em' }}>
          {loading ? <BrandText variant='h3'>loading</BrandText> : children}
        </section>
      </Container>
    </>
  )
}

export default MainLayout