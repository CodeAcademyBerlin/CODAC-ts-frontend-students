import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useCreateLmsFeedbackMutation } from 'cabServer/mutations/__generated__/createLmsFeedback';
import * as React from 'react';
import { useState } from 'react';

import TextFeedback from './textFeedback';

type LMSfeedbackProps = {
  slug: string;
  message: string;
};

const labels: { [index: string]: string } = {
  1: 'Useless',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};

function getLabelText(rating: number) {
  return `${rating} Star${rating !== 1 ? 's' : ''}, ${labels[rating]}`;
}

export default function HoverRating({ slug, message }: LMSfeedbackProps) {
  // console.log("slug", slug);
  const [rating, setRating] = React.useState<number | any>(null);
  // console.log("rating", rating);
  const [hover, setHover] = React.useState(-1);

  const now = new Date();
  const [createRating, { data, loading, error }] = useCreateLmsFeedbackMutation(
    {
      variables: {
        slug: slug,
        issues: {
          message: message,
          rating: rating,
          timestamp: now,
        },
      },
    },
  );

  // OPEN MODAL
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Box
        sx={{
          p: '50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& button': { m: 6 },
          width: '75%',
        }}
      >
        <Typography fontSize={18} mt={2} gutterBottom>
          How would you rate the content of this page?
        </Typography>
        <Rating
          name="hover-feedback"
          size="large"
          value={rating}
          precision={1}
          getLabelText={getLabelText}
          onClick={handleClickOpen}
          onChange={(
            event: any,
            newRating: React.SetStateAction<number | null>,
          ) => {
            setRating(newRating);
          }}
          onChangeActive={(
            event: any,
            newHover: React.SetStateAction<number>,
          ) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {rating !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
        )}

        {rating !== null && (
          <TextFeedback
            slug={slug}
            rating={rating}
            open={open}
            setOpen={setOpen}
            createRating={createRating}
            getLabelText={getLabelText}
          />
        )}
      </Box>
    </>
  );
}
