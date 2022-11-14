import client from "../configs/apollo-client";
import { ApolloClient, ApolloLink, useQuery } from "@apollo/client";
import { GET_JOBS } from "../graphql/queries";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import JobsCard from "../components/JobsCard";
import { JobPost, JobPostEntity } from "../graphql/_generated_";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// ** types

interface Data {
  data?: Object;
  push?: any;
}

type index = number;

// export interface Event {
//   e: Object;
// }

const jobs = ({
  result,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // ** State
  const [data, setData] = useState(result);

  const handleClick = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = e.target.value;
    const result: Data = [];
    jobs.map((jobEntity: JobPostEntity, i: index) => {
      if (jobEntity.attributes?.fileld?.includes(value) === true) {
        result.push(jobEntity);
      }
    });
    setData(result);
    console.log(data);
    return data;
    // const filtered = jobs.includes(e.target.value);
    // console.log(filtered);
  };

  console.log(data);
  const jobs = result.data.jobPosts.data;

  return (
    <div>
      <div>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              onClick={(e) => {
                handleClick(e);
              }}
              value="All"
              control={<Radio />}
              label="All"
            />
            <FormControlLabel
              onClick={(e) => {
                handleClick(e);
              }}
              value="Web_Development"
              control={<Radio />}
              label="Web Development"
            />
            <FormControlLabel
              onClick={(e) => {
                handleClick(e);
              }}
              value="Data_Science"
              control={<Radio />}
              label="Data Science"
            />
            <FormControlLabel
              onClick={(e) => {
                handleClick(e);
              }}
              value="Other"
              control={<Radio />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>
      </div>{" "}
      <br />
      <Grid container spacing={6}>
        {data &&
          result.data.jobPosts.data.map(
            (jobEntity: JobPostEntity, i: index) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                {jobEntity.attributes && (
                  <JobsCard job={jobEntity.attributes} />
                )}
              </Grid>
            )
          )}
      </Grid>
    </div>
  );
};

export default jobs;

// export async function getServerSideProps() {
//     const data = await client.query({
//         query: GET_JOBS
//     });
//     return {
//       props: { data },
//     }
//     console.log("data", data)
// }

export const getServerSideProps: GetServerSideProps = async (context) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let graphql = JSON.stringify({
    query:
      "query filterJobs ($filter: JobPostFiltersInput) {\n    jobPosts (filters: $filter) {\n        data {\n            attributes{\n                url\n                position\n                company\n                fileld \n                createdAt\n                updatedAt\n                description \n                \n            }\n        }\n    }\n  }",
    //   variables: {"filter":{"fileld":{"eq":`IT`}}}
  });
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: graphql,
  };
  const response = await fetch(
    "https://codac-364707.ey.r.appspot.com/graphql",
    requestOptions
  );
  const result: Data = await response.json();
  return {
    props: { result },
  };
};
