// ** React Imports
// ** MUI Imports
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import {
  Achievement,
  AchievementEntity,
} from 'cabServer/global/__generated__/types';
import { GetAchievementsDocument } from 'cabServer/queries/__generated__/achievements';
// ** Next Imports
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';
import React from 'react';
import { useState } from 'react';

import AchievementTable from '../components/achievements-page/AchievementTable';
import { initializeApollo } from '../lib/apolloClient';

type Props = {};

interface Data {
  map(arg0: (achievementCourse: any, i: any) => JSX.Element): React.ReactNode;
  data?: Object;
  push: any;
  includes: any;
}

type index = number;

type allAchievements = Achievement[];

const Achievements = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [result, setResult] = useState(data.achievements.data);
  const [check, setCheck] = useState(true);
  const allAchievements = data?.achievements?.data;
  const uniqueFields: Data = [];

  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;
    const value = target.value;
    const result: Data = [];
    allAchievements.map((achievementEntity: AchievementEntity, i: index) => {
      if (
        achievementEntity?.attributes?.course?.data?.attributes?.name &&
        achievementEntity?.attributes?.course?.data?.attributes?.name.includes(
          value,
        )
      ) {
        result.push(achievementEntity);
      }
    });
    if (target.value === '') {
      setCheck(!check);
    } else {
      setCheck(false);
    }
    setResult(result);
    console.log('result', result);
    return data;
  };

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
              {allAchievements.length >= 1 ? (
                <div>
                  {' '}
                  <FormControlLabel
                    onClick={(e) => {
                      handleClick(e);
                    }}
                    value=""
                    control={<Radio id="All" />}
                    label="All"
                    className="All"
                    id="AllForm"
                    checked={check}
                  />
                </div>
              ) : (
                <div></div>
              )}

              {allAchievements &&
                allAchievements.map(
                  (achievementEntity: AchievementEntity, i: index) => {
                    if (
                      !uniqueFields?.includes(
                        achievementEntity?.attributes?.course?.data?.attributes
                          ?.name,
                      )
                    ) {
                      uniqueFields.push(
                        achievementEntity?.attributes?.course?.data?.attributes
                          ?.name,
                      );
                    }
                  },
                )}

              {uniqueFields &&
                uniqueFields.map((course, i) => {
                  return (
                    <div key={i}>
                      <Grid item xs={12} sm={6} md={4}>
                        {course && (
                          <FormControlLabel
                            onClick={(e) => {
                              handleClick(e);
                            }}
                            value={course}
                            control={<Radio id="All" />}
                            label={course.replace('_', ' ')}
                            className="All"
                            id="AllForm"
                          />
                        )}
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
          {/* {data &&
                        result.map((achievementEntity: AchievementEntity, i: index) => (
                            <Grid item xs={12} sm={6} md={4} key={i}>
                                {achievementEntity.attributes && <AchievementTable allAchievements={allAchievements} />}
                            </Grid>
                        ))} */}
          {allAchievements && <AchievementTable allAchievements={result} />}
        </Box>
        {/* {allAchievements &&
                    allAchievements.map((achievementEntity: AchievementEntity, i: index) => (
                        <Box key={i}>
                            {achievementEntity.attributes && <AchievementTable achievement={achievementEntity.attributes} />}
                        </Box>
                    ))} */}
      </Box>
    </div>
  );
};

export default Achievements;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const client = initializeApollo(null, ctx.req);
    const { data, error } = await client.query({
      query: GetAchievementsDocument,
    });
    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { data: null },
    };
  }
};
