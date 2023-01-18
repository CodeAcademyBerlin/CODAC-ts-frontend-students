import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import dayjs from 'dayjs';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';
import { useState } from 'react';
import * as React from 'react';

import { JobPostEntity } from '../../cabServer/global/__generated__/types';
import { GetJobsDocument } from '../../cabServer/queries/__generated__/jobs';
import JobsCard from '../components/jobs-page/JobsCard';
import { initializeApollo } from '../lib/apolloClient';

// ** types
interface Data {
  map(arg0: (jobField: any, i: any) => JSX.Element): React.ReactNode;
  data?: Object;
  push: any;
  includes: any;
}

type index = number;

const Jobs = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [result, setResult] = useState(data.jobPosts.data);
  const [check, setCheck] = useState(true);
  const allJobs = data.jobPosts.data;
  const uniqueFields: Data = [];

  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;
    const value = target.value;
    const result: Data = [];
    allJobs.map((jobEntity: JobPostEntity, i: index) => {
      if (jobEntity.attributes?.field?.includes(value)) {
        result.push(jobEntity);
      }
    });
    if (target.value === '') {
      setCheck(!check);
    } else {
      setCheck(false);
    }

    setResult(result);
    return data;
  };

  return (
    <div>
      <div>
        {' '}
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            {allJobs.length >= 1 ? (
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
              <div>No jobs posted</div>
            )}

            {allJobs &&
              allJobs.map((jobEntity: JobPostEntity, i: index) => {
                if (!uniqueFields?.includes(jobEntity.attributes?.field)) {
                  uniqueFields.push(jobEntity.attributes?.field);
                }
              })}
            {uniqueFields &&
              uniqueFields.map((job, i) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    {job && (
                      <FormControlLabel
                        onClick={(e) => {
                          handleClick(e);
                        }}
                        value={job}
                        control={<Radio id="All" />}
                        label={job.replace('_', ' ')}
                        className="All"
                        id="AllForm"
                      />
                    )}
                  </Grid>
                );
              })}
          </RadioGroup>
        </FormControl>
      </div>{' '}
      <br />
      <Grid container spacing={6}>
        {data &&
          result.map((jobEntity: JobPostEntity, i: index) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              {jobEntity.attributes && <JobsCard job={jobEntity.attributes} />}
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Jobs;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const today = new Date().toLocaleDateString();
  const diff = dayjs(today).subtract(90, 'd').toDate();
  try {
    const client = initializeApollo(null, ctx.req);
    const { data, error } = await client.query({
      query: GetJobsDocument,
      variables: { date: diff },
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
