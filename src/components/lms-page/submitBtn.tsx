import 'react-toastify/dist/ReactToastify.css';

import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import * as React from 'react';
import { MouseEvent, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

type LMSfeedbackProps = {
  rating: number;
  slug: string;
  createRating: () => void;
};

export default function TextFeedback({ createRating }: LMSfeedbackProps) {
  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      createRating();
      toast.success('Thank you for your feedback', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (e) {
      ({ error: 'e.message' });
    }
  };

  return (
    <Button onClick={handleSubmit} variant="contained" endIcon={<SendIcon />}>
      Send your feedback
    </Button>
  );
}
