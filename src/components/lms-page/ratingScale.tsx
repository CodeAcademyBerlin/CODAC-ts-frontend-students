import * as React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

// ** Custom Components
import TextFeedback from "../../components/lms-page/textFeedback";
// ** Mutation
import { useCreateLmsFeedbackMutation } from "../../cabServer/mutations/__generated__/lmsRating";
import { valueToObjectRepresentation } from "@apollo/client/utilities";
import { values } from "lodash";

type LMSfeedbackProps = {
  slug: string;
};

const labels: { [index: string]: string } = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

function getLabelText(rating: number) {
  return `${rating} Star${rating !== 1 ? "s" : ""}, ${labels[rating]}`;
}

export default function HoverRating({ slug }: LMSfeedbackProps) {
  // console.log("slug", slug);
  const [rating, setRating] = React.useState<number | any>(null);
  // console.log("rating", rating);
  const [hover, setHover] = React.useState(-1);

  const [createRating, { data, loading, error }] = useCreateLmsFeedbackMutation(
    {
      variables: {
        rating: rating,
        slug: slug,
      },
    }
  );
  console.log("data", data);
  console.log("error", error);

  return (
    <>
      <Box
        sx={{
          p: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography fontSize={18} mt={2} gutterBottom>
          How would you rate the content of this page?
        </Typography>
        <Rating
          name='hover-feedback'
          size='large'
          value={rating}
          precision={1}
          getLabelText={getLabelText}
          onChange={(
            event: any,
            newRating: React.SetStateAction<number | null>
          ) => {
            setRating(newRating);
          }}
          onChangeActive={(
            event: any,
            newHover: React.SetStateAction<number>
          ) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
        />
        {rating !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
        )}
      </Box>
      {rating !== null && rating < 3 && (
        <TextFeedback slug={slug} rating={rating} createRating={createRating} />
      )}
    </>
  );
}
