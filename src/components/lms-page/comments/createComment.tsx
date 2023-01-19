import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import {
  ComponentCommentsCommentsInput,
  LmsFeedback,
  LmsFeedbackEntity,
} from 'cabServer/global/__generated__/types';
import { useCreateLmsFeedbackMutation } from 'cabServer/mutations/__generated__/createLmsFeedback';
import { useGetLmsFeedbacksQuery } from 'cabServer/queries/__generated__/lmsFeedback';
import { identity } from 'lodash';
import React, { MouseEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type LMSfeedbackProps = {
  slug: string;
  id: string;
  refetch: () => void;
  lmsComments: LmsFeedbackEntity;
};

export default function CreateComment({
  slug,
  id,
  refetch,
  lmsComments,
}: LMSfeedbackProps) {
  const [message, setMessage] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void =>
    setMessage(event.target.value);

  const [createComment, { data, loading, error }] =
    useCreateLmsFeedbackMutation();

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
      refetch();
      setMessage('');
      toast.success('Your comment has  been submitted', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (e) {
      ({ error: 'e.message' });
    }
  };

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lmsComments]);

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
