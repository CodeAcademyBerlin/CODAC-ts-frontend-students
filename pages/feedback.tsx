import React from "react";

// * MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

// * CabServer
import { useFeedbackQuery } from "../cabServer/queries/__generated__/lmsFeedback";
import {
  LmsFeedback,
  LmsFeedbackEntity,
} from "../cabServer/global/__generated__/types";

type Props = {};

const feedback = (props: Props) => {
  const { data, loading, error } = useFeedbackQuery();
  const ratings = data?.lmsFeedbacks?.data || [];
  console.log("feedbackData", ratings);

  return (
    <div>
      <Typography>feedback Dashboard</Typography>
      {ratings &&
        ratings.map((rating) => {
          if (rating.attributes) {
            return <></>;
          }
        })}
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
    </div>
  );
};

export default feedback;
