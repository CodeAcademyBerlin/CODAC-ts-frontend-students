import { Paper } from '@mui/material';
import React from 'react';

type Props = {};

const ChallengesLanding = (props: Props) => {
  return (
    <>
      <Paper
        elevation={0}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>CODAC Coding Challenges</h1>

        <p style={{ textAlign: 'center' }}>
          {' '}
          Welcome to Code Academy's own collection of Coding Challenges
        </p>

        <p style={{ textAlign: 'center' }}>
          This is a page where you can view and add coding challenges aswell as
          getting hints into how to solve them
        </p>
      </Paper>
    </>
  );
};

export default ChallengesLanding;
