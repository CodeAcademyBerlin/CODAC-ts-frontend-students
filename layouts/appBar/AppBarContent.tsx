// ** MUI Imports
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputAdornment from '@mui/material/InputAdornment'

import { useContext } from 'react'

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'


import NotificationDropdown from '../auth/NotificationDropdown'
import UserDropdown from '../auth/UserDropdown'
import { Settings } from '../../contexts/settingsContext'
import { useAuth } from '../../hooks/useAuth'
import ThemeController from './ThemeController'



interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const AppBarContent = () => {
  // ** Props

  // ** Hook
  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const { user } = useAuth()
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
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
        />
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        <ThemeController />
        <NotificationDropdown />
        {user && <UserDropdown user={user} />}
      </Box>
    </Box>
  )
}

export default AppBarContent
