import React, { useEffect } from "react";
import BattleCard from "../components/battles-page/BattleCard";
import {
  VsBattle,
  VsBattleEntity,
} from "../cabServer/global/__generated__/types";
import { useGetVsBattlesQuery } from "../cabServer/queries/__generated__/battles";
import { GetServerSideProps } from "next";
import { initializeApollo } from "../lib/apolloClient";
import {
  useVoteVsBattleMutation,
  VoteVsBattleDocument,
} from "../cabServer/mutations/__generated__/battles";

type Props = {};

type VsBattles = VsBattle[];

function Battle({}: Props) {
  const { data, loading, error } = useGetVsBattlesQuery();

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
    data;
  }, [mutationData]);

  const vsBattles = data?.vsBattles?.data || [];
  console.log("vsBattles", vsBattles);

  console.log("data,", data);
  return (
    <div>
      {vsBattles &&
        vsBattles.map((battle, index) => {
          if (battle.attributes) {
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
