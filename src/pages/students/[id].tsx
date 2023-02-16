import { Avatar, Box, Container, Typography, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import { Student } from 'cabServer/global/__generated__/types';
import { FilterStudentByUserIdDocument } from 'cabServer/queries/__generated__/students';
import { GetServerSideProps } from 'next/types';
import { initializeApollo } from 'src/lib/apolloClient';

const Students = (data: any) => {
  const theme = useTheme();

  const studentProfile: Student = data && data.student.attributes;
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
            <p>Course: {studentProfile?.main_course?.data?.attributes?.name}</p>
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
};
export default Students;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const client = initializeApollo(null, ctx.req);
    const id = ctx.params?.id;
    console.log('ctxparams', ctx.params);
    const { data } = await client.query({
      query: FilterStudentByUserIdDocument,
      variables: { userId: id },
    });
    const student = data.students.data[0];
    return {
      props: { student },
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
