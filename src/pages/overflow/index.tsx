// ** MUI Imports
import { useTheme } from '@mui/material';
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
//import serverSideProps
import React, { useState } from 'react';
import ShowOverflow from 'src/components/overflow/ShowOverflow';

//import for the Styled Link, which not refreshes
import StyledLink from '../../components/common/StyledLink';

//Paper Styling from MUI
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

//Main Component Overflow
const Overflow = () => {
  const theme = useTheme();
  return (
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
        <h1>CODAC Overflow</h1>

        <p>Welcome to CODAC Overflow</p>

        <p style={{ textAlign: 'center' }}>
          Here you can ask questions, if you get stuck in your current project.
          <br></br>
          The other students will try their best to help you out.<br></br>
          It is a give and get basically.
        </p>

        <p>In best case, you do not need this page.</p>
      </Paper>

      <Paper
        elevation={0}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            '& .MuiTextField-root': { m: 3, width: '100%' },
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            marginTop: '5px',
          }}
        >
          <StyledLink href={'overflow/newQuestion'}>
            <Button
              sx={{
                mt: 2,
                ml: 1,
                position: 'absolute',
                top: '0',
                right: '10px',
              }}
              type="submit"
              variant="contained"
            >
              Ask a question
            </Button>
          </StyledLink>
        </Box>

        <ShowOverflow />
      </Paper>
    </Box>
  );
};

export default Overflow;
