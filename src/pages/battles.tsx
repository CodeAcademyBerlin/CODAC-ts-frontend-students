import { Box, Divider } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import React, { useContext, useEffect, useState } from 'react';
import ExpandButton from 'src/components/common/ExpandButton';
import { AuthContext } from 'src/contexts/authContext';

import {
  UsersPermissionsMe,
  VsBattle,
  VsBattleEntity,
} from '../../cabServer/global/__generated__/types';
import { useVoteVsBattleMutation } from '../../cabServer/mutations/__generated__/battles';
import { useGetVsBattlesQuery } from '../../cabServer/queries/__generated__/battles';
import BattleCard from '../components/battles-page/BattleCard';

function Battle() {
  // user: UsersPermissionsMe
  const { user } = useContext(AuthContext);
  const { data, loading, error, refetch } = useGetVsBattlesQuery();
  const [voteVsBattleMutation, { data: mutationData, error: mutationError }] =
    useVoteVsBattleMutation();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
          if (battle?.attributes?.archived === false) {
            console.log('battle', battle);
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
      <Box>
        <Divider>
          Archived{' '}
          <ExpandButton
            onClick={handleExpandClick}
            expand={expanded}
          ></ExpandButton>
        </Divider>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {vsBattles &&
          vsBattles.map((battle, index) => {
            if (battle?.attributes?.archived === true) {
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
      </Collapse>
    </div>
  );
}

export default Battle;
