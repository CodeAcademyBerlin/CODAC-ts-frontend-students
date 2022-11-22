import { ReactNode, useState } from 'react'
import styles from '../styles/MainLayout.module.css';
import LeftNavBar from '../components/LeftNavBar'
import Head from 'next/head';

interface Props {
  children: ReactNode
}

const MainLayout = ({ children }: Props) => {

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  return (
    <>
      <LeftNavBar handleDrawerToggle={handleDrawerToggle} open={open} />
      <div className={styles.mainContainer}>
        <header className={styles.header}>
          <button className={styles.hideOnCollapse} onClick={handleDrawerToggle}>
            show
          </button>
          header
        </header>
        <section className={styles.content}>
          { children }
        </section>
        <footer className={styles.footer}>footer</footer>
      </div>
    </>
  )
}

export default MainLayout