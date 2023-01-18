import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import { MouseEvent, useState } from 'react';
import { toast } from 'react-toastify';

type LMSfeedbackProps = {
  rating: number;
  slug: string;
  createRating: () => void;
  open: any;
  setOpen: any;
  getLabelText: any;
};

export default function TextFeedback({
  rating,
  createRating,
  open,
  setOpen,
  getLabelText,
}: LMSfeedbackProps) {
  const [message, setMessage] = useState<string>('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void =>
    setMessage(event.target.value);
  console.log('message:', message);

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      createRating();
      setOpen(false);
      toast.success('Thank you for your feedback', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (e) {
      ({ error: 'e.message' });
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true}>
      <DialogTitle>
        Is there anything else you would like to add? (optional)
      </DialogTitle>
      <DialogContent>
        <Rating getLabelText={getLabelText} value={rating} />
      </DialogContent>
      <TextField
        autoFocus
        multiline
        rows={6}
        margin="dense"
        id="open_feedback"
        label="Write your feedback here or leave this field empty and click on ´Submit´."
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
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
