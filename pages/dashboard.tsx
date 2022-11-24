import Grid from "@mui/material/Grid";
import ApexChartWrapper from "../@core/styles/libs/react-apexcharts";
import { Typography, useTheme } from "@mui/material";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getToken, initializeApollo } from "../configs/apollo";
import { FIND_STUDENT_BY_USER_ID } from "../graphql/queries";
import { Student } from "../graphql/_generated_";
import jwt_decode, { JwtPayload } from "jwt-decode";
import ProgressBar from "../components/ProgressBar";
import CohortCard from "../components/CohortCard";
// TBD: useFetch correctly + populate user and student

const Dashboard = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data);
  const theme = useTheme();
  const myStudent: Student = data.students.data[0].attributes;
  console.log("Data received in Dashboard:", myStudent);
  return myStudent ? (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <Typography sx={{ fontStyle: theme.typography.h5 }}>
            Welcome {myStudent.firstname}, Member of{" "}
            {myStudent.cohort?.data?.attributes?.name}
          </Typography>
          <ProgressBar student={myStudent} />
          <CohortCard cohort={myStudent.cohort?.data?.attributes} />
          {/* {user.role.name === "Student" && <ProgressBar />} */}
        </Grid>
      </Grid>
    </ApexChartWrapper>
  ) : null;
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const client = initializeApollo(null, ctx.req);
    const token = getToken(ctx.req);
    const decodedToken: JwtPayload = await jwt_decode(token);
    console.log("token in getServerSideProps:", decodedToken);
    const { data } = await client.query({
      query: FIND_STUDENT_BY_USER_ID,
      variables: { userId: decodedToken.id },
    });
    console.log("data in getServerSideProps:", data);
    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: null,
      },
    };
  }
};
