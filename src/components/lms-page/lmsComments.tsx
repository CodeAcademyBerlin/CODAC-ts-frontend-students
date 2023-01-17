import { CommentsDisabled } from '@mui/icons-material';
import { Avatar, Divider, Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { useGetLmsFeedbacksQuery } from 'cabServer/queries/__generated__/comments';
import * as React from 'react';

type LMSfeedbackProps = {
  slug: string;
};

const LmsComments = ({ slug }: LMSfeedbackProps) => {
  const { data, loading, error } = useGetLmsFeedbacksQuery({
    variables: {
      slug: slug,
    },
  });
  const lmsComments = data?.lmsFeedbacks?.data || [];
  console.log('comments', lmsComments);

  return (
    lmsComments ? (
    <>
      <Box
        sx={{
          p: 5,
          display: 'flex',
          width: '50%',
        }}
      >
        <Typography variant="h5">Comments</Typography>
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
                        (comment) => comment?.author?.data?.attributes?.username,
                      )}
                    </h4>
                    <p style={{ textAlign: 'left' }}>
                      {lmsComment.attributes?.comments?.map(
                        (comment) => comment?.message,
                      )}
                    </p>
                    <p style={{ textAlign: 'left', color: 'gray' }}>
                      {lmsComment.attributes?.comments?.map((comment) =>
                        new Date(comment?.timestamp).toUTCString(),
                      )}
                    </p>
                  </Grid>
                </Grid>
              </Paper>
            </Box>}
      <Divider variant="fullWidth" style={{ margin: '30px 0' }} />  
    </>)) : (
        <p>no comments yet</p>)

};

export default LmsComments;
