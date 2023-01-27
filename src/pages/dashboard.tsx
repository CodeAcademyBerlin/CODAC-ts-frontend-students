// <<<<<<< HEAD:src/pages/dashboard.tsx
// import { Divider, Typography, useTheme } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import { Student } from 'cabServer/global/__generated__/types';
// import { FilterStudentByUserIdDocument } from 'cabServer/queries/__generated__/students';
// import jwt_decode, { JwtPayload } from 'jwt-decode';
// import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';
// import { JwtPayloadWithID } from 'src/types';

// import CohortCard from '../components/cohort/CohortCard';
// import OpenAiImage from '../components/common/OpenAiImage';
// import ProgressBar from '../components/dashboard/ProgressBar';
// import ApexChartWrapper from '../components/libs/react-apexcharts';
// import { getToken, initializeApollo } from '../lib/apolloClient';

// // TBD: Handle hydration errors

// const Dashboard = ({
//   data,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
//   console.log(data);
//   const theme = useTheme();
//   const myStudent: Student = data && data.students.data[0].attributes;
//   if (myStudent)
//     return (
//       <ApexChartWrapper>
//         <Grid container spacing={6}>
//           <Grid item xs={12}>
//             {myStudent.main_course?.data?.attributes?.name && (
//               <Typography
//                 sx={{
//                   fontStyle: theme.typography.h4,
//                   fontWeight: theme.typography.fontWeightBold,
//                   fontFamily: theme.typography.fontFamily,
//                 }}
//               >
//                 Welcome {myStudent.firstname}, future{' '}
//                 {myStudent.main_course?.data?.attributes?.name === 'data3' &&
//                   'Data Scientist'}
//                 {myStudent.main_course?.data?.attributes?.name === 'webdev' &&
//                   'Web Developer'}{' '}
//                 <span role="img" aria-label="rocket">
//                   🚀
//                 </span>
//               </Typography>
//             )}
//           </Grid>
//           <Grid item xs={12}>
//             <ProgressBar student={myStudent} />
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             {myStudent?.cohort?.data?.attributes && (
//               <CohortCard cohort={myStudent.cohort.data.attributes} />
//             )}
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <OpenAiImage />
//           </Grid>

//           {/* {user.role.name === "Student" && <ProgressBar />} */}
//         </Grid>
//       </ApexChartWrapper>
//     );
// };

// export default Dashboard;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   try {
//     const client = initializeApollo(null, ctx.req);
//     const token = getToken(ctx.req);
//     const decodedToken: JwtPayloadWithID = await jwt_decode(token);
//     console.log('token in getServerSideProps:', decodedToken);
//     const { data } = await client.query({
//       query: FilterStudentByUserIdDocument,
//       variables: { userId: decodedToken.id },
//     });
//     return {
//       props: { data },
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       props: {
//         data: null,
//       },
//     };
//   }
// };
// =======
import { Divider, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import {
  Achievement,
  AchievementEntity,
  ComponentAchievementAchievement,
  Student,
} from 'cabServer/global/__generated__/types';
import { FilterStudentByUserIdDocument } from 'cabServer/queries/__generated__/students';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';

import Achievements from '../components/achievements-page/Achievements';
import AchievementsComponent from '../components/achievements-page/AchievementsComponent';
import CohortCard from '../components/cohort/CohortCard';
import OpenAiImage from '../components/common/OpenAiImage';
import ProgressBar from '../components/dashboard/ProgressBar';
import ApexChartWrapper from '../components/libs/react-apexcharts/wrapper';
import { getToken, initializeApollo } from '../lib/apolloClient';
import { JwtPayloadWithID } from '../types';

// TBD: Handle hydration errors

const Dashboard = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data);
  const theme = useTheme();
  const myStudent: Student = data && data.students.data[0].attributes;
  console.log('myStudent', myStudent);
  const achievements = (myStudent && myStudent?.achievements) || null;
  console.log('achievements', achievements);
  if (myStudent && achievements)
    return (
      <ApexChartWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            {myStudent.main_course?.data?.attributes?.name && (
              <Typography
                sx={{
                  fontStyle: theme.typography.h4,
                  fontWeight: theme.typography.fontWeightBold,
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                Welcome {myStudent?.user?.data?.attributes?.firstname}, future{' '}
                {myStudent.main_course?.data?.attributes?.name === 'data3' &&
                  'Data Scientist'}
                {myStudent.main_course?.data?.attributes?.name === 'webdev' &&
                  'Web Developer'}{' '}
                <span role="img" aria-label="rocket">
                  🚀
                </span>
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <ProgressBar student={myStudent} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            {myStudent?.cohort?.data?.attributes && (
              <CohortCard cohort={myStudent.cohort.data.attributes} />
            )}
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            {/* <OpenAiImage /> */}

            {achievements && (
              <AchievementsComponent achievements={achievements} />
            )}
            {/* <Achievements student={myStudent} achievements={achievements} /> */}
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
    console.log('token in getServerSideProps:', decodedToken);
    const { data } = await client.query({
      query: FilterStudentByUserIdDocument,
      variables: { userId: decodedToken.id },
    });
    console.log('data in getServerSideProps:', data);
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
// >>>>>>> achievements:pages/dashboard.tsx
