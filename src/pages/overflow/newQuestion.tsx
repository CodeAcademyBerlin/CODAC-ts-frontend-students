// ** MUI Imports
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React from 'react';

type Props = {};

const newQuestion = (props: Props) => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          alignItems: 'center',
          '& > :not(style)': {
            m: 1,
            width: '100%',
            height: 'auto',
          },
        }}
      >
        <Paper
          elevation={0}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          newQuestion
        </Paper>
      </Box>
    </div>
  );
};

export default newQuestion;
