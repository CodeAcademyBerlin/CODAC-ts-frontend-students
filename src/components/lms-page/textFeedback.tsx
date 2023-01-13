import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import React from 'react';
import { MouseEvent, useEffect, useState } from 'react';

type LMSfeedbackProps = {
  rating: number;
  slug: string;
  createRating: () => void;
  // setRating: React.SetStateAction<number | null>;
};

export default function TextFeedback({
  createRating,
}: // setRating,
LMSfeedbackProps) {
  const [message, setMessage] = useState<string>('');
  const [rating, setRating] = React.useState<number | any>();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void =>
    setMessage(event.target.value);
  console.log('message:', message);

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      createRating();
    } catch (e) {
      ({ error: 'e.message' });
    }
  };

  const handleCancel = (event: MouseEvent<HTMLButtonElement>) => {
    // setRating = React.useState<number | any>(null);
    setRating(null);
  };

  return (
    <Container>
      <Box component="form">
        <Typography>How can we improve this page? (optional)</Typography>

        <TextField
          autoFocus
          multiline
          rows={6}
          margin="dense"
          id="open_feedback"
          label="Your feedback"
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
