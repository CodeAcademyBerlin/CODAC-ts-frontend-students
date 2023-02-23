import { Avatar, Box, Container, Typography, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import { Mentor } from 'cabServer/global/__generated__/types';
import { GetMentorByIdDocument } from 'cabServer/queries/__generated__/mentorById';
import { MentorsDocument } from 'cabServer/queries/__generated__/mentors';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';
import NextBreadcrumbs from 'src/components/breadcrumb/NextBreadcrumbs';
import { initializeApollo } from 'src/lib/apolloClient';

const Mentorprofile = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const theme = useTheme();
  const mentorProfile: Mentor = data && data?.mentor?.data?.attributes;

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
          <Box sx={{}}>
            <Typography
              sx={{
                fontFamily: theme.typography.fontFamily,
                fontStyle: theme.typography.h4,
              }}
            >
              Courses
            </Typography>
            <p>Course: {mentorProfile?.courses?.data[0]?.attributes?.name} </p>
            <p>
              About course:
              {mentorProfile?.courses?.data[0]?.attributes?.description}
            </p>
          </Box>
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
    const id = ctx?.params?.id;
    console.log('id :>> ', ctx?.params);
    console.log('ctx.query :>> ', ctx?.query);
    console.log('mentorctxparams', ctx?.params?.id);
    const { data } = await client.query({
      query: GetMentorByIdDocument,
      variables: { id },
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
