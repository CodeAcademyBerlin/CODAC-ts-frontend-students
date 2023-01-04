import React from 'react'
import BattleCard from '../components/battles-page/BattleCard';
import { VsBattle, VsBattleEntity } from '../../cabServer/global/__generated__/types';
import { useGetVsBattlesQuery } from '../../cabServer/queries/__generated__/battles';

type Props = {}

type VsBattles = VsBattle[]

function Battle({ }: Props) {
  const { data, loading, error } = useGetVsBattlesQuery();
  const vsBattles = data?.vsBattles?.data || []
  console.log('vsBattles', vsBattles)

  console.log('data,', data,)
  return (
    <div>{vsBattles && vsBattles.map(battle => {
      if (battle.attributes) {
        return <>

          <BattleCard vsBattle={battle.attributes} />


        </>
      }

    })

    }</div>
  )
}

export default Battle