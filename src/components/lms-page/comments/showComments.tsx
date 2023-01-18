import { CommentsDisabled } from '@mui/icons-material';
import { Avatar, Divider, Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { useGetLmsFeedbacksQuery } from 'cabServer/queries/__generated__/lmsFeedback';
import * as React from 'react';
import CreateComment from 'src/components/lms-page/comments/createComment';

type LMSfeedbackProps = {
  slug: string;
};

const ShowComments = ({ slug }: LMSfeedbackProps) => {
  const { data, loading, error } = useGetLmsFeedbacksQuery({
    variables: {
      slug: slug,
    },
  });
  const lmsComments = data?.lmsFeedbacks?.data || [];
  console.log('comments', lmsComments);

  return (
    lmsComments && (
      <>
        <Box
          sx={{
            p: 5,
            // display: 'flex',
            width: '50%',
          }}
        >
          <Typography variant="h5">Comments</Typography>
        </Box>
        <Box
          sx={{
            p: 5,
            display: 'flex',
            width: '50%',
          }}
        >
          <CreateComment slug={slug} id={''} />
        </Box>

        {lmsComments &&
          lmsComments.map((lmsComment) => (
            <Box
              sx={{
                p: 5,
                // display: 'flex',
                width: '50%',
              }}
              key={lmsComment.id}
            >
              <Paper style={{ padding: '40px 20px' }}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar
                    // alt={username}
                    // src={imgLink}
                    />
                  </Grid>
                  <Grid justifyContent="left" item xs zeroMinWidth>
                    <h4 style={{ margin: 0, textAlign: 'left' }}>
                      {lmsComment.attributes?.comments?.map(
                        (comment) =>
                          comment?.author?.data?.attributes?.username,
                      )}
                    </h4>
                    <p style={{ textAlign: 'left' }}>
                      {lmsComment.attributes?.comments?.map(
                        (comment) => comment?.message,
                      )}
                    </p>
                    <p style={{ textAlign: 'left', color: 'gray' }}>
                      {lmsComment.attributes?.createdAt}
                      {/* {lmsComment.attributes?.comments?.map((comment) =>
                        new Date(comment?.timestamp).toDateString(),
                      )} */}
                    </p>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          ))}
        {/* <Divider variant="fullWidth" style={{ margin: '30px 0' }} /> */}
      </>
    )
  );
};

export default ShowComments;
