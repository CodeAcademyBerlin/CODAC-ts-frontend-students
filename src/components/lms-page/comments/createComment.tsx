import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useCreateLmsFeedbackMutation } from 'cabServer/mutations/__generated__/createLmsFeedback';
import { identity } from 'lodash';
import React from 'react';
import { MouseEvent, useState } from 'react';
import { toast } from 'react-toastify';

type LMSfeedbackProps = {
  slug: string;
  id: string;
};

export default function CreateComment({ slug, id }: LMSfeedbackProps) {
  const [message, setMessage] = useState<string>('');
  const [timestamp, setTimestemp] = useState<number>();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void =>
    setMessage(event.target.value);
  console.log('message:', message);

  const [createComment, { data, loading, error }] =
    useCreateLmsFeedbackMutation({
      variables: {
        slug: slug,
        comments: {
          message: message,
          timestamp: timestamp,
        },
      },
    });

  // const [updateComment, { data, loading, error }] =
  //   useUpdateLmsFeedbackMutation({
  //     variables: {
  //       id: id,
  //       slug: slug,
  //       comments: {
  //         message: message,
  //       },
  //     },
  //   });

  const handleCancel = () => {
    setMessage('');
  };

  let timestemp = Date.now();

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      setTimestemp(timestemp);
      console.log('time', timestemp);
      createComment();
      setMessage('');
      toast.success('Thank you for your feedback', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (e) {
      ({ error: 'e.message' });
    }
  };

  return (
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
          <Button sx={{ mt: 3, ml: 1 }} onClick={handleCancel} type="submit">
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
  );
}
