// fetch single challnge

// do the static props fetch again

// Create the ptahs

// need to get static paths here again

// and then get a list item from staticprops (but not run the funtion i think)
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import {
  GetChallengeByIdDocument,
  GetChallengeByIdQuery,
  GetChallengesExtendedDocument,
  GetChallengesQuery,
} from 'cabServer/queries/__generated__/challenges';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next/types';
import React from 'react';
import ChallengesLanding from 'src/components/coding-challenges-page/ChallengesLanding';
import { initializeApollo } from 'src/lib/apolloClient';

type Props = {};

console.log('challenge page');

const Challange = ({
  challengeData,
}: // Get the type from thje dtaicp pros into the component thru InferGetStaticPropsType
InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('challengeData', challengeData);
  return (
    <>
      <Box
        sx={{
          mt: 0,
          p: 5,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'white',
        }}
      >
        <Box>
          <Typography>CODAC Coding Challenges</Typography>
        </Box>
        <Box>
          <Typography>{challengeData?.attributes?.title}</Typography>
        </Box>
        <Box>
          <Typography>{challengeData?.attributes?.challenge}</Typography>
        </Box>
        <Box component="form">
          <TextField></TextField>
          <Button>Run test</Button>
        </Box>
      </Box>
    </>
  );
};

export default Challange;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const challengeId = ctx.params.id;
  console.log('challengeId', challengeId);

  const client = initializeApollo(null, null);
  const { data, error } = await client.query<GetChallengeByIdQuery>({
    query: GetChallengeByIdDocument,
    variables: { id: challengeId },
  });
  console.log('data from getStaticProps', data);
  console.log('error from getStaticProps', error);

  // knows the type if challengeData because its inferred by GetChallengeByIdQuery
  const challengeData = data?.codingChallenge?.data;

  return {
    props: { challengeData },
  };
};

// ptahs need to always be anrray even if only one
// challnge looking for [] file

// get challanges plural
// path frist, list things, get the ids , then getstaiprops and with the page, and then some more data fetching for tha tparticualr

/// inside the query need the id
// for icnremntal fucntion needs to get thet (needs to be generatd here)

export const getStaticPaths = async (ctx) => {
  // fidn the id from the map noit cotnext
  // const challengeId = ctx.params;
  // console.log('challengeId in getStaticPaths', challengeId);

  // One of the tuhngs that comss with ctx is autorixation , so if we set the chalmnge type to be assesible oyl for logedf in users you would need the ctx as poaremter
  const client = initializeApollo(null, ctx.req);
  const { data, error } = await client.query<GetChallengesQuery>({
    query: GetChallengesExtendedDocument,
    // have the full list so dont need the variable
    // variables: { id: challengeId },
  });

  console.log('data', data);
  console.log('data.codingChallenges', data.codingChallenges);
  console.log('data.codingChallenges.data', data?.codingChallenges?.data);
  const challengesArray = data?.codingChallenges?.data;
  console.log('challengesArray', challengesArray);

  const paths = challengesArray?.map((challenge) => ({
    // Note challnge.id needs to be return as a sting to getStaticPaths?
    params: { id: challenge?.id },
  }));

  console.log('paths', paths);

  return {
    paths,
    fallback: false,
  };

  // using a map to reshape the array without changign tha data inside. Map of esponse to have the return with params and id

  // Return examples
  // paths: [{ params: { challenge: '1' } }],
  // paths: [{ params: { id: '1' } }, { params: { id: '1' } }],
};

// staticpaths query checking all challamnges and returning a path for each title

// use contex.parmas to do query and send as props to componet
// doi the query in the staticporps and then reutnr it insitead of the query

// ser er side you need to eclare a new isntance ebry time you query since you dont have a prociuder like in the client side
