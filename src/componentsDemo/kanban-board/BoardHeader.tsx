import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import React from 'react';

const useStyles = makeStyles((theme: any) => ({
  boardHeader: {
    padding: theme.spacing(2),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export const BoardHeader = ({ title }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.boardHeader}>
      <Typography component="h5" variant="h5">
        {title}
      </Typography>
    </Grid>
  );
};
