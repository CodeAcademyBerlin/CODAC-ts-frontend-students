// ** MUI Imports
import Box from '@mui/material/Box'
import { styled, Theme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputAdornment from '@mui/material/InputAdornment'
import Magnify from 'mdi-material-ui/Magnify'
import NotificationDropdown from '../auth/NotificationDropdown'
import UserDropdown from '../auth/UserDropdown'
import { Settings } from '../../contexts/settingsContext'

import ThemeController from './ThemeController'
import Link from 'next/link'


const LinkStyled = styled(Link)`
text-decoration: none;
cursor: pointer;
`

const AppBarContent = () => {
  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
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
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        <ThemeController />
        {/* <NotificationDropdown /> */}
        <UserDropdown />


      </Box>
    </Box>
  )
}

export default AppBarContent
