import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function LmsComments() {
  return (
    <Box
      sx={{
        p: 5,
        display: 'flex',
        width: '50%',
      }}
    >
      <Typography variant="h5">Comments</Typography>
    </Box>
  );
}
