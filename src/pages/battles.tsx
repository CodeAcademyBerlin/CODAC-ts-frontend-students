import {
  VsBattleEntity,
  VsBattleEntityResponseCollection,
} from 'cabServer/global/__generated__/types';
import { GetServerSideProps } from 'next/types';
import React, { useEffect, useState } from 'react';

import {
  useVoteVsBattleMutation,
  VoteVsBattleDocument,
} from '../../cabServer/mutations/__generated__/battles';
import { useGetVsBattlesQuery } from '../../cabServer/queries/__generated__/battles';
import BattleCard from '../components/battles-page/BattleCard';
import { initializeApollo } from '../lib/apolloClient';

type Props = {};

function Battle({}: Props) {
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

  const vsBattles: VsBattleEntity[] | null = data?.vsBattles?.data || null;

  return (
    <div>
      {vsBattles &&
        vsBattles.map((battle, index) => {
          if (battle?.attributes) {
            return (
              <div key={index}>
                <BattleCard vsBattle={battle} handleVote={handleVote} />
              </div>
            );
          }
        })}
    </div>
  );
}

export default Battle;
