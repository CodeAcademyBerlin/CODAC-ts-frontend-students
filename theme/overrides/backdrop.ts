// ** MUI Imports
import { Theme } from '@mui/material/styles'
import { hexToRGBA } from '../../utils/hex-to-rgba'

// ** Util Import

const Backdrop = (theme: Theme) => {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor:
            theme.palette.mode === 'light'
              ? `rgba(${theme.palette.primary.main}, 0.7)`
              : hexToRGBA(theme.palette.background.default, 0.7)
        },
        invisible: {
          backgroundColor: 'transparent'
        }
      }
    }
  }
}

export default Backdrop
