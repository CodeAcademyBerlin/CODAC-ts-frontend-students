import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useAddRatingMutation } from 'cabServer/mutations/__generated__/addRatingLMSPages';
import { useUpdateLmsFeedbackMutation } from 'cabServer/mutations/__generated__/updateRatingLMSPages';
import { useGetLmsFeedbacksQuery } from 'cabServer/queries/__generated__/lmsComments';
import * as React from 'react';
import { MouseEvent, useState } from 'react';
import { toast } from 'react-toastify';

type LMSfeedbackProps = {
  rating: number;
  slug: string;
  open: any;
  setOpen: any;
  getLabelText: any;
};

export default function TextFeedback({
  rating,
  open,
  setOpen,
  getLabelText,
  slug,
}: LMSfeedbackProps) {
  const [message, setMessage] = useState<string>('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void =>
    setMessage(event.target.value);
  console.log('message:', message);

  //  fetch existing data to check whether rating data exists
  const { data, loading, error, refetch } = useGetLmsFeedbacksQuery({
    variables: {
      slug: slug,
    },
  });
  const lmsFeedback = data?.lmsFeedbacks?.data[0];

  //  function to create a new rating of page
  const [createRating, { data: createData, error: createError }] =
    useAddRatingMutation();

  //  function to update rating of page
  const [updateRating, { data: updateData, error: updateError }] =
    useUpdateLmsFeedbackMutation();

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    //CASE 1: update rating if lmsFeedback?.id and if feedbacks?.id exist
    if (lmsFeedback?.id && lmsFeedback?.attributes?.feedbacks?.id) {
      try {
        // const now = new Date();
        const id = lmsFeedback.id;
        const feedbackId = lmsFeedback.attributes.feedbacks.id;
        const res = updateRating({
          variables: {
            lmsFeedbackId: id,
            feedbackId: feedbackId,
            comment: message,
            rating: rating,
          },
        });
        if (success === true) {
          setMessage('');
          setOpen(false);
          toast.success('message', {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      } catch (e) {
        ({ error: 'e.message' });
      }
    } else {
          //CASE 2: update rating if lmsFeedback?.id exists but no feedbacks?.id 
         if (lmsFeedback?.id && lmsFeedback?.attributes?.feedbacks?.id === null) {
      try {
        const id = lmsFeedback?.id;
        const res = createRating({
          variables: {
            lmsFeedbackId: id,
            comment: message,
            rating: rating,
            //   timestamp: now,
          },
        });
        // console.log('res', res);
        setMessage('');
        setOpen(false);
        toast.success(message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } catch (e) {
        // ({ error: 'e.message' });
        toast.error(message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }  else {
          //CASE 3: there is no lmsFeedback?.id 
      try {
        const res = createRating({
          variables: {
            comment: message,
            rating: rating,
            //   timestamp: now,
          },
        });
        // console.log('res', res);
        setMessage('');
        setOpen(false);
        toast.success(message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } catch (e) {
        // ({ error: 'e.message' });
        toast.error(message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
  };
  // const label = (
  //   <p>
  //     Please take a moment to help us improve the content of this page. <br />
  //     Write your feedback here or leave this field empty and click on ´Submit´.
  //   </p>
  // );
  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true}>
      <DialogTitle>
        Is there anything else you would like to add? (optional)
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Your rating:</DialogContentText>
        <Rating getLabelText={getLabelText} value={rating} />
      </DialogContent>
      <TextField
        autoFocus
        multiline
        rows={6}
        margin="dense"
        id="open_feedback"
        label="Write your feedback here or leave this field empty and click on ´Submit´"
        type="text"
        fullWidth
        variant="filled"
        value={message}
        onChange={handleChange}
        flex-wrap="wrap"
      />
      <DialogActions>
        <Button sx={{ mt: 3, ml: 1 }} onClick={handleClose} type="submit">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          sx={{ mt: 3, ml: 1 }}
          type="submit"
          variant="contained"
        >
          Submit feedback
        </Button>
      </DialogActions>
    </Dialog>
  );
}
