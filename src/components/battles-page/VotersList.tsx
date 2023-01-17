import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from '@mui/material';
import React from 'react';

function VotersList() {
  const theme = useTheme();
  return (
    <List dense={true}>
      <ListItem>
        <Avatar
          sx={{
            fontWeight: theme.typography.fontWeightBold,
            fontSize: 15,
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.light,
            mr: 3,
          }}
        >
          {' '}
          AJ
        </Avatar>
        <ListItemText> Agnita Jauskeviciute </ListItemText>
      </ListItem>
      <Divider />
    </List>
  );
}

export default VotersList;
