import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Close } from '@mui/material/icons';
import { makeStyles } from '@mui/material/styles';
import React from 'react';

const useStyles = makeStyles((theme: any) => ({
  inputAddCard: {
    marginBottom: theme.spacing(1),
  },
}));

export const InputAdd = ({ handleClose }) => {
  const classes = useStyles();

  return (
    <TextField
      label="Card title"
      variant="outlined"
      fullWidth
      className={classes.inputAddCard}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => handleClose(false)}>
              <Close />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
