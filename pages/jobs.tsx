
import client from '../configs/apollo-client'
import { ApolloClient, ApolloLink, useQuery } from '@apollo/client';
import { GET_JOBS } from '../graphql/queries';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Grid from '@mui/material/Grid'
import { useState } from 'react';
import JobsCard from '../components/JobsCard';
import { JobPost, JobPostEntity } from '../graphql/_generated_';
   // ** types

interface Data {data: Object
}

type index = number
export type Event = Object


const jobs = ({ result }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
      // ** State
  const [collapse, setCollapse] = useState<boolean>(false)
    const handleClick = () => {
    setCollapse((current) => !current)
  }  
const jobs = result.data.jobPosts.data
console.log("jobs",jobs)
  return (
      <div>
               <Grid container spacing={6}>
          {result &&
                  jobs.map((jobEntity: JobPostEntity, i: index) => (           
                      <Grid item xs={12} sm={6} md={4} key={i}>
                        { jobEntity.attributes &&  <JobsCard job={jobEntity.attributes} />   }
                          
    
          </Grid>

        ))} 
          </Grid>
      </div>
  )
}

export default jobs


// export async function getServerSideProps() {
//     const data = await client.query({
//         query: GET_JOBS
//     });
//     return {
//       props: { data },   
//     }
//     console.log("data", data)
// }


export const getServerSideProps : GetServerSideProps = async (context) => {
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let graphql = JSON.stringify({
  query: "query getJobs {\n    jobPosts{\n        data{\n            attributes{\n                position\n                company\n                fileld\n                createdAt\n                updatedAt\n                description  \n            }\n        }\n    }\n  }",
  variables: {}
})
let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: graphql,
};
const response = await fetch("https://codac-364707.ey.r.appspot.com/graphql", requestOptions)
const result: Data = await response.json()
    console.log("RESULTS", result)
    
    return {
      props: {result},   
    }

}










