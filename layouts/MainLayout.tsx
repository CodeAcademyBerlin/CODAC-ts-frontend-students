import { ReactNode, useState } from 'react'
import { styled } from '@mui/material/styles'
import LeftNavBar from '../components/mainLayout/leftNav/LeftNavBar'
import Head from 'next/head';
import Footer from '../components/mainLayout/Footer';
import Header from '../components/mainLayout/Header';


const MainLayout = ({ children }: { children: ReactNode }) => {

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
        <Header handleDrawerToggle={ handleDrawerToggle } />
        <section style={{ padding: '1em', marginBottom: '2em' }}>
          { children }
        </section>
        <Footer />
      </Container>
    </>
  )
}

export default MainLayout