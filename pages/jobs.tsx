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
import { DatabaseSettingsOutline } from "mdi-material-ui";

// ** types
interface Data {
  data?: Object;
  push?: any;
}

type index = number;

// export interface Event {
//   e: Object;
//   target: {
//     value: string;
//   };
// }

const jobs = ({
  result,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [data, setData] = useState(result.data.jobPosts.data);
  const [check, setCheck] = useState(true);
  const allJobs = result.data.jobPosts.data;

  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    // const radios = document.querySelectorAll("Radio");
    // console.log(radios);
    const inputs = document.getElementById("All").defaultChecked;
    const inputForm = document.getElementById("AllForm");
    console.log("FIRST", inputs);
    console.log("FIRSTFORM", inputForm);
    // inputs.setAttribute("checked", "true");
    // inputs?.removeAttribute("checked");
    // inputForm?.removeAttribute("checked");
    console.log("SECOND", inputs);
    console.log("SECONDFORM", inputForm);
    const target = e.target as HTMLButtonElement;
    const value = target.value;
    const result: Data = [];
    allJobs.map((jobEntity: JobPostEntity, i: index) => {
      if (jobEntity.attributes?.fileld?.includes(value) === true) {
        result.push(jobEntity);
      }
    });
    setCheck(false);
    setData(result);
    return data;
  };

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
              value=""
              control={<Radio id="All" />}
              label="All"
              className="All"
              id="AllForm"
              // checked
              // {check ? "checked" : ""}
              // defaultChecked
            />
            {/* {check ? "checked" : ""} */}

            <FormControlLabel
              onClick={(e) => {
                handleClick(e);
              }}
              value="Web_Development"
              control={<Radio />}
              label="Web Development"
              id="radio"
            />
            <FormControlLabel
              onClick={(e) => {
                handleClick(e);
              }}
              value="Data_Science"
              control={<Radio />}
              label="Data Science"
              id="radio"
            />
            <FormControlLabel
              onClick={(e) => {
                handleClick(e);
              }}
              value="Other"
              control={<Radio />}
              label="Other"
              id="radio"
            />
          </RadioGroup>
        </FormControl>
      </div>{" "}
      <br />
      <Grid container spacing={6}>
        {data &&
          data.map((jobEntity: JobPostEntity, i: index) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              {jobEntity.attributes && <JobsCard job={jobEntity.attributes} />}
            </Grid>
          ))}
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
