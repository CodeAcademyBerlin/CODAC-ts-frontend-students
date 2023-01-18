import { Avatar, Box, Container, Typography, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import { Student } from 'cabServer/global/__generated__/types';
import { FilterStudentByUserIdDocument } from 'cabServer/queries/__generated__/students';
import Image from 'next/image';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';

import logo from '../../public/assets/logo.png';
import { initializeApollo } from '../lib/apolloClient';

const Studentprofile = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const theme = useTheme();
  const studentProfile: Student = data && data.students.data[0].attributes;

  console.log('studentprofile', data);

  return (
    <Container>
      <Card
        sx={{
          height: '100vh',
          width: 'auto',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirections: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '28%',
          }}
        >
          <Avatar
            sx={{ width: '160px', height: '160px' }}
            src={
              studentProfile?.user?.data?.attributes?.avatar?.data?.attributes
                ?.url
            }
            alt=""
            sizes="width: 100%, height: 100%"
          />

          <Box>
            <Typography
              sx={{
                fontStyle: theme.typography.h4,
                fontFamily: theme.typography.fontFamily,
              }}
            >
              First name: {studentProfile?.user?.data?.attributes?.firstname}
            </Typography>
            <Typography
              sx={{
                fontStyle: theme.typography.h4,
                fontFamily: theme.typography.fontFamily,
              }}
            >
              Last name: {studentProfile?.user?.data?.attributes?.lastname}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirections: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '48%',
            padding: '0.5em',
            margin: '0',
          }}
        >
          <Box
            sx={{
              height: '24%',
            }}
          >
            <Typography variant="h4" fontFamily="helvetica">
              Bootcamp Details
            </Typography>
            <p>Cohort: {studentProfile?.cohort?.data?.attributes?.name}</p>
            <p>Course: {studentProfile.main_course?.data?.attributes?.name}</p>
            <p>Start date: {studentProfile.start_date}</p>
            <p>End date: {studentProfile.end_date}</p>
          </Box>
          <Box
            sx={{
              height: '24%',
            }}
          >
            <Typography variant="h4" fontFamily="helvetica">
              Contact Details
            </Typography>
            <p>Email: </p>
            <p>Github: {studentProfile?.github || 'https://github.com'}</p>
            <p>
              Linkedin: {studentProfile?.linkedin || 'https://linkedin.com'}
            </p>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default Studentprofile;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const client = initializeApollo(null, ctx.req);

    const { data } = await client.query({
      query: FilterStudentByUserIdDocument,
      variables: { userId: 7 },
    });
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
