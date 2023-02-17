import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

type Props = {};

const ChallengesLanding = (props: Props) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography>CODAC Coding Challenges</Typography>

        <Typography sx={{ textAlign: 'center', p: '4' }}>
          Welcome to Code Academys own collection of Coding Challenges This is a
          page where you can view and add coding challenges aswell as getting
          hints into how to solve them
        </Typography>
      </Box>
    </>
  );
};

export default ChallengesLanding;
