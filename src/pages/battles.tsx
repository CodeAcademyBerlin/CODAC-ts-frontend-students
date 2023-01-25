import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Box, Divider, Tooltip, Zoom } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
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
  const [showChart, setShowChart] = React.useState(false);

  const handleShowChart = () => {
    setShowChart(!showChart);
  };

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

  const [alignment, setAlignment] = React.useState<string | null>('left');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutationData]);

  const vsBattles = data?.vsBattles?.data || null;

  return (
    <div>
      <Tooltip
        title={showChart ? 'Show pie chart' : 'Show pie numbers'}
        TransitionComponent={Zoom}
        placement="top"
        arrow
      >
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          size="small"
          sx={{ marginBottom: '10px' }}
        >
          <ToggleButton
            value="left"
            aria-label="left aligned"
            onClick={handleShowChart}
          >
            <DonutLargeIcon fontSize="small" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Tooltip>
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
                  showChart={showChart}
                />
              </div>
            );
          }
        })}
      <Box>
        <Divider>
          Archive{' '}
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
                    showChart={showChart}
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
