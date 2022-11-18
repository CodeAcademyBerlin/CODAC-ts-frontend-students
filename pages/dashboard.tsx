import Grid from "@mui/material/Grid";
import ApexChartWrapper from "../@core/styles/libs/react-apexcharts";
import {
  GetServerSideProps,
  GetServerSidePropsResult,
  InferGetServerSidePropsType,
} from "next";
import { initializeApollo } from "../configs/apollo";
import {
  FIND_STUDENT_BY_USERID,
  GET_ME_QUERY,
  GET_STUDENTS,
} from "../graphql/queries";
import { ReactNode } from "react";
import ProgressBar from "../components/ProgressBar";
import { Container, Typography, useTheme } from "@mui/material";
import { userAgent } from "next/server";

interface Props {
  children: ReactNode;
}
// TBD: useFetch correctly + populate user and student, passing props to ProgressBar component

const Dashboard = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const theme = useTheme();
  console.log(data);
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          {/* {data && (
            <Typography sx={{ fontStyle: theme.typography.h5 }}>
              Welcome {user.username}
            </Typography>
          )} */}
          {/* {user.role.name === "Student" && <ProgressBar />} */}
          <p>hello world</p>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const client = initializeApollo(null, ctx.req);
    const { data, error } = await client.query({
      query: FIND_STUDENT_BY_USERID,
      variables: { filter: { user: { id: { eq: 4 } } } },
    });
    console.log("FIND_STUDENT_BY_USERID query", data);
    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { data: null },
    };
  }
};
