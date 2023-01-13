import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import * as React from 'react';
import { MouseEvent, useState } from 'react';

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
