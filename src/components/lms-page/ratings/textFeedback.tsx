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
import { useCreateLmsFeedbackMutation } from 'cabServer/mutations/__generated__/createLMSFeedback';
// import { useUpdateLmsFeedbackMutation } from 'cabServer/mutations/__generated__/updateRatingLMSPages';
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
    useCreateLmsFeedbackMutation();

  // author can update/change his rating:
  const [addRating, { data: updateData, error: updateError }] =
    useAddRatingMutation();

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    // CASE  1: if rating for slug/id exists then addRating:
    if (lmsFeedback?.id) {
      try {
        const id = lmsFeedback.id;
        const res = addRating({
          variables: {
            lmsFeedbackId: id,
            comment: message,
            rating: rating,
          },
        });
        setMessage('');
        setOpen(false);
        toast.success('Your feedback has  been submitted', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } catch (e) {
        ({ error: 'e.message' });
      }
      // CASE  2: if no rating for slug/id exists then createRating:
    } else {
      try {
        const res = createRating({
          variables: {
            feedbacks: {
              message: message,
              rating: rating,
            },
            slug: slug,
          },
        });
        // console.log('res', res);
        setMessage('');
        setOpen(false);
        toast.success('Your feedback  been submitted', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } catch (e) {
        ({ error: 'e.message' });
      }
    }
  };

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
