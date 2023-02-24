import { Box, Button, TextField, Typography } from '@mui/material';
import {
  useDeleteCodingChallengeMutation,
  useUpdateCodingChallengeMutation,
} from 'cabServer/mutations/__generated__/addChallenge';
import {
  GetChallengeByIdDocument,
  GetChallengeByIdQuery,
  GetChallengesExtendedDocument,
  GetChallengesQuery,
} from 'cabServer/queries/__generated__/challenges';
import { useRouter } from 'next/router';
import {
  GetServerSideProps,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next/types';
import React, { useState } from 'react';
import StyledLink from 'src/components/common/StyledLink';
import { initializeApollo } from 'src/lib/apolloClient';

// Added to acccess user
import { useAuth } from '../../hooks/useAuth';

// Get type from staticProps into component thru InferGetStaticPropsType
type Props = {};

const Challange = ({ challengeData }: any) => {
  const [challengeBody, setChallengeBody] = useState(
    challengeData?.attributes?.challenge,
  );
  const [isChallengeFocused, setIsChallengeFocused] = useState(false);
  const [idToDelete, setIdToDelete] = useState(challengeData?.id);
  const router = useRouter();

  // Added to acccess user
  const { user } = useAuth();

  const [
    updateCodingChallengeMutation,
    { data: dataUpdate, loading: loadingUpdate, error: errorUpdate },
  ] = useUpdateCodingChallengeMutation({
    variables: {
      id: challengeData?.id || '',
      challenge: challengeBody,
    },
  });

  const handleUpdate = () => {
    console.log('handle update challengeBody', challengeBody);
    setIsChallengeFocused(false);
    updateCodingChallengeMutation();
  };

  const [
    deleteCodingChallengeMutation,
    { data: dataDelete, loading: loadingDelete, error: errorDelete },
  ] = useDeleteCodingChallengeMutation({
    variables: {
      id: idToDelete || '',
    },
  });

  const handleDelete = () => {
    if (idToDelete) {
      try {
        deleteCodingChallengeMutation();
        window.alert('Deletion successful, redirecting you to the main page');
        console.log('deleted');
        router.push('/codingchallenges');
      } catch (error) {
        console.log('error', error);
      }
    } else {
      window.alert('Deletion failed');
    }
  };

  // Added to disable delete button if !user or user && user.id !== author.id
  const disabled =
    !user || (user && user?.id !== challengeData?.attributes?.author?.data?.id);

  return (
    <>
      <Box
        sx={{
          mt: 0,
          p: 5,
          m: 4,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'white',
          boxShadow: 1,
          borderRadius: 1,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: 'bold',
          }}
        >
          {challengeData?.attributes?.title}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 0,
          p: 5,
          m: 4,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          bgcolor: 'white',
          minHeight: 'auto',
          boxShadow: 1,
          borderRadius: 1,
        }}
      >
        {user && user?.id == challengeData?.attributes?.author?.data?.id ? (
          <Box>
            {!isChallengeFocused ? (
              <Typography
                onClick={() => {
                  setIsChallengeFocused(true);
                }}
              >
                {challengeBody}
              </Typography>
            ) : (
              <TextField
                value={challengeBody}
                onChange={(event) => setChallengeBody(event.target.value)}
                onBlur={handleUpdate}
              />
            )}
          </Box>
        ) : (
          <Box>
            <Typography variant="body2">{challengeBody}</Typography>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {/* <StyledLink href={`/codingchallenges`}> */}
        <Button
          href={`/codingchallenges`}
          sx={{
            m: 4,
          }}
          variant="contained"
        >
          Back to challenges
        </Button>
        <Button
          disabled={disabled}
          onClick={handleDelete}
          sx={{
            m: 4,
          }}
          variant="contained"
          color="warning"
        >
          Delete Challenge
        </Button>
        {/* </StyledLink> */}
      </Box>
      <Box
        sx={{
          mt: 0,
          p: 5,
          m: 4,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'white',
          boxShadow: 1,
          borderRadius: 1,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: 'bold',
          }}
        >
          Test writing your own solution (To be implemented by... you?)
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 0,
          p: 5,
          m: 4,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',

          bgcolor: 'white',

          boxShadow: 1,
          borderRadius: 1,
          minHeight: 'auto',
        }}
      >
        <Box>
          <TextField
            placeholder="Write your own solution"
            sx={{
              display: 'flex',
              multiline: 'true',
            }}
          ></TextField>
        </Box>
      </Box>
      <Button
        sx={{
          m: 4,
        }}
        variant="contained"
      >
        Test your answer
      </Button>
    </>
  );
};

export default Challange;

// export const getStaticProps = async (ctx: GetStaticPropsContext) => {
export const getServerSideProps = async (ctx: { params: { id: any } }) => {
  const challengeId = ctx?.params?.id;

  try {
    const client = initializeApollo(null, null);
    const { data, error } = await client.query<GetChallengeByIdQuery>({
      query: GetChallengeByIdDocument,
      variables: { id: challengeId },
    });
    const challengeData = data?.codingChallenge?.data;

    if (challengeData) {
      return {
        props: {
          challengeData,
        },
        // revalidate: 10,
      };
    }
    if (error || !challengeData) {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.log(error);
    console.log('error from getStaticProps', error);
    return {
      notFound: true,
    };
  }
};
// Notes:
// We Know type of challengeData because its inferred by GetChallengeByIdQuery
// Paths allways needs to be an [] even with if contins one element since chllenge is looking for [] type
// paths first, list things, get the ids, then getStaticProps, and then additional data fetching for that one

// export const getStaticPaths = async (ctx: GetStaticPathsContext) => {
//   // Notes
//   // CTX also contains authorization, so if we add user and change type to be accessible only to logged in users we could get the parameter in the ctx res

//   const client = initializeApollo(null, null);
//   const { data, error } = await client.query<GetChallengesQuery>({
//     query: GetChallengesExtendedDocument,
//     // Notes:
//     // have the full list so dont need the variable variables: { id: challengeId },
//   });

//   // console.log('data.codingChallenges.data', data?.codingChallenges?.data);
//   const challengesArray = data?.codingChallenges?.data;
//   // console.log('challengesArray', challengesArray);

//   const paths = challengesArray?.map((challenge) => ({
//     params: { id: challenge?.id },
//   }));
//   console.log('paths', paths);
//   return {
//     paths,
//     fallback: 'blocking',
//     // fallback: 'blocking',
//   };
//   // Notes:
//   // using a map to reshape the array without changing tha data inside. Map of esponse to have the return with params and id
//   // Paths need to get returned in the following way: paths: [{ params: { id: '1' } }, { params: { id: '1' } }],
//   // getStaticPaths query checking all challenges and returning a path for each id
// };
