// ** MUI Theme Provider
import { ThemeOptions } from '@mui/material';
import { deepmerge } from '@mui/utils';

import { Settings } from '../contexts/settingsContext';
import breakpoints from '../theme/breakpoints';
// ** Type Import
// ** Theme Override Imports
import palette from './palette';
import shadows from './shadows';
import spacing from './spacing';

const themeOptions = (settings: Settings): ThemeOptions => {
  // ** Vars
  const { mode, themeName } = settings;

  const themeConfig = {
    palette: palette(themeName),
    typography: {
      fontFamily: [
        'VT323',
        'sans-serif',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    shadows: shadows(themeName),
    ...spacing,
    breakpoints: breakpoints(),
    shape: {
      borderRadius: 6,
    },
    mixins: {
      toolbar: {
        minHeight: 64,
      },
    },
  };

  return themeConfig;
  // return deepmerge(themeConfig, {
  //   palette: {
  //     primary: {
  //       ...themeConfig.palette['primary']
  //     }
  //   }
  // })
};

export default themeOptions;
