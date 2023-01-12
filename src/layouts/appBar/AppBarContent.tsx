// ** MUI Imports
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import { styled, Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import Magnify from 'mdi-material-ui/Magnify';
import Link from 'next/link';

import { Settings } from '../../contexts/settingsContext';
import NotificationDropdown from '../auth/NotificationDropdown';
import UserDropdown from '../auth/UserDropdown';
import ThemeController from './ThemeController';

const LinkStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const AppBarContent = () => {
  const hiddenSm = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        className="actions-left"
        sx={{ mr: 2, display: 'flex', alignItems: 'center' }}
      >
        {/* Search bar
        <TextField
          size='small'
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Magnify fontSize='small' />
              </InputAdornment>
            )
          }}
        /> */}
      </Box>
      <Box
        className="actions-right"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <ThemeController />
        {/* <NotificationDropdown /> */}
        <UserDropdown />
      </Box>
    </Box>
  );
};

export default AppBarContent;
