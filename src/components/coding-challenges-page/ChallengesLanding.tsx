import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';

import StyledLink from '../common/StyledLink';

type Props = {};

const ChallengesLanding = (props: Props) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'white',
          mt: 0,
          p: 5,
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: 'auto',
          boxShadow: 1,
          borderRadius: 1,
        }}
      >
        <Typography variant="h5">CODAC Coding Challenges</Typography>
        <br />
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          Welcome to Code Academys own collection of Coding Challenges This is a
          page where you can view and add coding challenges aswell as getting
          hints into how to solve them
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: 'auto',
          }}
        >
          <StyledLink href={`/codingchallenges/NewChallenge`}>
            <Button
              data-cy="button-test"
              sx={{
                m: 4,
              }}
              type="submit"
              variant="contained"
            >
              Add your own coding challenge
            </Button>
          </StyledLink>
        </Box>
      </Box>
    </>
  );
};

export default ChallengesLanding;
