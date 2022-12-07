import React from 'react'
import { BrandText } from '../components/common/BrandStyle'
import { GetCohortsDocument } from '../graphql/queries/__generated__/cohorts';
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { initializeApollo } from "../lib/apolloClient";
import { CohortEntity } from "../graphql/global/ __generated__/types";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { ArrowDown, Box } from 'mdi-material-ui';
import { styled } from '@mui/material/styles'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const CohortContent = styled('div')`
  display: flex;
  align-items: center;
  gap: 1em;

  ${'img'} {
    width: 50px;
    height: 50px;
  }
  ${'p'} {
    margin: 0;
  }
  ${'h4'} {
    margin: 0;
  }
`
export const StudentContent = styled('div')`
  display: grid;
  grid-template-columns: 5% 60% 20% 10%;
  padding: 0.5em 0;
  align-items: center;
  border-top: solid 1px ${({ theme }) => theme.palette.divider};

  &:hover {
    background-color: ${({ theme }) => theme.palette.action.hover};
    cursor: pointer;
  }

  ${'p'} {
    margin: 0;
  }
  ${'img'} {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 1em;
  }
`

function community({ cohorts }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(cohorts);
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };



  return (
    <>
      {/* <BrandText variant='h3' sx={{ fontSize: 80 }}>Codacommunity</BrandText> */}
      <h1>CodaCommunity</h1>

      <h4>Mentors</h4>

      { cohorts && <>
        <h4>Active Cohorts</h4>
        { cohorts.map((cohort:CohortEntity, i:Number) => {
          return cohort.attributes ? 
          <Accordion expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
            <AccordionSummary key={ cohort.attributes.name }
              expandIcon={ <ArrowDown /> }
              aria-controls={`panel${i}bh-content`}
              id={`panel${i}bh-header`}>
              <CohortContent>
                <img src={ cohort.attributes.logo?.data?.attributes?.url || "assets/logo.png" } alt={ cohort.attributes.name || "Cohort" } />
                <div>
                  <h4>{ cohort.attributes.name }</h4>
                  <p>start date: { cohort.attributes.start_date }</p>
                </div>
              </CohortContent>
            </AccordionSummary> 
            <AccordionDetails>
              { cohort.attributes.students && cohort.attributes.students.data.map((student) => {
                return <StudentContent>
                  <img src={ student.attributes?.avatar?.data?.attributes?.url || "assets/logo.png" } alt={ student.attributes?.firstname + " " + student.attributes?.lastname || "Student"}/>
                  <p>{ student.attributes?.firstname }  { student.attributes?.lastname }</p>
                  <p>Graduates: { student.attributes?.end_date }</p>
                  <p style={{ textAlign: "right" }}>{ student.attributes?.main_course?.data?.attributes?.name }</p>
                </StudentContent>
              }) }
            </AccordionDetails>
          </Accordion>
          : null
        }) }
      </> }

      <h4>Alumni</h4>

    </>
  )
}

export default community

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const client = initializeApollo(null, ctx.req);
    const { data } = await client.query({ query: GetCohortsDocument });
    return {
      props: {
        cohorts: data.cohorts.data,
      }
    }
  } catch (err) {
    console.log("error: ", err);
    return {
      props: {
        cohorts: null,
      }
    }
  }
  
}