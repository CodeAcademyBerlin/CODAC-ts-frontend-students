import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import dayjs from 'dayjs';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next/types';
import { useMemo, useState } from 'react';
import * as React from 'react';

import { JobPostEntity } from '../../cabServer/global/__generated__/types';
import {
  GetJobsDocument,
  GetJobsQuery,
} from '../../cabServer/queries/__generated__/jobs';
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
  jobPosts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [result, setResult] = useState(jobPosts.data);
  const [check, setCheck] = useState(true);
  const allJobs = jobPosts.data;
  const [filterValue, setFilter] = useState('All');

  const uniqueFields = useMemo(
    () =>
      allJobs.reduce(
        (unique: string[], item) =>
          unique.includes(item.attributes?.field!)
            ? unique
            : [...unique, item.attributes?.field!],
        ['All'],
      ),
    [allJobs],
  );

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
            {uniqueFields &&
              uniqueFields.map((job, i) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    {job && (
                      <FormControlLabel
                        onClick={() => setFilter(job)}
                        value={job}
                        control={<Radio id={job} />}
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
        {allJobs
          .filter(
            (job) =>
              job.attributes?.field === filterValue || filterValue === 'All',
          )
          .map((jobEntity: JobPostEntity, i: index) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              {jobEntity.attributes && <JobsCard job={jobEntity.attributes} />}
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Jobs;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const today = new Date().toLocaleDateString();
  const diff = dayjs(today).subtract(90, 'd').toDate();
  try {
    const client = initializeApollo(null, ctx.req);
    const { data, error } = await client.query<GetJobsQuery>({
      query: GetJobsDocument,
      variables: { date: diff },
    });
    const { jobPosts } = data;
    if (error || !jobPosts) {
      return {
        notFound: true,
      };
    } else
      return {
        props: { jobPosts },
      };
  } catch (error) {
    console.log('error', error);
    return {
      notFound: true,
    };
  }
};
