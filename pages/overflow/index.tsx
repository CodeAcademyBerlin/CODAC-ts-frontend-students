import React from 'react';
//import auth to get the actual user information
import { useAuth } from '../../hooks/useAuth';

// ** MUI Imports
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

type Props = {}

const Overflow = (props: Props) => {
  const { user } = useAuth();
  console.log('user', user);
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': {
          m: 1,
          width: "100%",
          height: "auto",
        },
      }}
    >
      <Paper
        elevation={0}
        style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center'
        }}
      >
        <h1>CODAC Overflow</h1>

        <p>Welcome to CODAC Overflow Page.</p>

        <p>here you can ask questions, if you get stuck in your current project and
          the other students will try their best to help ypu out.</p>

        <p>It is a give and get basically.</p>

        <p>Below you can see the all the topics, that have been someday asked by one of our students:</p>
        
          

      </Paper>
    </Box>
  )
}

export default Overflow