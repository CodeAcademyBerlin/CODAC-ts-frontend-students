import React, { useState } from 'react';
//import serverSideProps
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
//import Apollo für ServerSideProps
import { initializeApollo } from "../../lib/apolloClient";
//import generated query
import { GetCodacOverflowsDocument } from "../../cabServer/queries/__generated__/overflow";

// ** MUI Imports
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

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
        Overflow-Topic
      </Paper>
      </Box>
    </div>
  )
}

export default OverflowTopic;

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