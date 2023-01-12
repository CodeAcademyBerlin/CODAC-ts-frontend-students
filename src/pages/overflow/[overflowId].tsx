// ** MUI Imports
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
//import serverSideProps
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';
import React, { useState } from 'react';

//import types
import { CodacOverflowEntity } from '../../../cabServer/global/__generated__/types';
//import generated query
import { GetCodacOverflowsDocument } from '../../../cabServer/queries/__generated__/overflow';
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

const OverflowTopic = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [result, setResult] = useState(data.codacOverflows.data);
  console.log('result data', result);

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
                <Item key={topic.id}>
                  <h3>{topic.attributes?.title}</h3>
                </Item>
              ))}
          </Stack>
          Overflow-Topic
        </Paper>
      </Box>
    </div>
  );
};

export default OverflowTopic;

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
