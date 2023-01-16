import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
// * MUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useFeedbackQuery } from 'cabServer/queries/__generated__/lmsFeedback';
import React from 'react';

// * CabServer

type Props = {};

const LmsFeedback = (props: Props) => {
  const { data, loading, error } = useFeedbackQuery();
  const ratings = data?.lmsFeedbacks?.data || [];
  console.log('feedbackData', ratings);

  return (
    <div>
      <Typography>LMS user feedback dashboard (Beta)</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Rating</TableCell>
              <TableCell align="center">Page aka slug</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ratings &&
              ratings.map((rating) => (
                <TableRow key={rating.id}>
                  <TableCell component="th" scope="row">
                    {rating.id}
                  </TableCell>
                  <TableCell align="center">
                    {rating.attributes?.rating}
                  </TableCell>
                  <TableCell align="center">
                    {rating.attributes?.slug}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LmsFeedback;
