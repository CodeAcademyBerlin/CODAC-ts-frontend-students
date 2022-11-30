import Grid from "@mui/material/Grid";
import ApexChartWrapper from "../@core/styles/libs/react-apexcharts";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { initializeApollo } from "../configs/apollo";
import { GET_ME_QUERY, GET_STUDENTS } from "../graphql/queries";
import { ReactNode } from "react";


interface Props {
  children: ReactNode;
}
// TBD: useFetch correctly, passing props down to ProgressBar component
const Dashboard = ({ children }: Props) => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        {/* <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid> */}
        <p>{children}</p>
      </Grid>
    </ApexChartWrapper>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const client = initializeApollo(null, ctx.req);
    const { data, error } = await client.query({ query: GET_STUDENTS });

    const student = data.students;
    console.log("student in dashboard", student);
    console.log("error in dashboard", error);
    return {
      props: { student },
    };
  } catch (error) {
    return {
      props: { student: null },
    };
  }
};
