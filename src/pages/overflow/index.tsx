// ** MUI Imports
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';
//import serverSideProps
import React, { useState } from 'react';

//import types
import { CodacOverflowEntity } from '../../../cabServer/global/__generated__/types';
//import generated query
import { GetCodacOverflowsDocument } from '../../../cabServer/queries/__generated__/overflow';
//import for the Styled Link, which not refreshes
import StyledLink from '../../components/common/StyledLink';
//import Apollo für ServerSideProps
import { initializeApollo } from '../../lib/apolloClient';

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
  const [result, setResult] = useState(data.codacOverflows.data);
  const [searchedTopic, setSearchedTopic] = useState('');
  const theme = useTheme();
  console.log('result data', result);
  console.log('theme', theme);
  console.log('actual theme', theme.palette.mode);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('searchedTopic', searchedTopic);
  };

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
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <form onSubmit={handleSearch}>
            <TextField
              id="outlined-search"
              value={searchedTopic}
              label="Search for topics..."
              name="search"
              type="search"
              onChange={(e) => {
                setSearchedTopic(e.target.value);
              }}
            />
          </form>
          <StyledLink href={'overflow/newQuestion'}>
            <Button
              sx={{
                mt: 5,
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

        <Stack
          spacing={2}
          style={{
            margin: '10px 0px 10px 0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {result &&
            result.map((topic: CodacOverflowEntity) => (
              <Item
                key={topic.id}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  width: '90%',
                  maxWidth: '90%',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '3px',
                    right: '3px',
                    padding: '3px 2px 3px 2px',
                    backgroundColor:
                      theme.palette.mode === 'dark' ? '#312D4B' : '',
                    borderRadius: '5px',
                  }}
                >
                  {topic.attributes?.course}
                </div>
                <StyledLink href={`overflow/${topic.id}`}>
                  <h3 id="dynamic-overflow-link">{topic.attributes?.title}</h3>
                </StyledLink>
                <p
                  style={{
                    display: '-webkit-box',
                    textAlign: 'left',
                    padding: '0',
                    margin: '0px 0px 0px 5px',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    WebkitLineClamp: '2',
                    lineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                    width: '95%',
                  }}
                >
                  {topic.attributes?.description}
                </p>
              </Item>
            ))}
        </Stack>
      </Paper>
    </Box>
  );
};

export default Overflow;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const client = initializeApollo(null, ctx.req);
    const { data, error } = await client.query({
      query: GetCodacOverflowsDocument,
    });
    console.log('Fetch was successful, see success:', data);
    return {
      props: { data },
    };
  } catch (error) {
    console.log('Fetch was not successful, see error:', error);
    return {
      props: { data: null },
    };
  }
};
