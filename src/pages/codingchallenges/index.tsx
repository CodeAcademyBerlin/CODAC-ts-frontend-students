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
  // Notes:
  // Set with <> for empty?
  const [challenges, setChallenges] = useState(codingChallenges);

  // Render first time and when changes
  useEffect(() => {
    setChallenges(codingChallenges);
  }, []);

  return (
    <>
      <Box
        sx={{
          bgcolor: 'white',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          alignItems: 'center',
          '& > :not(style)': {
            width: '100%',
            height: 'auto',
          },
        }}
      >
        <ChallengesLanding />
      </Box>
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
            sx={{
              m: 4,
              // ml: 1,
              // position: 'absolute',
              // top: '0',
              // right: '10px',
            }}
            type="submit"
            variant="contained"
          >
            Add a coding challenge
          </Button>
        </StyledLink>
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

// put challknge within loop !
// you don t have to name it props={challnge}, naming it challnege will have it send it as prop.challnge and you will recive it as prop.challenge in the challnge card

export default Codingchallenges;

// GetChallengesQuery is the full query object
// getStaticProps runs at buildtime so no context so need to initalize with null
// Cannot have autorization on challanges since static build, but we can create token based server side autoetication
// Comments - do client side rendering

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  console.log('context', ctx.params);
  try {
    const client = initializeApollo(null, null);
    const { data, error } = await client.query<GetChallengesQuery>({
      query: GetChallengesExtendedDocument,
      variables: { id: 1 },
    });

    // console.log('data from server', data?.codingChallenges?.data);
    // {
    //   data?.codingChallenges?.data?.map((item) => {
    //     console.log('item', item?.attributes?.comments);
    //   });
    // }

    const codingChallenges = data?.codingChallenges?.data;

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
