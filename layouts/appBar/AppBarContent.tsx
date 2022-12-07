// ** MUI Imports
import Box from '@mui/material/Box'
import { styled, Theme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputAdornment from '@mui/material/InputAdornment'
import Magnify from 'mdi-material-ui/Magnify'
import NotificationDropdown from '../auth/NotificationDropdown'
import UserDropdown from '../auth/UserDropdown'
import { Settings } from '../../contexts/settingsContext'
import { useAuth } from '../../hooks/useAuth'
import ThemeController from './ThemeController'
import { AccountOffOutline } from 'mdi-material-ui'
import Link from 'next/link'


const LinkStyled = styled(Link)`
text-decoration: none;
cursor: pointer;
`

const AppBarContent = () => {
  const { user, logout } = useAuth()

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
        {user ? <UserDropdown user={user} logout={logout} /> :
          <LinkStyled href="/login">
            <IconButton color='primary.main' aria-haspopup='true' aria-controls='customized-menu'>
              <AccountOffOutline sx={{ marginRight: 2 }} />
            </IconButton>
          </LinkStyled>
        }
      </Box>
    </Box>
  )
}

export default AppBarContent
