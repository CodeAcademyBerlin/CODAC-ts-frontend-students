import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
// import { useCreateLmsFeedbackMutation } from 'cabServer/mutations/__generated__/createLmsFeedback';
// import { useUpdateLmsFeedbackMutation } from 'cabServer/mutations/__generated__/updateLmsFeedback';
// import { useGetLmsFeedbacksQuery } from 'cabServer/queries/__generated__/lmsFeedback';
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

  //  function to update rating of page
  const [updateRating, { data: updateData, error: updateError }] =
    useUpdateLmsFeedbackMutation();

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    if (lmsFeedback?.id) {
      try {
        const now = new Date();
        const id = lmsFeedback.id;
        const res = updateRating({
          variables: {
            id: id,
            issues: [
              {
                message: message,
                timestamp: now,
                rating: rating,
              },
            ],
            slug: slug,
          },
        });

        setMessage('');
        setOpen(false);
        toast.success('Your comment has  been submitted', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } catch (e) {
        ({ error: 'e.message' });
      }
    } else {
      try {
        const now = new Date();
        const res = createRating({
          variables: {
            slug: slug,
            issues: {
              message: message,
              rating: rating,
              timestamp: now,
            },
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
