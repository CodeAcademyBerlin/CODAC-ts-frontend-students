import React from 'react'
import { BrandText } from '../components/common/BrandStyle'
import { useGetCohortsQuery } from '../graphql/queries/__generated__/cohorts';

function community() {
  const { data, loading, error } = useGetCohortsQuery();
  console.log("cohorts: ", data?.cohorts?.data);
  console.log("error: ", error);

  return (
    <>
      <BrandText variant='h3' sx={{ fontSize: 80 }}>Community</BrandText>
      <h1>Cohorts</h1>

    </>
  )
}

export default community