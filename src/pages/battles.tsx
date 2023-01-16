import { FilterStudentByUserIdDocument } from 'cabServer/queries/__generated__/students';
import { GetMeDocument } from 'cabServer/queries/__generated__/user';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';
import React, { useEffect, useState } from 'react';
import { JwtPayloadWithID } from 'src/types';

import {
  UsersPermissionsMe,
  VsBattle,
  VsBattleEntity,
} from '../../cabServer/global/__generated__/types';
import {
  useVoteVsBattleMutation,
  VoteVsBattleDocument,
} from '../../cabServer/mutations/__generated__/battles';
import {
  GetVsBattlesDocument,
  useGetVsBattlesQuery,
} from '../../cabServer/queries/__generated__/battles';
import BattleCard from '../components/battles-page/BattleCard';
import { getToken, initializeApollo } from '../lib/apolloClient';

// type Props = {};

// type VsBattles = VsBattle[];

function Battle(
  // { }: Props, // why was this here?? Agnita
  user: UsersPermissionsMe,
) {
  const { data, loading, error, refetch } = useGetVsBattlesQuery();
  const [voteVsBattleMutation, { data: mutationData, error: mutationError }] =
    useVoteVsBattleMutation();

  const handleVote = (vsBattleId: string, option: number) => {
    voteVsBattleMutation({
      variables: {
        vsBattleId: vsBattleId,
        option: option,
      },
    });
  };

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutationData]);

  const vsBattles = data?.vsBattles?.data || [];

  // console.log('user', user);

  return (
    <div>
      {vsBattles &&
        vsBattles.map((battle, index) => {
          if (battle.attributes) {
            return (
              <div key={index}>
                <BattleCard
                  vsBattle={battle}
                  handleVote={handleVote}
                  user={user}
                />
              </div>
            );
          }
        })}
    </div>
  );
}

export default Battle;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   try {
//     const client = initializeApollo(null, ctx.req);
//     const { data, error } = await client.query({ query: GetVsBattlesDocument });

//     return {
//       props: data,
//     };
//   } catch (error) {
//     return {
//       props: { data: null },
//     };
//   }
// };

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const client = initializeApollo(null, ctx.req);
    const { data, error } = await client.query({ query: GetMeDocument });

    const user = data.me;
    console.log('user', user);
    return {
      props: user,
    };
  } catch (error) {
    return {
      props: { user: null },
    };
  }
};

// can also take user from auth context
