import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useCreateLmsFeedbackMutation } from 'cabServer/mutations/__generated__/createLmsFeedback';
import { useGetLmsFeedbacksQuery } from 'cabServer/queries/__generated__/lmsFeedback';
import React, { MouseEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import lms from 'src/pages/lms/[[...page]]';

// import CreateComment from './createComment';
// import ShowComments from './showComments';

type LMSfeedbackProps = {
  slug: string;
};

const CommentsParent = ({ slug }: LMSfeedbackProps) => {
  // fetching existing comments
  const { data, loading, error, refetch } = useGetLmsFeedbacksQuery({
    variables: {
      slug: slug,
    },
  });
  const lmsFeedback = data?.lmsFeedbacks?.data[0];
  console.log('comments', lmsFeedback);

  // creating a comment
  const [createComment, { data: mutationData, error: mutationError }] =
    useCreateLmsFeedbackMutation();

  const [message, setMessage] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void =>
    setMessage(event.target.value);

  const handleCancel = () => {
    setMessage('');
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const now = new Date();
      createComment({
        variables: {
          slug: slug,
          comments: {
            message: message,
            timestamp: now,
          },
        },
      });
      setMessage('');
      toast.success('Your comment has  been submitted', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (e) {
      ({ error: 'e.message' });
    }
  };

  // refetch comments
  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lmsFeedback]);

  return (
    <>
      {' '}
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
        <Container>
          <Box component="form">
            <Typography>Leave a comment</Typography>
            <TextField
              autoFocus
              multiline
              rows={6}
              margin="dense"
              id="comment"
              label="Your comment"
              type="text"
              fullWidth
              variant="filled"
              value={message}
              onChange={handleChange}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                sx={{ mt: 3, ml: 1 }}
                onClick={handleCancel}
                type="submit"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                sx={{ mt: 3, ml: 1 }}
                type="submit"
                variant="contained"
              >
                Send
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          p: 5,
          // display: 'flex',
          width: '50%',
        }}
      >
        <Typography variant="h5">Comments</Typography>
      </Box>
      lmsFeedbacks && (
      <>
        {lmsFeedback &&
          lmsFeedback.comments.map((comment) => (
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
                      {lmsComment.attributes?.comments?.map((comment) =>
                        new Date(comment?.timestamp).toDateString(),
                      )}
                    </p>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          ))}
        {/* <Divider variant="fullWidth" style={{ margin: '30px 0' }} /> */}
      </>
      )
    </>
  );
};

export default CommentsParent;
