import { GET_JOBS } from "../graphql/queries";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import JobsCard from "../components/JobsCard";
import { JobPostEntity } from "../graphql/_generated_";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { initializeApollo } from "../configs/apollo";
import dayjs from "dayjs";

// ** types
interface Data {
  map(arg0: (jobField: any, i: any) => JSX.Element): React.ReactNode;
  data?: Object;
  push: any;
  includes: any;
}

type index = number;

const jobs = ({
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
      if (jobEntity.attributes?.fileld?.includes(value)) {
        result.push(jobEntity);
      }
    });
    if (target.value === "") {
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
        {" "}
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            {allJobs.length >= 1 ? (
              <div>
                {" "}
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
                if (!uniqueFields?.includes(jobEntity.attributes?.fileld)) {
                  uniqueFields.push(jobEntity.attributes?.fileld);
                }
              })}
            {uniqueFields &&
              uniqueFields.map((job, i) => {
                return (
                  <div>
                    <Grid item xs={12} sm={6} md={4} key={i}>
                      {job && (
                        <FormControlLabel
                          onClick={(e) => {
                            handleClick(e);
                          }}
                          value={job}
                          control={<Radio id="All" />}
                          label={job.replace("_", " ")}
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
      </div>{" "}
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

export default jobs;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const today = new Date().toLocaleDateString();
  const diff = dayjs(today).subtract(90, "d").toDate();
  try {
    const client = initializeApollo(null, ctx.req);
    const { data, error } = await client.query({
      query: GET_JOBS,
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
