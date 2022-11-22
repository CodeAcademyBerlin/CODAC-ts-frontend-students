import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/themeContext'
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import NavContent from './NavContent';
import CloseButton from './CloseButton';

type Props = {
  handleDrawerToggle: () => void
  open: boolean
}

function LeftNavBar({ handleDrawerToggle, open }: Props) {

  const drawerWidth = 240;

  return (
    <>
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <CloseButton onClick={handleDrawerToggle} />
        <NavContent />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        <NavContent />
      </Drawer>
    </>
  )
}

export default LeftNavBar