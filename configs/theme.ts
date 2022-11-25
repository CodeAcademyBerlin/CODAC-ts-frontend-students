import { createTheme } from '@mui/material/styles'

const primary = {
  main: '#00897B',
  light: '#26a69a',
  dark: '#00695c'
}

const secondary = {
  main: '#FF8A80',
  light: '#ffc4c5',
  dark: '#f53725'
}

const lightModeText = '58, 53, 65';
const darkModeText = '231, 227, 252';

const typography = {
  h1: {
    fontWeight: 500,
    letterSpacing: '-1.5px',
  },
  h2: {
    fontWeight: 500,
    letterSpacing: '-0.5px',
  },
  h3: {
    fontWeight: 500,
    letterSpacing: 0,
  },
  h4: {
    fontWeight: 500,
    letterSpacing: '0.25px',
  },
  h5: {
    fontWeight: 500,
    letterSpacing: 0,
  },
  h6: {
    letterSpacing: '0.15px',
  },
  subtitle1: {
    letterSpacing: '0.15px',
  },
  subtitle2: {
    letterSpacing: '0.1px',
  },
  body1: {
    letterSpacing: '0.15px',
  },
  body2: {
    lineHeight: 1.5,
    letterSpacing: '0.15px',
  },
  button: {
    letterSpacing: '0.3px',
  },
  caption: {
    letterSpacing: '0.4px',
  },
  overline: {
    letterSpacing: '1px',
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: primary,
    secondary: secondary,
    text: {
      primary: `rgba(${lightModeText}, 0.87)`,
      secondary: `rgba(${lightModeText}, 0.68)`,
      disabled: `rgba(${lightModeText}, 0.38)`
    },
    divider: `rgba(${lightModeText}, 0.12)`,
    background: {
      default: '#F4F5FA'
    },
    action: {
      active: `rgba(${lightModeText}, 0.54)`,
      hover: `rgba(${lightModeText}, 0.04)`,
      selected: `rgba(${lightModeText}, 0.08)`,
      disabled: `rgba(${lightModeText}, 0.3)`,
      disabledBackground: `rgba(${lightModeText}, 0.18)`,
      focus: `rgba(${lightModeText}, 0.12)`
    }
  },
  typography: typography,
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(58, 53, 65, 0.2), 0px 1px 1px 0px rgba(58, 53, 65, 0.14), 0px 1px 3px 0px rgba(58, 53, 65, 0.12)',
    '0px 3px 1px -2px rgba(58, 53, 65, 0.2), 0px 2px 2px 0px rgba(58, 53, 65, 0.14), 0px 1px 5px 0px rgba(58, 53, 65, 0.12)',
    '0px 4px 8px -4px rgba(58, 53, 65, 0.42)',
    '0px 6px 18px -8px rgba(58, 53, 65, 0.56)',
    '0px 3px 5px -1px rgba(58, 53, 65, 0.2), 0px 5px 8px 0px rgba(58, 53, 65, 0.14), 0px 1px 14px 0px rgba(58, 53, 65, 0.12)',
    '0px 2px 10px 0px rgba(58, 53, 65, 0.1)',
    '0px 4px 5px -2px rgba(58, 53, 65, 0.2), 0px 7px 10px 1px rgba(58, 53, 65, 0.14), 0px 2px 16px 1px rgba(58, 53, 65, 0.12)',
    '0px 5px 5px -3px rgba(58, 53, 65, 0.2), 0px 8px 10px 1px rgba(58, 53, 65, 0.14), 0px 3px 14px 2px rgba(58, 53, 65, 0.12)',
    '0px 5px 6px -3px rgba(58, 53, 65, 0.2), 0px 9px 12px 1px rgba(58, 53, 65, 0.14), 0px 3px 16px 2px rgba(58, 53, 65, 0.12)',
    '0px 6px 6px -3px rgba(58, 53, 65, 0.2), 0px 10px 14px 1px rgba(58, 53, 65, 0.14), 0px 4px 18px 3px rgba(58, 53, 65, 0.12)',
    '0px 6px 7px -4px rgba(58, 53, 65, 0.2), 0px 11px 15px 1px rgba(58, 53, 65, 0.14), 0px 4px 20px 3px rgba(58, 53, 65, 0.12)',
    '0px 7px 8px -4px rgba(58, 53, 65, 0.2), 0px 12px 17px 2px rgba(58, 53, 65, 0.14), 0px 5px 22px 4px rgba(58, 53, 65, 0.12)',
    '0px 7px 8px -4px rgba(58, 53, 65, 0.2), 0px 13px 19px 2px rgba(58, 53, 65, 0.14), 0px 5px 24px 4px rgba(58, 53, 65, 0.12)',
    '0px 7px 9px -4px rgba(58, 53, 65, 0.2), 0px 14px 21px 2px rgba(58, 53, 65, 0.14), 0px 5px 26px 4px rgba(58, 53, 65, 0.12)',
    '0px 8px 9px -5px rgba(58, 53, 65, 0.2), 0px 15px 22px 2px rgba(58, 53, 65, 0.14), 0px 6px 28px 5px rgba(58, 53, 65, 0.12)',
    '0px 8px 10px -5px rgba(58, 53, 65, 0.2), 0px 16px 24px 2px rgba(58, 53, 65, 0.14), 0px 6px 30px 5px rgba(58, 53, 65, 0.12)',
    '0px 8px 11px -5px rgba(58, 53, 65, 0.2), 0px 17px 26px 2px rgba(58, 53, 65, 0.14), 0px 6px 32px 5px rgba(58, 53, 65, 0.12)',
    '0px 9px 11px -5px rgba(58, 53, 65, 0.2), 0px 18px 28px 2px rgba(58, 53, 65, 0.14), 0px 7px 34px 6px rgba(58, 53, 65, 0.12)',
    '0px 9px 12px -6px rgba(58, 53, 65, 0.2), 0px 19px 29px 2px rgba(58, 53, 65, 0.14), 0px 7px 36px 6px rgba(58, 53, 65, 0.12)',
    '0px 10px 13px -6px rgba(58, 53, 65, 0.2), 0px 20px 31px 3px rgba(58, 53, 65, 0.14), 0px 8px 38px 7px rgba(58, 53, 65, 0.12)',
    '0px 10px 13px -6px rgba(58, 53, 65, 0.2), 0px 21px 33px 3px rgba(58, 53, 65, 0.14), 0px 8px 40px 7px rgba(58, 53, 65, 0.12)',
    '0px 10px 14px -6px rgba(58, 53, 65, 0.2), 0px 22px 35px 3px rgba(58, 53, 65, 0.14), 0px 8px 42px 7px rgba(58, 53, 65, 0.12)',
    '0px 11px 14px -7px rgba(58, 53, 65, 0.2), 0px 23px 36px 3px rgba(58, 53, 65, 0.14), 0px 9px 44px 8px rgba(58, 53, 65, 0.12)',
    '0px 11px 15px -7px rgba(58, 53, 65, 0.2), 0px 24px 38px 3px rgba(58, 53, 65, 0.14), 0px 9px 46px 8px rgba(58, 53, 65, 0.12)'
  ]
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: primary,
    secondary: secondary,
    text: {
      primary: `rgba(${darkModeText}, 0.87)`,
      secondary: `rgba(${darkModeText}, 0.68)`,
      disabled: `rgba(${darkModeText}, 0.38)`
    },
    divider: `rgba(${darkModeText}, 0.12)`,
    background: {
      paper: '#312D4B',
      default: '#28243D'
    },
    action: {
      active: `rgba(${darkModeText}, 0.54)`,
      hover: `rgba(${darkModeText}, 0.04)`,
      selected: `rgba(${darkModeText}, 0.08)`,
      disabled: `rgba(${darkModeText}, 0.3)`,
      disabledBackground: `rgba(${darkModeText}, 0.18)`,
      focus: `rgba(${darkModeText}, 0.12)`
    },
  },
  typography: typography,
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(19, 17, 32, 0.2), 0px 1px 1px 0px rgba(19, 17, 32, 0.14), 0px 1px 3px 0px rgba(19, 17, 32, 0.12)',
    '0px 3px 1px -2px rgba(19, 17, 32, 0.2), 0px 2px 2px 0px rgba(19, 17, 32, 0.14), 0px 1px 5px 0px rgba(19, 17, 32, 0.12)',
    '0px 4px 8px -4px rgba(19, 17, 32, 0.42)',
    '0px 6px 18px -8px rgba(19, 17, 32, 0.56)',
    '0px 3px 5px -1px rgba(19, 17, 32, 0.2), 0px 5px 8px rgba(19, 17, 32, 0.14), 0px 1px 14px rgba(19, 17, 32, 0.12)',
    '0px 2px 10px 0px rgba(19, 17, 32, 0.1)',
    '0px 4px 5px -2px rgba(19, 17, 32, 0.2), 0px 7px 10px 1px rgba(19, 17, 32, 0.14), 0px 2px 16px 1px rgba(19, 17, 32, 0.12)',
    '0px 5px 5px -3px rgba(19, 17, 32, 0.2), 0px 8px 10px 1px rgba(19, 17, 32, 0.14), 0px 3px 14px 2px rgba(19, 17, 32, 0.12)',
    '0px 5px 6px -3px rgba(19, 17, 32, 0.2), 0px 9px 12px 1px rgba(19, 17, 32, 0.14), 0px 3px 16px 2px rgba(19, 17, 32, 0.12)',
    '0px 6px 6px -3px rgba(19, 17, 32, 0.2), 0px 10px 14px 1px rgba(19, 17, 32, 0.14), 0px 4px 18px 3px rgba(19, 17, 32, 0.12)',
    '0px 6px 7px -4px rgba(19, 17, 32, 0.2), 0px 11px 15px 1px rgba(19, 17, 32, 0.14), 0px 4px 20px 3px rgba(19, 17, 32, 0.12)',
    '0px 7px 8px -4px rgba(19, 17, 32, 0.2), 0px 12px 17px 2px rgba(19, 17, 32, 0.14), 0px 5px 22px 4px rgba(19, 17, 32, 0.12)',
    '0px 7px 8px -4px rgba(19, 17, 32, 0.2), 0px 13px 19px 2px rgba(19, 17, 32, 0.14), 0px 5px 24px 4px rgba(19, 17, 32, 0.12)',
    '0px 7px 9px -4px rgba(19, 17, 32, 0.2), 0px 14px 21px 2px rgba(19, 17, 32, 0.14), 0px 5px 26px 4px rgba(19, 17, 32, 0.12)',
    '0px 8px 9px -5px rgba(19, 17, 32, 0.2), 0px 15px 22px 2px rgba(19, 17, 32, 0.14), 0px 6px 28px 5px rgba(19, 17, 32, 0.12)',
    '0px 8px 10px -5px rgba(19, 17, 32, 0.2), 0px 16px 24px 2px rgba(19, 17, 32, 0.14), 0px 6px 30px 5px rgba(19, 17, 32, 0.12)',
    '0px 8px 11px -5px rgba(19, 17, 32, 0.2), 0px 17px 26px 2px rgba(19, 17, 32, 0.14), 0px 6px 32px 5px rgba(19, 17, 32, 0.12)',
    '0px 9px 11px -5px rgba(19, 17, 32, 0.2), 0px 18px 28px 2px rgba(19, 17, 32, 0.14), 0px 7px 34px 6px rgba(19, 17, 32, 0.12)',
    '0px 9px 12px -6px rgba(19, 17, 32, 0.2), 0px 19px 29px 2px rgba(19, 17, 32, 0.14), 0px 7px 36px 6px rgba(19, 17, 32, 0.12)',
    '0px 10px 13px -6px rgba(19, 17, 32, 0.2), 0px 20px 31px 3px rgba(19, 17, 32, 0.14), 0px 8px 38px 7px rgba(19, 17, 32, 0.12)',
    '0px 10px 13px -6px rgba(19, 17, 32, 0.2), 0px 21px 33px 3px rgba(19, 17, 32, 0.14), 0px 8px 40px 7px rgba(19, 17, 32, 0.12)',
    '0px 10px 14px -6px rgba(19, 17, 32, 0.2), 0px 22px 35px 3px rgba(19, 17, 32, 0.14), 0px 8px 42px 7px rgba(19, 17, 32, 0.12)',
    '0px 11px 14px -7px rgba(19, 17, 32, 0.2), 0px 23px 36px 3px rgba(19, 17, 32, 0.14), 0px 9px 44px 8px rgba(19, 17, 32, 0.12)',
    '0px 11px 15px -7px rgba(19, 17, 32, 0.2), 0px 24px 38px 3px rgba(19, 17, 32, 0.14), 0px 9px 46px 8px rgba(19, 17, 32, 0.12)'
  ]
})

export const gagTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#33FF33',
      light: '#00FF33',
      dark: '#33FF00'
    },
    secondary: secondary,
    text: {
      primary: '#33FF33',
      secondary: '#FFB000',
      disabled: '#66FF66'
    },
    divider: `rgba(51, 255, 0, 0.12)`,
    background: {
      paper: '#282828',
      default: '#282828'
    },
    action: {
      active: `rgba(${darkModeText}, 0.54)`,
      hover: `rgba(${darkModeText}, 0.04)`,
      selected: `rgba(${darkModeText}, 0.08)`,
      disabled: `rgba(${darkModeText}, 0.3)`,
      disabledBackground: `rgba(${darkModeText}, 0.18)`,
      focus: `rgba(${darkModeText}, 0.12)`
    },
  },
  typography: {
    fontFamily: '"VT323", monospace',
    fontSize: 18
  },
  shape: {
    borderRadius: 0
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(51, 225, 51, 0.2), 0px 1px 1px 0px rgba(51, 225, 51, 0.14), 0px 1px 3px 0px rgba(51, 225, 51, 0.12)',
    '0px 3px 1px -2px rgba(51, 225, 51, 0.2), 0px 2px 2px 0px rgba(51, 225, 51, 0.14), 0px 1px 5px 0px rgba(51, 225, 51, 0.12)',
    '0px 4px 8px -4px rgba(51, 225, 51, 0.42)',
    '0px 6px 18px -8px rgba(51, 225, 51, 0.56)',
    '0px 3px 5px -1px rgba(51, 225, 51, 0.2), 0px 5px 8px rgba(51, 225, 51, 0.14), 0px 1px 14px rgba(51, 225, 51, 0.12)',
    '0px 2px 10px 0px rgba(51, 225, 51, 0.1)',
    '0px 4px 5px -2px rgba(51, 225, 51, 0.2), 0px 7px 10px 1px rgba(51, 225, 51, 0.14), 0px 2px 16px 1px rgba(51, 225, 51, 0.12)',
    '0px 5px 5px -3px rgba(51, 225, 51, 0.2), 0px 8px 10px 1px rgba(51, 225, 51, 0.14), 0px 3px 14px 2px rgba(51, 225, 51, 0.12)',
    '0px 5px 6px -3px rgba(51, 225, 51, 0.2), 0px 9px 12px 1px rgba(51, 225, 51, 0.14), 0px 3px 16px 2px rgba(51, 225, 51, 0.12)',
    '0px 6px 6px -3px rgba(51, 225, 51, 0.2), 0px 10px 14px 1px rgba(51, 225, 51, 0.14), 0px 4px 18px 3px rgba(51, 225, 51, 0.12)',
    '0px 6px 7px -4px rgba(51, 225, 51, 0.2), 0px 11px 15px 1px rgba(51, 225, 51, 0.14), 0px 4px 20px 3px rgba(51, 225, 51, 0.12)',
    '0px 7px 8px -4px rgba(51, 225, 51, 0.2), 0px 12px 17px 2px rgba(51, 225, 51, 0.14), 0px 5px 22px 4px rgba(51, 225, 51, 0.12)',
    '0px 7px 8px -4px rgba(51, 225, 51, 0.2), 0px 13px 19px 2px rgba(51, 225, 51, 0.14), 0px 5px 24px 4px rgba(51, 225, 51, 0.12)',
    '0px 7px 9px -4px rgba(51, 225, 51, 0.2), 0px 14px 21px 2px rgba(51, 225, 51, 0.14), 0px 5px 26px 4px rgba(51, 225, 51, 0.12)',
    '0px 8px 9px -5px rgba(51, 225, 51, 0.2), 0px 15px 22px 2px rgba(51, 225, 51, 0.14), 0px 6px 28px 5px rgba(51, 225, 51, 0.12)',
    '0px 8px 10px -5px rgba(51, 225, 51, 0.2), 0px 16px 24px 2px rgba(51, 225, 51, 0.14), 0px 6px 30px 5px rgba(51, 225, 51, 0.12)',
    '0px 8px 11px -5px rgba(51, 225, 51, 0.2), 0px 17px 26px 2px rgba(51, 225, 51, 0.14), 0px 6px 32px 5px rgba(51, 225, 51, 0.12)',
    '0px 9px 11px -5px rgba(51, 225, 51, 0.2), 0px 18px 28px 2px rgba(51, 225, 51, 0.14), 0px 7px 34px 6px rgba(51, 225, 51, 0.12)',
    '0px 9px 12px -6px rgba(151, 225, 51, 0.2), 0px 19px 29px 2px rgba(51, 225, 51, 0.14), 0px 7px 36px 6px rgba(51, 225, 51, 0.12)',
    '0px 10px 13px -6px rgba(51, 225, 51, 0.2), 0px 20px 31px 3px rgba(51, 225, 51, 0.14), 0px 8px 38px 7px rgba(51, 225, 51,, 0.12)',
    '0px 10px 13px -6px rgba(51, 225, 51, 0.2), 0px 21px 33px 3px rgba(51, 225, 51, 0.14), 0px 8px 40px 7px rgba(51, 225, 51, 0.12)',
    '0px 10px 14px -6px rgba(51, 225, 51, 0.2), 0px 22px 35px 3px rgba(51, 225, 51, 0.14), 0px 8px 42px 7px rgba(51, 225, 51, 0.12)',
    '0px 11px 14px -7px rgba(51, 225, 51, 0.2), 0px 23px 36px 3px rgba(51, 225, 51, 0.14), 0px 9px 44px 8px rgba(51, 225, 51, 0.12)',
    '0px 11px 15px -7px rgba(51, 225, 51, 0.2), 0px 24px 38px 3px rgba(51, 225, 51, 0.14), 0px 9px 46px 8px rgba(51, 225, 51, 0.12)'
  ]
})
