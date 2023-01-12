import { Box, Chip, LinearProgress, Typography, useTheme } from '@mui/material';
import { Stack } from '@mui/system';
import CalenderAccountOutline from 'mdi-material-ui/CalendarAccountOutline';

import { Student } from '../../../cabServer/global/__generated__/types';

const ProgressBar = ({ student }: { student: Student }) => {
  const theme = useTheme();

  const startingDate: Date = new Date(student.start_date);
  const finishDate: Date = new Date(student.end_date);
  const currentDate = Date.now();
  const timeDifference = Math.abs(
    finishDate.getTime() - startingDate.getTime(),
  );
  const daysTotal = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  const timeLeft = Math.abs(finishDate.getTime() - currentDate);
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

  const progressValue: number = Math.floor(100 - (daysLeft / daysTotal) * 100);

  return (
    student && (
      <Box
        sx={{
          p: theme.spacing(3, 4),
          borderRadius: 3,
          borderStyle: 'solid',
          borderWidth: 2,
          borderColor: theme.palette.background.default,
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[1],
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <CalenderAccountOutline />
          <Typography
            sx={{
              fontVariant: 'all-small-caps',
              fontWeight: theme.typography.fontWeightBold,
            }}
          >
            Your Course Progress
          </Typography>
        </Stack>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              width: '100%',
              mr: 1.5,
              color:
                progressValue <= 10
                  ? '#e6eb9e'
                  : progressValue <= 20
                  ? '#d4dd5c'
                  : progressValue <= 30
                  ? '#c0c63b'
                  : progressValue <= 40
                  ? '#9d992d'
                  : progressValue <= 50
                  ? '#4664aa'
                  : progressValue <= 60
                  ? '#5586cf'
                  : progressValue <= 70
                  ? '#6aa3e2'
                  : progressValue <= 80
                  ? '#9ec8ef'
                  : progressValue <= 90
                  ? '#93e6bf'
                  : progressValue < 100
                  ? '#13d490'
                  : '#00ba71',
            }}
          >
            <LinearProgress
              sx={{
                height: '1rem',
                borderRadius: theme.shape.borderRadius,
                borderStyle: 'solid',
                borderWidth: '0.125rem',
                borderColor: theme.palette.grey[900],
              }}
              color="inherit"
              variant="determinate"
              value={progressValue}
            />
          </Box>
          <Typography
            fontWeight={theme.typography.fontWeightBold}
            letterSpacing="0.1rem"
            color={theme.palette.text.primary}
          >
            {progressValue}%
          </Typography>
        </Box>

        <Stack direction="row" spacing={4} alignItems="center">
          <Typography
            sx={{
              fontStyle: theme.typography.subtitle2,
              fontVariant: 'all-small-caps',
            }}
          >
            Graduation in {daysLeft} days
          </Typography>
        </Stack>
      </Box>
    )
  );
};

export default ProgressBar;
