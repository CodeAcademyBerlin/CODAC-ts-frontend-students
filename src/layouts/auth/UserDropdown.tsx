import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { AccountOffOutline } from 'mdi-material-ui';
import AccountOutline from 'mdi-material-ui/AccountOutline';
import CogOutline from 'mdi-material-ui/CogOutline';
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd';
import EmailOutline from 'mdi-material-ui/EmailOutline';
import LogoutVariant from 'mdi-material-ui/LogoutVariant';
import MessageOutline from 'mdi-material-ui/MessageOutline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, SyntheticEvent, useState } from 'react';

import { useAuth } from '../../hooks/useAuth';
// ** Styled Components
const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
}));
const LinkStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const UserDropdown = () => {
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  // ** Hooks
  const router = useRouter();

  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = (url?: string) => {
    if (url) {
      router.push(url);
    }
    setAnchorEl(null);
  };

  const styles = {
    py: 2,
    px: 4,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: 'text.primary',
    textDecoration: 'none',
    '& svg': {
      fontSize: '1.375rem',
      color: 'text.secondary',
    },
  };
  if (!user)
    return (
      <LinkStyled href="/login">
        <IconButton
          color="primary"
          aria-haspopup="true"
          aria-controls="customized-menu"
        >
          <AccountOffOutline sx={{ marginRight: 2 }} />
        </IconButton>
      </LinkStyled>
    );
  else
    return (
      <Fragment>
        <Badge
          overlap="circular"
          onClick={handleDropdownOpen}
          sx={{ ml: 2, cursor: 'pointer' }}
          badgeContent={<BadgeContentSpan />}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Avatar
            alt={user.username}
            onClick={handleDropdownOpen}
            sx={{ width: 40, height: 40 }}
            src={user?.avatar?.url || ''}
          />
        </Badge>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleDropdownClose()}
          sx={{ '& .MuiMenu-paper': { width: 230, marginTop: 4 } }}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Box sx={{ pt: 2, pb: 3, px: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Badge
                overlap="circular"
                badgeContent={<BadgeContentSpan />}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              >
                <Avatar
                  alt={user.username}
                  src={user?.avatar?.url || ''}
                  sx={{ width: '2.5rem', height: '2.5rem' }}
                />
              </Badge>
              <Box
                sx={{
                  display: 'flex',
                  marginLeft: 3,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>
                  {user.username}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: '0.8rem', color: 'text.disabled' }}
                >
                  {user.role?.name}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ mt: 0, mb: 1 }} />
          {/* <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose()}>
            <LinkStyled href="/profile">
              <Box sx={styles}>
                <AccountOutline sx={{ marginRight: 2 }} />
                Profile
              </Box>
            </LinkStyled>
          </MenuItem> */}
          {/* <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose()}>
            <Box sx={styles}>
              <MessageOutline sx={{ marginRight: 2 }} />
              Chat
            </Box>
          </MenuItem> */}
          <Divider />
          {/* <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose()}>
            <Box sx={styles}>
              <CogOutline sx={{ marginRight: 2 }} />
              Settings
            </Box>
          </MenuItem> */}
          {/* <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <HelpCircleOutline sx={{ marginRight: 2 }} />
            FAQ
          </Box>
        </MenuItem> */}
          <Divider />
          <MenuItem sx={{ py: 2 }} onClick={() => logout()}>
            <LogoutVariant
              sx={{
                marginRight: 2,
                fontSize: '1.375rem',
                color: 'text.secondary',
              }}
            />
            Logout
          </MenuItem>
        </Menu>
      </Fragment>
    );
};

export default UserDropdown;
