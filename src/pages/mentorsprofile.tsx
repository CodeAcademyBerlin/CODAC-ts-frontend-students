import { Avatar, Box, Container, Typography, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import { Mentor } from 'cabServer/global/__generated__/types';
import {
  MentorsDocument,
  useMentorsQuery,
} from 'cabServer/queries/__generated__/mentors';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';

import logo from '../../public/assets/logo.png';
import { initializeApollo } from '../lib/apolloClient';

const Mentorprofile = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const theme = useTheme();
  const mentorProfile: Mentor = data && data.mentors.data[0].attributes;
  console.log('mentorProfile', data);

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
          {/* <Avatar
            sx={{ width: '160px', height: '160px' }}
            src={
              studentProfile?.user?.data?.attributes?.avatar?.data?.attributes
                ?.url
            }
            alt=""
            sizes="width: 100%, height: 100%"
          /> */}

          {/* <Box>
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
          </Box> */}
        </Box>
        {/* <Box>
          <Typography
            sx={{
              fontStyle: theme.typography.h4,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            First name: {mentorProfile.firstname}
          </Typography>
          <Typography
            sx={{
              fontStyle: theme.typography.h4,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            Last name: {mentorProfile.lastname}
          </Typography>
        </Box> */}

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
          {/* <Box
            sx={{
              height: '24%',
            }}
          >
            <Typography variant="h4" fontFamily="helvetica">
              Courses
            </Typography>
            <p>Course: {mentorProfile.courses?.data[0].attributes?.name} </p>
            <p>
              About course:
              {mentorProfile.courses?.data[0].attributes?.description}
            </p>
          </Box> */}
          <Box
            sx={{
              height: '24%',
            }}
          >
            <Typography variant="h4" fontFamily="helvetica">
              Contact Details
            </Typography>
            <p>Email: </p>
            <p>Github: {mentorProfile?.github || 'https://github.com'}</p>
            <p>Linkedin: {mentorProfile?.linkedin || 'https://linkedin.com'}</p>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default Mentorprofile;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const client = initializeApollo(null, ctx.req);

    const { data } = await client.query({
      query: MentorsDocument,
      variables: { userId: 3 },
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
