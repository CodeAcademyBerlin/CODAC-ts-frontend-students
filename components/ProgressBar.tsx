import { Box, Chip, LinearProgress, Typography, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import AccountClock from "mdi-material-ui/AccountClock";

import { Student } from "../graphql/_generated_";

const ProgressBar = ({ student }: { student: Student }) => {
  const theme = useTheme();

  const startingDate: Date = new Date(student.start_date);
  const finishDate: Date = new Date(student.end_date);
  const currentDate = Date.now();
  const timeDifference = Math.abs(
    finishDate.getTime() - startingDate.getTime()
  );
  const daysTotal = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  const timeLeft = Math.abs(finishDate.getTime() - currentDate);
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

  const progressValue: number = Math.floor(100 - (daysLeft / daysTotal) * 100);

  return (
    <Box
      sx={{
        p: theme.spacing(4, 6),
        m: theme.spacing(4, 6),
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <AccountClock sx={{ color: theme.palette.primary.main }} />
        <Typography variant="h6">Course Progress</Typography>
      </Stack>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            width: "100%",
            mr: 1.5,
            color:
              progressValue <= 10
                ? "#e6eb9e"
                : progressValue <= 20
                ? "#d4dd5c"
                : progressValue <= 30
                ? "#c0c63b"
                : progressValue <= 40
                ? "#9d992d"
                : progressValue <= 50
                ? "#4664aa"
                : progressValue <= 60
                ? "#5586cf"
                : progressValue <= 70
                ? "#6aa3e2"
                : progressValue <= 80
                ? "#9ec8ef"
                : progressValue <= 90
                ? "#93e6bf"
                : progressValue < 100
                ? "#13d490"
                : "#00ba71",
          }}
        >
          <LinearProgress
            sx={{
              height: "1rem",
              borderRadius: theme.shape.borderRadius,
              borderStyle: "solid",
              borderWidth: "0.125rem",
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
          fontSize={theme.typography.fontSize}
          fontWeight={theme.typography.fontWeightMedium}
        >
          Graduation in{" "}
          <Chip variant="outlined" size="small" label={daysLeft} /> days
        </Typography>
      </Stack>
    </Box>
  );
};

export default ProgressBar;
