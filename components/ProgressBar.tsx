import { LinearProgress, Typography, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import { Box } from "mdi-material-ui";
import { InferGetServerSidePropsType } from "next";
import { StudentEntity } from "../graphql/_generated_";
import { getServerSideProps } from "../pages/dashboard";

type Index = number;

const ProgressBar = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const theme = useTheme();
  return (
    <Box>
      {data
        ? data.data.students.data.map(
          (student: StudentEntity, index: Index) => {
            const startingDate: Date = new Date(
              student.attributes?.start_date
            );
            const endingDate: Date = new Date(student.attributes?.end_date);
            const currentDate = Date.now();
            const timeDifference = Math.abs(
              endingDate.getTime() - startingDate.getTime()
            );
            const daysTotal = Math.ceil(
              timeDifference / (1000 * 60 * 60 * 24)
            );
            const timeLeft = Math.abs(endingDate.getTime() - currentDate);
            const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

            const progressValue: number = Math.floor(
              100 - (daysLeft / daysTotal) * 100
            );

            return (
              <Box
                key={index}
                sx={{
                  p: theme.spacing(4, 6),
                  m: theme.spacing(4, 6),
                  borderRadius: theme.shape.borderRadius,
                  backgroundColor: theme.palette.background.paper,
                  boxShadow: theme.shadows[1],
                }}
              >
                <Typography variant="h6">
                  {student.attributes?.firstname}{" "}
                  {student.attributes?.lastname}
                </Typography>
                <Box
                // display="flex" alignItems="center"
                >
                  <Box
                    width="100%"
                  // mr={1.5}
                  // color={
                  //   progressValue <= 10
                  //     ? "#e6eb9e"
                  //     : progressValue <= 20
                  //     ? "#d4dd5c"
                  //     : progressValue <= 30
                  //     ? "#c0c63b"
                  //     : progressValue <= 40
                  //     ? "#9d992d"
                  //     : progressValue <= 50
                  //     ? "#4664aa"
                  //     : progressValue <= 60
                  //     ? "#5586cf"
                  //     : progressValue <= 70
                  //     ? "#6aa3e2"
                  //     : progressValue <= 80
                  //     ? "#9ec8ef"
                  //     : progressValue <= 90
                  //     ? "#93e6bf"
                  //     : progressValue < 100
                  //     ? "#13d490"
                  //     : "#00ba71"
                  // }
                  >
                    <LinearProgress
                      sx={{
                        height: "1.15rem",
                        borderRadius: theme.shape.borderRadius,
                        //borderStyle: "solid",
                        borderWidth: "0.12rem",
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
                  <Typography fontSize={theme.typography.fontSize}>
                    {daysLeft} days left until graduation
                  </Typography>
                </Stack>
              </Box>
            );
          }
        )
        : null}
    </Box>
  );
};

export default ProgressBar;
