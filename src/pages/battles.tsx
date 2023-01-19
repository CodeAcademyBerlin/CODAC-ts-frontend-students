import { FilterStudentByUserIdDocument } from 'cabServer/queries/__generated__/students';
import { GetMeDocument } from 'cabServer/queries/__generated__/user';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from 'src/contexts/authContext';
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

function Battle() {
  // user: UsersPermissionsMe
  const { user } = useContext(AuthContext);
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

  const vsBattles = data?.vsBattles?.data || null;

  return (
    <div>
      {vsBattles &&
        vsBattles.map((battle, index) => {
          if (battle?.attributes) {
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
