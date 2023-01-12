import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { ArrowLeftThick } from 'mdi-material-ui';
import React from 'react';

import { LinkSingle } from '../../pages/lms/lms';
import NavContent from './NavContent';

type Props = {
  handleDrawerToggle: () => void;
  open: boolean;
};

function LeftNavBar({ handleDrawerToggle, open }: Props) {
  const drawerWidth = 240;

  const CloseDrawer = styled('span')`
    position: absolute;
    right: 0;
    margin: 0.5em;
    fontsize: large;
  `;

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
        <CloseDrawer onClick={handleDrawerToggle}>
          <ArrowLeftThick />
        </CloseDrawer>
        <br />
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
  );
}

export default LeftNavBar;
