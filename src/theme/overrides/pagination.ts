// ** MUI Imports
import { Theme } from '@mui/material/styles';

import { hexToRGBA } from '../../lib/hex-to-rgba';

// ** Util Import

const Pagination = (theme: Theme) => {
  return {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected:not(.Mui-disabled):not(.MuiPaginationItem-textPrimary):not(.MuiPaginationItem-textSecondary):hover':
            {
              backgroundColor: `rgba(${theme.palette.primary.main}, 0.12)`,
            },
        },
        outlined: {
          borderColor: `rgba(${theme.palette.primary.main}, 0.22)`,
        },
        outlinedPrimary: {
          '&.Mui-selected': {
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.12),
            '&:hover': {
              backgroundColor: `${hexToRGBA(
                theme.palette.primary.main,
                0.2,
              )} !important`,
            },
          },
        },
        outlinedSecondary: {
          '&.Mui-selected': {
            backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.12),
            '&:hover': {
              backgroundColor: `${hexToRGBA(
                theme.palette.secondary.main,
                0.2,
              )} !important`,
            },
          },
        },
      },
    },
  };
};

export default Pagination;
