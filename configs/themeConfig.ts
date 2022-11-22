// ** MUI Imports
import { PaletteMode } from '@mui/material'

// ** Types
import { ContentWidth } from '../@core/layouts/types'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ReactNode } from 'react'

type ThemeConfig = {
  // mode: PaletteMode
  templateName: string
  // routingLoader: boolean
  // disableRipple: boolean
  // navigationSize: number
  // menuTextTruncate: boolean
  // contentWidth: ContentWidth
  // responsiveFontSizes: boolean
}

const themeConfig: ThemeConfig = {
  // ** Layout Configs
  templateName: 'CODAC' /* App Name */,
//   mode: 'light' /* light | dark */,
//   contentWidth: 'boxed' /* full | boxed */,

//   // ** Routing Configs
//   routingLoader: true /* true | false */,

//   // ** Navigation (Menu) Configs
//   menuTextTruncate: true /* true | false */,
//   navigationSize: 260 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,

//   // ** Other Configs
//   responsiveFontSizes: true /* true | false */,
//   disableRipple: false /* true | false */
}

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537'
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
}

//?what is DefaultTheme and how do I include my own properties on it?
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`

// export const Theme = ({ children }:{ children: ReactNode }) => {
//   return (
//     <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
//       {children}
//     </ThemeProvider>
//   )
// };


export default themeConfig
