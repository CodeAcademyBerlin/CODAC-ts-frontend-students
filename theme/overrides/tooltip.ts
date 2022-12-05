// ** MUI Imports
import { Theme } from '@mui/material/styles'
import { hexToRGBA } from '../../utils/hex-to-rgba'

// ** Util Import

const Tooltip = (theme: Theme) => {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor:
            theme.palette.mode === 'light'
              ? hexToRGBA(theme.palette.grey[900], 0.9)
              : hexToRGBA(theme.palette.grey[700], 0.9)
        },
        arrow: {
          color:
            theme.palette.mode === 'light'
              ? hexToRGBA(theme.palette.grey[900], 0.9)
              : hexToRGBA(theme.palette.grey[700], 0.9)
        }
      }
    }
  }
}

export default Tooltip
