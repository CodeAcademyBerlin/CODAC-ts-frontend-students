import { Grid } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import React from 'react';

import { Board } from './Board';

const useStyles = makeStyles((theme: any) => ({
  boardContent: {
    overflowY: 'auto',
    height: '100%',
  },
}));

export const BoardsList = ({ boards }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.boardContent}>
      {boards.map((board) => (
        <Grid key={board.id} item xs={12}>
          <Board board={board} />
        </Grid>
      ))}
    </Grid>
  );
};
