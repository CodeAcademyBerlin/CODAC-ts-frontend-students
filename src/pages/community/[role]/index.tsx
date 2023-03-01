import { Avatar, Box, Container, Typography, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import {
  MentorEntity,
  StudentEntity,
} from 'cabServer/global/__generated__/types';
import { MentorsDocument } from 'cabServer/queries/__generated__/mentors';
import { AllStudentsDocument } from 'cabServer/queries/__generated__/students';
import { GetServerSideProps } from 'next/types';
import NextBreadcrumbs from 'src/components/breadcrumb/NextBreadcrumbs';
import { initializeApollo } from 'src/lib/apolloClient';

const Students = ({ data }: { data: MentorEntity[] | StudentEntity[] }) => {
  console.log('data :>> ', data[0].__typename);
  console.log('typeof data :>> ', typeof data);
  const theme = useTheme();
  if (data[0].__typename === 'StudentEntity') {
    const studentProfile = data && data[0]?.attributes;
    console.log('studentProfile', studentProfile);
    return (
      <Container
        sx={{
          height: { xs: '260px', sm: 'auto' },
        }}
      >
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: '100vh',
            backgroundColor: 'white',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirections: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{ width: '160px', height: '160px' }}
              src={
                studentProfile?.user?.data?.attributes?.avatar?.data?.attributes
                  ?.url
              }
            />

            <Box>
              <Typography
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  fontStyle: theme.typography.h4,
                }}
              >
                {studentProfile?.user?.data?.attributes?.firstname}
              </Typography>
              <Typography
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  fontStyle: theme.typography.h4,
                }}
              >
                {studentProfile?.user?.data?.attributes?.lastname}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirections: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  fontStyle: theme.typography.h4,
                }}
              >
                Bootcamp Details
              </Typography>
              <p>Cohort: {studentProfile?.cohort?.data?.attributes?.name}</p>
              <p>
                Course: {studentProfile?.main_course?.data?.attributes?.name}
              </p>
              <p>Start date: {studentProfile?.start_date}</p>
              <p>End date: {studentProfile?.end_date}</p>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  fontStyle: theme.typography.h4,
                }}
              >
                Contact Details
              </Typography>
              <p>Email: {studentProfile?.user?.data?.attributes?.email}</p>
              <p>Github: {studentProfile?.github || 'https://github.com'} </p>

              <p>
                Linkedin: {studentProfile?.linkedin || 'https://linkedin.com'}
              </p>
            </Box>
          </Box>
        </Card>
      </Container>
    );
  } else {
    const mentorProfile = data && data[0]?.attributes;
    console.log('mentorProfile :>> ', mentorProfile);
    return (
      <Container
        sx={{
          height: { xs: '260px', sm: 'auto' },
        }}
      >
        <NextBreadcrumbs />
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: '100vh',
            backgroundColor: 'white',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirections: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{ width: '160px', height: '160px' }}
              src={
                mentorProfile?.user?.data?.attributes?.avatar?.data?.attributes
                  ?.url
              }
              alt=""
              sizes="width: 100%, height: 100%"
            />{' '}
            <Box>
              <Typography
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  fontStyle: theme.typography.h4,
                }}
              >
                {mentorProfile?.user?.data?.attributes?.firstname}
              </Typography>
              <Typography
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  fontStyle: theme.typography.h4,
                }}
              >
                {mentorProfile?.user?.data?.attributes?.lastname}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirections: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            {/* <Box sx={{}}>
              <Typography
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  fontStyle: theme.typography.h4,
                }}
              >
                Courses
              </Typography>
              <p>
                Course: {mentorProfile?.courses?.data[0]?.attributes?.name}{' '}
              </p>
              <p>
                About course:
                {mentorProfile?.courses?.data[0]?.attributes?.description}
              </p>
            </Box> */}
            <Box
              sx={{
                height: '24%',
              }}
            >
              <Typography
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  fontStyle: theme.typography.h4,
                }}
              >
                Contact Details
              </Typography>
              <p>Email: {mentorProfile?.user?.data?.attributes?.email}</p>
              <p>Github: {mentorProfile?.github || 'https://github.com'}</p>
              <p>
                Linkedin: {mentorProfile?.linkedin || 'https://linkedin.com'}
              </p>
            </Box>
          </Box>
        </Card>
      </Container>
    );
  }
};

export default Students;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const client = initializeApollo(null, ctx.req);

  const role = ['mentors', 'students'];
  if (ctx?.params?.role === role[0]) {
    try {
      console.log('id :>> ', ctx?.params);
      console.log('ctx :>> ', ctx);
      console.log('ctx.query :>> ', ctx?.query);
      console.log('mentorctxparams', ctx?.params?.id);
      const { data } = await client.query({
        query: MentorsDocument,
      });
      const mentors = data.mentors.data;
      console.log('data :>> ', data);
      return {
        props: { data: mentors },
      };
    } catch (error) {
      console.log(error);
      return {
        props: {
          data: null,
        },
      };
    }
  } else if (ctx?.params?.role === role[1]) {
    try {
      const client = initializeApollo(null, ctx.req);
      console.log('ctxparams', ctx.params);
      const { data } = await client.query({
        query: AllStudentsDocument,
      });
      const students = data.students.data;
      return {
        props: { data: students },
      };
    } catch (error) {
      console.log(error);
      return {
        props: {
          data: null,
        },
      };
    }
  } else {
    return {
      notFound: true,
    };
  }
};
