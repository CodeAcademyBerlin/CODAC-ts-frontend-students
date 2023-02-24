import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import {
  GetAchievementsDocument,
  GetAchievementsQuery,
} from 'cabServer/queries/__generated__/achievements';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next/types';
import React, { useMemo } from 'react';
import { useState } from 'react';

import AchievementTable from '../components/achievements-page/AchievementTable';
import { initializeApollo } from '../lib/apolloClient';

const Achievements = ({
  achievements,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [filterValue, setFilter] = useState('All');
  const allAchievements = achievements.data;

  const uniqueFields = useMemo(
    () =>
      allAchievements.reduce(
        (unique: string[], item) =>
          unique.includes(item.attributes?.course?.data?.attributes?.name!)
            ? unique
            : [...unique, item.attributes?.course?.data?.attributes?.name!],
        ['All'],
      ),
    [allAchievements],
  );
  return (
    <div>
      <Box>
        <Typography mb={2} variant="h5">
          📃 Achievement List 📃
        </Typography>
        <div>
          {' '}
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              {uniqueFields &&
                uniqueFields.map((tag, i) => {
                  return (
                    <div key={i}>
                      <Grid item xs={12} sm={6} md={4}>
                        <FormControlLabel
                          onClick={(e) => setFilter(tag)}
                          value={tag}
                          control={<Radio id={tag} />}
                          label={tag.replace('_', ' ')}
                          id="AllForm"
                        />
                      </Grid>
                    </div>
                  );
                })}
            </RadioGroup>
          </FormControl>
          <Box mb={4}>
            <Typography mt={2} variant="h6">
              Achievement Types
            </Typography>
            Every Student 🏅<br></br>
            Additional 💫
          </Box>
        </div>
        <Box>
          {allAchievements && (
            <AchievementTable
              allAchievements={allAchievements.filter(
                (achievement) =>
                  achievement.attributes?.course?.data?.attributes?.name! ===
                    filterValue || filterValue === 'All',
              )}
            />
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Achievements;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const client = initializeApollo(null, ctx.req);
    const { data, error } = await client.query<GetAchievementsQuery>({
      query: GetAchievementsDocument,
    });
    const { achievements } = data;
    if (error || !achievements) {
      return {
        notFound: true,
      };
    } else
      return {
        props: { achievements },
      };
  } catch (error) {
    console.log('error', error);
    return {
      notFound: true,
    };
  }
};
