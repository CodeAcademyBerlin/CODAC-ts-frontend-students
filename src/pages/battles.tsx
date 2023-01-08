import React from 'react';

import {
  VsBattle,
  VsBattleEntity,
} from '../../cabServer/global/__generated__/types';
import { useGetVsBattlesQuery } from '../../cabServer/queries/__generated__/battles';
import BattleCard from '../components/battles-page/BattleCard';

type Props = {};

type VsBattles = VsBattle[];

function Battle({}: Props) {
  const { data, loading, error } = useGetVsBattlesQuery();
  const vsBattles = data?.vsBattles?.data || [];
  return (
    <div>
      {vsBattles &&
        vsBattles.map((battle) => {
          if (battle.attributes) {
            return (
              <>
                <BattleCard vsBattle={battle.attributes} />
              </>
            );
          }
        })}
    </div>
  );
}

export default Battle;
