import React, { useState } from 'react';
//import auth to get the actual user information
import { useAuth } from '../../hooks/useAuth';
//import servSideProps
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
//import types
import { CodacOverflowEntity } from "../../cabServer/global/__generated__/types";
//import Apollo für ServerSideProps
import { initializeApollo } from "../../lib/apolloClient";
//import generated query
import { GetCodacOverflowsDocument } from "../../cabServer/queries/__generated__/overflow";

// ** MUI Imports
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';

// ** Icons Imports
import AccountOutline from "mdi-material-ui/AccountOutline";

//Search declaration from MUI
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

//Paper Styling from MUI
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

//Main Component Overflow
const Overflow = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  /* const [result, setResult] = useState(data.codacOverflows.data); */
  const { user } = useAuth();
  console.log('user', user);
  console.log('data', data);
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

        <p>Welcome to CODAC Overflow</p>

        <p>Here you can ask questions, if you get stuck in your current project.<br></br>
          The other students will try their best to help you out.<br></br>
          It is a give and get basically.</p>

        <p>In best case, you don't need this page.</p>
      </Paper>

      <Paper
        elevation={0}
        style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center'
        }}
      >
        <Box sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          width: "100%"
        }}>
        <Search>
          <StyledInputBase
            style={{ width: "100%", textAlign: 'center'}}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        </Box>

        <Stack spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
      </Paper>
    </Box>
  )
};

export default Overflow;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const client = initializeApollo(null, ctx.req);
    const { data, error } = await client.query({
      query: GetCodacOverflowsDocument
    });
    console.log("Fetch was successful, see success:", data);
    return {
      props: { data },
    };
  } catch (error) {
    console.log("Fetch was not successful, see error:", error);
    return {
      props: { data: null },
    };
  }
};