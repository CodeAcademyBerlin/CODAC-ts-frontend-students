import Grid from "@mui/material/Grid";
import ApexChartWrapper from "../@core/styles/libs/react-apexcharts";
import { Typography, useTheme } from "@mui/material";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { initializeApollo } from "../configs/apollo";
import { FIND_STUDENT_BY_USER_ID } from "../graphql/queries";
import { Student } from "../graphql/_generated_";
import { ReactNode, useContext } from "react";
import ProgressBar from "../components/ProgressBar";
import { userAgent } from "next/server";
interface Props {
  children: ReactNode;
}
// TBD: useFetch correctly + populate user and student

const Dashboard = (
  data: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const theme = useTheme();
  const myStudent: Student = data.data.students?.data[0].attributes;
  console.log("myStudent", myStudent);
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          {data && (
            <>
              <Typography sx={{ fontStyle: theme.typography.h5 }}>
                Welcome {myStudent.firstname}
              </Typography>
              <ProgressBar student={myStudent} />
            </>
          )}
          {/* {user.role.name === "Student" && <ProgressBar />} */}
        </Grid>
      </Grid>
    </ApexChartWrapper>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  //console.log("Query?", ctx.query);
  try {
    const client = initializeApollo(null, ctx.req);
    const { loading, error, data } = await client.query({
      query: FIND_STUDENT_BY_USER_ID,
      variables: { userId: 4 },
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
