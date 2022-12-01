import Grid from "@mui/material/Grid";
import ApexChartWrapper from "../@core/styles/libs/react-apexcharts";
import { Divider, Typography, useTheme } from "@mui/material";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getToken, initializeApollo } from "../configs/apollo";
import { FIND_STUDENT_BY_USER_ID } from "../graphql/queries";
import { Student } from "../graphql/_generated_";
import jwt_decode, { JwtPayload } from "jwt-decode";
import ProgressBar from "../components/ProgressBar";
import CohortCard from "../components/CohortCard";

// TBD: Handle hydration errors


interface JwtPayloadWithID extends JwtPayload {
  id: number
}

const Dashboard = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data);
  const theme = useTheme();
  const myStudent: Student = data && data.students.data[0].attributes;
  console.log("Data received in Dashboard:", myStudent);
  if (myStudent)
    return (
      <ApexChartWrapper>
        <Grid container spacing={6}>
          <Grid item>
            {myStudent.main_course?.data?.attributes?.name && (
              <Typography
                sx={{
                  fontStyle: theme.typography.h4,
                  fontWeight: theme.typography.fontWeightBold,
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                Welcome {myStudent.firstname}, future{" "}
                {myStudent.main_course?.data?.attributes?.name === "data3" &&
                  "Data Scientist"}
                {myStudent.main_course?.data?.attributes?.name === "webdev" &&
                  "Web Developer"}{" "}
                <span role="img" aria-label="rocket">
                  🚀
                </span>
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} md={8} lg={6}>
            <ProgressBar student={myStudent} />
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            {myStudent?.cohort?.data?.attributes && <CohortCard cohort={myStudent.cohort.data.attributes} />}
          </Grid>

          {/* {user.role.name === "Student" && <ProgressBar />} */}
        </Grid>
      </ApexChartWrapper>
    );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const client = initializeApollo(null, ctx.req);
    const token = getToken(ctx.req);
    const decodedToken: JwtPayloadWithID = await jwt_decode(token);
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
