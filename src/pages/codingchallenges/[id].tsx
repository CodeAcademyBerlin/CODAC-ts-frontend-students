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
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next/types';
import React, { useState } from 'react';
import StyledLink from 'src/components/common/StyledLink';
import { initializeApollo } from 'src/lib/apolloClient';

// added for user
import { useAuth } from '../../hooks/useAuth';

type Props = {};

const Challange = ({
  challengeData,
}: // Get type from staticProps into component thru InferGetStaticPropsType
InferGetStaticPropsType<typeof getStaticProps>) => {
  const [challengeBody, setChallengeBody] = useState(
    challengeData?.attributes?.challenge,
  );
  const [isChallengeFocused, setIsChallengeFocused] = useState(false);

  const [idToDelete, setIdToDelete] = useState(challengeData?.id);

  const router = useRouter();

  // added for user

  const { user } = useAuth();
  console.log('user', user);

  // Note page stored as json so can quikly load the static part and will add the client side on top

  // next routers use params (another name)

  // data is object with property chsllnge

  const [
    updateCodingChallengeMutation,
    { data: dataUpdate, loading: loadingUpdate, error: errorUpdate },
  ] = useUpdateCodingChallengeMutation({
    variables: {
      id: challengeData?.id,
      challenge: challengeBody,
    },
  });
  // console.log('error', error);
  // console.log('challengeBody', challengeBody);
  // console.log('data', data);

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
      id: idToDelete,
    },
  });

  //Option 1

  // const handleDelete = (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent | null>,
  // ) => {
  //   const target = event.target as HTMLButtonElement;
  //   console.log(target.value);
  // };

  //Option 2

  // type HTMLElementEvent<T extends HTMLElement> = Event & { target: T };

  // const handleDelete = (event: HTMLElementEvent<HTMLButtonElement>) => {
  // // const idToDelete = Number(event.target.value);
  // // console.log(idToDelete);
  // // console.log(Number(event.target.value));
  // setIdToDelete(event.target.value);
  // console.log('idToDelete', idToDelete);
  // if (idToDelete) {

  const handleDelete = () => {
    // const idToDelete = Number(event.target.value);
    // console.log(idToDelete);
    // console.log(Number(event.target.value));
    // setIdToDelete(event.target.value);
    // console.log('idToDelete', idToDelete);
    if (idToDelete) {
      try {
        deleteCodingChallengeMutation();
        // build module
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

  // added for user/authorid
  console.log(
    'challengeData?.attributes?.author?.data?.id',
    challengeData?.attributes?.author?.data?.id,
  );

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
        {/* added for user/authorid */}
        {user && user?.id === challengeData?.attributes?.author?.data?.id ? (
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
            <Typography>{challengeBody}</Typography>
          </Box>
        )}
      </Box>
      <Box>
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
          onClick={handleDelete}
          // onChange={(event) => setIdToDelete(event.target.value)}
          value={idToDelete}
          // value={challengeData?.id}
          sx={{
            m: 4,
          }}
          variant="contained"
        >
          Delete
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
          sx={{
            fontWeight: 'bold',
          }}
        >
          Test writing your own solution
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
        Run test
      </Button>
    </>
  );
};

export default Challange;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
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
        revalidate: 10,
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

export const getStaticPaths = async (ctx: GetStaticPathsContext) => {
  // Notes
  // CTX also contains authorization, so if we add user and change type to be accessible only to logged in users we could get the parameter in the ctx res

  const client = initializeApollo(null, null);
  const { data, error } = await client.query<GetChallengesQuery>({
    query: GetChallengesExtendedDocument,
    // Notes:
    // have the full list so dont need the variable variables: { id: challengeId },
  });

  // console.log('data.codingChallenges.data', data?.codingChallenges?.data);
  const challengesArray = data?.codingChallenges?.data;
  // console.log('challengesArray', challengesArray);

  const paths = challengesArray?.map((challenge) => ({
    params: { id: challenge?.id },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
  // Notes:
  // using a map to reshape the array without changing tha data inside. Map of esponse to have the return with params and id
  // Paths need to get returned in the following way: paths: [{ params: { id: '1' } }, { params: { id: '1' } }],
  // getStaticPaths query checking all challenges and returning a path for each id
};

// <TextField>{challengeData?.attributes?.challenge}</TextField>
