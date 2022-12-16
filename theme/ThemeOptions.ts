// ** MUI Theme Provider
import { deepmerge } from '@mui/utils'
import { ThemeOptions } from '@mui/material'

// ** Type Import

// ** Theme Override Imports
import palette from './palette'
import spacing from './spacing'
import shadows from './shadows'
import breakpoints from './breakpoints'
import { Settings } from '../contexts/settingsContext'

const themeOptions = (settings: Settings): ThemeOptions => {
  // ** Vars
  const { mode, themeName } = settings

  const themeConfig = {
    palette: palette(themeName),
    typography: {
      fontFamily: [
        'Inter',
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
        '"Segoe UI Symbol"'
      ].join(',')
    },
    shadows: shadows(themeName),
    ...spacing,
    breakpoints: breakpoints(),
    shape: {
      borderRadius: 6
    },
    mixins: {
      toolbar: {
        minHeight: 64
      }
    },
  }

  return themeConfig
  // return deepmerge(themeConfig, {
  //   palette: {
  //     primary: {
  //       ...themeConfig.palette['primary']
  //     }
  //   }
  // })
}

export default themeOptions
