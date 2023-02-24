import { Box, Button, Paper, styled } from '@mui/material';
import { Stack } from '@mui/system';
import {
  CodingChallengeEntity,
  CodingChallengeEntityResponseCollection,
} from 'cabServer/global/__generated__/types';
import {
  GetChallengesExtendedDocument,
  GetChallengesQuery,
} from 'cabServer/queries/__generated__/challenges';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next/types';
import React, { useEffect, useState } from 'react';
import ChallengesLanding from 'src/components/coding-challenges-page/ChallengesLanding';
import StyledLink from 'src/components/common/StyledLink';
import { initializeApollo } from 'src/lib/apolloClient';

import ChallengeCard from '../../components/coding-challenges-page/ChallengeCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Codingchallenges = ({
  codingChallenges,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const [challenges, setChallenges] = useState(codingChallenges);
  // useEffect(() => {
  //   setChallenges(codingChallenges);
  // }, []);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          alignItems: 'center',
          '& > :not(style)': {
            width: '100%',
            height: 'auto',
            mb: 10,
          },
        }}
      >
        <ChallengesLanding />
      </Box>
      <Box>
        <Stack spacing={2}>
          {codingChallenges.map((challenge: CodingChallengeEntity) => {
            return (
              <>
                <Item>
                  <ChallengeCard key={challenge?.id} challenge={challenge} />
                </Item>
              </>
            );
          })}
        </Stack>
      </Box>
    </>
  );
};

export default Codingchallenges;

// GetChallengesQuery is the full query object
// getStaticProps runs at build time so no context so need to initalize with null
// Cannot have autorization on challanges since static build, but we can create token based server side auth

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  try {
    const client = initializeApollo(null, null);
    const { data, error } = await client.query<GetChallengesQuery>({
      query: GetChallengesExtendedDocument,
      variables: { id: 1 },
    });

    const codingChallenges = data?.codingChallenges?.data;
    console.log('codingChallenges', codingChallenges);
    if (codingChallenges) {
      return {
        props: { codingChallenges },
        revalidate: 10,
      };
    }
    if (error || !codingChallenges) {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
