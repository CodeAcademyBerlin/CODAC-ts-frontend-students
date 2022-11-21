import Grid from "@mui/material/Grid";
import ApexChartWrapper from "../@core/styles/libs/react-apexcharts";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { initializeApollo } from "../configs/apollo";
import {
  FIND_STUDENT_BY_USER_ID,
  GET_ME_QUERY,
  GET_STUDENTS,
} from "../graphql/queries";
import { ReactNode } from "react";
import ProgressBar from "../components/ProgressBar";
import { useTheme } from "@mui/material";
import { userAgent } from "next/server";
import { gql, useQuery } from "@apollo/client";

interface Props {
  children: ReactNode;
}
// TBD: useFetch correctly + populate user and student, passing props to ProgressBar component

const Dashboard = (
  data: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const myUser = data?.students.data;
  console.log(myUser);
  const theme = useTheme();
  console.log("getServerSideProps:", data);
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          {data && (
            <Typography sx={{ fontStyle: theme.typography.h5 }}>
              Welcome {user.username}
            </Typography>
          )}
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
    const { loading, error, data } = await client.query({
      query: FIND_STUDENT_BY_USER_ID,
      variables: { userId: 4 },
    });
    console.log("QUERY DATA:", data);
    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { data: null },
    };
  }
};
